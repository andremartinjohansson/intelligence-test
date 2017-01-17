window.Memory = (function() {
    "use strict";

    var points,
    drawOrder,
    i;

    // Variables for the flags
    var swedishFlag,
    vietnameseFlag,
    maldivesFlag,
    switzerlandFlag,
    hungaryFlag,
    italyFlag;

    // Object for creating the flags
    var flag = {
        html: "",
        country: "",
        /**
        * A "template" for creating new flags
        * @param The country flag you want to create
        */
        init: function(country) {
            switch (country) {
                case 'swe':
                    this.html = '<div class="swedish"><div class="flag-top"><div class="left inner"></div><div class="middle arm"></div><div class="right outer"></div></div><div class="flag-middle"></div><div class="flag-bottom"><div class="left inner"></div><div class="middle arm"></div><div class="right outer"></div></div></div>';
                    this.country = country;
                    break;
                case 'nam':
                    this.html = '<div class="vietnam"><div class="star"></div></div>';
                    this.country = country;
                    break;
                case 'mal':
                    this.html = '<div class="maldives"><div class="inner"><div class="moon"></div></div></div>';
                    this.country = country;
                    break;
                case 'swi':
                    this.html = '<div class="schweiz"><div class="cross"></div></div>';
                    this.country = country;
                    break;
                case 'hun':
                    this.html = '<div class="hungary"><div class="top"></div><div class="middle"></div><div class="bottom"></div></div>';
                    this.country = country;
                    break;
                case 'ita':
                    this.html = '<div class="italy"><div class="left"></div><div class="middle"></div><div class="right"></div></div>';
                    this.country = country;
                    break;
                default:
                    return 'Something went wrong!';
            }
        },
        /**
        * Draw the flag
        * @param Where you want to draw the box
        */
        draw: function(box) {
            box.innerHTML = '<div class="container">' + this.html + '</div>';
        }
    };

    // Create flags
    swedishFlag = Object.create(flag);
    swedishFlag.init('swe');
    vietnameseFlag = Object.create(flag);
    vietnameseFlag.init('nam');
    maldivesFlag = Object.create(flag);
    maldivesFlag.init('mal');
    switzerlandFlag = Object.create(flag);
    switzerlandFlag.init('swi');
    hungaryFlag = Object.create(flag);
    hungaryFlag.init('hun');
    italyFlag = Object.create(flag);
    italyFlag.init('ita');

    /**
    * Function for shuffling (randomly re-order) an array
    * @param The array you want to shuffle
    */
    function shuffle(array) {
        var currentIndex = array.length,
        temporaryValue,
        randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    /**
    * Checks the clicked box and if the order you click them in is correct
    * @param box - The clicked box
    * @param counter - How many boxes you have clicked
    * @param listArray - The order of the countries
    */
    function checkMemory(box, counter, listArray) {
        var sidebar = document.getElementById('sidebar'),
        boxes = document.getElementsByClassName("box"),
        nextButton = document.getElementById('buttonNext'),
        countdownText = document.getElementById('countdownText'),
        pointsText = document.getElementById('points');

        /**
        * Many ifs that check if the order is correct, and responds accordingly
        * box.childNodes[0].childNodes[0].classList[0] is the class of the flag in the box
        * sidebar.childNodes[0].childNodes[counter] is the country in the list in the sidebar
        */
        if (box.childNodes[0].childNodes[0].classList[0] == "hungary") {
            if (counter == listArray.indexOf('Ungern')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else if (counter == listArray.lastIndexOf('Ungern')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else {
                for (i = 0; i < boxes.length; i++) {
                    boxes[i].style.pointerEvents = "none";
                }
                for (i = counter; i < sidebar.childNodes[0].childNodes.length; i++) {
                    sidebar.childNodes[0].childNodes[i].style.color = "red";
                }
                nextButton.style.pointerEvents = "auto";
                countdownText.innerHTML = "Du gissade fel. Testet avslutas och du kan gå vidare.";
                countdownText.style.color = "red";
            }
        }
        if (box.childNodes[0].childNodes[0].classList[0] == "italy") {
            if (counter == listArray.indexOf('Italien')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else {
                for (i = 0; i < boxes.length; i++) {
                    boxes[i].style.pointerEvents = "none";
                }
                for (i = counter; i < sidebar.childNodes[0].childNodes.length; i++) {
                    sidebar.childNodes[0].childNodes[i].style.color = "red";
                }
                nextButton.style.pointerEvents = "auto";
                countdownText.innerHTML = "Du gissade fel. Testet avslutas och du kan gå vidare.";
                countdownText.style.color = "red";
            }
        }
        if (box.childNodes[0].childNodes[0].classList[0] == "swedish") {
            if (counter == listArray.indexOf('Sverige')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else {
                for (i = 0; i < boxes.length; i++) {
                    boxes[i].style.pointerEvents = "none";
                }
                for (i = counter; i < sidebar.childNodes[0].childNodes.length; i++) {
                    sidebar.childNodes[0].childNodes[i].style.color = "red";
                }
                nextButton.style.pointerEvents = "auto";
                countdownText.innerHTML = "Du gissade fel. Testet avslutas och du kan gå vidare.";
                countdownText.style.color = "red";
            }
        }
        if (box.childNodes[0].childNodes[0].classList[0] == "vietnam") {
            if (counter == listArray.indexOf('Vietnam')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else if (counter == listArray.lastIndexOf('Vietnam')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else {
                for (i = 0; i < boxes.length; i++) {
                    boxes[i].style.pointerEvents = "none";
                }
                for (i = counter; i < sidebar.childNodes[0].childNodes.length; i++) {
                    sidebar.childNodes[0].childNodes[i].style.color = "red";
                }
                nextButton.style.pointerEvents = "auto";
                countdownText.innerHTML = "Du gissade fel. Testet avslutas och du kan gå vidare.";
                countdownText.style.color = "red";
            }
        }
        if (box.childNodes[0].childNodes[0].classList[0] == "schweiz") {
            if (counter == listArray.indexOf('Schweiz')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else if (counter == listArray.lastIndexOf('Schweiz')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else {
                for (i = 0; i < boxes.length; i++) {
                    boxes[i].style.pointerEvents = "none";
                }
                for (i = counter; i < sidebar.childNodes[0].childNodes.length; i++) {
                    sidebar.childNodes[0].childNodes[i].style.color = "red";
                }
                nextButton.style.pointerEvents = "auto";
                countdownText.innerHTML = "Du gissade fel. Testet avslutas och du kan gå vidare.";
                countdownText.style.color = "red";
            }
        }
        if (box.childNodes[0].childNodes[0].classList[0] == "maldives") {
            if (counter == listArray.indexOf('Maldiverna')) {
                sidebar.childNodes[0].childNodes[counter].style.color = "green";
                points = points + 1;
                box.style.pointerEvents = "none";
            }
            else {
                for (i = 0; i < boxes.length; i++) {
                    boxes[i].style.pointerEvents = "none";
                }
                for (i = counter; i < sidebar.childNodes[0].childNodes.length; i++) {
                    sidebar.childNodes[0].childNodes[i].style.color = "red";
                }
                nextButton.style.pointerEvents = "auto";
                countdownText.innerHTML = "Du gissade fel. Testet avslutas och du kan gå vidare.";
                countdownText.style.color = "red";
            }
        }
        // Update points
        pointsText.innerHTML = "Poäng: " + memory.points();
        // When you have clicked nine times and not yet failed, you've gussed
        // all of them correct, and the test will allow you to continue
        if (counter == 8) {
            nextButton.style.pointerEvents = "auto";
            countdownText.innerHTML = "Du svarade rätt på alla. Du kan nu gå vidare.";
            countdownText.style.color = "green";
        }
    }

    /**
    * Turn the clicked box
    * @param The box to "turn"
    */
    function turn(box) {
        if (box == drawOrder[0]) {
            swedishFlag.draw(box);
        }
        else if (box == drawOrder[1]) {
            hungaryFlag.draw(box);
        }
        else if (box == drawOrder[2]) {
            vietnameseFlag.draw(box);
        }
        else if (box == drawOrder[3]) {
            italyFlag.draw(box);
        }
        else if (box == drawOrder[4]) {
            vietnameseFlag.draw(box);
        }
        else if (box == drawOrder[5]) {
            switzerlandFlag.draw(box);
        }
        else if (box == drawOrder[6]) {
            hungaryFlag.draw(box);
        }
        else if (box == drawOrder[7]) {
            maldivesFlag.draw(box);
        }
        else if (box == drawOrder[8]) {
            switzerlandFlag.draw(box);
        }
    }

    /**
    * Turn all boxes to show the flags
    * @param The boxes
    */
    function turnAll(boxes) {
        // Create a standard order then shuffle it
        var order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        order = shuffle(order);
        // Array for saving the boxes in the order they are drawn
        drawOrder = [];
        // Draw the flags - the order will appear randomized
        swedishFlag.draw(boxes[order[0]]);
        hungaryFlag.draw(boxes[order[1]]);
        vietnameseFlag.draw(boxes[order[2]]);
        italyFlag.draw(boxes[order[3]]);
        vietnameseFlag.draw(boxes[order[4]]);
        switzerlandFlag.draw(boxes[order[5]]);
        hungaryFlag.draw(boxes[order[6]]);
        maldivesFlag.draw(boxes[order[7]]);
        switzerlandFlag.draw(boxes[order[8]]);
        // Save the boxes in the order they were drawn
        for (i = 0; i < boxes.length; i++) {
            drawOrder.push(boxes[order[i]]);
        }
    }

    // The memory object
    var memory = {

        /**
        * Creates the memory test
        * @param How many boxes you have clicked
        */
        "MemoryTest": function(counter) {
            // The HTML for the gamearea
            var ga = '<table class="gamearea"><tbody><tr class="row"><td class="box">?</td><td class="box">?</td><td class="box">?</td></tr><tr class="row"><td class="box">?</td><td class="box">?</td><td class="box">?</td></tr><tr class="row"><td class="box">?</td><td class="box">?</td><td class="box">?</td></tr></tbody></table>';
            // Array with all the flags / countries
            var listArray = ["Ungern", "Italien", "Sverige", "Vietnam", "Ungern", "Schweiz", "Vietnam", "Schweiz", "Maldiverna"];
            // Shuffle the array to randomize order
            listArray = shuffle(listArray);
            // Create list HTML with randomized order
            var html = '<ol><li>' + listArray[0] + '</li><li>' + listArray[1] + '</li><li>' + listArray[2] + '</li><li>' + listArray[3] + '</li><li>' + listArray[4] + '</li><li>' + listArray[5] + '</li><li>' + listArray[6] + '</li>'
            + '<li>' + listArray[7] + '</li><li>' + listArray[8] + '</li></ol>';
            // Now create the layout
            window.Test.Layout2(ga, html);
            // Progress bar
            var progressTests = document.getElementsByClassName('test'),
            // Sidebar
            sidebar = document.getElementById('sidebar'),
            // Button to start test
            testButton = document.getElementById('buttonStart'),
            // The boxes
            boxes = document.querySelectorAll(".box"),
            // The element which contains countdown text
            countdownText = document.getElementById('countdownText'),
            // For the countdown
            count = 4;
            // Hide sidebar list
            sidebar.childNodes[0].style.display = "none";
            // Fix progress bar
            progressTests[2].classList.add('active-test');
            // Make sure test button is clickable
            testButton.style.pointerEvents = "auto";
            // Make sure points is updated
            points = window.Test.points();
            // Make boxes not clickable before starting test
            for (i = 0; i < boxes.length; i++) {
                boxes[i].style.pointerEvents = "none";
            }
            // Event listener on test button which starts the test
            testButton.addEventListener("click", function() {
                // Turn all boxes and show all flags
                turnAll(boxes);
                // Countdown interval that changes countdown text
                var countdownInterval = window.setInterval(function() {
                    countdownText.innerHTML = count;
                    count = count - 1;
                }, 1000);
                // After five seconds, hide all flags again and clear the interval
                window.setTimeout(function() {
                    window.clearInterval(countdownInterval);
                    for (i = 0; i < boxes.length; i++) {
                        boxes[i].innerHTML = "?";
                        countdownText.innerHTML = "0";
                        // Make boxes clickable now and add event listeners that
                        // turns a clicked box
                        boxes[i].style.pointerEvents = "auto";
                        // Hide sidebar list
                        sidebar.childNodes[0].style.display = "block";
                        boxes[i].addEventListener("click", function() {
                            turn(this);
                            // Check if order is correct
                            checkMemory(this, counter, listArray);
                            counter = counter + 1;
                        });
                    }
                }, 5000);
                // Make test button not clickable again after having started the
                // test
                this.style.pointerEvents = "none";
            });

            var pointsText = document.getElementById('points');
            pointsText.innerHTML = "Poäng: " + points;
        },

        /**
        * Returns points
        */
        "points": function() {
            return points;
        }
    };

    // Return the object
    return memory;
})();
