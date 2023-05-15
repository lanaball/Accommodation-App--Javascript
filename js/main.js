// global variables:
var nightsInput = document.querySelector(".nights");
var guestsInput = document.querySelector(".guests");
var displayGuests = document.querySelector(".guests-booked");
var displayNights = document.querySelector(".nights-booked");
var mealInput = document.getElementById("meal-options");
var errorMessage = document.getElementsByClassName(".message");
var amount = document.getElementsByClassName("amount");
var checkInputsButton = document.getElementById("check-inputs");
var mealButton = document.querySelector(".book-now");
var myImageElement = document.querySelector(".accom-img");
var accomName = document.querySelector(".accom-name");
var accomPrice = document.querySelector(".accom-price");
var totalCost = document.querySelector(".accom-total");
var accomRating = document.querySelector(".accom-rating");
var myDetails = document.querySelector(".accom-details");

// array for json data
accommodationArray = [];

// user table for calculations and userchoice item
var userObj = {
    dates: null,
    nights: null,
    guests: null,
    name: null,
    image: null,
    accommodation: null,
    mealType: null,
    meal: null,
    amount: null,
    total: null,
    address: null,
};
console.table(userObj)

// animation for opening page ended go to page 2
function animationEnd() {
    window.open("#two", "_self");
};

// hamburger function
var hamburgerBurger = document.querySelector(".hamburger");
hamburgerBurger.addEventListener("click", onBurgerClicked);
function onBurgerClicked() {
    hamburgerBurger.classList.toggle("is-active");
    var mobileMenu = document.querySelector(".mobile");
    mobileMenu.classList.toggle("show-mobile");
};


// function for button to go back a page
function goBackSection(sectionName) {
    var previousSection = document.querySelector(sectionName);
    previousSection.scrollIntoView({ behavior: "smooth" });
    history.p;
};


// calender dates picker function
var picker = new Litepicker({
    element: document.getElementById('litepicker'),
    format: 'MMM DD, YYYY',
    minDate: Date.now(),
    singleMode: false,
    tooltipText: {
        one: 'days',
        other: 'days',
    },
});

picker.on('selected', (date1, date2) => {
    var theRangeInMillseconds = date2.dateInstance - date1.dateInstance;
    var numberOfMillsecondsInDay = 86400000;
    var nightsCounter = theRangeInMillseconds / numberOfMillsecondsInDay;
    console.log('Length of Booking = ', nightsCounter, ' nights');
    userObj.nights = nightsCounter;
    console.table(userObj);
});


// input validations 
guestsInput.addEventListener("blur", onValidateGuests);
guestsInput.addEventListener("focus", onClearError);
nightsInput.addEventListener("change", onValidateNights);
nightsInput.addEventListener("focus", onClearError);


function onValidateNights(event) {
    var userInput = event.target.value;
    userObj.nights = userInput;
    checkInputs();
};


function onValidateGuests(event) {
    var userInput = event.target.value;

    if (isValueProvided(userInput) == false) {
        event.target.nextElementSibling.innerHTML = "please enter guests"
        return
    }
    if (isNumeric(userInput) <= 0 || (userInput) >= 5) {
        event.target.nextElementSibling.innerHTML = "please enter valid guest amount"
        return
    }
    userObj.guests = parseInt(userInput);
    console.table(userObj);
    checkInputs();
};

function onClearError(event) {
    // var userInput = event.target.value;
    // event.target.nextElementSibling.innerHTML = "";
};


function checkInputs() {
    if (userObj.guests > 0 && userObj.nights >= 1) {
        enableSubmit();
    } else {
        disableSubmit();
    }
};

function disableSubmit() {
    var theButton = document.querySelector(".disabled");
    if (theButton) {
        theButton.classList.add("disabled");
    }
};


function enableSubmit() {
    var theButton = document.querySelector(".disabled");
    if (theButton) {
        theButton.classList.remove("disabled");
    }
};

	// configure splide function
    var mySplide = new Splide(".my-slider", {
        autoplay: true, 
        interval: 2500,
        type: "loop",
        });
        mySplide.mount();


        // email validation functions (page 5)
        var emailInput = document.querySelector(".email");
        emailInput.addEventListener("blur", onValidateEmail);
        emailInput.addEventListener("focus", onClearError);
        
        
        function onValidateEmail(event) {
            var userInput = event.target.value;
        
            if (isValueProvided(userInput) == false) {
                event.target.nextElementSibling.innerHTML = "please enter email";
                disableSubmit();
                return
            }
            if (isEmail(userInput) == false) {
                event.target.nextElementSibling.innerHTML = "please enter valid email";
                 disableSubmit();
                return
            }
           if (isEmail(userInput) == true) {
             enableSubmit();
            return
            }
            emailInput.value = "";
        };
        


