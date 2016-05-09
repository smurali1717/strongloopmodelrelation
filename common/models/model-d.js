module.exports = function(ModelD) {
    
    ModelD.callMe = function(msg, cb){
        /*ModelD.find({
            include: "ModelE",
            scope:{
                include:"ModelF"
            }
        }, function(error, data){
            cb(null,data);
        })*/
    /*ModelD.find({
        include:[{"ModelE":"ModelF"}],
        scope:{
            include: "ModelF"
        }
    },function(error, data){
        cb(null, data);
    }) */
        
    var app = require("../../server/server");
        ModelE=app.models.modelE;
        ModelD.nestRemoting("ModelE");
        ModelE.nestRemoting("ModelF");
    /*ModelD.find({
			"include":{
				"relation":"ModelE",
				"scope":{
					"include":{
						"relation":"ModelF"
					}
				}
			}
		}, function(err, results) {
		   if(err) return cb(err);
        //err={"error":"Super error"}
        console.log("error message is " + err);
           cb(err, results);
		});*/
        
        ModelD.find({
            include: ["ModelE","ModelF"]},function(err, result){
            cb(null, result);
        });
    }
    
    ModelD.remoteMethod('callMe',{
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg:'relationA',type:"string"}
    })

    //ModelD.on("dataSourceAttached", function(e))
};
