export class User {
    constructor(_id = '', name = '', email = '', passowrd = ''){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = passowrd;
    }
    _id:String;
    name:String;
    email:String;
    password:String;

}
