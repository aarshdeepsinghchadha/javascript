class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}aarsh`
    }

    set password(value){
        this._password = value
    }
}

const aarsh = new User("h@aarsh.ai", "abc")
console.log(aarsh.email);