(this["webpackJsonpjson-beautifier"]=this["webpackJsonpjson-beautifier"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),u=a.n(n),s=a(3),r=a.n(s),o=(a(13),a(4)),l=a(5),c=a(1),i=a(7),p=a(6),m=(a(14),a(15),function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={myInput:"",myOutput:""},n.prepareOutput=n.prepareOutput.bind(Object(c.a)(n)),n.updateData=n.updateData.bind(Object(c.a)(n)),document.body.style="background: #282c34;",n}return Object(l.a)(a,[{key:"prepareOutput",value:function(){for(var e=this.state.myInput.length,t=0,a=this.state.myInput[t],n="",u=[],s=!1,r=0;t<e;){if(a=this.state.myInput[t],"{[".includes(a)?(r++,console.log("tabAmount"+r)):"]}".includes(a)&&r--,"{},".includes(a))if(u.length>0)n+=a;else if("\n"!=this.state.myInput[t+1]){if(n+=a,n+="\n",r>0)for(var o=0;o<r;o++)n+="\t"}else n+=a;else"'\"".includes(a)&&(s?(u.pop(),s=!1):(u.push(a),s=!0)),n+=a;t++}this.setState({myOutput:n})}},{key:"updateData",value:function(e){this.setState({myInput:e.target.value})}},{key:"render",value:function(){return u.a.createElement("div",{className:"App"},u.a.createElement("center",null,u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("h3",{className:"App-header"},"Input"),u.a.createElement("textarea",{rows:"10",cols:"50",value:this.state.myInput,onChange:this.updateData,className:"App-textbox"},this.state.myInput)),u.a.createElement("td",null,u.a.createElement("h3",{className:"App-header"},"Output"),u.a.createElement("textarea",{rows:"10",cols:"50",value:this.state.myOutput,className:"App-textbox"}))))),u.a.createElement("button",{onClick:this.prepareOutput,className:"App-button"},"Beautify")))}}]),a}(u.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.43a83d3f.chunk.js.map