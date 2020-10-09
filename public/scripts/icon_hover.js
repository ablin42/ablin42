let icons = document.querySelectorAll(".skill-icon");

icons.forEach(item => {
	let icon = item;

	item.addEventListener("mouseover", function () {
		icon.src = icon.src.replace("white/", "color/");
		icon.classList.add("icon-hovered");
	});

	item.addEventListener("mouseout", function () {
		setTimeout(() => {
			icon.classList.remove("icon-hovered");
			setTimeout(() => {
				icon.src = icon.src.replace("color/", "white/");
			}, 200);
		}, 200);
	});
});
