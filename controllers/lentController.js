exports.best = function (request, response){
    pool.query("SELECT * FROM posts ORDER BY rating DESC;")
    .then(results =>{
    	// отправляем ответ
    	response.send(results[0]);
    })
    .catch(err=>{
    	console.log(`err: ${err}`)
    })
};

exports.fresh = function(request, response){
    pool.query("SELECT * FROM posts ORDER BY date DESC;")
    .then(results =>{
    	// отправляем ответ
    	response.send(results[0]);
    })
    .catch(err=>{
    	console.log(`err: ${err}`)
    })
};

exports.hot = function(request,response){
	pool.query("SELECT * FROM posts ORDER BY date DESC;")
    .then(results =>{
    	// отправляем ответ
    	response.send(results[0]);
    })
    .catch(err=>{
    	console.log(`err: ${err}`)
    })
}
