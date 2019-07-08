import { generateTitle } from './titleHelper';

class TabNotifier {

  constructor(){
    this.state = {
      interval: null,
      notificationDisplayed: false,
      originalTitle: null,
    }
  }
    
  notify(value, options = {
    intervalSpeed: 1000,
    replaceTitle: true,
  }) {
    generateTitle();
    if (!this.state.originalTitle){
      this.state.originalTitle = document.title;
    }
    if (!this.state.interval) {
      this.state.interval = window.setInterval(() => {
        document.title = (!this.state.notificationDisplayed)
          ? generateTitle(value,
            this.state.originalTitle,
            options.replaceTitle)
          : this.state.originalTitle;
        this.state.notificationDisplayed = !this.state.notificationDisplayed;
      }, options.intervalSpeed);
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