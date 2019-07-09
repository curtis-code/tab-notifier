import state from './state';
import { displayNotification } from './helpers/notificationHelper';

class TabNotifier {
    
  notify(value, options = {
    blinkSpeed: 1000,
    replaceTitle: false,
  }) {
    if (!state.originalTitle){
      state.originalTitle = document.title;
    }
    if (!state.interval) {
      state.interval = window.setInterval(() => {
        if (!state.notificationDisplayed){
          displayNotification(document, state.originalTitle, options.replaceTitle, value);
        }
        else{
          document.title = state.originalTitle;
        }
        state.notificationDisplayed = !state.notificationDisplayed;
      }, options.blinkSpeed);
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