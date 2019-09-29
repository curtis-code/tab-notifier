function TabNotifier() {
  const state = {
    interval: null,
    currentTitle: null
  };

  this.notify = (notificationText, intervalSpeed) => {
    if (!state.interval) {
      state.currentTitle = document.title;
      state.interval = window.setInterval(() => {
        document.title =
          state.currentTitle === document.title
            ? notificationText
            : state.currentTitle;
      }, intervalSpeed || 1000);
    }
  };

  this.stop = () => {
    window.clearInterval(state.interval);
    state.interval = null;
    document.title = state.currentTitle;
  };
}

export default new TabNotifier();
