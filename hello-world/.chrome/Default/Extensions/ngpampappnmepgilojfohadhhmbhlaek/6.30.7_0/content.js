﻿var k;
if(!window.__idm_init__){var w=function(){var a=window.self===window.top;this.D=(this.O=a)?0:null;this.f=!1;this.s=this.l=null;this.J=[];this.c=0;this.L=!1;this.C=this.B=-1;this.N=1;this.i={};this.G=[];var b=chrome.runtime.connect({name:a?"top":"sub"});this.a=b;this.K=b.id||b.portId_||Math.ceil(1048575*Math.random());b.onMessage.addListener(this.onMessage.bind(this));b.onDisconnect.addListener(this.R.bind(this));this.b(window,"scroll",this.fa);this.b(window,"blur",this.aa);this.b(window,"keydown",this.H,
!0);this.b(window,"keyup",this.H,!0);this.b(window,"mousedown",this.ba,!0);this.b(window,"mouseup",this.da,!0);this.b(window,"mousemove",this.ca,!0);this.b(document,"beforeload",this.Z,!0);this.b(document,"DOMContentLoaded",this.$);a&&this.b(window,"resize",this.ea)};window.__idm_init__=!0;0<navigator.userAgent.indexOf("Edge/")&&(chrome=browser);var x={16:!0,17:!0,18:!0,45:!0,46:!0},C=["video","audio","object","embed"],D=new RegExp(atob("KD86eXRwbGF5ZXJcLmNvbmZpZ1xzKj18J1BMQVlFUl9DT05GSUcnXHMqOilccypcew==")),
E=new RegExp(atob("XCI/dmlkZW9EYXRhXCI/XHMqOlxzKlxbXHs=")),F=new RegExp(atob("InByb2dyZXNzaXZlIjpccypcWw=="));k=w.prototype;k.U=function(a,b,c,f){try{var d=document.activeElement,l=d&&0<=C.indexOf(d.localName)?d:null;l||(l=(d=document.elementFromPoint(this.B,this.C))&&0<=C.indexOf(d.localName)?d:null);for(var m=0,n,p,q,h,g=0;g<C.length;g++){for(var e=document.getElementsByTagName(C[g]),r=0;r<e.length;r++)if(d=e[r],3!=g||"application/x-shockwave-flash"==d.type.toLowerCase()){var t=d.src||d.data;if(t&&
(t==a||t==b)){n=d;break}if(!l&&!p)if(!t||t!=c&&t!=f){var v=d.clientWidth,u=d.clientHeight;if(v&&u){var y=d.getBoundingClientRect();if(!(0>=y.right+window.scrollX||0>=y.bottom+window.scrollY)){var z=window.getComputedStyle(d);if(!z||"hidden"!=z.visibility){var A=v*u;A>m&&1.35*v>u&&v<3*u&&(m=A,q=d);h||(h=d)}}}}else p=d}if(n)break}a=n||l||p||q||h;if(!a)return null;if("embed"==a.localName&&!a.clientWidth&&!a.clientHeight){var B=a.parentElement;"object"==B.localName&&(a=B)}return this.o(a)}catch(G){}};
k.T=function(a,b,c){try{for(var f=[],d,f=Array.prototype.concat.apply(f,document.getElementsByTagName("frame")),f=Array.prototype.concat.apply(f,document.getElementsByTagName("iframe")),l=0;l<f.length;l++){var m=f[l];if(parseInt(m.getAttribute("__idm_frm__"))==a){d=m;break}if(!d){var n=m.src;!n||n!=b&&n!=c||(d=m)}}return this.o(d)}catch(p){}};k.A=function(){var a=window.devicePixelRatio,b=document.width,c=document.body.scrollWidth;b&&c&&(a=b==c?0:b/c);return a};k.v=function(a){try{var b=a.getBoundingClientRect(),
c=Math.round(b.width),f=Math.round(b.height),d;switch(a.localName){case "video":if(15>c||10>f)return null;break;case "audio":if(!c&&!f)return null;d=!0}var l=document.documentElement,m=l.scrollHeight||l.clientHeight,n=Math.round(b.left)+a.clientLeft,p=Math.round(b.top)+a.clientTop;return n>=(l.scrollWidth||l.clientWidth)||p>=m||d&&!n&&!p?null:{left:n,top:p,right:n+c,bottom:p+f,zoom:this.A()}}catch(q){}};k.w=function(){this.a.postMessage([21,window.location.href])};k.m=function(a){if(a){if(!this.P){this.P=
!0;this.b(window,"message",this.ga);var b=document.createElement("script");b.src=chrome.extension.getURL("document.js");b.onload=function(){b.parentNode.removeChild(b)};document.documentElement.appendChild(b)}this.j(a)&&window.postMessage([1],"/")}else if("loading"==document.readyState)this.M=!0;else if(this.j()){this.M=!1;a=document.getElementsByTagName("script");for(var c=0;c<a.length;c++){b=a[c];if(!b.src&&D.test(b.innerText)){a=this.g();a=[34,a,-1,b.outerHTML];this.a.postMessage(a);break}if(!b.src&&
E.test(b.innerText)){a=this.g();a=[34,a,-2,b.outerHTML];this.a.postMessage(a);break}if(!b.src&&F.test(b.innerText)){a=this.g();a=[34,a,-2,b.outerHTML];this.a.postMessage(a);break}}}};k.ga=function(a){var b=a.data;Array.isArray(b)&&a.origin==(document.origin||location.origin)&&2==b[0]&&this.a.postMessage([34,b[1],-1,b[2]])};k.Y=function(a){var b=a[2]||this.T(a[3],a[4],a[5]),c=b&&this.i[b],c=c&&this.v(c);this.a.postMessage([22,a[1],a[3],b,c])};k.W=function(a){for(var b=a[2],c,f,d=document.getElementsByTagName("a"),
l=0;l<d.length;l++)try{var m=d[l];if(m.href==b){c=m.download||null;f=m.innerText.trim()||m.title||null;break}}catch(n){}this.a.postMessage([35,a[1],c,f])};k.X=function(a){if(this.j(a)){var b=!a[2],c=a[2]||this.U(a[3],a[4],a[5],a[6]);a=[23,a[1],c,!1];var f=c&&this.i[c];if(f){var d=this.v(f);d&&(a[4]=d);b?(a[5]=f.localName,a[6]=f.src||f.data,a[7]=this.g()):d||document.contains(f)||(a[3]=!0,delete this.i[c])}this.a.postMessage(a)}};k.o=function(a){try{var b=parseInt(a.getAttribute("__idm_id__"));b||
(b=this.K<<10|this.N++,a.setAttribute("__idm_id__",b));this.i[b]=a;return b}catch(c){return null}};k.g=function(a){if(!a||this.j(a)){var b;try{b=window.top.document.title}catch(c){}if(b)if(b=b.replace(/[ \t\r\n\u25B6]+/g," ").trim(),a)this.a.postMessage([24,a,b]);else return b}};k.h=function(a){if(!this.F){var b="\\b\\w+://(?:[%T]*(?::[%T]*)?@)?[%H.]+\\.[%H]+(?::\\d+)?(?:/(?:(?: +(?!\\w+:))?[%T/~;])*)?(?:\\?[%Q]*)?(?:#[%T]*)?".replace(/%\w/g,function(a){return this[a]}.bind({"%H":"\\w\\-\u00a0-\ufeff",
"%T":"\\w\\-.+*()$!,%\u00a0-\ufeff","%Q":"^\\s\\[\\]{}()"}));this.F=new RegExp(b,"gi")}for(var c=[];b=this.F.exec(a);)c.push(b.shift());return c};k.u=function(a,b,c){var f=[],d={},l="",m="",n=!c,p;if(c&&(p=a.getSelection(),!p||p.isCollapsed&&!p.toString().trim()))return f;var q=a.getElementsByTagName("a");if(q)for(var h=0;h<q.length;h++){var g=q[h];if(g&&(n||p.containsNode(g,!0)))try{var e=g.href;e&&!d[e]&&b.test(e)&&(d[e]=f.push([e,2,g.download||null,g.innerText.trim()||g.title]));c&&d[e]&&(l+=g.innerText,
l+="\n")}catch(u){}}if(q=a.getElementsByTagName("area"))for(h=0;h<q.length;h++)if((g=q[h])&&(n||p.containsNode(g,!0)))try{(e=g.href)&&!d[e]&&b.test(e)&&(d[e]=f.push([e,2,null,g.alt]))}catch(u){}if(q=n&&a.getElementsByTagName("iframe"))for(h=0;h<q.length;h++)if((g=q[h])&&(n||p.containsNode(g,!0)))try{(e=g.src)&&!d[e]&&b.test(e)&&(d[e]=f.push([e,4]))}catch(u){}if(h=c&&p.toString())for(var r=this.h(h),g=this.h(l),h=0;h<r.length;h++)(e=r[h])&&!d[e]&&b.test(e)&&0>g.indexOf(e)&&(d[e]=f.push([e,1]));if(c=
c&&a.getElementsByTagName("textarea"))for(h=0;h<c.length;h++){var g=c[h],l=g.selectionStart,q=g.selectionEnd,t=p.isCollapsed&&l<q;if(g&&(t||p.containsNode(g,!0)))try{for(var v=g.value,r=this.h(t?v.substring(l,q):v),g=0;g<r.length;g++)(e=r[g])&&!d[e]&&b.test(e)&&(d[e]=f.push([e,1]))}catch(u){}}if(r=(n||!f.length)&&a.getElementsByTagName("img"))for(h=0;h<r.length;h++)if((g=r[h])&&(n||p.containsNode(g,!0)))try{(e=g.src)&&!d[e]&&b.test(e)&&(d[e]=f.push([e,3,null,"<<<=IDMTRANSMITIMGPREFIX=>>>"+g.alt])),
n&&g.onclick&&(m+=g.onclick,m+="\n")}catch(u){}if(e=n&&a.getElementsByTagName("script")){for(h=0;h<e.length;h++)m+=e[h].innerText,m+="\n";for(m=this.h(m);m.length;)(e=m.shift())&&!d[e]&&b.test(e)&&(d[e]=f.push([e,5]))}return f};k.V=function(a,b){for(var c=this.u(document,a,b),f=document.getElementsByTagName("iframe"),d=Array.prototype.push,l=0;l<f.length;l++)try{var m=f[l],n=m.contentDocument;n&&!m.src&&d.apply(c,this.u(n,a,b))}catch(p){}return c};k.H=function(a){x[a.keyCode]&&this.a.postMessage([31,
a.keyCode,"keydown"==a.type])};k.ba=function(a){this.L&&this.a.postMessage([28]);if(0==a.button){var b=a.view.getSelection();b&&b.isCollapsed&&!b.toString().trim()&&(this.c=1);this.a.postMessage([32,a.button,!0])}};k.da=function(a){if(0==a.button){this.B=a.clientX;this.C=a.clientY;this.a.postMessage([32,a.button,!1]);var b=a.view.getSelection();b&&this.c&&(this.c=b.isCollapsed&&!b.toString().trim()?0:2)&&this.a.postMessage([26,a.clientX,a.clientY,this.A()])}};k.ca=function(){2==this.c&&(this.c=0)};
k.aa=function(){this.c=0;this.a.postMessage([33])};k.fa=function(){this.a.postMessage([29])};k.ea=function(a){a=a.target;this.a.postMessage([30,a.innerWidth,a.innerHeight])};k.Z=function(a){var b=a.target,c=b.localName;0<=C.indexOf(c)&&a.url&&(b=this.o(b),this.a.postMessage([25,b,c,a.url]))};k.$=function(){this.f=!0;var a;try{a=window.top.document.getElementsByTagName("title")[0]}catch(c){}if(a){var b=this.l;b||(this.l=b=new MutationObserver(this.I.bind(this)));b.observe(a,{childList:!0})}this.M&&
this.m()};k.I=function(a){this.f=!0;a&&(window.clearTimeout(this.s),this.s=null);a=this.J;for(var b;b=a.shift();)b.shift().apply(this,b)};k.S=function(){this.l&&this.f&&(this.f=!1,this.s=window.setTimeout(this.I.bind(this,!1),3E3))};k.j=function(){if(this.f)return!0;var a=Array.prototype.slice.call(arguments);a.unshift(arguments.callee.caller);this.J.push(a);return!1};k.onMessage=function(a){switch(a[0]){case 11:var b=a[2];if(b){this.D=b;try{window.frameElement&&window.frameElement.setAttribute("__idm_frm__",
b)}catch(f){}}a[3]&&this.w();a[4]&&this.m();break;case 17:this.S();a[1]&&this.w();a[2]&&this.m(!0);break;case 12:var b=this.V(a[4]?new RegExp(a[4],"i"):null,a[2]),c=[27,a[1],this.D,b.length];a[3]||(c[4]=b,c[5]=window.location.href,this.O&&(c[6]=window.location.href,c[7]=document.title));this.a.postMessage(c);break;case 13:this.L=a[1];break;case 14:this.g(a[1]);break;case 15:this.X(a);break;case 16:this.Y(a);break;case 18:this.W(a)}};k.b=function(a){var b=Array.prototype.slice.call(arguments);b[2]=
b[2].bind(this);this.G.push(b);a.addEventListener.apply(a,b.slice(1))};k.R=function(){for(var a;a=this.G.shift();){var b=a.shift();b.removeEventListener.apply(b,a)}this.a=this.K=null;window.__idm_init__=!1};new w}!0;
