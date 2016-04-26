var makeFadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeFadeDancer.prototype = Object.create(makeDancer.prototype);
makeFadeDancer.prototype.constructor = makeFadeDancer;
makeFadeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.addClass("fadedancer");
  this.$node.fadeToggle(1000);
};
