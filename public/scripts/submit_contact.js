// const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
let form = document.querySelector("#contact-form");

if (form)
	form.addEventListener("submit", function (e) {
		submitContact(e);
	});

async function submitContact(e) {
	e.preventDefault();

	const email = document.querySelector("#email").value;
	const title = document.querySelector("#title").value;
	const content = document.querySelector("#content").value;

	let response = await fetch("/api/contact/", {
		method: "POST",
		headers: {
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json"
			// "CSRF-Token": csrfToken
		},
		body: JSON.stringify({ email: email, title: title, content: content })
	});
	response = await response.json();

	let alertType = "success";
	if (response.error === true) alertType = "info";
	else {
		document.querySelector("#email").value = "";
		document.querySelector("#title").value = "";
		document.querySelector("#content").value = "";
	}

	let alert = createAlertNode(response.message, alertType);
	addAlert(alert, "#contact-alert");
}
