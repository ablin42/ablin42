function addAlert(alert, where) {
	let node = document.createElement("div"),
		alertDiv = document.getElementById("alert");

	node.setAttribute("id", "alert");
	node.setAttribute("class", `alert alert-${alert.alertType}`);
	node.setAttribute("role", "alert");
	if (alertDiv) {
		alertDiv.remove();
	}
	node.innerHTML += alert.content;

	$(where).after(node);
}

function createAlertNode(message, alertType = "info") {
	return {
		alertType: alertType,
		content: `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>${message}`
	};
}
