const navStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "1em",
}

export const naveBar = () => {
	const navElement = document.createElement("nav")
	navElement.classList.add("navElement")

	// Apply headerStyle to headerElement
	Object.entries(navStyle).forEach(([key, value]) => {
		navElement.style[key] = value
	})

	const link = document.createElement("a")

	const img = new Image()
	img.src = "./assets/logo.svg"
	img.setAttribute("alt", "logo")

	navElement.appendChild(img)

	link.setAttribute("href", "#")
	link.innerText = "Home"

	navElement.appendChild(link)
	return navElement
}
