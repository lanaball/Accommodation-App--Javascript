
// function for user to upload the right dataset on move to next page
function userSearch(event) {
    console.log(guestsInput.value);
    if (guestsInput.value == 1) {
        // console.log("im 1 guest")
        enableSubmit();
        window.open("#three", "_self");
        loadHotelData();
        loadHostelData();
        loadHouseData();
    }
    if (guestsInput.value == 2) {
        // console.log("im 2 guest")
        enableSubmit();
        window.open("#three", "_self");
        loadHouseData();
        loadHotelData();
        loadMotelData();

    }
    if (guestsInput.value == 3) {
        // console.log("im 3 guest")
        enableSubmit();
        window.open("#three", "_self");
        loadHouseData();
        loadMotelData();
    }
    if (guestsInput.value == 4) {
        // console.log("im 4 guest")
        enableSubmit();
        window.open("#three", "_self");
        loadHouseData();
        loadMotelData();
    }
    userObj.dates = nightsInput.value;
    loadSummary();
    guestsInput.value = "";
    // nightsInput.value = "";
};

//  async functions to load json data into array, then updateUI
async function loadHotelData() {
    var response = await fetch("./js/hotel.json");
    var data = await (response.json());
    accommodationArray = data.hotel;
    updateUI(accommodationArray);
    // console.log(accommodationArray)
};


async function loadHouseData() {
    var response = await fetch("./js/house.json");
    var data = await (response.json());
    accommodationArray = data.house;
    updateUI(accommodationArray);
};


async function loadMotelData() {
    var response = await fetch("./js/motel.json");
    var data = await (response.json());
    accommodationArray = data.motel;
    updateUI(accommodationArray);
};


async function loadHostelData() {
    var response = await fetch("./js/hostel.json");
    var data = await (response.json());
    accommodationArray = data.hostel;
    updateUI(accommodationArray);
};


// function to show user choice of accommodation in small card
function updateUI(array) {
    var target = document.querySelector(".accom-wrapper");
    array.forEach(function (item) {

        mainElement = document.createElement("div");
        mainElement.className = "accommodation";
        mainElement.setAttribute("data-type", item.type);

        var myImageElement = document.createElement("img");
        myImageElement.classList = "accommodation-img";
        myImageElement.src = item.image;
        mainElement.append(myImageElement);

        var myHeartElement = document.createElement("img");
        myHeartElement.classList = "heart";
        myHeartElement.src = "./images/icons/heart.svg";
        mainElement.append(myHeartElement);

        var myHeading = document.createElement("h4");
        myHeading.className = "title";
        myHeading.textContent = item.name;
        mainElement.append(myHeading);

        var myPrice = document.createElement("p");
        myPrice.className = "price";
        myPrice.textContent = item.price;
        mainElement.append(myPrice);

        var moreButton = document.createElement("button");
        var objAsStr = JSON.stringify(item);
        moreButton.setAttribute('onclick', `getNextPageUI("${item.name}", "${item.amount}", ${objAsStr})`);
        moreButton.classList = "btn custom-btn details";
        moreButton.textContent = "VIEW DETAILS";
        mainElement.append(moreButton)

        target.append(mainElement);
    });
};

// function to add userinputs to html for a summary (page 3)
function loadSummary() {
    displayGuests.innerHTML = userObj.guests;
    displayNights.innerHTML = userObj.dates;
}


// function to add to object the userchoice and other functions passing userchoice through
function getNextPageUI(itemName, itemAmount, item) {
    userObj.accommodation = parseInt(itemAmount);
    userObj.name = itemName;
    userObj.image = item.image;
    userObj.address = item.address;
    console.table(userObj);
    window.open("#four", "_self");
    sumCalculations(itemName, itemAmount);
    showAccommodationDepth(item);
};

// function to dig deeper for userchoice for more details on one accommodation (page 4)
function showAccommodationDepth(item) {
    accommodationDetails = item;
    myImageElement.src = accommodationDetails.image;
    accomName.innerHTML = accommodationDetails.name;
    myDetails.innerHTML = accommodationDetails.details;
    accomRating.innerHTML = accommodationDetails.rating;
    accomPrice.innerHTML = accommodationDetails.price;
    totalCost.innerHTML = userObj.amount;

    var displayGuests = document.querySelector(".guests-booked-one");
    var displayNights = document.querySelector(".nights-booked-one");
    displayGuests.innerHTML = userObj.guests;
    displayNights.innerHTML = userObj.dates;
}

// function for updating UI with userchoice summary (page 5)
function updateLastUI() {
    var myImageElement = document.querySelector(".accom-img-one");
    var accomName = document.querySelector(".accom-name-one");
    var accomPrice = document.querySelector(".accom-price-one");
    var displayNights = document.querySelector(".nights-booked-two");
    var guestsBooked = document.querySelector(".guests-booked-two");
    var accomPriceSum = document.querySelector(".accom-price-two")
    var mealInput = document.querySelector(".meal-price");
    var guestTotal = document.querySelector(".guest-total");
    var mealType = document.querySelector(".meal-type");
    var nightsBookedLength = document.querySelector(".length-booking")

    myImageElement.src = userObj.image;
    accomName.innerHTML = userObj.name;
    accomPrice.innerHTML = userObj.accommodation;
    displayNights.innerHTML = userObj.dates;
    nightsBookedLength.innerHTML = userObj.nights;
    guestsBooked.innerHTML = userObj.guests;
    mealType.innerHTML = userObj.mealType;
    accomPriceSum.innerHTML = userObj.amount;
    mealInput.innerHTML = userObj.meal;
    guestTotal.innerHTML = userObj.total;
}
 
function showAddress() {
    var myImageElement = document.querySelector(".accom-image");
    var displayNights = document.querySelector(".nights-booked-three");
    var myAddress = document.querySelector(".address");

    myImageElement.src = userObj.image;
    displayNights.innerHTML = userObj.dates;
    myAddress.innerHTML = userObj.address;
}




