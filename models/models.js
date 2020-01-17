const sessions = [];

module.exports= class Session{

    constructor(id){
        this.id = id;
    }
    save(){
        sessions.push(this);
    }
    static getAll(){
        return sessions;
    }
}
