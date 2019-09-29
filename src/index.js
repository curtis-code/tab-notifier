function TabNotifier() {
  const state = {
    interval: null,
    originalTitle: null
  };

  this.notify = (notificationText, intervalSpeed) => {
    if (!state.interval) {
      state.originalTitle = document.title;
      state.interval = window.setInterval(() => {
        document.title =
          state.originalTitle === document.title
            ? notificationText
            : state.originalTitle;
      }, intervalSpeed || 1000);
    }
  };

  this.stop = () => {
    window.clearInterval(state.interval);
    state.interval = null;
    document.title = state.originalTitle;
  };
}

export default new TabNotifier();
