window.FizzBuzz = (function() {
    'use strict';

    /**
    * Creates the FizzBuzz sequence
    * @param start - Where the sequence should start
    * @param stop - Where the sequence should stop
    */
    function fizzBuzz(start, stop) {
        // Doesn't work if start isn't smaller than stop
        if (stop <= start) {
            return "Oops! That doesn't work!";
        }
        // This will hold the resulting sequence
        var result = '';
        // This will hold the FizzBuzz string
        var fb;
        // Check all numbers between start and stop and build the sequence
        for (var i = start; i <= stop; i++) {
            if (((i % 3) === 0) && ((i % 5) === 0)) {
                fb = "Fizz Buzz";
                if (i !== stop) {
                    result += fb + ", ";
                }
                else {
                    result += fb;
                }
            }
            else if ((i % 3) === 0) {
                fb = "Fizz";
                if (i !== stop) {
                    result += fb + ", ";
                }
                else {
                    result += fb;
                }
            }
            else if ((i % 5) === 0) {
                fb = "Buzz";
                if (i !== stop) {
                    result += fb + ", ";
                }
                else {
                    result += fb;
                }
            }
            else {
                if (i !== stop) {
                    result += i + ", ";
                }
                else {
                    result += i;
                }
            }
        }
        // Return the sequence
        return result;
    }

    // FizzBuzz object
    var fizzbuzz = {
        /**
        * Randomizes the FizzBuzz sequence and writes it to the test
        */
        "randomFizz": function() {
            // Give start number a random number up to 100
            var start = Math.floor(Math.random() * 100);
            // Give stop number start plus a random number between 5 and 10
            var stop = start + Math.floor((Math.random() * 10) + 5);

            // Write the sequence to the test question element
            window.Test.QuestionsArray[3] = fizzBuzz(start, stop);

            // Create reasonable choices for the answers
            var fbplusone = fizzBuzz(start, stop+3);
            var fbnum = fbplusone.split(", ");

            // Write them to the answers
            window.Test.AnswersArray[3][1] = fbnum[fbnum.length-3];
            window.Test.AnswersArray[3][0] = fbnum[fbnum.length-2];
            window.Test.AnswersArray[3][2] = fbnum[fbnum.length-1];
        }
    };

    // Create FizzBuzz sequence
    fizzbuzz.randomFizz();

    // Return the object
    return fizzbuzz;
})();
