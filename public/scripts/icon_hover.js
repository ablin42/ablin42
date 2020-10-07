let icons = document.querySelectorAll(".skill-icon");

icons.forEach(item => {
	let icon = item;

	item.addEventListener("mouseover", function () {
		console.log("x");
		icon.src = icon.src.replace("white/", "color/");
		icon.classList.add("icon-hovered");
	});

	item.addEventListener("mouseout", function () {
		icon.classList.remove("icon-hovered");

		setTimeout(() => {
			icon.src = icon.src.replace("color/", "white/");
		}, 200);
	});
});
