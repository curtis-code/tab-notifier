import TabNotifier from "../src/index";

document.getElementById("turnOn").addEventListener("click", () => {
  TabNotifier.notify("test");
});

document.getElementById("turnOff").addEventListener("click", () => {
  TabNotifier.stop();
});
