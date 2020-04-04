const user = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userController = {};

// GET This method get all users in database
// URL: http://localhost:3000/users
userController.getUsers = async (req, res) =>{
    const users =  await user.find();
    res.json(users);
 } 



// GET This method get one user in database
// URL: http://localhost:3000/users/id
 userController.getUser = async (req , res) =>{
    const getUs = await user.findById(req.params.id);
    res.json(getUs);
}

// POST Register User
// URL: http://localhost:3000/users
userController.createUser = async (req, res) => {
    // create hash password
    let pass = req.body.password;
    const hash = bcrypt.hashSync(pass, saltRounds);

    const OneUser = {
        name: req.body.name,
        email: req.body.email,
        password: hash
    }
    const newUser = new user(OneUser)
    await newUser.save();

    res.json({
        status: "User saved"
    });
}

// POST login system 
// URL: http://localhost:3000/users/login
userController.login = async (req, res) =>{

    const userData = {
        email: req.body.email,
        password: req.body.password
    }



     await user.findOne({email: userData.email}, (err, user)=>{
        // console.log(user.password);
        if (err) return res.status(400)
        if (!user) {
            res.json({
                status: 'Something is wrong'
            })
        }else{
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
            if (resultPassword) {
                res.json({
                    status: 'OK User was found',
                    User: userData.email
                })
            }else{
                res.json({
                    status: 'User not found'
                })
            }
        }
        
    });
}

module.exports = userController;