var PokemonTrainer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src=https://pa1.narvii.com/6445/afea78a767005261e68bd34bdd742511c9dd4dbd_hq.gif>');
  this.setPosition(600, left);
  window.trainerLocation.push(600);
  window.trainerLocation.push(left);
  
};

PokemonTrainer.prototype = Object.create(Dancer.prototype);
PokemonTrainer.prototype.constructor = PokemonTrainer;

PokemonTrainer.prototype.step = function(timeBetweenSteps) {
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
