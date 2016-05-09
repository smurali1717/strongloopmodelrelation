module.exports = function(app) {
 
var modelD = app.models.modelD;
    var modelE = app.models.modelE;
    var modelF = app.models.modelG;
    
    
    
 modelD.nestRemoting("ModelE");   
    
  /*  modelA.create({"userID":"123","username":"Murali","address":"street 1 city 1"}, function(error, data){
    console.log("successfully data uploaded"); 
 });   
    modelB.create({"userID":"123","refID":"321","createdBy":"Ram"}, function(error, data){
    console.log("successfully data uploaded"); 
 });   
    modelC.create({"refID":"321","refname":"MuraliKrishnan"}, function(error, data){
    console.log("successfully data uploaded"); 
 });*/
    modelD.create({"userID":"123","age":31,"city":"Madurai"}, function(error,data){
        console.log("success")
    });
    
    modelE.create({"userID":"123","propertyA":"31","propertyB":"Madurai"}, function(error,data){
        console.log("success")
    });
    
    modelF.create({"propertyA":"31","detail":"31"}, function(error,data){
        console.log("success");
    });
    

}