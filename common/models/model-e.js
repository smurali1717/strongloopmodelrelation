module.exports = function(ModelE) {
console.log("hello world am here");
    ModelE.observe('access', function logQuery(ctx, next) {
  //console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
        ctx.include="ModelF"
  next();
});
};
