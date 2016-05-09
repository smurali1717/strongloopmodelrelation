module.exports = function(ModelB) {
    
   ModelB.callMe = function(msg, cb){
   /* ModelB.find({
            include:{
                relation:['relationBA','relationBC']                
            }
            
        }, function(error, data){
            console.log(data);
            cb(null, data);
        });*/
       /*ModelB.find({filter:{
           include:{
               relation: "relationBC"
           }
       }
                   }
             ,function(error,data){
            cb(null, data);
        })*/
       ModelB.find({where:{"userID":"321"}
            
        }, function(error, data){
            console.log(data);
            cb(null, data);
        });
   }
    
    ModelB.remoteMethod('callMe',{
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg:'relationA',type:"string"}
    })


};
