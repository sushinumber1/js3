
/**
 * JS3 - A Drawing & Tweening API for the JavaScript Canvas
 * Version : 0.1.7
 * Documentation : http://quietless.com/js3/
 *
 * Copyright 2012 Stephen Braitsch :: @braitsch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
**/

function JS3(a){var b=document.getElementById(a),c=b.getContext("2d"),d=b.width,f=b.height,e=[],j=[],k=[],l=[],g=void 0,m=void 0,n=void 0,o=void 0,q=void 0,r=void 0,u=!0,v="#ffffff",w="My Canvas";this.__defineGetter__("width",function(){return d});this.__defineGetter__("height",function(){return f});this.__defineGetter__("numChildren",function(){return e.length});this.__defineGetter__("position",function(){for(var a=0,c=0,d=b;null!=d;)a+=d.offsetLeft,c+=d.offsetTop,d=d.offsetParent;return{x:a,y:c}});
this.__defineSetter__("click",function(a){o=a});this.__defineSetter__("rollOver",function(a){q=a});this.__defineSetter__("rollOut",function(a){r=a});this.__defineSetter__("drawClean",function(a){u=a});this.__defineSetter__("background",function(a){v=a;s()});this.__defineSetter__("windowTitle",function(a){w=a});this.__defineSetter__("interactive",function(a){a?(b.addEventListener("mousedown",x),b.addEventListener("mouseup",y),b.addEventListener("mousemove",z)):(b.removeEventListener("mousedown",x),
b.removeEventListener("mouseup",y),b.removeEventListener("mousemove",z))});this.addChild=function(a){a.stage=c;e.push(a)};this.addChildAt=function(a,b){b<=e.length&&e.splice(b,0,a)};this.getChildAt=function(a){return e[a]};this.getChildAtRandom=function(){return e[Math.floor(Math.random()*e.length)]};this.removeChild=function(a,b){for(var c=e.length-1;0<=c;c--)if(e[c]==a){removeChildAt(c,b);break}};this.removeChildAt=function(a,b){b&&(e[a]=null);e.splice(a,1)};this.run=function(a,b,c,d){for(var e=
k.length-1;0<=e;e--)if(a==k[e].f)return;k.push({f:a,d:b,r:c,o:d,t:Date.now()})};this.stop=function(a){A(a)};this.tween=function(a,b,c){a.isTweening||(a.isTweening=!0,a=new Tween(a,b,c),void 0==a.delay?B(a):setTimeout(B,1E3*a.delay,a))};this.clear=function(){for(;e.length;)e[0]=null,e.splice(0,1);for(;j.length;)j[0]=null,j.splice(0,1);for(;l.length;)l[0]=null,l.splice(0,1);for(;k.length;)k[0]=null,k.splice(0,1);e=[];j=[];l=[];k=[];s()};this.setSize=function(a,c){b.width=d=a;b.height=f=c};this.save=
function(){var a=b.toDataURL("image/png"),c=window.open("","_blank","width="+d+", height="+f);c.document.write('<!DOCTYPE html style="padding:0; margin:0"><head><title>'+w+"</title>");c.document.write('</head><body style="background: #f2f2f2; padding:0; margin:0">');c.document.write('<img src="'+a+'"/>');c.document.write("</body></html>");c.document.close()};this.drawLine=function(a){a.stage=c;j.push(new JS3Line(a))};this.drawArc=function(a){a.stage=c;j.push(new JS3Arc(a))};this.drawRect=function(a){a.stage=
c;j.push(new JS3Rect(a))};this.drawCircle=function(a){a.stage=c;j.push(new JS3Circle(a))};this.drawTri=function(a){a.stage=c;j.push(new JS3Tri(a))};this.drawText=function(a){a.stage=c;j.push(new JS3Text(a))};var x=function(){c.dx=c.mx;c.dy=c.my;for(var a=e.length-1;0<=a;a--)if(e[a].mouse&&e[a].enabled){g=e[a];e.splice(a,1);e.push(g);break}},y=function(){g&&(void 0==n?(void 0!=o&&o(g),void 0!=g._onClick&&g._onClick(g)):void 0!=g._onDragComplete&&g._onDragComplete(g));g=n=void 0},z=function(a){var d=
0,f=0,h=b;do d+=h.offsetLeft,f+=h.offsetTop;while(h=h.offsetParent);c.mx=a.pageX-d;c.my=a.pageY-f;a=!1;for(d=e.length-1;0<=d;d--)if(h=e[d],h.mouse&&h.enabled){h!=m&&(void 0!=q&&q(h),void 0!=h._onRollOver&&h._onRollOver(h));a=!0;break}if(void 0!=m&&(m!=h||!1==a))void 0!=r&&r(m),void 0!=m._onRollOut&&m._onRollOut(m);m=a?h:void 0;window.document.body.style.cursor=a?"pointer":"default";g&&g.draggable&&(void 0==n?(n=g,void 0!=g._onDragStart&&g._onDragStart(g)):(g.x+=c.mx-c.dx,g.y+=c.my-c.dy,c.dy=c.my,
c.dx=c.mx,void 0!=g._onDragChange&&g._onDragChange(g)))},s=function(){c.fillStyle=v;c.fillRect(0,0,d,f)},B=function(a){a.start=Date.now();l.push(a)},A=function(a){for(var c=k.length-1;0<=c;c--)a==k[c].f&&k.splice(c,1)};JS3.func.push(function(){for(var a=0;a<l.length;a++){t=l[a];if(0==t.elapsed&&void 0!=t.onStart)t.onStart();t.elapsed=Date.now()-t.start;for(p in t.props)t.object[p]=t.easeFunc(t.elapsed,t.props[p].a,t.props[p].b,t.duration);if(t.elapsed>=t.duration){l.splice(a,1);t.object.isTweening=
!1;for(p in t.props)t.object[p]=t.props[p].a+t.props[p].b;if(void 0!=t.onComplete)t.onComplete()}}for(var a=Date.now(),c=0;c<k.length;c++){var b=k[c];if(void 0===b.d||a-b.t>1E3*b.d)b.f(),b.t=a,void 0!=b.r&&(b.r--,0==b.r&&(A(b.f),void 0!=b.o&&b.o()))}u&&s();for(i=0;i<e.length;)a=e[i],a.update(a),i++;for(;j.length;)a=j[0],a.update(a),j.splice(0,1)})}JS3.getRandomColor=function(){return"#"+Math.round(16777215*Math.random()).toString(16)};
JS3.getRandomValue=function(a,b){return void 0==a?Math.random():void 0==b?Math.random()*a:Math.random()*(b-a)+a};JS3.drawLine=function(a){a.cx=(a.x1+a.x2)/2;a.cy=(a.y1+a.y2)/2;JS3.openShape(a);a.stage.moveTo(a.x1-a.cx,a.y1-a.cy);a.stage.lineTo(a.x2-a.cx,a.y2-a.cy);JS3.drawShape(a)};
JS3.drawArc=function(a){a.cx=(a.x1+a.x2)/2;a.cy=(a.y1+a.y2)/2;JS3.openShape(a);a.stage.moveTo(a.x1-a.cx,a.y1-a.cy);a.stage.quadraticCurveTo(a.xc-a.cx,a.yc-a.cy,a.x2-a.cx,a.y2-a.cy);a.mouse=a.stage.isPointInPath(a.stage.mx,a.stage.my);JS3.stroke(a);a.stage.restore()};JS3.drawRect=function(a){JS3.getCntrPt(a);JS3.openShape(a);a.stage.rect(-a.cx,-a.cy,2*a.cx,2*a.cy);JS3.drawShape(a)};
JS3.drawCirc=function(a){JS3.getCntrPt(a);var b=0.5522848*a.cx,c=0.5522848*a.cy;JS3.openShape(a);a.stage.moveTo(-a.cx,0);a.stage.bezierCurveTo(-a.cx,-c,-b,-a.cy,0,-a.cy);a.stage.bezierCurveTo(b,-a.cy,a.cx,-c,a.cx,0);a.stage.bezierCurveTo(a.cx,c,b,a.cy,0,a.cy);a.stage.bezierCurveTo(-b,a.cy,-a.cx,c,-a.cx,0);JS3.drawShape(a)};
JS3.drawTri=function(a){a.width==a.height?JS3.drawEquilateral(a):JS3.drawCustomTriangle(a);JS3.openShape(a);a.stage.moveTo(a.x1,a.y1);a.stage.lineTo(a.x2,a.y2);a.stage.lineTo(a.x3,a.y3);a.stage.lineTo(a.x1,a.y1);JS3.drawShape(a)};JS3.drawEquilateral=function(a){var b=a.width,c=a.height*(Math.sqrt(3)/2);a.x1=0;a.y1=-2*c/3;a.x2=b/2;a.y2=c/3;a.x3=-b/2;a.y3=c/3;a.cx=b/2;a.cy=c/2+c/2/3};
JS3.drawCustomTriangle=function(a){var b=a.width,c=a.height;a.x1=a.x1||0;a.y1=a.y1||-c/2;a.x2=a.x2||b/2;a.y2=a.y2||c/2;a.x3=a.x3||-b/2;a.y3=a.y3||c/2;a.cx=b/2;a.cy=c/2};JS3.drawImage=function(a){!1!=a.image.src&&(a.cx=a.image.width/2,a.cy=a.image.height/2,JS3.openShape(a),a.stage.rect(-a.cx,-a.cy,2*a.cx,2*a.cy),a.stage.drawImage(a.image,-a.cx,-a.cy),JS3.drawShape(a))};
JS3.drawText=function(a){var b=a.bold?"Bold ":"",b=b+(a.italic?"Italic ":"");a.stage.font=b+a.size+"pt "+a.font;a.stage.textAlign="left";a.stage.textBaseline="top";a.cy=JS3getTextHeight(a)/2;a.cx=a.stage.measureText(a.text).width/2;JS3.openShape(a);a.fill&&JS3.fill(a);a.stroke&&JS3.stroke(a);JS3.drawShape(a)};
JS3.fill=function(a){a.stage.globalAlpha=a.alpha*a.fillAlpha;a.stage.fillStyle=a.color||a.fillColor;a instanceof JS3Text?a.stage.fillText(a.text,-a.cx,-a.cy):a.stage.fill();a.stage.globalAlpha=1};JS3.stroke=function(a){a.stage.globalAlpha=a.alpha*a.strokeAlpha;a.stage.lineCap=a.capStyle;a.stage.lineWidth=a.strokeWidth;a.stage.strokeStyle=a.strokeColor;a instanceof JS3Text?a.stage.strokeText(a.text,-a.cx,-a.cy):a.stage.stroke();a.stage.globalAlpha=1};
JS3.getCntrPt=function(a){a.cx=a.width/2||a.size/2;a.cy=a.height/2||a.size/2};JS3.openShape=function(a){a.stage.save();a.stage.globalAlpha=a.alpha;a.stage.translate(a.x+a.cx,a.y+a.cy);a.stage.scale(a.scaleX,a.scaleY);a.stage.rotate(a.rotation*Math.PI/180);a.stage.beginPath()};JS3.drawShape=function(a){a.stage.closePath();a.mouse=a.stage.isPointInPath(a.stage.mx,a.stage.my);a.fill&&JS3.fill(a);a.stroke&&JS3.stroke(a);a.stage.restore()};JS3.copyProps=function(a,b){for(var c in a)b[c]=a[c]};
linear=function(a,b,c,d){return c*a/d+b};easeInQuad=function(a,b,c,d){a/=d;return c*a*a+b};easeOutQuad=function(a,b,c,d){a/=d;return-c*a*(a-2)+b};easeInOutQuad=function(a,b,c,d){a/=d/2;if(1>a)return c/2*a*a+b;a--;return-c/2*(a*(a-2)-1)+b};easeInCubic=function(a,b,c,d){a/=d;return c*a*a*a+b};easeOutCubic=function(a,b,c,d){a/=d;a--;return c*(a*a*a+1)+b};easeInOutCubic=function(a,b,c,d){a/=d/2;if(1>a)return c/2*a*a*a+b;a-=2;return c/2*(a*a*a+2)+b};
easeInQuart=function(a,b,c,d){a/=d;return c*a*a*a*a+b};easeOutQuart=function(a,b,c,d){a/=d;a--;return-c*(a*a*a*a-1)+b};easeInOutQuart=function(a,b,c,d){a/=d/2;if(1>a)return c/2*a*a*a*a+b;a-=2;return-c/2*(a*a*a*a-2)+b};easeInQuint=function(a,b,c,d){a/=d;return c*a*a*a*a*a+b};easeOutQuint=function(a,b,c,d){a/=d;a--;return c*(a*a*a*a*a+1)+b};easeInOutQuint=function(a,b,c,d){a/=d/2;if(1>a)return c/2*a*a*a*a*a+b;a-=2;return c/2*(a*a*a*a*a+2)+b};
easeInSine=function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b};easeOutSine=function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b};easeInOutSine=function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b};easeInExpo=function(a,b,c,d){return c*Math.pow(2,10*(a/d-1))+b};easeOutExpo=function(a,b,c,d){return c*(-Math.pow(2,-10*a/d)+1)+b};easeInOutExpo=function(a,b,c,d){a/=d/2;if(1>a)return c/2*Math.pow(2,10*(a-1))+b;a--;return c/2*(-Math.pow(2,-10*a)+2)+b};
easeInCirc=function(a,b,c,d){a/=d;return-c*(Math.sqrt(1-a*a)-1)+b};easeOutCirc=function(a,b,c,d){a/=d;a--;return c*Math.sqrt(1-a*a)+b};easeInOutCirc=function(a,b,c,d){a/=d/2;if(1>a)return-c/2*(Math.sqrt(1-a*a)-1)+b;a-=2;return c/2*(Math.sqrt(1-a*a)+1)+b};JS3.func=[];JS3.loop=function(){JS3.getFrameRate();for(var a=0;a<JS3.func.length;a++)JS3.func[a]();window.getAnimFrame(JS3.loop)};
window.getAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();JS3.getFrameRate=function(){var a=window.mozAnimationStartTime||Date.now();5<a-JS3.FT&&(JS3.FR=1E3/(a-JS3.FT),JS3.FT=a)};
JS3.showFrameRate=function(a,b,c){if(!document.getElementById("JS3FR")){var d=0;yy=0;c&&(d=c.position.x,yy=c.position.y);a&&(d+=a);b&&(yy+=b);var f=document.createElement("div");f.setAttribute("id","JS3FR");f.style.position="absolute";f.style.left=d+"px";f.style.top=yy+"px";f.style.background="#333";f.style.border="1px solid #555";f.style.color="#00ff00";f.style.padding="10px";f.style.fontSize="16px";f.style.fontFamily="Arial,sans-serif";f.style.textShadow="1px 1px 0 #000";f.innerHTML="60.0 fps";
document.body.appendChild(f);setInterval(function(){var a=JS3.FR.toFixed(1);f.innerHTML=a+" fps";f.style.color=a<15?"#ff0000":a>=15&&a<=30?"#ffff00":"#00ff00"},1E3)}};JS3.FR=0;JS3.FT=Date.now()-1;window.getAnimFrame(JS3.loop);function JS3Line(a){JS3getBaseProps(this);JS3getLineProps(this);this.update=JS3.drawLine;a&&JS3.copyProps(a,this)}function JS3Arc(a){JS3getBaseProps(this);JS3getLineProps(this);this.update=JS3.drawArc;a&&JS3.copyProps(a,this)}
function JS3Tri(a){JS3getBaseProps(this);this.update=JS3.drawTri;a&&JS3.copyProps(a,this);this.p1={};this.p2={};this.p3={}}function JS3Rect(a){JS3getBaseProps(this);this.update=JS3.drawRect;a&&JS3.copyProps(a,this)}function JS3Circle(a){JS3getBaseProps(this);this.update=JS3.drawCirc;a&&JS3.copyProps(a,this)}function JS3Text(a){JS3getBaseProps(this);JS3getTextProps(this);this.update=JS3.drawText;a&&JS3.copyProps(a,this)}
function JS3Image(a){JS3getBaseProps(this);JS3getImageProps(this);this.update=JS3.drawImage;this.fill=this.stroke=!1;a&&JS3.copyProps(a,this)}
function JS3getBaseProps(a){a.__defineGetter__("size",function(){return a._size});a.__defineSetter__("size",function(b){a._size=a.width=a.height=b});a.__defineSetter__("click",function(b){a._onClick=b;a.enabled=!0});a.__defineSetter__("rollOver",function(b){a._onRollOver=b;a.enabled=!0});a.__defineSetter__("rollOut",function(b){a._onRollOut=b;a.enabled=!0});a.__defineGetter__("draggable",function(){return a._draggable});a.__defineSetter__("draggable",function(b){a._draggable=b;!0==b&&(a.enabled=!0)});
a.__defineSetter__("drag",function(b){a._onDragChange=b;a.draggable=!0});a.__defineSetter__("dragStart",function(b){a._onDragStart=b;a.draggable=!0});a.__defineSetter__("dragComplete",function(b){a._onDragComplete=b;a.draggable=!0});a.x=a.y=a.rotation=0;a._size=25;a.fillColor="#ddd";a.strokeColor="#ccc";a.fill=a.stroke=!0;a.alpha=a.scaleX=a.scaleY=a.fillAlpha=a.strokeAlpha=1;a.strokeWidth=2}
function JS3getLineProps(a){a.capStyle="butt";a.x1=a.y1=a.cx=a.cy=a.x2=a.y2=0;a.__defineSetter__("color",function(b){a.strokeColor=b});a.__defineSetter__("thickness",function(b){a.strokeWidth=b})}function JS3getImageProps(a){a.image=new Image;a.__defineSetter__("src",function(b){a.image.src=b});a.__defineSetter__("ready",function(b){a.image.onload=b});a.__defineGetter__("width",function(){return a.image.width});a.__defineGetter__("height",function(){return a.image.height})}
function JS3getTextProps(a){a.size=12;a.font="Arial";a.color="#333";a.stroke=a.bold=a.italic=!1}function JS3getTextHeight(a){var b=document.getElementsByTagName("body")[0],c=document.createElement("div");c.appendChild(document.createTextNode("M"));c.setAttribute("style","font-family:"+a.font+"; font-size:"+a.size+"pt; line-height:normal");b.appendChild(c);a=c.offsetHeight;b.removeChild(c);return a}
function Tween(a,b,c){this.object=a;this.duration=1E3*b;this.delay=c.delay;this.elapsed=this.start=0;this.onStart=c.onStart;this.onComplete=c.onComplete;this.easeFunc=c.ease||linear;this.props={};for(var d in c)isNumber(c[d])&&(this.props[d]={a:a[d],b:c[d]-a[d]})}var trace=function(a){try{console.log(a)}catch(b){}},isNumber=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};