function TabNotifier() {
  const initialState = {
    interval: null,
    baseTitle: null
  };

  let state = { ...initialState };

  this.notifyMessage = (
    notificationText,
    { intervalSpeed } = { intervalSpeed: 1000 }
  ) => {
    if (!state.interval) {
      state.baseTitle = document.title;
      state.interval = window.setInterval(() => {
        document.title =
          state.baseTitle === document.title
            ? notificationText
            : state.baseTitle;
      }, intervalSpeed);
    }
  };

  this.reset = () => {
    window.clearInterval(state.interval);
    document.title = state.baseTitle;
    state = { ...initialState };
  };
}

export default new TabNotifier();
