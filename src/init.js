$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    $(".blinkydancer").mouseover(function(event) {
      $(this).removeClass("blinkydancer");
    });
  });

  $('.addBouncyButton').on('click', function(event) {   
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addFadeButton').on('click', function(event) {   
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    for (var x=0; x<window.dancers.length; x++){
        for (var i =1; i<window.dancers.length; i++){
            var a = Math.pow(window.dancers[x].top - window.dancers[i].top,2);
            console.log('1: ' + window.dancers[x].top);
            console.log('2: ' + window.dancers[i].top);
            var b = Math.pow(window.dancers[x].left - window.dancers[i].left,2);
            console.log('1: ' + window.dancers[x].left);
            console.log('2: ' + window.dancers[i].left);
            if (Math.sqrt(a + b) < 100 && Math.sqrt(a + b) > 0) {
                console.log(Math.sqrt(a +  b));
                console.log('touching');
                //$(window.dancers[i].$node).removeClass("blinkydancer");
                //window.dancers[i].$node.removeClass("fadedancer");
                // console.log(window.dancers[i].$node.css.top);
                window.dancers[x].touching = false;
                //window.dancers[x].$node.removeClass('fadedancer');
                //window.dancers[i].$node.removeClass('fadedancer');
                window.dancers[i].$node.animate({
                    height: '200px',
                    width: '200px'
                });
            }
        }
    }

  });

  $('.addLineUpButton').on('click', function(event) {   
    for (var x = 0; x < window.dancers.length; x++) {
      window.dancers[x].notline = false; 
      window.dancers[x].lineUp(); 
    }
  });


  
});