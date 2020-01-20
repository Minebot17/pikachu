minTitle = 5;
minText = 20;

exports.add = function(request, response){
  if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    if(request.body.title.length > minTitle && request.body.text.length > minText){
      console.log(request.body);
      console.log((new Date()).toISOString());
        pool.query(`INSERT INTO posts(title, text, date) VALUES (?, ?, '${(new Date()).toISOString()}');`,
        [request.body.title, request.body.text])
        .then(([rows, fields]) =>{
          console.log(`ress: ${rows}`);
          // отправляем ответ
          response.sendStatus(200); //Post added
        })
        .catch(err=>{
           console.log(`err: ${err}`);
          response.sendStatus(203); // Error
        })
    }
    else response.sendStatus(204); // Invalid
};
