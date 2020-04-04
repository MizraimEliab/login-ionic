const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users.controller');

    // get all users
    router.get('/', userController.getUsers);
    // registration
    router.post('/', userController.createUser);
    // login 
    router.post('/login' , userController.login);

    router.get('/:id', userController.getUser);//ignorar

module.exports = router;
