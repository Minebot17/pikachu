exports.best = function (request, response){
    connection.query("SELECT * FROM posts ORDER BY rating DESC;",
  		function(err, results, fields) {
    		console.log(`jsssooonnn: ${results}`);
    		// отправляем ответ
    		response.send(results);
		})
};

exports.fresh = function(request, response){
    connection.query("SELECT * FROM posts ORDER BY date DESC;",
  		function(err, results, fields) {
    		console.log(`jsssooonnn: ${results}`);
    		// отправляем ответ
    		response.send(results);
		})
};

exports.hot = function(request,response){
	connection.query("SELECT * FROM posts ORDER BY date DESC;",
  		function(err, results, fields) {
    		console.log(`jsssooonnn: ${results}`);
    		// отправляем ответ
    		response.send(results);
		})
}