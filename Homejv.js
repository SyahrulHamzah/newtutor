var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};
function resizeThumb(e,t,g){for(var g=document.getElementById(e),m=g.getElementsByTagName("img"),r=0;r<m.length;r++)m[r].src=m[r].src.replace(/\/s72\-c/,"/s"+t),m[r].width=t,m[r].height=t}resizeThumb("Blog1",240,90);