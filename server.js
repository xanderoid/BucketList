var express = require('express');
var app = express();

app.use("/", express.static(__dirname));

app.listen(8888, function(){
	console.loge('server starting...');
})