class TabNotifier {

  constructor(){
    this.state = {
      interval: null,
      originalTitle: null,
    }
  }
    
  notify(notificationText, intervalSpeed = 1000) {
    if (!this.state.originalTitle){
      this.state.originalTitle = document.title;
    }
    if (!this.state.interval) {
      this.state.interval = window.setInterval(() => {
        document.title = (this.state.originalTitle === document.title)
          ? notificationText
          : this.state.originalTitle;
      }, intervalSpeed);
    }
  }

  stop() {
    window.clearInterval(this.state.interval);
    this.state.interval = null;
    document.title = this.state.originalTitle;
  }

}

export default new TabNotifier;