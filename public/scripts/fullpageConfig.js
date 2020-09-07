new fullpage("#fullPage", {
	autoScrolling: true,
	scrollingSpeed: 1500,

	anchors: ["landing", "portfolio", "skills", "contact"],
	navigation: true,
	navigationPosition: "right",
	navigationTooltips: ["Landing", "Portfolio", "Skills", "Contact"],
	showActiveTooltip: false,

	onLeave: function (origin, destination, direction) {
		let sectionId = destination.anchor.toLowerCase() + "-section";

		removeAnimations();
		triggerAnimations(sectionId);
	}
});

function removeAnimations() {
	let allAnims = document.querySelectorAll("[data-animation]");

	allAnims.forEach(item => {
		let animationName = item.dataset.animation;
		item.classList.remove(animationName);
	});
}

function triggerAnimations(sectionId) {
	let toAnimate = document.querySelectorAll(`#${sectionId} [data-animation]`);

	toAnimate.forEach(item => {
		let animationName = item.dataset.animation;
		item.classList.add(animationName);
	});
}
