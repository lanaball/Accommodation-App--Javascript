function sumCalculations(itemAmount, itemName) {
    var sum = userObj.accommodation * userObj.nights;
    userObj.amount = sum
    console.table(userObj)
};

// function to get meal price and add to userobject
mealButton.addEventListener("click", showSummary);

function showSummary(event) {
    var userInput = mealInput.value
    if (userInput == "breakfast") {
        var breakfast = 10;
        var breakfastSum = userObj.nights * userObj.guests * breakfast;
        userObj.meal = breakfastSum;
        userObj.mealType = "Breakfast";
    }
    if (userInput == "lunch") {
        var lunch = 20;
        var lunchSum = userObj.nights * userObj.guests * lunch;
        userObj.meal = lunchSum;
        userObj.mealType = "Lunch";
    }
    if (userInput == "dinner") {
        var dinner = 30;
        var dinnerSum = userObj.nights * userObj.guests * dinner;
        userObj.meal = dinnerSum;
        userObj.mealType = "Dinner";
    }
    if (userInput == "all") {
        var all = 55;
        var allSum = userObj.nights * userObj.guests * all;
        userObj.meal = allSum;
        userObj.mealType = "All Meals";
    }
    if (userInput == "none"){
        var noMeal = 0;
        // var noMeal = userObj.nights * userObj.guests * noMeal;
        userObj.meal = noMeal;
        userObj.mealType = "No Meal";
    }
    console.table(userObj)
    window.open("#five", "_self");
    totalCalculations();
    updateLastUI()
}

function totalCalculations() {
    var sum = userObj.amount + userObj.meal;
    userObj.total = sum;
    console.table(userObj)
}