var GengarEvolution = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="gengar w3-animate-fading dancer" src=https://media.giphy.com/media/11LkxpJX5Eex7q/giphy.gif>');
  this.setPosition(top - 200, left);
  
};

GengarEvolution.prototype = Object.create(Dancer.prototype);
GengarEvolution.prototype.constructor = GengarEvolution;

GengarEvolution.prototype.step = function(timeBetweenSteps) {
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
