document.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		e.preventDefault()
		document.getElementById("centered-button").click()
	}
})
