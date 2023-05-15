   
   var payButton = document.querySelector(".pay");
        payButton.addEventListener("click", paymentDone);
        
        function paymentDone() {
          formCheck();
          showAddress(); 
           window.open("#six", "_self")
        }
  

function formCheck()
{
	//UPDATE NAME
	$('input.name').each(function() {
   var elem = $(this);

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());

       // Do action
       $('.name-on-card, .sig-name').html($('input.name').val());
     }
   });
 });
	//UPDATE CARD NUMBER
	$('input.number').each(function() {
   var elem = $(this);

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());

       // Do action
			 $splitNumber = $('input.number').val().match(/.{1,4}/g);
       $('.card-front .card-number span').each(function(index){
				 $(this).html($splitNumber[index]);
			 });
				$('.card-back .card-number span').each(function(index){
				 $(this).html($splitNumber[index]);
			 });
     }
   });
 });
	// //FLIP CARD WHEN CVV IS FOCUSED
	// $('input.cvv').on('focus', function(){
	// 	$('.credit-card').removeClass('is-front').addClass('is-back');
	// });
	// $('input.cvv').on('focusout', function(){
	// 	$('.credit-card').addClass('is-front').removeClass('is-back');
	// });
	
	//UPDATE CVV
	$('input.cvv').each(function() {
   var elem = $(this);

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());

       // Do action
       $('div.cvv').html($('input.cvv').val());
     }
   });
 });
	
	//UPDATE DATE
	$('input#datepicker').each(function() {
   var elem = $(this);

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());

       // Do action
       $('.card-front .date').html($('input#datepicker').val());
     }
   });
 });
}

 // form validation functions (page 6)
var errorMessageForm = document.querySelector(".message-form");
var nameOnCard = document.querySelector(".name");
var cardBack = document.querySelector(".cvv");
var cardNumberInput = document.querySelector(".number");
var expirationDate = document.querySelector(".expiration")

cardNumberInput.addEventListener("blur", onValidateNumber);
cardNumberInput.addEventListener("focus", onClearErrorForm);



function onValidateNumber(event) {
    var userInput = event.target.value;

    if (isValueProvided(userInput) == false) {
      errorMessageForm.innerHTML = "please enter card details correctly";
        return
    }
   if (isNumeric(userInput) == false) {
    errorMessageForm.innerHTML = "please enter card number only";
    return
    }
};

function onClearErrorForm() {
  errorMessageForm.innerHTML = "";
};

         
function checkPaymentInputs() {

  cardNumberInput.value = "";
  nameOnCard.value = "";
  cardBack.value = "";
  expirationDate.value = "";
  window.open("#seven", "_self");
}