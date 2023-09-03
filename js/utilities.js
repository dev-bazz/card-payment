
export function conns() {
  console.log("hello");
}


export function getDOM_elements(numbers, element) {
  if(numbers === "one") {
    return document.querySelector(element);
  } else if(numbers === "all") {
    return document.querySelectorAll(element);
  } else {
    throw new Error("No Type was specified for getDOM_elements function");
  }
 }