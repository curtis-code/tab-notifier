import { displayNotification } from './helpers/notificationHelper';

class TabNotifier {

  constructor(){
    this.state = {
      interval: null,
      notificationDisplayed: false,
      originalTitle: null,
    }
  }
    
  notify(value, options = {
    blinkSpeed: 1000,
    replaceTitle: false,
  }) {
    if (!this.state.originalTitle){
      this.state.originalTitle = document.title;
    }
    if (!this.state.interval) {
      this.state.interval = window.setInterval(() => {
        if (!this.state.notificationDisplayed){
          displayNotification(document, this.state.originalTitle, options.replaceTitle, value);
        }
        else{
          document.title = this.state.originalTitle;
        }
        this.state.notificationDisplayed = !this.state.notificationDisplayed;
      }, options.blinkSpeed);
    }
  }

  stop() {
    window.clearInterval(this.state.interval);
    this.state.interval = null;
    document.title = this.state.originalTitle;
    this.state.notificationDisplayed = false;
  }

}

export default new TabNotifier;