class TabNotifier {

    constructor(){
        this.state = {
            interval: null,
            currentTitle: null,
        }
    }
    
    notify(notificationText, intervalSpeed) {
        if (!this.state.interval) {
            this.state.currentTitle = document.title;
            this.state.interval = window.setInterval(() => {
                document.title = (this.state.currentTitle === document.title)
                    ? notificationText
                    : this.state.currentTitle;
            }, (intervalSpeed) ? intervalSpeed : 1000);
        }
    }

    stop() {
        window.clearInterval(this.state.interval);
        this.state.interval = null;
        document.title = this.state.currentTitle;
    }

}

export default new TabNotifier;