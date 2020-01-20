const Session = require("../models/models.js");

exports.lk = function (request, response){
  if(user = Session.findById(request.cookies.id)){
    pool.query("SELECT * FROM users WHERE id = (?);", [user.sqlId])
    .then(([rows, fields]) =>{
    	console.log(`lk: ${rows}`);
      if(rows == ""){
        response.sendStatus(201); // User not found
      }
      else{
        response.send(rows[0]);
      }
    })
    .catch(err=>{
    	console.log(`err: ${err}`)
      response.sendStatus(201);
    })
  }
  else{
    response.sendStatus(206); // not logged
  }
};

exports.logout = function (request, response){
    if(user = Session.findById(request.cookies.id)){
        Session.deleteById(user.id);
        console.log(`logout ${user.id}`);
        response.sendStatus(200);

    }
    else{
      response.sendStatus(206); // not logged
    }
};
