function makeOffline(){
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
  makeOfflineBtn.style.display="none";
  aboutDev.style.display="inline-block";
  localStorage.setItem("installed","true");
}
if(localStorage.getItem("installed")=="true"){
  makeOfflineBtn.style.display="none";
  aboutDev.style.display="inline-block";
}

function fullScreen(){
  var doc=window.document;
  var docEl=doc.documentElement;
  var requestFullScreen=docEl.requestFullscreen||docEl.mozRequestFullScreen||docEl.webkitRequestFullScreen||docEl.msRequestFullscreen;
  var cancelFullScreen=doc.exitFullscreen||doc.mozCancelFullScreen||doc.webkitExitFullscreen||pdoc.msExitFullscreen;
  if(!doc.fullscreenElement&&!doc.mozFullScreenElement&&!doc.webkitFullscreenElement&&!doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else{
    cancelFullScreen.call(doc);
  }
}

var root=document.body;
var mode=localStorage.getItem("mode");
if(mode=="dark"){
  root.style.background="#444";
}else{
  root.style.background="#fff";
}

function ChangeMode(){
  var mode=localStorage.getItem("mode");
  if(mode=="dark"){
    localStorage.setItem("mode","light");
    root.style.background="#fff";
  }else{
    localStorage.setItem("mode","dark");
    root.style.background="#444";
  }
}
