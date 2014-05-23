var platform = Ti.Platform.osname;
var json = require("json");

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#f2f2f2"
});

var windowWidth = Ti.Platform.displayCaps.platformWidth;

if (platform == "iphone") {

	var mainCta = Ti.UI.createImageView({
		width : windowWidth,
		height : 250,
		top : 20,
		backgroundImage : "mainCTA.jpg",
		backgroundColor : "#fff"
	});

} else {

	var mainCta = Ti.UI.createImageView({
		width : windowWidth / 2,
		height : 250,
		top : 0,
		backgroundImage : "mainCTAAndroid.jpg",
		backgroundColor : "#fff"
	});

}

// Creation of TableView on Main Page

if (platform == "iphone") {

	var search = Titanium.UI.createSearchBar({
		barColor : 'f2f2f2',
		showCancel : false,
		//height : 40,
		top : 20,
		hintText : "Search Dog Breeds"
	});

	var mainWindowTable = Ti.UI.createTableView({
		backgroundColor : "FFFFF0",
		top : 270,
		bottom : 0,
		search : search
	});

	search.addEventListener('cancel', function() {
		search.blur();
	});

	var sections = [];

	var tableSection = Ti.UI.createTableViewSection({

	});

	for (var j = 0, k = json.myData.dogs.length; j < k; j++) {

		var tableRow = Ti.UI.createTableViewRow({
			title : json.myData.dogs[j].breed,
			hasChild : true,
			height : 70,
			image : json.myData.dogs[j].image,
			weight : json.myData.dogs[j].weight,
			dogHeight : json.myData.dogs[j].height,
			furColor : json.myData.dogs[j].color,
			obedience : json.myData.dogs[j].obedience,
			lifeSpan : json.myData.dogs[j].lifeSpan,
			origin : json.myData.dogs[j].origin,
			appearance : json.myData.dogs[j].appearance,
			temperament : json.myData.dogs[j].temperament2,
			history : json.myData.dogs[j].history
		});

		var tablePic = Ti.UI.createImageView({
			height : 50,
			width : 50,
			left : 10,
			backgroundColor : "black",
			image : json.myData.dogs[j].image,
			borderColor : "black",
			borderWidth : 1
		});
		tableRow.add(tablePic);
		tableSection.add(tableRow);
	}

	sections.push(tableSection);

} else {
	var mainWindowTable = Ti.UI.createTableView({
		backgroundColor : "FFFFF0",
		top : 250,
		bottom : 0,
		left : -30
	});

	var sections = [];

	var tableSection = Ti.UI.createTableViewSection({

	});

	for (var j = 0, k = json.myData.dogs.length; j < k; j++) {

		var tableRow = Ti.UI.createTableViewRow({
			title : json.myData.dogs[j].breed,
			color : "black",
			height : 50,
			image : json.myData.dogs[j].image,
			weight : json.myData.dogs[j].weight,
			dogHeight : json.myData.dogs[j].height,
			furColor : json.myData.dogs[j].color,
			obedience : json.myData.dogs[j].obedience,
			lifeSpan : json.myData.dogs[j].lifeSpan,
			origin : json.myData.dogs[j].origin,
			appearance : json.myData.dogs[j].appearance,
			temperament : json.myData.dogs[j].temperament2,
			history : json.myData.dogs[j].history
		});
		tableSection.add(tableRow);
	}

	sections.push(tableSection);
}

// Creating the new Windows for Quick Facts and More Info

if (platform == "iphone") {
	mainWindowTable.addEventListener("click", function(e) {
		var quickFactsWindow = Ti.UI.createWindow({
			backgroundColor : "#fffff0"
		});

		var navWindow1 = Ti.UI.iOS.createNavigationWindow({

			window : quickFactsWindow

		});
		var backButton = Ti.UI.createView({
			top : 30,
			height : 30,
			left : 1,
			width : 60
		});

		var backButtonText = Ti.UI.createLabel({
			text : "Back",
			font : {
				fontSize : "18dp",
				fontFamily : "Helvetica"
			},
			color : "007aff"
		});

		var moreInfo = Ti.UI.createView({
			top : 30,
			height : 30,
			right : 7,
			width : 80
		});

		var moreInfoText = Ti.UI.createLabel({
			text : "More Info",
			font : {
				fontSize : "18dp",
				fontFamily : "Helvetica"
			},
			color : "007aff"
		});

		backButton.addEventListener("click", function() {
			navWindow1.close();
		});

		for (var m = 0, n = json.myData.dogs.length; m < n; m++) {
			var dogPic = Ti.UI.createImageView({
				width : windowWidth,
				height : 200,
				top : 0,
				image : e.source.image
			});

			var weight = Ti.UI.createView({
				height : 51,
				width : windowWidth,
				top : 200,
				backgroundColor : "#fffff0"
			});

			var height = Ti.UI.createView({
				height : 51,
				width : windowWidth,
				top : 251,
				backgroundColor : "#fffff0"
			});

			var color = Ti.UI.createView({
				height : 51,
				width : windowWidth,
				top : 302,
				backgroundColor : "#fffff0"
			});

			var obedience = Ti.UI.createView({
				height : 51,
				width : windowWidth,
				top : 353,
				backgroundColor : "#fffff0"
			});

			var lifeSpan = Ti.UI.createView({
				height : 51,
				width : windowWidth,
				top : 404,
				backgroundColor : "#fffff0"
			});

			var origin = Ti.UI.createView({
				height : 51,
				width : windowWidth,
				top : 455,
				backgroundColor : "#fffff0"
			});

			var weightText = Ti.UI.createLabel({
				text : e.source.weight,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var heightText = Ti.UI.createLabel({
				text : e.source.dogHeight,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var colorText = Ti.UI.createLabel({
				text : e.source.furColor,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var obedienceText = Ti.UI.createLabel({
				text : e.source.obedience,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var lifeSpanText = Ti.UI.createLabel({
				text : e.source.lifeSpan,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var originText = Ti.UI.createLabel({
				text : e.source.origin,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

		}

		moreInfo.addEventListener("click", function() {
			var moreInfoWindow = Ti.UI.createWindow({
				backgroundColor : "#fffff0"
			});

			var navWindow = Ti.UI.iOS.createNavigationWindow({

				window : moreInfoWindow

			});

			var backButton = Ti.UI.createView({
				top : 30,
				height : 30,
				left : 1,
				width : 60
			});

			var backButtonText = Ti.UI.createLabel({
				text : "Back",
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "007aff"
			});

			for (var x = 0, y = json.myData.dogs.length; x < y; x++) {

				var appearance = Ti.UI.createView({
					top : 0,
					width : windowWidth,
					height : 175,
					backgroundColor : "#fffff0",
					borderColor : "#bcbcbc"
				});

				var temperament = Ti.UI.createView({
					top : 175,
					width : windowWidth,
					height : 175,
					backgroundColor : "#fffff0",
					borderColor : "#bcbcbc"
				});

				var history = Ti.UI.createView({
					top : 350,
					width : windowWidth,
					height : 175,
					backgroundColor : "#fffff0",
					borderColor : "#bcbcbc"
				});

				var appearanceText = Ti.UI.createLabel({
					text : e.source.appearance,
					font : {
						fontSize : "18dp",
						fontFamily : "Helvetica"
					},
					color : "black",
					left : 10
				});

				var temperamentText = Ti.UI.createLabel({
					text : e.source.temperament,
					font : {
						fontSize : "18dp",
						fontFamily : "Helvetica"
					},
					color : "black",
					left : 10
				});

				var historyText = Ti.UI.createLabel({
					text : e.source.history,
					font : {
						fontSize : "18dp",
						fontFamily : "Helvetica"
					},
					color : "black",
					left : 10
				});

				backButton.addEventListener("click", function() {
					navWindow.close();
				});

				var homeButton = Ti.UI.createView({
					top : 30,
					height : 30,
					right : 7,
					width : 50
				});

				var homeButtonText = Ti.UI.createLabel({
					text : "Home",
					font : {
						fontSize : "18dp",
						fontFamily : "Helvetica"
					},
					color : "007aff"
				});

				homeButton.addEventListener("click", function() {
					navWindow.close();
					navWindow1.close();
				});

				history.add(historyText);
				temperament.add(temperamentText);
				appearance.add(appearanceText);

				moreInfoWindow.add(history);
				moreInfoWindow.add(temperament);
				moreInfoWindow.add(appearance);

			}
			backButton.add(backButtonText);
			homeButton.add(homeButtonText);
			navWindow.add(homeButton);
			navWindow.add(backButton);
			navWindow.open();
		});

		origin.add(originText);
		lifeSpan.add(lifeSpanText);
		obedience.add(obedienceText);
		color.add(colorText);
		height.add(heightText);
		weight.add(weightText);
		quickFactsWindow.add(origin);
		quickFactsWindow.add(lifeSpan);
		quickFactsWindow.add(obedience);
		quickFactsWindow.add(color);
		quickFactsWindow.add(height);
		quickFactsWindow.add(weight);
		quickFactsWindow.add(dogPic);
		moreInfo.add(moreInfoText);
		backButton.add(backButtonText);
		navWindow1.add(backButton);
		navWindow1.add(moreInfo);
		navWindow1.open();
	});

} else {
	mainWindowTable.addEventListener("click", function(e) {
		var quickFactsWindow = Ti.UI.createWindow({
			backgroundColor : "#fffff0"
		});

		var quickFactsNav = Ti.UI.createView({
			top : 0,
			height : 40,
			width : windowWidth / 2,
			backgroundColor : "#212121"
		});

		for (var m = 0, n = json.myData.dogs.length; m < n; m++) {
			var dogPic = Ti.UI.createImageView({
				width : windowWidth / 2,
				height : 200,
				top : 40,
				image : e.source.image
			});

			var moreInfoText = Ti.UI.createLabel({
				text : "More Info",
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "#b2b2b2",
				right : 10
			});

			var weight = Ti.UI.createView({
				height : 47,
				width : windowWidth / 2,
				top : 240,
				backgroundColor : "#fffff0"
			});

			var height = Ti.UI.createView({
				height : 46,
				width : windowWidth / 2,
				top : 287,
				backgroundColor : "#fffff0"
			});

			var color = Ti.UI.createView({
				height : 47,
				width : windowWidth / 2,
				top : 333,
				backgroundColor : "#fffff0"
			});

			var obedience = Ti.UI.createView({
				height : 46,
				width : windowWidth / 2,
				top : 380,
				backgroundColor : "#fffff0"
			});

			var lifeSpan = Ti.UI.createView({
				height : 47,
				width : windowWidth / 2,
				top : 426,
				backgroundColor : "#fffff0"
			});

			var origin = Ti.UI.createView({
				height : 46,
				width : windowWidth / 2,
				top : 473,
				backgroundColor : "#fffff0"
			});

			var weightText = Ti.UI.createLabel({
				text : e.source.weight,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var heightText = Ti.UI.createLabel({
				text : e.source.dogHeight,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var colorText = Ti.UI.createLabel({
				text : e.source.furColor,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var obedienceText = Ti.UI.createLabel({
				text : e.source.obedience,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var lifeSpanText = Ti.UI.createLabel({
				text : e.source.lifeSpan,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			var originText = Ti.UI.createLabel({
				text : e.source.origin,
				font : {
					fontSize : "18dp",
					fontFamily : "Helvetica"
				},
				color : "black",
				left : 10
			});

			moreInfoText.addEventListener("click", function() {

				var moreInfoWindow = Ti.UI.createWindow({
					backgroundColor : "#fffff0"

				});

				for (var x = 0, y = json.myData.dogs.length; x < y; x++) {

					var appearance = Ti.UI.createView({
						top : 20,
						width : windowWidth / 2,
						height : 175,
						backgroundColor : "#fffff0",
						borderColor : "black"
					});

					var temperament = Ti.UI.createView({
						top : 175,
						width : windowWidth / 2,
						height : 175,
						backgroundColor : "#fffff0",
						borderColor : "black"
					});

					var history = Ti.UI.createView({
						top : 350,
						width : windowWidth / 2,
						height : 175,
						backgroundColor : "#fffff0",
						borderColor : "black"
					});

					var appearanceText = Ti.UI.createLabel({
						text : e.source.appearance,
						font : {
							fontSize : "18dp",
							fontFamily : "Helvetica"
						},
						color : "black",
						left : 10
					});

					var temperamentText = Ti.UI.createLabel({
						text : e.source.temperament,
						font : {
							fontSize : "18dp",
							fontFamily : "Helvetica"
						},
						color : "black",
						left : 10
					});

					var historyText = Ti.UI.createLabel({
						text : e.source.history,
						font : {
							fontSize : "18dp",
							fontFamily : "Helvetica"
						},
						color : "black",
						left : 10
					});

					var moreInfoNav = Ti.UI.createView({
						top : 0,
						height : 40,
						width : windowWidth / 2,
						backgroundColor : "#212121"
					});

					var homeText = Ti.UI.createLabel({
						text : "Home",
						font : {
							fontSize : "18dp",
							fontFamily : "Helvetica"
						},
						color : "#b2b2b2",
						right : 10
					});
					
					homeText.addEventListener("click", function(){
						moreInfoWindow.close();
						quickFactsWindow.close();
					});

				}

				moreInfoNav.add(homeText);
				history.add(historyText);
				temperament.add(temperamentText);
				appearance.add(appearanceText);
				moreInfoWindow.add(appearance);
				moreInfoWindow.add(history);
				moreInfoWindow.add(temperament);
				moreInfoWindow.add(moreInfoNav);

				moreInfoWindow.open();
			});

		}

		origin.add(originText);
		lifeSpan.add(lifeSpanText);
		obedience.add(obedienceText);
		color.add(colorText);
		height.add(heightText);
		weight.add(weightText);
		quickFactsWindow.add(origin);
		quickFactsWindow.add(lifeSpan);
		quickFactsWindow.add(obedience);
		quickFactsWindow.add(color);
		quickFactsWindow.add(height);
		quickFactsWindow.add(weight);
		quickFactsWindow.add(dogPic);
		quickFactsWindow.add(quickFactsNav);
		quickFactsNav.add(moreInfoText);
		quickFactsWindow.open();
	});

}

mainWindowTable.setData(sections);
mainWindow.add(mainCta);
if (platform == "iphone") {
	mainWindow.add(search);
}
mainWindow.add(mainWindowTable);
mainWindow.open();
