// (function(window, document){

//   window.pageTitleNotification = (function () {

//       const config = {
//           currentTitle: null,
//           interval: null
//       };

//       const on = function (notificationText, intervalSpeed) {
//           if (!config.interval) {
//               config.currentTitle = document.title;
//               config.interval = window.setInterval(function() {
//                   document.title = (config.currentTitle === document.title)
//                       ? notificationText
//                       : config.currentTitle;
//               }, (intervalSpeed) ? intervalSpeed : 1000);
//           }
//       };

//       const off = function () {
//           window.clearInterval(config.interval);
//           config.interval = null;
//           document.title = config.currentTitle;
//       };

//       return {
//           on,
//           off,
//       };

//   })();

// }(window, document));

export default class TabNotifier {

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
    };

    stop() {
        window.clearInterval(this.state.interval);
        this.state.interval = null;
        document.title = this.state.currentTitle;
    };

}