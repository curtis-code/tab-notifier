var btnOn = document.getElementById('btn-on');
var btnOff = document.getElementById('btn-off');

btnOn.addEventListener('click', function(){
  tabNotifier.notify('test', {
    blinkSpeed: 1000
  });
});

btnOff.addEventListener('click', function(){
  tabNotifier.stop();
});