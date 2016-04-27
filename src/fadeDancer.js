var makeFadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass("fadedancer");
};

makeFadeDancer.prototype = Object.create(makeDancer.prototype);
makeFadeDancer.prototype.constructor = makeFadeDancer;
makeFadeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.touching) {
    this.$node.fadeToggle(400);  
  }
};
