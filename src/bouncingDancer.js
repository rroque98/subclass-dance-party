var BouncingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="gengar w3-spin" src=http://i0.kym-cdn.com/photos/images/original/000/609/431/335.gif>');
  this.setPosition(top - 200, left);
  
};

BouncingDancer.prototype = Object.create(Dancer.prototype);
BouncingDancer.prototype.constructor = BouncingDancer;

BouncingDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  pulse(this.$node);
};

var pulse = function() {
  $('#seventyfive').animate({
    width: 300, height: 300, 
    opacity: 0.5
  }, 100, function() {
    $('#seventyfive').animate({
      width: 320, height: 320, 
      opacity: 1
    }, 100, function() {
      pulse();
    });
  }); 
};
