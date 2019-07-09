import state from '../state';
import { generateTitle } from './titleHelper';

export function displayNotification(document, originalTitle, replaceTitle, value) {
  document.title = generateTitle(value, originalTitle, replaceTitle);
  state.notificationDisplayed = true;
}

export function hideNotification(document) {
  document.title = state.originalTitle;
  state.notificationDisplayed = false;
}

export function blinkNotification(document, window, replaceTitle, blinkSpeed, value) {
  window.clearInterval(state.interval);
  state.interval = window.setInterval(() => {
    (!state.notificationDisplayed)
      ? displayNotification(document, state.originalTitle, replaceTitle, value)
      : hideNotification(document); 
  }, blinkSpeed);
}