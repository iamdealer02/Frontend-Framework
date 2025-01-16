/**
 *
 * @param {string} colorVariant
 * @returns {HTMLElement}
 */
export const eclipseComp = (colorVariant = "primary") => {
	const eclipseElement = document.createElement("div")
	eclipseElement.classList.add("eclipseElement", `eclipseElement.${colorVariant}`);
	return eclipseElement
}
