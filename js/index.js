import { conns, getDOM_elements } from "./utilities.js";

/**
 * @description : File run codes when dom content iis fully loaded
 * @returns : void
 */
document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM fully loaded and parsed");

	cardNumbers();
});

function cardNumbers() {
	const regex = new RegExp(/^\d+$/);
	const cardNumber = getDOM_elements("all", ".card_num");
	cardNumber.forEach((fourDigit) => {
		fourDigit.addEventListener("focusout", (e) => {
			const current = e.target,
				currentValue = current.value;

			console.log("card UI", e.target.value);
		});
	});

	cardNumber.forEach((fourDigit, index) => {
		fourDigit.addEventListener("input", (e) => {
			const current = e.target;
			let currentValue = current.value;
			const maxDigit = current.getAttribute("maxlength");

			if (!regex.test(currentValue)) {
				e.target.value = currentValue.slice(0, -1);
				return;
			}

			if (index < cardNumber.length - 1 && currentValue.length === maxDigit) {
				cardNumber[index + 1].focus();
			}
		});
	});
}
