import state from './state';
import { blinkNotification } from './helpers/notificationHelper';

class TabNotifier {
    
  notify(value, options = {
    blinkSpeed: 1000,
    replaceTitle: false,
  }) {
    if (!state.originalTitle){
      state.originalTitle = document.title;
    }
    window.clearInterval(state.interval);
    state.interval = window.setInterval(() => {
      blinkNotification(document, options.replaceTitle, value);
    }, options.blinkSpeed);
  }

  stop() {
    window.clearInterval(state.interval);
    state.interval = null;
    document.title = state.originalTitle;
    state.notificationDisplayed = false;
  }

}

export default new TabNotifier;