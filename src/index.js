class TabNotifier {

  constructor(){
    this.state = {
      interval: null,
      notificationDisplayed: null,
      originalTitle: null,
    }
  }
    
  notify(value, options = {
    intervalSpeed: 1000
  }) {
    if (!this.state.originalTitle){
      this.state.originalTitle = document.title;
    }
    if (!this.state.interval) {
      this.state.interval = window.setInterval(() => {
        document.title = (!this.state.notificationDisplayed)
          ? value
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