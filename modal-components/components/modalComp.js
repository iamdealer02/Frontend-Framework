import { button } from "./compBtn.js"

export const modalComp = (
	titleText = "Default title",
	bodyText = "default body",
	className = ""
) => {
	const divElement = document.createElement("div")
	divElement.setAttribute("tabindex", "-1")
	divElement.classList.add("overlay-modal")
	divElement.classList.add("d-none")

	const handleClick = (e) => {
		if (!e) return
		if (e.target.classList.contains("overlay-modal")) {
			return app.removeChild(divElement)
		}
		if (e.target.classList.contains("btn")) {
			return app.removeChild(divElement)
		}
	}

	divElement.addEventListener("click", handleClick)

	const modalContent = document.createElement("div")
	modalContent.classList.add("modal-content")

	const modalHeader = document.createElement("header")
	modalHeader.classList.add("modal-header")
	modalHeader.classList.add(className)

	const modalTitle = document.createElement("h2")
	modalTitle.innerText = titleText

	const modalBody = document.createElement("div")
	modalBody.classList.add("modal-body")


	if (typeof bodyText === "string") {
		modalBody.innerText = bodyText
	} else {
		modalBody.appendChild(bodyText)
	}

	modalHeader.appendChild(modalTitle)
	modalHeader.appendChild(button("X", handleClick, "btn"))

	const modalFooter = document.createElement("footer")
	modalFooter.classList.add("modal-footer")
	modalFooter.classList.add(className)
	modalFooter.appendChild(button("Close", handleClick, "btn"))

	modalContent.appendChild(modalHeader)
	modalContent.appendChild(modalBody)
	modalContent.appendChild(modalFooter)

	divElement.appendChild(modalContent)

	return divElement
}
