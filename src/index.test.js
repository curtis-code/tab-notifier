import TabNotifier from "./index";

test("notify updates document title, and then alternates", () => {
  jest.useFakeTimers();

  const originalTitle = "test";
  const newTitle = "test2";

  global.window.document.title = originalTitle;

  TabNotifier.notify(newTitle);

  jest.advanceTimersByTime(1000);
  expect(global.window.document.title).toEqual(newTitle);

  jest.advanceTimersByTime(1000);
  expect(global.window.document.title).toEqual(originalTitle);

  jest.advanceTimersByTime(1000);
  expect(global.window.document.title).toEqual(newTitle);

  jest.useRealTimers();
});
