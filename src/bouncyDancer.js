var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var styleSettings = {
    top: $("body").height() * Math.random(),
    left: $("body").width() * Math.random()
  };
  this.$node.addClass("bouncydancer");
  this.$node.css(styleSettings);
};

makeBouncyDancer.prototype.lineUp = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css({top: 0});
};
