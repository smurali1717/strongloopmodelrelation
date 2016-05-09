module.exports = function(Model, options) {
  // Model is the model class
  // options is an object containing the config properties from model definition
  
    
     'use strict';

  // give each dog a unique tag for tracking
  Model.defineProperty('tag', {
    type: String,
    'defaultFn': 'uuid'
  });
}