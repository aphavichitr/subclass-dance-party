var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  this.$node.addClass("bouncydancer");
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.notline) {
    var styleSettings = {
      top: $("body").height() * Math.random(),
      left: $("body").width() * Math.random()
    };
    this.$node.css(styleSettings);
  }
};
