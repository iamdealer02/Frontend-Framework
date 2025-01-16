import { modalComp } from "../components/modalComp.js"

let modal

/**
 *
 * @param {string} className // three names "primary-btn" | "secondary-btn" | "third-color"
 * @returns {void}
 */

export const showModal = (className) => {
	let modalBody
	let modalTitle
	// evaluate what class name is being passed "secondary-btn" | "primary-btn" |  "third-color"
	if (className === "secondary-btn") {
		// if the secondary class is passed add a title and a paragraph with a text
	    modalTitle = "The first title is here !"
		modalBody = "This is the first button body !"
	}
	if (className === "primary-btn") {
		// if the primary class is passed add a title and a paragraph with a text
				modalTitle = "Some other cool title now!"
		modalBody = "This is the another text of the body 📳"
	}
	if (className === "third-color") {
		// if the third color class is passed add a title and an image with its attributes (source and alt)
		modalTitle = "Third title now"
		const title = document.createElement("h3")
		title.innerText = "This is a special body sub-title"
		const img = new Image()
		img.src = "./assets/mountain.jpeg"
		img.alt = "beautiful mountains"

		modalBody = document.createElement("div")

		modalBody.appendChild(title)
		modalBody.appendChild(img)
	}
	app.appendChild(modalComp(modalTitle, modalBody, className))
	modal = document.querySelector(".overlay-modal")
	modal.classList.remove("d-none")
}
