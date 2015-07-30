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
