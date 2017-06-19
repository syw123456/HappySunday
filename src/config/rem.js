/**
 * Created by syw on 2017/6/19.
 */
(function(doc,fun){
    var docEl = doc.documentElement,
     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
     recalc= function(){
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            docEl.style.fontSize = 20*(clientWidth/320) +'px';
     };
     if(!doc.addEventListener) return;
     win.addEventListener(resizeEvt,reclac,false);
     doc.addEventListener('DOMContentLoaded', recalc,false);
})(document,window);
