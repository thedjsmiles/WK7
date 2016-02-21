var express = require("express");

var app = express();

app.set("port", 3000);

app.get("/", function(req, res){
	res.type("text/plain");
	res.send("Welcome to the main page");
	res.send(Math.random());
});

app.use(function(req, res){
	res.type("text/plain");
	res.status(404);
	res.send("404 - Not Found");
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type("text/plain");
	res.status(500);
	res.send("500 - Server Error");
});

app.listen(app.get("port"), function(){
	console.log("Express started on AWS" + app.get("port") + "; press Ctrl-C to terminate.");
});