(this.webpackJsonpflames=this.webpackJsonpflames||[]).push([[0],{34:function(e,a,t){e.exports=t(96)},39:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(26),c=t.n(r),o=t(27),s=t(28),i=t(29),m=t(32),u=t(30),h=t(33),E=(t(39),t(31)),b=t(5),d=t(6),f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(o.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.calculate()},t.calculate=function(){for(var e=t.state.firstname,a=t.state.secondname,n=0;n<e.length;n++)for(var l=0;l<a.length;l++)if(e.charAt(n)===a.charAt(l)){e=e.replace(e.charAt(n),""),a=a.replace(a.charAt(l),""),n--;break}for(var r,c=e.length+a.length,o=c%6,s="FLAMES",i=0;i<5;i++)o=c%(6-i),s=(s=s.slice(o)+s.slice(0,o)).replace(s.charAt(s.length-1),"");"F"===s?r="You are Just Friends..":"L"===s?r="OMG.. You're Lovers..!!":"A"===s?r="Attraction":"M"===s?r="May be you'll get Married..!!":"E"===s?r="You're Enemies.. You hate each other..":"S"===s&&(r="Your relation is Sister and Brother.."),console.log(t.state.result),t.setState({result:s,rtext:r})},t.state={firstname:"",secondname:"",result:"",rtext:null},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"FLAMES"),l.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"firstname"},"Your Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",color:"black",value:this.state.firstname,id:"firstname",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"secondname"},"Your Crush's Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"secondname",value:this.state.secondname,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.handleSubmit},"Go")),l.a.createElement(E.Animated,{animationIn:"fadeIn",animationOut:"fadeOut",isVisible:!0},l.a.createElement("div",null,l.a.createElement("h2",null,this.state.rtext))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"facebook.com/vinay.modepalli/",className:"facebook social"},l.a.createElement(b.a,{icon:d.a,size:"2x"}))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://www.instagram.com/iam__vinaykumar/",className:"instagram social"},l.a.createElement(b.a,{icon:d.c,size:"2x"}))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://github.com/VinayModepalli",className:"github social"},l.a.createElement(b.a,{icon:d.b,size:"2x"}))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://www.youtube.com/channel/UCT-PxxuoCnyKeLv6DcLcCJg",className:"youtube social"},l.a.createElement(b.a,{icon:d.d,size:"2x"}))))),l.a.createElement("br",null),l.a.createElement("h1",null,l.a.createElement("strong",null,"Vinay Works")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.413569b4.chunk.js.map