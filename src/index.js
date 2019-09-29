function TabNotifier() {
  const initialState = {
    active: false,
    interval: null,
    baseTitle: null
  };

  let state = { ...initialState };

  this.notify = (count = 1) => {
    if (state.active) this.reset();
    state.active = true;
    state.baseTitle = document.title;
    document.title = `(${count}) ${state.baseTitle}`;
  };

  this.notifyMessage = (
    notificationText,
    { intervalSpeed } = { intervalSpeed: 1000 }
  ) => {
    if (state.active) this.reset();
    state.active = true;
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
