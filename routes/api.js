

//time
exports.time = function(req, res){
  var obj = {
  	"now": new Date().toISOString()
  };
  res.send(obj);
};


//info
var calledTime=0;
exports.info = function(req, res){
	calledTime+=1;
  var obj = {
  	"server":"shiou's Server",
  	"time": new Date().toISOString(),
  	"count" : calledTime,
  };
  res.send(obj);
};


//CRUD ->GPPD

var vcard=[];
exports.create = function(req, res){

	var person ={
	nickname:"",
	name:"",
	tel:"",
	
	};

	console.log(">>>>>>>>create");
	person.nickname=req.params.name;
	person.tel=req.query.tel;
	person.name=req.query.name;
	

	vcard.push(person);
	res.end();

};

exports.read = function(req, res){
	console.log(">>>>>>>>read");
	res.send(vcard);
    res.end();
};

exports.update = function(req, res){
	var nickname = req.params.name;
	vcard.forEach(function(entry){
		if (entry.nickname===nickname){
			console.log("found");
			entry.tel = req.query.tel;
			entry.name=req.query.name;
			
		}
	})
	 res.end();

};

exports.delete = function(req, res){
	console.log(">>>>>>>>delete");
	res.end();

};

