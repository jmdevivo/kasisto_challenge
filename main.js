
/*-------------------------------------------------
Load the Templates with the appropriate information and append them to the document
*/
var userMsgTemplate = Handlebars.templates['userMessageTmpl'];

var context = { "message": "Pay Rashav $10,000"};

$('#content').html(userMsgTemplate(context));

var whichPersonTemplate = Handlebars.templates['whichPersonTmpl'];

var whichContext = {
	'name': "John",
	'people': [
		{'url': "images/emptyContact.jpg", 'contactName':"John Devivo", "phoneNumber": "516 761 0464"},
		{'url': "", 'contactName':"John Michael Devivo", "phoneNumber": "516 761 0464"},
	],
}

$('#content').append(whichPersonTemplate(whichContext));


var okPersonTemplate = Handlebars.templates['okPersonTmpl'];

var okPersonContext = {"person": "John Devivo(Mobile)"};

$('#content').append(okPersonTemplate(okPersonContext));

var isThisATemplate = Handlebars.templates['isThisATmpl'];

var isThisAContext = { 'query': "recurring payment"};

$('#content').append(isThisATemplate(isThisAContext));

var paymentTemplate = Handlebars.templates['paymentTmpl'];

var paymentContext = {
	'amount': "$10,000",
	'person': "John Devivo (Mobile)",
	"url": "images/emptyContact.jpg",
	'account': 'Day to Day',
	'accountNumber': "123456789",
	'bankName': "Citibank",
	'fcs': "123456",
};

$('#content').append(paymentTemplate(paymentContext));
//-----------------------------------------
/*
Add Action listeners to allow the user to interact with the cards
*/
$('.possiblePerson').click(function(){
	console.log("Action listener firing");
	$('.okPerson').show();
	$('.isThisA').show();
});
$('.yes').click(function(){
	$('.payment').show();
});
//s$('#content').append(paymentTemplate(paymentContext));
