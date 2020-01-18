const Session = require("../models/models.js");

exports.login = function (request, response){
    if(!request.body)
        return response.sendStatus(400);
    connection.query("SELECT * FROM users WHERE (login = ? OR email = ?);",[request.body.login, request.body.login])
  		.then(([rows, fields]) =>{
        if(rows == ""){
          response.sendStatus(201); // User not found
        }
        if(rows[0].password == request.body.password){
          session = new Session(Math.floor(Math.random()*1000000), rows[0].id);
          session.save();
          console.log(session);
          response.send({"id":session.id});
        }
        else{
          response.sendStatus(202) // Wrong password
        }
      })
      .catch(err=>{
         console.log(`err: ${err}`);
         response.send(err);
      })
};

exports.logout = function (request, response){
    if(user = Session.findById(request.cookies.id)){
        Session.deleteById(user.id);
        response.sendStatus(200);
    }
    else{
      response.sendStatus(206); // not logged
    }
};

exports.register = function(request, response){

  emailRegexp = /.*@.*/;

  if(!request.body) return response.sendStatus(400);

    if(emailRegexp.test(request.body.email)){
      console.log(request.body);
      console.log((new Date()).toISOString());
        connection.query(`INSERT INTO users(login, password, email, rating, dateRegistration) VALUES (?, ?, ?, 0, '${(new Date()).toISOString()}');`,
        [request.body.login, request.body.password, request.body.email])
        .then(([rows, fields]) =>{
          console.log(`ress: ${rows}`);
          // отправляем ответ
          response.sendStatus(200); //registration complete
        })
        .catch(err=>{
           console.log(`err: ${err}`);
          response.sendStatus(203); // Error
        })
    }
    else response.sendStatus(204); // Invalid email
};
