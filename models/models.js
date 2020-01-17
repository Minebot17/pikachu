const sessions = [];

module.exports= class Session{

    constructor(id, sqlId){
        this.id = id;
        this.sqlId = sqlId;
    }
    save(){
        sessions.push(this);
    }
    static getAll(){
        return sessions;
    }

    static findById(id){
      return sessions.find(session => session.id ==id);
    }
}
