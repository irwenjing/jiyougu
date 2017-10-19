function setRouter(app){ 
 var router = app; 

//服务端 router.js

//模拟延迟5秒

app.get('/loadMore', function(req, res){

	var curIdx = req.query.index
	var len = req.query.length
	var data = []

	for(var i=0; i < len; i++){
		data.push('新闻' + (parseInt(curIdx) + i))
	}

	setTimeout(function(){
		res.send(data);
	}, 5000)
	

});
}
 module.exports.setRouter = setRouter