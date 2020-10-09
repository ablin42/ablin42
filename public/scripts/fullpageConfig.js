let isReady = false;

new fullpage("#fullPage", {
	autoScrolling: true,
	scrollingSpeed: 10000,

	anchors: ["landing", "portfolio", "skills", "contact"],
	navigation: true,
	navigationPosition: "right",
	navigationTooltips: ["Landing", "Portfolio", "Skills", "Contact"],
	showActiveTooltip: false,
	responsiveWidth: 540,

	//lockAnchors: true,
	//animateAnchor: false,
	//recordHistory: false,

	afterRender: function () {
		setTimeout(() => {
			isReady = true;
		}, 1000);
	},

	afterLoad: function (origin, destination, direction) {
		if (origin.anchor == "landing" && direction == null) {
			triggerAnimations("landing-section");
		}
	},

	onLeave: function (origin, destination, direction) {
		let sectionId = destination.anchor.toLowerCase() + "-section";

		if (isReady) triggerAnimations(sectionId);
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
