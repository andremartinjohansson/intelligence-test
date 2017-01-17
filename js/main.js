(function(){
    'use strict';

    // Find the start button and get the test number
    var startButton = document.getElementById('start'),
    testNumber = window.Test.Number();

    /**
    * Check if the chosen answer is the correct one before continuing
    */
    function nextTest() {
        // The button to continue
        var nextButton = document.getElementById('buttonNext'),
        // The radio buttons
        radios = document.answers.answer,
        // The chosen answer
        chosen,
        // Loop variable
        i;
        // When a radio is clicked the chosen radio is saved in a variable
        for (i = 0; i < radios.length; i++) {
            radios[i].onclick = function() {
                chosen = this;
            };
        }
        // When the continue button is clicked, the answer is checked
        nextButton.addEventListener("click", function() {
            // Get the correct answer from test module
            var answer = window.Test.Answer(),
            radioText = document.getElementsByClassName('radioText');
            // Check if we actually have radios
            if (radioText[answer-1] !== undefined) {
                // If your chosen answer is not correct, it will turn red
                for (i = 0; i < radioText.length; i++) {
                    if (chosen !== radios[answer-1]) {
                        chosen.nextSibling.style.color = "red";
                    }
                }
                // The correct answer is shown with green color
                radioText[answer-1].style.color = "green";
            }
            // Make sure the continue button can't be clicked again
            this.style.pointerEvents = "none";
            // Disable the radio buttons
            for (i = 0; i < radios.length; i++) {
                radios[i].disabled = true;
            }
            // Calculate the points
            window.Test.CalculatePoints(answer);
            // After one second, it will continue to the next test
            window.setTimeout(function() {
                window.Test.Next();
            }, 1000);
        });
    }

    // Onclick event listener for start button - which starts the whole IQ-test
    startButton.addEventListener("click", function() {
        // Create the first test
        window.Test.Layout();
        window.Test.Make(testNumber);
        nextTest();
    });

})();
