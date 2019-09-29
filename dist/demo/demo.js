var btnOn = document.getElementById("btn-on");
var btnOff = document.getElementById("btn-off");

btnOn.addEventListener("click", function() {
  tabNotifier.notifyMessage("test", {
    intervalSpeed: 1000
  });
});

btnOff.addEventListener("click", function() {
  tabNotifier.reset();
});
