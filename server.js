var http = require('http');
var mongodb = require('mongodb');



var serv = http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<marquee>Smashing Node!</marquee>');

	var server = new mongodb.Server("www.fanhaobai.com",27017,{});//本地27017端口

	new mongodb.Db('mongotest',server,{}).open(function(error,client){//数据库：mongotest
	    if(error) throw error;
		client.collection(table, function(err,collection) {
			console.log('collection');
			console.log(collection);
			collection.find(function(error,cursor){
				console.log('cursor');
				console.log(cursor);
				callback(error,cursor);
			});
		});
	});
})
serv.listen(8000);