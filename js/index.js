import { conns, getDOM_elements } from "./utilities.js";

/**
 * @description : File run codes when dom content iis fully loaded
 * @returns : void
 */
document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM fully loaded and parsed');
  conns();

})


