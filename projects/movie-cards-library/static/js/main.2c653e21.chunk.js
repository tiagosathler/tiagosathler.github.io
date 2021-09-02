(this["webpackJsonpmovie-library-cards"]=this["webpackJsonpmovie-library-cards"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),s=a.n(r),o=(a(12),a(13),a(1)),l=a(2),c=a(4),m=a(3),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"movie-card-header"},i.a.createElement("h1",{className:"page-title"},"Movie Cards Library"))}}]),a}(i.a.Component),u=function(e){var t=Math.round(120*e);return"hsl(".concat(t,", 100%, 50%)")},p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.rating,t={width:"".concat(100*e/5,"px"),backgroundColor:u(e/5)};return i.a.createElement("div",{className:"movie-card-rating"},i.a.createElement("div",{className:"stars-container"},i.a.createElement("div",{style:t,className:"stars"},i.a.createElement("span",{className:"rating"},e))))}}]),a}(i.a.Component);p.defaultProps={rating:0};var d=p,v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.subtitle,n=e.storyline,r=e.rating,s=e.imagePath;return i.a.createElement("section",{className:"movie-card"},i.a.createElement("img",{src:s,alt:t,className:"movie-card-image"}),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("h4",{className:"movie-card-title"},t),i.a.createElement("h5",{className:"movie-card-subtitle"},a),i.a.createElement("p",{className:"movie-card-storyline"},n),i.a.createElement(d,{rating:r})))}}]),a}(i.a.Component),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.movies;return i.a.createElement("main",{className:"movie-list"},e.map((function(e,t){var a="Movie Title ".concat(t+1);return i.a.createElement(v,{movie:e,key:a})})))}}]),a}(i.a.Component);g.defaultProps={movies:[{title:"",subtitle:"",storyline:"",rating:0,imagePath:""}]};var y=g,f=[{title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg"},{title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.1,imagePath:"images/Final_Fantasy_Spirits_Within.jpg"},{title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:2.9,imagePath:"images/Ghost_In_The_Shell_2_0.jpg"},{title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:2,imagePath:"images/Appleseed_Alpha.jpg"},{title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:.9,imagePath:"images/Resident_Evil_Vendetta.jpg"}];var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement(y,{movies:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2c653e21.chunk.js.map