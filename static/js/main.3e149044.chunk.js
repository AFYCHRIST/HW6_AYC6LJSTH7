(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.20700fca.PNG"},18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=(a(23),a(24),a(2)),s=a(3),i=a(5),u=a(4),h=a(16),m=a.n(h),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("img",{className:"img",src:m.a,alt:"logo",width:"100px",height:"100px"}),c.a.createElement("p",{className:"navbar"},"GHANA COVID-19 UPDATE INFOMATION"))}}]),a}(n.Component),d=a(17),E=a.n(d),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={gh:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://corona.lmao.ninja/v2/countries","/gh");E.a.get(t).then((function(e){return e.data})).then((function(t){e.setState({gh:t}),console.log(e.state.gh)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h3",null,"Active Cases"),c.a.createElement("h4",null,this.state.gh.active)),c.a.createElement("div",{className:"col"},c.a.createElement("h3",null,"Recovery Cases"),c.a.createElement("h4",null,this.state.gh.recovered)),c.a.createElement("div",{class:"col"},c.a.createElement("h3",null,"Death Cases"),c.a.createElement("h4",null,this.state.gh.deaths)),c.a.createElement("div",{class:"col"},c.a.createElement("h3",null,"Total Cases"),c.a.createElement("h4",null,this.state.gh.cases))))}}]),a}(n.Component);var g=function(){return c.a.createElement("div",{className:"mycontainer"},c.a.createElement(v,null),c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3e149044.chunk.js.map