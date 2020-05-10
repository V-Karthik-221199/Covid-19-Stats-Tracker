(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{113:function(e,t,a){e.exports={container:"Chart_container__1ce5f"}},114:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__27R5W"}},115:function(e,t,a){e.exports=a.p+"static/media/covid-19.d7265326.png"},121:function(e,t,a){e.exports=a(320)},17:function(e,t,a){e.exports={container:"Cards_container__zi8LG",card:"Cards_card__1WBv5",infected:"Cards_infected__2DGHu",recovered:"Cards_recovered__3NHzA",deaths:"Cards_deaths__2S5Vq"}},320:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(105),o=a.n(c),u=a(7),i=a.n(u),s=a(13),l=a(106),d=a(107),p=a(118),m=a(117),f=a(337),h=a(341),v=a(338),b=a(339),g=a(17),_=a.n(g),E=a(45),y=a.n(E),w=a(46),x=a.n(w),C=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:3,className:x()(_.a.card,_.a.infected,_.a.car)},r.a.createElement(v.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textPrimary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases"))),r.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:3,className:x()(_.a.card,_.a.recovered)},r.a.createElement(v.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries"))),r.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:3,className:x()(_.a.card,_.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths"))))):"Loading..."},k=a(44),S=a(47),j=a.n(S),O="https://covid19.mathdro.id/api",D=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r,c,o,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O,t&&(a="".concat(O,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:s});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(O,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(O,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=a(65),V=a(113),I=a.n(V),z=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(k.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=p.length?r.a.createElement(R.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,h=a?r.a.createElement(R.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(255,0,0,0.5)","rgba(0,255,0,0.5)","rgba(0,0,255,0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:I.a.container},u?h:f)},B=a(342),G=a(340),P=a(114),U=a.n(P),F=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(k.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(B.a,{className:U.a.formControl},r.a.createElement(G.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},H=a(48),J=a.n(H),L=a(115),W=a.n(L),Y=a(116),q=a.n(Y),M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:J.a.container},r.a.createElement("img",{src:W.a,className:J.a.image,alt:"COVID-19"}),r.a.createElement(q.a,{className:J.a.particles,params:{particles:{number:{value:8,density:{enable:!0,value_area:800}},line_linked:{enable:!1},move:{speed:1,out_mode:"out"},shape:{type:["image"],image:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png",height:20,width:23},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png",height:20,width:20},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png",height:20,width:20}]},color:{value:"#FF0000"},size:{value:30,random:!1,anim:{enable:!0,speed:4,size_min:10,sync:!1}}},retina_detect:!1}}),r.a.createElement(C,{data:t}),r.a.createElement(F,{handleCountryChange:this.handleCountryChange}),r.a.createElement(z,{data:t,country:a}))}}]),a}(n.Component);o.a.render(r.a.createElement(M,null),document.getElementById("root"))},48:function(e,t,a){e.exports={container:"App_container__3YlIu",image:"App_image__3flGb",particles:"App_particles__Eh1zY"}}},[[121,1,2]]]);
//# sourceMappingURL=main.5e24d5e2.chunk.js.map