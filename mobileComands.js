function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;

  switch (evt.type) {
    case "touchstart": 
      type = "mousedown";
      touch = evt.changedTouches[0];
      game.startGame();
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":        
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
  evt.originalTarget.dispatchEvent(newEvt);
}

















// class MobileCommands{
//   constructor(game){
    
//   }
  
//   detectswipe(body,func) {
//     swipe_det = new Object();
//     swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
//     var min_x = 30;  //min x swipe for horizontal swipe
//     var max_x = 30;  //max x difference for vertical swipe
//     var min_y = 50;  //min y swipe for vertical swipe
//     var max_y = 60;  //max y difference for horizontal swipe
//     var direc = "";
//     ele = document.getElementById(body);
//     ele.addEventListener('touchstart',function(e){
//       var t = e.touches[0];
//       swipe_det.sX = t.screenX; 
//       swipe_det.sY = t.screenY;
//     },false);
//     ele.addEventListener('touchmove',function(e){
//       e.preventDefault();
//       var t = e.touches[0];
//       swipe_det.eX = t.screenX; 
//       swipe_det.eY = t.screenY;    
//     },false);
//     ele.addEventListener('touchend',function(e){
//       //horizontal detection
//       if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
//         if(swipe_det.eX > swipe_det.sX) direc = "r";
//         else direc = "l";
//       }
//       //vertical detection
//       else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
//         if(swipe_det.eY > swipe_det.sY) direc = "d";
//         else direc = "u";
//       }
  
//       if (direc != "") {
//         if(typeof func == 'function') func(el,direc);
//       }
//       direc = "";
//       swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
//     },false);  
//   }
  
//   myfunction(el,d) {
//     alert("you swiped on element with id '"+el+"' to "+d+" direction");
//   }




//}
