"use strict"
import { button } from "./components/compBtn.js"
import { eclipseComp } from "./components/eclipseComp.js"
import { headerComp } from "./components/headerComp.js"
import { showModal } from "./services/services.js"

app.appendChild(headerComp())
app.appendChild(
	button("First Button", () => showModal("secondary-btn"), "secondary-btn")
)
app.appendChild(
	button("Second button", () => showModal("primary-btn"), "primary-btn")
)
app.appendChild(
	button("Third button", () => showModal("third-color"), "third-color")
)

app.appendChild(eclipseComp("primary"))
