import TabNotifier from "./index";

const defaultIntervalSpeed = 1000;
const originalTitle = "originalTitle";
const newTitle = "newTitle";

beforeEach(() => {
  jest.useFakeTimers();
  global.window.document.title = originalTitle;
});

afterEach(() => {
  jest.useRealTimers();
  TabNotifier.reset();
});

describe("notify", () => {
  test("notify() adds (1)", () => {
    TabNotifier.notify();
    expect(global.window.document.title).toEqual(`(1) ${originalTitle}`);
  });

  test("notify(2) adds (2)", () => {
    TabNotifier.notify(2);
    expect(global.window.document.title).toEqual(`(2) ${originalTitle}`);
  });

  test("notify() + reset() changes back to original title", () => {
    TabNotifier.notify();
    expect(global.window.document.title).toEqual(`(1) ${originalTitle}`);
    TabNotifier.reset();
    expect(global.window.document.title).toEqual(originalTitle);
  });

  test("notify() + notify(2) + reset() changes back to the original title", () => {
    TabNotifier.notify();
    expect(global.window.document.title).toEqual(`(1) ${originalTitle}`);
    TabNotifier.notify(2);
    expect(global.window.document.title).toEqual(`(2) ${originalTitle}`);
    TabNotifier.reset();
    expect(global.window.document.title).toEqual(originalTitle);
  });
});

describe("notifyMessage", () => {
  test("notify updates document title, and then alternates", () => {
    TabNotifier.notifyMessage(newTitle);

    jest.advanceTimersByTime(defaultIntervalSpeed);
    expect(global.window.document.title).toEqual(newTitle);

    jest.advanceTimersByTime(defaultIntervalSpeed);
    expect(global.window.document.title).toEqual(originalTitle);

    jest.advanceTimersByTime(defaultIntervalSpeed);
    expect(global.window.document.title).toEqual(newTitle);

    TabNotifier.reset();
  });

  test("intervalSpeed can be configured", () => {
    const intervalSpeed = 2000;

    TabNotifier.notifyMessage(newTitle, { intervalSpeed });

    jest.advanceTimersByTime(intervalSpeed);
    expect(global.window.document.title).toEqual(newTitle);

    jest.advanceTimersByTime(intervalSpeed);
    expect(global.window.document.title).toEqual(originalTitle);

    jest.advanceTimersByTime(intervalSpeed);
    expect(global.window.document.title).toEqual(newTitle);
  });

  test("reset() after notifyMessage() resets document title immediately", () => {
    TabNotifier.notifyMessage(newTitle);

    global.window.document.title = "newTitle";

    TabNotifier.reset();
    expect(global.window.document.title).toEqual(originalTitle);
  });
});

describe("reset", () => {
  test("reset() resets document title", () => {
    TabNotifier.notifyMessage(newTitle);

    jest.advanceTimersByTime(defaultIntervalSpeed);
    expect(global.window.document.title).toEqual(newTitle);

    TabNotifier.reset();
    expect(global.window.document.title).toEqual(originalTitle);
  });
});
