/*	Anatoliy Adamitskiy
 *  Week 4 Final Project
 * 	MIU_1405
 */

var json = require("json");

//	Creation of the main window and the text fields

var windowWidth = Ti.Platform.displayCaps.platformWidth;

var mainWindow = Ti.UI.createWindow({
	backgroundGradient : {
		type : "linear",
		colors : ["#ff5e3a", "#ff2a68"],
		backfillStart : true
	}
});

var scrollview = Ti.UI.createScrollView({
	contentWidth : "auto",
	contentHeight : "auto",
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true
});

var username = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 120,
	width : windowWidth - 20,
	height : 40,
	hintText : "Enter username at least 6 characters"
});

var usernameText = Ti.UI.createView({
	width : 100,
	left : 10,
	height : 20,
	top : 100
});

var usernameText2 = Ti.UI.createLabel({
	text : "USERNAME",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica"
	},
	left : 0,
	color : "white"
});

var email = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 195,
	width : windowWidth - 20,
	height : 40,
	hintText : "Enter email address"
});

var emailText = Ti.UI.createView({
	width : 100,
	left : 10,
	height : 20,
	top : 175
});

var emailText2 = Ti.UI.createLabel({
	text : "EMAIL",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica"
	},
	left : 0,
	color : "white"
});

var emailConfirm = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 255,
	width : windowWidth - 20,
	height : 40,
	hintText : "Confirm email address"
});

var emailConfirmText = Ti.UI.createView({
	width : 200,
	left : 10,
	height : 20,
	top : 235
});

var emailConfirmText2 = Ti.UI.createLabel({
	text : "CONFIRM EMAIL",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica"
	},
	left : 0,
	color : "white"
});

var password = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 330,
	width : windowWidth - 20,
	height : 40,
	hintText : "Enter password at least 8 characters"
});

var passwordText = Ti.UI.createView({
	width : 100,
	left : 10,
	height : 20,
	top : 310
});

var passwordText2 = Ti.UI.createLabel({
	text : "PASSWORD",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica"
	},
	left : 0,
	color : "white"
});

var passwordConfirm = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : 390,
	width : windowWidth - 20,
	height : 40,
	hintText : "Confirm password"
});

var passwordConfirmText = Ti.UI.createView({
	width : 200,
	left : 10,
	height : 20,
	top : 370
});

var passwordConfirmText2 = Ti.UI.createLabel({
	text : "CONFIRM PASSWORD",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica"
	},
	left : 0,
	color : "white"
});

var logInButton = Ti.UI.createView({
	top : 465,
	height : 50,
	width : windowWidth - 120,
	backgroundColor : "#f2f2f2",
	borderRadius : 10
});

var logInButtonText = Ti.UI.createLabel({
	text : "Log In",
	font : {
		fontSize : "18dp",
		fontFamily : "Helvetica",
		weight : "Bold"
	},
	color : "007aff"
});

var noAccount = Ti.UI.createView({
	width : windowWidth,
	height : 30,
	top : 540
});

var noAccountText = Ti.UI.createLabel({
	text : "Don't have and account? create one HERE",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica"
	},
	color : "#fff"
});

var logo = Ti.UI.createView({
	width : 190,
	height : 75,
	top : 20,
	backgroundImage : "logo_03@2x.png"
});

//	This function creates the table window once the logIn button is clicked

var openTable = function() {

	var tableWindow = Ti.UI.createWindow({
		backgroundGradient : {
			type : "linear",
			colors : ["#ff5e3a", "#ff2a68"],
			backfillStart : true
		}
	});

	var buttonView = Ti.UI.createView({
		width : windowWidth,
		height : 60,
		top : 0
	});

	var tableLogo = Ti.UI.createView({
		backgroundImage : "logo1@2x.png",
		width : 37,
		height : 37,
		bottom : 3,
		left : 10
	});

	var image = Ti.UI.createImageView({
		image : "tropical.jpg",
		top : 60,
		height : 218,
		width : windowWidth
	});

	var mainTable = Ti.UI.createTableView({
		backgroundColor : "#ff2a68",
		top : 278,
		height : 248
	});

	var logOutButton = Ti.UI.createLabel({
		text : "Log Out",
		font : {
			fontSize : "18dp",
			fontFamily : "Helvetica",
			weight : "Bold"
		},
		right : 10,
		bottom : 10,
		color : "#fff"

	});

	var sections = [];

	var tableSection = Ti.UI.createTableViewSection({

	});

	for (var j = 0, k = json.myData.menu.length; j < k; j++) {

		var tableRow = Ti.UI.createTableViewRow({
			title : json.myData.menu[j].option,
			color : "#fff",
			height : 50,
			hasChild : true,
			text : json.myData.menu[j].text
		});

		var tablePic = Ti.UI.createImageView({
			height : 30,
			width : 30,
			left : 10,
			image : json.myData.menu[j].image
		});
		tableRow.add(tablePic);
		tableSection.add(tableRow);

	}

	sections.push(tableSection);
	mainTable.setData(sections);

	var tableWindowMenu = Ti.UI.createView({
		backgroundColor : "#ff5e3a",
		bottom : 0,
		height : 42
	});

	var menuText = Ti.UI.createLabel({
		text : "Live today. Tommorrow will cost more.",
		color : "#fff",
		font : {
			fontSize : "14dp",
			fontFamily : "Helvetica"
		}
	});

	var opts = {
		cancel : 2,
		options : ['Confirm', 'Help', 'Cancel'],
		selectedIndex : 2,
		destructive : 0,
		title : 'Edit File?'
	};

	mainTable.addEventListener('longpress', function(e) {
		var dialog = Ti.UI.createOptionDialog(opts).show();
	});

	var opts1 = {
		cancel : -1,
		options : ['Confirm', 'Cancel'],
		selectedIndex : 1,
		destructive : 0,
		title : 'Are you sure you want to log out?'
	};

	var dialog = Ti.UI.createOptionDialog(opts1);

	logOutButton.addEventListener("click", function() {

		dialog.show();

		dialog.addEventListener("click", function(e) {

			if (e.index == 0) {

				tableWindow.close();
				username.value = '';
				email.value = '';
				emailConfirm.value = '';
				password.value = '';
				passwordConfirm.value = '';

			}

		});

	});

	tableRow.add(tablePic);
	tableWindowMenu.add(menuText);
	buttonView.add(tableLogo);
	tableWindow.add(tableWindowMenu);
	tableWindow.add(mainTable);
	tableWindow.open();
	buttonView.add(logOutButton);
	tableWindow.add(buttonView);
	tableWindow.add(image);

	mainTable.addEventListener("click", moreInfo);

};

//	 This open my 3rd and final window that displays more info based on what the user chooses

var moreInfo = function(e) {

	var moreInfoWindow = Ti.UI.createWindow({
		backgroundGradient : {
			type : "linear",
			colors : ["#ff5e3a", "#ff2a68"],
			backfillStart : true
		}
	});

	var dogePic = Ti.UI.createImageView({
		image : "doge.jpg",
		top : 60,
		height : 218,
		width : windowWidth
	});

	var buttonView = Ti.UI.createView({
		width : windowWidth,
		height : 60,
		top : 0
	});

	var backButton = Ti.UI.createLabel({
		text : "Back",
		font : {
			fontSize : "18dp",
			fontFamily : "Helvetica",
			weight : "Bold"
		},
		left : 10,
		bottom : 10,
		color : "#fff"

	});

	var newView = Ti.UI.createView({
		top : 278,
		width : windowWidth
	});

	moreInfoWindow.add(newView);

	for (var i = 0, j = json.myData.menu.length; i < j; i++) {

		var text1 = Ti.UI.createLabel({
			text : e.source.text,
			color : "#fff",
			font : {
				fontSize : "18dp",
				fontFamily : "Helvetica"
			},
			top : 75
		});

		newView.add(text1);

	}

	buttonView.add(backButton);
	moreInfoWindow.add(buttonView);
	moreInfoWindow.add(dogePic);
	moreInfoWindow.open();

	backButton.addEventListener("click", function() {
		moreInfoWindow.close();
	});
};

logInButton.addEventListener("click", function() {

	if (username.value == '' && email.value == '' && emailConfirm.value == '' && password.value == '' && passwordConfirm.value == '') {

		alert('Please fill out all required items.');

	} else if (username.value == '') {

		alert('Please enter a username.');

	} else if (email.value == '') {

		alert('Please enter an email.');

	} else if (emailConfirm.value == '') {

		alert('Please confirm your email.');

	} else if (password.value == '') {

		alert('Please enter a password.');

	} else if (passwordConfirm.value == '') {

		alert('Please confirm your password.');

	} else if (username.value.length < 6) {

		alert('Username must be 6 or more characters.');

	} else if (password.value.length < 8) {

		alert('Password must be 8 or more characters.');

	} else if (passwordConfirm.value != password.value) {

		alert('Passwords do not match.');

	} else if (email.value.charAt(email.value.length - 4) != ".") {

		alert('Please enter valid email address.');

	} else if (email.value.indexOf("@") == (-1)) {

		alert('Please enter valid email address.');

	} else if (emailConfirm.value != email.value) {

		alert('Email addresses do not match.');

	} else if (email.value == username.value) {

		alert('Username can not be the same as your email address.');

	} else if (username.value == password.value) {

		alert('Password cannot be the same as your username.');

	} else {

		openTable();

	}

});

passwordConfirmText.add(passwordConfirmText2);
passwordText.add(passwordText2);
emailConfirmText.add(emailConfirmText2);
emailText.add(emailText2);
usernameText.add(usernameText2);
noAccount.add(noAccountText);
logInButton.add(logInButtonText);
scrollview.add(passwordConfirmText);
scrollview.add(passwordText);
scrollview.add(emailConfirmText);
scrollview.add(emailText);
scrollview.add(usernameText);
scrollview.add(noAccount);
scrollview.add(logo);
scrollview.add(logInButton);
scrollview.add(passwordConfirm);
scrollview.add(password);
scrollview.add(emailConfirm);
scrollview.add(email);
scrollview.add(username);
mainWindow.add(scrollview);
mainWindow.open();
