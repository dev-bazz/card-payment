import { getDOM_elements } from "./utilities.js";

/**
 * @description : File run codes when dom content iis fully loaded
 * @returns : void
 */
document.addEventListener("DOMContentLoaded", () => {
	cardNumbers();
});

function cardNumbers() {
	const regex = new RegExp(/^\d+$/);
	const cardNumber = getDOM_elements("all", ".card_num"),
		cardUiNumber = getDOM_elements("all", ".num_ui"),
		holderNamer = getDOM_elements("one", ".holderName"),
		holderUI = getDOM_elements("one", ".holderUI"),
		ccvNumber = getDOM_elements("one", ".ccvNumber"),
		ccvUI = getDOM_elements("one", ".ccv_ui"),
		image = getDOM_elements("one", ".cardType");

	cardNumber.forEach((fourDigit, index) => {
		fourDigit.addEventListener("focusout", (e) => {
			const current = e.target;
			let currentValue = current.value;

			if (!currentValue || currentValue.length < 4) {
				cardUiNumber[index].textContent = "0000";
				e.target.value = "";
				return;
			}
			cardUiNumber[index].textContent = currentValue;
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
			if (current.dataset.cardtype == "check") {
				const value = e.target.value;
				console.log(value[0]);
				value[0] == 4
					? (image.src = "./images/visa.png")
					: value[0] == 2 || value[0] == 5
					? (image.src = "./images/mastercard.png")
					: value[0] == 3
					? (image.src = "./images/american-express.png")
					: (image.src = "./images/unknown.png");
			}
			if (index == cardNumber.length - 1 && currentValue.length == maxDigit) {
				getDOM_elements("one", ".holderName").focus();
				return;
			}
			if (index < cardNumber.length - 1 && currentValue.length == maxDigit) {
				cardNumber[index + 1].focus();
			}
		});
	});

	// Holder Name
	holderNamer.addEventListener("focusout", (e) => {
		const current = e.target;

		const firstANDlastNames = current.value.split(" ");
		if (firstANDlastNames.length < 2) {
			current.value = "";
			holderUI.textContent = "please enter first & last name";
			return;
		}
		holderUI.textContent = `${firstANDlastNames[0]} ${firstANDlastNames[1]}`;
	});

	ccvNumber.addEventListener("focusout", (e) => {
		const current = e.target;
		if (current.value.length < 3) {
			ccvUI.textContent = "000";
			current.value = "";
			return;
		}
		ccvUI.textContent = current.value;
	});
}
