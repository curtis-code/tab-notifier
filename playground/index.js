import TabNotifier from "../src/index";

document.getElementById("turnOn").addEventListener("click", () => {
  TabNotifier.notifyMessage("test");
});

document.getElementById("turnOff").addEventListener("click", () => {
  TabNotifier.reset();
});
