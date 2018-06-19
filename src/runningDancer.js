var RunningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;

RunningDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  animateDiv(this.$node);
};

var makeNewPosition = function() {
    
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;    
  var nh = Math.floor(Math.random() * h) - 200;
  var nw = Math.floor(Math.random() * w);
    
  return [nh, nw];    
    
};

var animateDiv = function(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1]}, 2000, function() {
    animateDiv(myclass);        
  });
    
};
