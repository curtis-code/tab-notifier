function TabNotifier() {
  const initialState = {
    interval: null,
    baseTitle: null
  };

  let state = { ...initialState };

  this.notify = (notificationText, intervalSpeed) => {
    if (!state.interval) {
      state.baseTitle = document.title;
      state.interval = window.setInterval(() => {
        document.title =
          state.baseTitle === document.title
            ? notificationText
            : state.baseTitle;
      }, intervalSpeed || 1000);
    }
  };

  this.reset = () => {
    window.clearInterval(state.interval);
    document.title = state.baseTitle;
    state = { ...initialState };
  };
}

export default new TabNotifier();
