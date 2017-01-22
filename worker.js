console.log(1111);
onmessage = function(data){
	console.log(data);
	postMessage(data+',return a new message');
}