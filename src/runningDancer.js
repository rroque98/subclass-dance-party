var RunningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;

RunningDancer.prototype.run = function(timeBetweenSteps) {
  Dancer.prototype.run.call(this, timeBetweenSteps);
  this.$node.slideDown();
};