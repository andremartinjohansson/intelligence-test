window.Test = (function() {
    "use strict";

    // Variables for creating HTML dynamically
    var progressDIV = document.createElement("div"),
    question = document.createElement("p"),
    form = document.createElement("form"),
    box1 = document.createElement("input"),
    boxX = document.createElement("input"),
    box2 = document.createElement("input"),
    span1 = document.createElement("span"),
    spanX = document.createElement("span"),
    span2 = document.createElement("span"),
    buttonNext = document.createElement("button"),
    buttonGo = document.createElement("button"),
    countdown = document.createElement('p'),
    // Content area
    content = document.getElementById('content'),
    // Test number as global variable
    number = 1,
    // Points variable
    points = 0,
    // Defining variables to hold total points after tests
    pointsT,
    pointsFB,
    // Defining variables for the answers
    Answers1,
    Answers2,
    Answers3,
    Answers4,
    Answers5,
    // Just a counter for the memory test
    counter = 0,
    // Defining i to be used in for-loops
    i;

    // ------------------------------
    // The object
    var test = {

        // Array with all the questions / introductory text
        "QuestionsArray": [
            // First quiz question
            "Vilket av landskapen är minst till ytan?",
            // Second quiz question
            "Vilken färg lyser överst i trafikljusen?",
            // Third quiz question
            "Filmtrilogin Sagan om ringen - vem regisserade den? ",
            // FizzBuzz serie, randomly generated and added later
            "",
            // Introductory text for memory test
            "Detta är ett minnestest. När du klickar startknappen nedan visas nio flaggor under fem sekunder. Sedan visas en lista med namnen på flaggorna, och du ska klicka på rutorna i ordningen som visas i listan. Du får ett poäng för varje rätt. Om du klickar fel så avslutas testet."
        ],

        // Array with all the answers, some answers are dynamically added later
        "AnswersArray": [
            // Answers for first quiz question
            Answers1 = [
                "Öland",
                "Dalsland",
                "Blekinge"
            ],
            // Answers for second quiz question
            Answers2 = [
                "Grönt",
                "Gult",
                "Rött"
            ],
            // Answers for third quiz question
            Answers3 = [
                "Peter Jackson",
                "Steven Spielberg",
                "Ridley Scott"
            ],
            // Answers for FizzBuzz test
            Answers4 = [
                "",
                "",
                ""
            ],
            // Empty but still required
            Answers5 = [
                "",
                "",
                ""
            ]
        ],

        /**
        * Dynamically creates layout for the first two tests
        */
        "Layout": function() {
            // Empty content element
            content.innerHTML = "";
            // Set input type to radio on the inputs
            box1.setAttribute('type', 'radio');
            boxX.setAttribute('type', 'radio');
            box2.setAttribute('type', 'radio');
            // Add div showing the different tests and highlights which you are on
            content.appendChild(progressDIV);
            progressDIV.classList.add('tests');
            progressDIV.innerHTML = '<span class="test">Tipsfrågor</span><span class="test">FizzBuzz</span><span class="test">Minne</span><span id="points">Poäng: 0</span>';
            progressDIV.childNodes[0].classList.toggle('active-test');
            // Add a span element for the question
            content.appendChild(question);
            question.classList.add('question');
            // Add a form element
            content.appendChild(form);
            form.setAttribute('name', 'answers');
            // Add the first radio button with text next to it
            form.appendChild(box1);
            box1.classList.add('radio');
            // Event listener allows you only to go forward if you have chosen
            // an answer
            box1.addEventListener("change", function() {
                buttonNext.style.pointerEvents = "auto";
            });
            form.appendChild(span1);
            span1.classList.add('radioText');
            // Add the second radio button with text next to it
            form.appendChild(boxX);
            boxX.classList.add('radio');
            boxX.addEventListener("change", function() {
                buttonNext.style.pointerEvents = "auto";
            });
            form.appendChild(spanX);
            spanX.classList.add('radioText');
            // Add the third radio button with text next to it
            form.appendChild(box2);
            box2.classList.add('radio');
            box2.addEventListener("change", function() {
                buttonNext.style.pointerEvents = "auto";
            });
            form.appendChild(span2);
            span2.classList.add('radioText');
            // Give the form an id
            form.id = "answerForm";
            // Add the continue button with text and an id
            content.appendChild(buttonNext);
            buttonNext.innerHTML = "Gå vidare";
            buttonNext.id = "buttonNext";
        },

        /**
        * Dynamically creates layout for the memory test
        * @param gamearea - The HTML for the game area to be created
        * @param list - The HTML for the sidebar, which is a list
        * This layout was meant to be used for more tests, hence the parameters
        */
        "Layout2": function(gamearea, list) {
            // Prepare a sidebar
            var sidebar = document.createElement('div');
            // Empty content element
            content.innerHTML = "";
            // Add div showing the different tests and highlights which you are on
            content.appendChild(progressDIV);
            progressDIV.classList.add('tests');
            progressDIV.innerHTML = '<span class="test">Tipsfrågor</span><span class="test">FizzBuzz</span><span class="test">Minne</span><span id="points">Poäng: 0</span>';
            // Add the sidebar, create its innerHTML and set and id
            content.appendChild(sidebar);
            sidebar.id = "sidebar";
            sidebar.innerHTML = list;
            // Add a span element for the question
            content.appendChild(question);
            question.classList.add('question');
            // Use continue button to create a button which starts the test
            content.appendChild(buttonNext);
            buttonNext.innerHTML = "Starta test";
            buttonNext.id = "buttonStart";
            // Create a countdown text
            content.appendChild(countdown);
            countdown.innerHTML = "5";
            countdown.id = "countdownText";
            countdown.style.textAlign = "center";
            // Create gamearea inside content
            content.innerHTML += gamearea;
            // Add the continue button with text and an id
            content.appendChild(buttonNext);
            buttonNext.innerHTML = "Gå vidare";
            buttonNext.id = "buttonNext";
        },

        /**
        * Dynamically creates layout for the "in-between" tests
        */
        "Layout3": function() {
            // Empty content element
            content.innerHTML = "";
            // Set input type to radio on the inputs
            box1.setAttribute('type', 'radio');
            boxX.setAttribute('type', 'radio');
            box2.setAttribute('type', 'radio');
            // Add div showing the different tests and highlights which you are on
            content.appendChild(progressDIV);
            progressDIV.classList.add('tests');
            progressDIV.innerHTML = '<span class="test">Tipsfrågor</span><span class="test">FizzBuzz</span><span class="test">Minne</span><span id="points">Poäng: 0</span>';
            progressDIV.childNodes[0].classList.toggle('active-test');
            // Add a span element for the question
            content.appendChild(question);
            question.classList.add('question');
            // Add a "next test" button with text and id
            content.appendChild(buttonGo);
            buttonGo.innerHTML = "Nästa deltest";
            buttonGo.id = "buttonGo";
        },

        /**
        * Creates a test
        * @param Which test to be created, number 1-5
        */
        "Make": function(which) {
            // Create the question
            question.innerHTML = test.QuestionsArray[which-1];
            // Create the first choice
            box1.setAttribute('value', test.AnswersArray[which-1][0]);
            box1.setAttribute('name', 'answer');
            span1.innerHTML = test.AnswersArray[which-1][0];
            // Create the second choice
            boxX.setAttribute('value', test.AnswersArray[which-1][1]);
            boxX.setAttribute('name', 'answer');
            spanX.innerHTML = test.AnswersArray[which-1][1];
            // Create the third choice
            box2.setAttribute('value', test.AnswersArray[which-1][2]);
            box2.setAttribute('name', 'answer');
            span2.innerHTML = test.AnswersArray[which-1][2];
        },

        /**
        * Goes forward to the next test
        */
        "Next": function() {
            // Define variables for buttons
            var radios = document.getElementsByClassName('radio'),
            radioText = document.getElementsByClassName('radioText'),
            goButton;
            // Make sure the radio text is always black on a new test
            for (i = 0; i < radioText.length; i++) {
                radioText[i].style.color = "black";
            }
            // Increase test number by one
            number += 1;
            // For the quiz, do this
            if (number < 4) {
                // Create the question with answers using Make function
                window.Test.Make(number);
                // Make sure buttons are not checked and enabled
                for (i = 0; i < radios.length; i++) {
                    radios[i].checked = false;
                    radios[i].disabled = false;
                }
            }
            // Do this when first test is done
            else if (number == 4) {
                // First, create the "in-between" page
                test.Layout3();
                goButton = document.getElementById('buttonGo');
                // We're not actually on next test yet so decrease number by one
                number = 3;
                // Calculate the points
                pointsT = points;
                test.CalculatePoints();
                question.innerHTML = "Deltest avklarat! Du samlade <strong>" + points + "</strong> poäng.";
                goButton.style.pointerEvents = "auto";
                // If users clicks on continue, the next test is created
                goButton.addEventListener("click", function() {
                    number = 4;
                    test.Layout();
                    test.Make(number);
                    test.CalculatePoints();
                    progressDIV.childNodes[0].classList.toggle('active-test');
                    progressDIV.childNodes[1].classList.toggle('active-test');
                    for (i = 0; i < radios.length; i++) {
                        radios[i].checked = false;
                        radios[i].disabled = false;
                    }
                });
            }
            // Do this when second test is done
            else if (number == 5) {
                test.Layout3();
                var pointsText = document.getElementById('points');
                goButton = document.getElementById('buttonGo');
                // Fix progress bar
                progressDIV.childNodes[0].classList.toggle('active-test');
                progressDIV.childNodes[1].classList.toggle('active-test');
                // We're not actually on next test yet so decrease number by one
                number = 4;
                // Calculate the points
                pointsFB = points;
                pointsText.innerHTML = "Poäng: " + pointsFB;
                question.innerHTML = "Deltest avklarat! Du samlade <strong>" + (pointsFB - pointsT) + "</strong> poäng.";
                goButton.style.pointerEvents = "auto";
                // If users clicks on continue, the next test is created
                goButton.addEventListener("click", function() {
                    number = 5;
                    window.Test.Make(number);
                    test.CalculatePoints();
                    window.Memory.MemoryTest(counter);
                });
            }
            // If number is more than 5, the test is done so show the result
            else {
                // Calculate your innteligence
                var result = test.intelligence();
                // Print result
                content.innerHTML = '<p>Ditt resultat: <strong>' + window.Memory.points() + '</strong> poäng av 21 möjliga. ' + result + '</p><img src="img/brain.png" alt="Brain" class="brain"><ul class="score-list"><li>Begåvad: Över 19 poäng</li><li>Över normal: 16-19 poäng</li><li>Normal: 9-15 poäng</li><li>Under normal: 3-8 poäng</li><li>Begränsad: Under 3 poäng</li></ul><br><br><br><br><br><br><button id="restart">Gå till start</button>';
                // Define restart button after it has been created inside content
                var restartButton = document.getElementById('restart');
                // Add event listener that reloads the page and resets the whole
                // test when pressed
                restartButton.addEventListener("click", function() {
                    window.location.reload();
                });
            }
        },

        /**
        * Returns the test number
        */
        "Number": function() {
            return number;
        },

        /**
        * Resets the current test
        */
        "Reset": function() {
            var pointsText, radios;
            // If current test is 1, 2 or 3, reset to the very beginning
            if (number == 1 || number == 2 || number == 3) {
                test.Layout();
                window.Test.Make(1);
                pointsText = document.getElementById('points');
                radios = document.getElementsByClassName('radio');
                number = 1;
                points = 0;
                for (i = 0; i < radios.length; i++) {
                    radios[i].checked = false;
                    radios[i].disabled = false;
                }
                // Make sure points is updated
                pointsText.innerHTML = "Poäng: " + points;
            }
            else if (number == 4) {
                test.Layout();
                window.Test.Make(4);
                pointsText = document.getElementById('points');
                radios = document.getElementsByClassName('radio');
                // Randomize the FizzBuzz sequence
                window.FizzBuzz.randomFizz();
                number = 4;
                for (i = 0; i < radios.length; i++) {
                    radios[i].checked = false;
                    radios[i].disabled = false;
                }
                // Fix progress bar
                progressDIV.childNodes[0].classList.toggle('active-test');
                progressDIV.childNodes[1].classList.toggle('active-test');
                // Make sure points is updated
                points = pointsT;
                pointsText.innerHTML = "Poäng: " + pointsT;
            }
            else if (number == 5) {
                pointsText = document.getElementById('points');
                counter = 0;
                window.Memory.MemoryTest(counter);
                number = 5;
                // Make sure points is updated
                points = pointsFB;
                pointsText.innerHTML = "Poäng: " + pointsFB;
            }
        },

        /**
        * Returns the answer for the first tests
        */
        "Answer": function() {
            var answer;
            if (number == 1) {
                answer = 1;
            }
            else if (number == 2) {
                answer = 3;
            }
            else if (number == 3) {
                answer = 1;
            }
            else if (number == 4) {
                answer = 2;
            }
            return answer;
        },

        /**
        * Calculate the points
        */
        "CalculatePoints": function(answer) {
            var radios = document.getElementsByClassName('radio'),
            pointsText = document.getElementById('points');
            // For the quiz and FizzBuzz, do this
            if (number < 5) {
                // Make sure the test has radios
                if (radios[answer-1] !== undefined) {
                    // If the correct radio is checked, add 3 points
                    if (radios[answer-1].checked === true) {
                        points += 3;
                    }
                }
            }
            // For the memory test, do this
            if (number == 5) {
                points = window.Memory.points();
            }
            // Make sure points is updated
            pointsText.innerHTML = "Poäng: " + points;
        },

        /**
        * Return points
        */
        "points": function() {
            return pointsFB;
        },

        /**
        * Return your final result in the form of a string
        */
        "intelligence": function() {
            var result;
            if (window.Memory.points() > 19) {
                result = "Du är begåvad.";
            }
            else if (window.Memory.points() >= 16 && window.Memory.points() <= 19) {
                result = "Du är över normal.";
            }
            else if (window.Memory.points() >= 9 && window.Memory.points() <= 15) {
                result = "Du är normal.";
            }
            else if (window.Memory.points() >= 3 && window.Memory.points() <= 8) {
                result = "Du är under normal.";
            }
            else if (window.Memory.points() < 3) {
                result = "Du är... Begränsad.";
            }
            return result;
        }

    };

    // Return object
    return test;
})();
