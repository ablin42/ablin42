let isReady = false;

new fullpage("#fullPage", {
	autoScrolling: true,
	scrollingSpeed: 1000,

	anchors: ["landing", "portfolio", "skills", "contact"],
	navigation: true,
	navigationPosition: "right",
	navigationTooltips: ["Landing", "Portfolio", "Skills", "Contact"],
	showActiveTooltip: false,
	responsiveWidth: 500,

	//lockAnchors: true,
	//animateAnchor: false,
	//recordHistory: false,

	/*	afterRender: function () {
		console.log(isReady);
		setTimeout(() => {
			isReady = true;
			console.log(isReady);
		}, 10);
	},*/

	afterLoad: function (origin, destination, direction) {
		if (origin.anchor == "landing" && direction == null) {
			triggerAnimations("landing-section");
		}
	},

	onLeave: function (origin, destination, direction) {
		let sectionId = destination.anchor.toLowerCase() + "-section";

		console.log(sectionId);
		//if (isReady)
		triggerAnimations(sectionId);
	},

	afterResponsive: function (isResponsive) {
		if (isResponsive) {
			fullpage_api.setAutoScrolling(false);
			fullpage_api.setScrollingSpeed(100);
			fullpage_api.setRecordHistory(false);
		} else {
			fullpage_api.setAutoScrolling(true);
			fullpage_api.setScrollingSpeed(1000);
			fullpage_api.setRecordHistory(true);
		}
	}
});

/*
function removeAnimations() {
	let allAnims = document.querySelectorAll("[data-animation]");

	allAnims.forEach(item => {
		let animationName = item.dataset.animation;
		item.classList.remove(animationName);
	});
}*/

function triggerAnimations(sectionId) {
	let toAnimate = document.querySelectorAll(`#${sectionId} [data-animation]`);

	toAnimate.forEach(item => {
		item.addEventListener("animationend", function () {
			item.classList.remove(animationName);
		});

		let animationName = item.dataset.animation;
		item.classList.add(animationName);
	});
}

let contactBtn = document.querySelector("#infoContactBtn");
if (contactBtn)
	contactBtn.addEventListener("mouseon", function () {
		//trigger hover anim
		//trigger box popup
	});
