// ==UserScript==
// @name        eyny_highlight_720p
// @namespace   eyny_highlight_720p
// @supportURL  https://github.com/zhuzemin
// @description video.eyny.com highlight 720p video
// @include     http://video.eyny.com/channel/*
// @version     1.0
// @run-at      document-start
// @author      zhuzemin
// @license     Mozilla Public License 2.0; http://www.mozilla.org/MPL/2.0/
// @license     CC Attribution-ShareAlike 4.0 International; http://creativecommons.org/licenses/by-sa/4.0/
// ==/UserScript==
var config = {
    'debug': false
}
var debug = config.debug ? console.log.bind(console)  : function () {
};


function CreateStyle(){
    debug("Start: CreateStyle");
    var style=document.createElement("style");
    style.setAttribute("type","text/css");
    style.innerHTML=`
.glowbox {
     //background: #4c4c4c; 
    //width: 400px;
    margin: 40px 0 0 40px;
    padding: 10px;
    -moz-box-shadow: 0 0 5px 5px #FFFF00;
    -webkit-box-shadow: 0 0 5px 5px #FFFF00;
    box-shadow: 0 0 5px 5px #FFFF00;
}
`;
    debug("Processing: CreateStyle");
    var head=document.querySelector("head");
    head.insertBefore(style,null);
    debug("End: CreateStyle");
}

function MainWorker(){
    debug("init");
    CreateStyle();
    var img_boxs=document.querySelectorAll("td.img_box");
    for(var img_box of img_boxs){
        var resolution=img_box.querySelectorAll("font")[1].innerText;
        if(resolution=="720"){
            debug("Highlight.");
            img_box.className+=" glowbox";
        }
    }
}

var init = function () {
    MainWorker();
}
window.addEventListener('DOMContentLoaded', init);
