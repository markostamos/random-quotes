(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(21)},15:function(t,e,a){},19:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(3),c=a.n(r),s=(a(15),a(1)),i=a.n(s),l=a(4),u=a(5),h=a(6),m=a(8),d=a(7),f=a(9),p=(a(19),["#008E9B","#008F7A","#4B4453","#00C9A7","#C34A36","#B25B00","#402E32","#812A00"]),w=function(t){function e(){var t,a;Object(u.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(n)))).state={text:void 0,author:void 0,color:void 0},a.getQuote=Object(l.a)(i.a.mark(function t(){var e,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://talaikis.com/api/quotes/random/");case 2:return e=t.sent,t.next=5,e.json();case 5:o=t.sent,a.setState(function(t){return{text:o.quote,author:o.author,color:p[Math.floor(Math.random()*p.length)]}});case 7:case"end":return t.stop()}},t,this)})),a}return Object(f.a)(e,t),Object(h.a)(e,[{key:"componentWillMount",value:function(){this.getQuote()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App",style:{backgroundColor:this.state.color}},n.a.createElement("div",{className:"card",id:"quote-box"},n.a.createElement("div",{className:"mycontainer"},n.a.createElement("i",{class:"fas fa-quote-left"}),n.a.createElement("p",{id:"text",style:{color:this.state.color}},this.state.text),n.a.createElement("i",{class:"fas fa-quote-right"}),n.a.createElement("p",{id:"author",style:{color:this.state.color}},"-"+this.state.author)),n.a.createElement("hr",null),n.a.createElement("div",{class:"footer"},n.a.createElement("a",{id:"tweeet-quote",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+this.state.text+'" \n-'+this.state.author),target:"_blank"}," ",n.a.createElement("i",{class:"fab fa-twitter myicon",style:{backgroundColor:this.state.color}})),n.a.createElement("button",{id:"new-quote",style:{backgroundColor:this.state.color},onClick:this.getQuote},"Generate Quote"))))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.0da7da14.chunk.js.map