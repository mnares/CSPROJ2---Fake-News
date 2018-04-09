(function() {
	"use strict";
	var btn1 = new Object();
	var btn2 = new Object(); 
	
	btn1.title = chrome.i18n.getMessage("notAccurate");
	btn2.title = chrome.i18n.getMessage("Accurate");
	var opt = {
		type: "basic",
		title: "Fake News Identifier",
		message: "",
		iconUrl: "icons/logo128_fake.jpg",
		buttons: [btn1, btn2]
	};
	
	function btnClick(notid, btninx) {
		if (btninx === 0) {
			chrome.notifications.clear(notid);
			confirm("Are you sure")
		} else {
			chrome.notifications.clear(notid);
		}
	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.t === "notu") {
			opt.message = chrome.i18n.getMessage("Attent", request.l)
			chrome.notifications.create('thisisfakenews', opt, null)
			chrome.notifications.onButtonClicked.addListener(btnClick);
			sendResponse();
		}
	});
	
})();