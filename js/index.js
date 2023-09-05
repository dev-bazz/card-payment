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
	const cardUiNumber = getDOM_elements("all", ".num_ui");

	cardNumber.forEach((fourDigit, index) => {
		fourDigit.addEventListener("focusout", (e) => {
			const current = e.target;
			let currentValue = current.value;

			console.log("current value", cardUiNumber[index]);
			if (!currentValue) {
				cardUiNumber[index].textContent = "000";
				return;
			}

			cardUiNumber[index].textContent = currentValue;

			console.log("card UI", e.target.value);
		});
	});

	cardNumber.forEach((fourDigit, index) => {
		// console.log("digit inputs", fourDigit);
		fourDigit.addEventListener("input", (e) => {
			const current = e.target;
			let currentValue = current.value;
			const maxDigit = current.getAttribute("maxlength");

			if (!regex.test(currentValue)) {
				e.target.value = currentValue.slice(0, -1);
				return;
			}

			if (index == cardNumber.length - 1 && currentValue.length == maxDigit) {
				getDOM_elements("one", ".holderName").focus();
				return;
			}
			if (index < cardNumber.length - 1 && currentValue.length == maxDigit) {
				console.log("next");
				cardNumber[index + 1].focus();
			}
		});
	});
}
