import { generateTitle } from './titleHelper';

export function displayNotification(document, originalTitle, replaceTitle, value) {
  document.title = generateTitle(value, originalTitle, replaceTitle);
}