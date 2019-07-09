var btnOn = document.getElementById('btn-on');
var btnOff = document.getElementById('btn-off');

btnOn.addEventListener('click', function(){
  tabNotifier.notify(1);
});

btnOff.addEventListener('click', function(){
  tabNotifier.stop();
});