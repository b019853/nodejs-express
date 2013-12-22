exports.time = function(req, res){
  var obj = {
  	"now": new Date().toISOString()
  };
  res.send(obj);
};



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