exports.best = function (request, response){
    connection.query("SELECT * FROM posts ORDER BY rating DESC;")
    .then(results =>{
    	console.log(`jsssooonnn: ${results}`);
    	// отправляем ответ
    	response.send(results[0]);
    })
    .catch(err=>{
    	console.log(`err: ${err}`)
    })
};

exports.fresh = function(request, response){
    connection.query("SELECT * FROM posts ORDER BY date DESC;")
    .then(results =>{
    	console.log(`jsssooonnn: ${results}`);
    	// отправляем ответ
    	response.send(results[0]);
    })
    .catch(err=>{
    	console.log(`err: ${err}`)
    })
};

exports.hot = function(request,response){
	connection.query("SELECT * FROM posts ORDER BY date DESC;")
    .then(results =>{
    	console.log(`jsssooonnn: ${results}`);
    	// отправляем ответ
    	response.send(results[0]);
    })
    .catch(err=>{
    	console.log(`err: ${err}`)
    })
}
