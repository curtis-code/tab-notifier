import TabNotifier from "./index";

const defaultIntervalSpeed = 1000;
const originalTitle = "test";
const newTitle = "test2";

test("notify updates document title, and then alternates", () => {
  jest.useFakeTimers();

  global.window.document.title = originalTitle;

  TabNotifier.notify(newTitle);

  jest.advanceTimersByTime(defaultIntervalSpeed);
  expect(global.window.document.title).toEqual(newTitle);

  jest.advanceTimersByTime(defaultIntervalSpeed);
  expect(global.window.document.title).toEqual(originalTitle);

  jest.advanceTimersByTime(defaultIntervalSpeed);
  expect(global.window.document.title).toEqual(newTitle);

  jest.useRealTimers();
});

test("stop resets document title immediately", () => {
  jest.useFakeTimers();

  global.window.document.title = originalTitle;

  TabNotifier.notify(newTitle);

  jest.advanceTimersByTime(defaultIntervalSpeed);
  expect(global.window.document.title).toEqual(newTitle);

  TabNotifier.stop();
  expect(global.window.document.title).toEqual(originalTitle);

  jest.useRealTimers();
});

test("intervalSpeed can be configured", () => {
  jest.useFakeTimers();

  const intervalSpeed = 2000;

  global.window.document.title = originalTitle;

  TabNotifier.notify(newTitle, intervalSpeed);

  jest.advanceTimersByTime(intervalSpeed);
  expect(global.window.document.title).toEqual(newTitle);

  jest.advanceTimersByTime(intervalSpeed);
  expect(global.window.document.title).toEqual(originalTitle);

  jest.advanceTimersByTime(intervalSpeed);
  expect(global.window.document.title).toEqual(newTitle);

  jest.useRealTimers();
});
