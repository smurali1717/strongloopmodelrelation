module.exports = function(ModelA) {
    
    ModelA.callMe = function(msg, cb){
       // responseData(null,"some message");
        //console.log("hello");
       /* ModelA.find({
            include:{
                relation:['relationA','relationB'],
                scope:{
                    fields:['userID','refID'],
                    include:{
                        relation: 'relationB'
                        /*scope:{
                            fields:['refID','refName']
                        }
                    }
                }
            }
        }, function(error, data){
            console.log(data);
            cb(null, data);
        });*/
        
        ModelA.find({
            include: ["ModelC","ModelD"]
            //fields: ["userID","userName","refID","refName","address"]
        }, function(error, data){
            cb(null, data);
        })
        
    }
    
    ModelA.remoteMethod('callMe',{
        accepts: {arg: 'msg', type: 'string'},
        returns: {arg:'relationA',type:"string"}
    })

};
