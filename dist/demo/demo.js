var btnOn = document.getElementById('btn-on');
var btnOff = document.getElementById('btn-off');

var tabNotify = new tabNotifier;

btnOn.addEventListener('click', function(){
    tabNotify.notify('test', 1000);
});

btnOff.addEventListener('click', function(){
    tabNotify.stop();
});