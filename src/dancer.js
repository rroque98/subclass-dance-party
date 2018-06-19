var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="charizard" src="http://24.media.tumblr.com/f45decc024027f312949fe9ab20a21f9/tumblr_mj1lxvFz6p1s6n6eyo1_500.gif" class ="dancer"></img>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};


Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.setPosition(650, count);
  
};
