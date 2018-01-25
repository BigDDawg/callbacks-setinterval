// Callbacks have many usages.
    // 1. One is when we use the setTimeout() and setInterval() methods of the browser’s
    // window object – methods that accept and execute callbacks:
    // Rather than wait around for a function to finish by returning a value,
    // we can use callbacks to do it asynchronously.

    // If you want to introduce specific, millisecond-based actions to your code,
    // use setTimeout and its brother setIntervalwhich will repeatedly fire a callback
    // function rather than just doing so just once).  (In Node, you can use callbacks
    // when you want to fire something off, move on to other things,
    // and then react when what you originally started is finished.


    (function(){

        var h1 = document.querySelector('h1');

        var body = document.querySelector('body'); // selects body.

        var isBlue = false; // Boolean to Compare the Document Background Color Too.

        var isWhite = false; // Boolean to Compare the H1 Color Too.

        // setinterval - keeps looping and checks the background
        setInterval(function () { // Manipulates.....

          // DOESN'T RUN THE FIRST TIME b/c isBlue is false.
          if(isBlue) {

            body.style.background = 'white';

          // Runs the first times b/c isBlue is false
          } else { // this runs the first time around.

            body.style.background = 'red';
          }

          isBlue = !isBlue; // this changes is blue back to true and then

          // DOESN'T RUN THE FIRST TIME b/c isWhite is false
          if(isWhite) {

            h1.style.color = 'blue';
          // Runs the first times b/c isWhite is false
          } else { // this runs the first time around.

            h1.style.color = 'white';
          }

          // changes to true, so the if - first statement will run.
          isWhite = !isWhite;


  }, 1000);

})();

// Pattern used to avoid polluting the global namespace, 
// ball variables inside the IIFE (like in any other normal function) are not visible outside its scope.
