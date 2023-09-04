import { conns, getDOM_elements } from "./utilities.js";

/**
 * @description : File run codes when dom content iis fully loaded
 * @returns : void
 */
document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM fully loaded and parsed");
	const gg = getDOM_elements("one", ".card");

	cardNumbers();
});

function cardNumbers() {
	const cardNumber = getDOM_elements("all", ".card_num");
	cardNumber.forEach((card) => {
		console.log(card);
	});
}
