import '../scss/style.scss';
import { countdownModule } from './countdown.js';
// import { initMap } from './maps.js';
import { scrollAnimation } from './scrollAnimation.js';
import { loader } from './utils.js';
import { initPhoneInputHandlers } from './formMaska.js';

initPhoneInputHandlers();

document.addEventListener('DOMContentLoaded', () => {
  countdownModule.start();
  // initMap.start();
  scrollAnimation();
  loader();
});
