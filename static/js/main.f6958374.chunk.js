(window["webpackJsonphooked-on-react-quizz"]=window["webpackJsonphooked-on-react-quizz"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),s=(n(9),n(1)),i=(n(10),function(e){var t=e.setPage,n=(e.score,e.setScore,e.username),a=e.setUsername;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"username"},r.a.createElement("p",{className:"display-username"},"You're playing as: ",n.slice(0,1).toUpperCase().concat(n.slice(1))),r.a.createElement("input",{id:"username",className:"input-username",onChange:function(e){return a(e.target.value)}}),r.a.createElement("button",{className:"button--start",onClick:function(){return t("Quiz")}},"Let's start!")))}),l=[{key:1,question:"What does React Strict Mode do?",answers:[{key:11,text:"It activates additional checks and warnings for its descendants.",isCorrect:!0},{key:12,text:"It eliminates some silent errors by changing them to throw errors.",isCorrect:!1},{key:13,text:"It helps with maintaining backward compatibility.",isCorrect:!1}]},{key:2,question:"What are the names of the two main functions used for SSR from ReactDOMServer and ReactDOM?",answers:[{key:21,text:"ReactDOMServer.renderToHTML() and ReactDOM.render()",isCorrect:!1},{key:22,text:"ReactDOMServer.renderToMarkup() and ReactDOM.create()",isCorrect:!1},{key:23,text:"ReactDOMServer.renderToString() and ReactDOM.hydrate()",isCorrect:!0}]},{key:3,question:"Select the correct regarding shallow rendering in React?",answers:[{key:31,text:"It lets you render a component one level deep",isCorrect:!0},{key:32,text:"It is dependant on the behavior of child components",isCorrect:!1},{key:33,text:"It requries the DOM",isCorrect:!1}]}],u=function(e){var t=e.setPage,n=e.score,c=e.setScore,o=Object(a.useState)(0),i=Object(s.a)(o,2),u=i[0],m=i[1],d=Object(a.useState)(l[u]),h=Object(s.a)(d,2),g=h[0],p=h[1],E=Object(a.useState)(!1),b=Object(s.a)(E,2),k=b[0],y=b[1];return Object(a.useEffect)((function(){u>=l.length?t("Score"):(p(l[u]),y(!1))}),[u]),l[u]&&r.a.createElement("div",null,r.a.createElement("h1",null,"Quizz page"),r.a.createElement("p",null,r.a.createElement("i",null,"You must select the correct answer to proceed to the next question")),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,l[u].question),g.answers.map((function(e,t){return r.a.createElement("div",{className:"container",key:e.text},r.a.createElement("input",{type:"radio",key:e.key,value:e.text,id:e.text,name:"answer",onChange:function(t){return y(e.isCorrect)}}),r.a.createElement("label",{value:e.text,id:e.text},e.text))}))),r.a.createElement("button",{onClick:function(e){!0===k?(m(u+1),c(n+1)):alert("That's incorrect. Try again!")}},"Answer"),r.a.createElement("button",{onClick:function(){return t("Score")}},"Finish"))||r.a.createElement("div",null,"error")},m=function(e){var t=e.setPage,n=e.username,a=e.score;return r.a.createElement("div",null,r.a.createElement("h1",null,"Well done, ",n.slice(0,1).toUpperCase().concat(n.slice(1)),", your score is: ",a),r.a.createElement("button",{onClick:function(){return t("WelcomePage")}},"Play again!"))};var d=function(){var e=Object(a.useState)("WelcomePage"),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("guest"),l=Object(s.a)(o,2),d=l[0],h=l[1],g=Object(a.useState)(0),p=Object(s.a)(g,2),E=p[0],b=p[1];return r.a.createElement(r.a.Fragment,null,"WelcomePage"===n&&r.a.createElement(i,{setPage:c,score:E,setScore:b,username:d,setUsername:h}),"Quiz"===n&&r.a.createElement(u,{setPage:c,score:E,setScore:b}),"Score"===n&&r.a.createElement(m,{setPage:c,score:E,username:d}))};o.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.f6958374.chunk.js.map