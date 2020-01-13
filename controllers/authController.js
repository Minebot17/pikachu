exports.login = function (request, response){
  if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    


    connection.query("SELECT * FROM users WHERE (login = ? OR email = ?);",[request.body.login, request.body.login])
  		.then(([rows, fields]) =>{
        console.log(`ress: "${rows}"`);
        if(rows == ""){
          console.log("not login");
          response.send(201); //no such user
        }
        else if(rows[0].password == request.body.password){
          response.send(204); //all good
        }
        else 
          response.send(202); //wrong password
      })
      .catch(err=>{
         console.log(`err: ${err}`);
         response.send(err);
      })
};

exports.register = function(request, response){

  emailRegexp = /.*@.*/;
  /*console.log(`request ${request.body}`);
  console.log(`email ${request.body.email}`);
  console.log(`pass ${request.body.password}`);
  console.log(`login ${request.body.login}`);*/

  if(!request.body) return response.sendStatus(400);

    if(emailRegexp.test(request.body.email)){
      console.log(request.body);
      console.log((new Date()).toISOString());
        connection.query(`INSERT INTO users(login, password, email, rating, dateRegistration) VALUES (?, ?, ?, 0, '${(new Date()).toISOString()}');`, 
        [request.body.login, request.body.password, request.body.email])
        .then(([rows, fields]) =>{
          console.log(`ress: ${rows}`);
          // отправляем ответ
          response.send(204); //registration complete
        })
        .catch(err=>{
           console.log(`err: ${err}`);
          response.send(203);
        })
    }
    else{ 
      response.send(205);  //wrong email
      console.log(`not register ${request.body.email}`);

    }
};