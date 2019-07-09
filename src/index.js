import state from './state';
import { blinkNotification, displayNotification } from './helpers/notificationHelper';

class TabNotifier {
    
  notify(value, options = {
    blink: false,
    blinkSpeed: 1000,
    replaceTitle: false,
  }) {
    if (!state.originalTitle){
      state.originalTitle = document.title;
    }
    if (options.blink){
      blinkNotification(document, window, options.replaceTitle, options.blinkSpeed, value);
    }
    else {
      displayNotification(document, options.replaceTitle, value);
    }
  }

  stop() {
    window.clearInterval(state.interval);
    state.interval = null;
    document.title = state.originalTitle;
    state.notificationDisplayed = false;
  }

}

export default new TabNotifier;