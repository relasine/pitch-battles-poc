(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/claw_1.ec0b360e.png"},function(t,e,a){t.exports=a.p+"static/media/claw_2.fb286121.png"},function(t,e,a){t.exports=a.p+"static/media/claw_3.bb5985f4.png"},function(t,e,a){t.exports=a.p+"static/media/claw_4.dabc6793.png"},function(t,e,a){t.exports=a.p+"static/media/claw_5.323d9f8e.png"},function(t,e,a){t.exports=a.p+"static/media/claw_6.8b0786c5.png"},function(t,e,a){t.exports=a.p+"static/media/slash1.25910cfa.png"},function(t,e,a){t.exports=a.p+"static/media/slash2.43791d0e.png"},function(t,e,a){t.exports=a.p+"static/media/slash3.6b74cfca.png"},function(t,e,a){t.exports=a.p+"static/media/slash4.6a639305.png"},function(t,e,a){t.exports=a.p+"static/media/slash5.f86e7aa2.png"},function(t,e,a){t.exports=a(40)},,,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(7),i=a.n(c),s=(a(24),a(1)),l=a(2),u=a(4),o=a(3),m=a(5),p=(a(26),a(8)),h=a.n(p),d=a(9),f=a.n(d),b=a(10),y=a.n(b),v=a(11),E=a.n(v),g=a(12),O=a.n(g),S=a(13),j=a.n(S),w=a(14),k=a.n(w),N=a(15),H=a.n(N),T=a(16),P=a.n(T),x=a(17),L=a.n(x),C=a(18),B=a.n(C),A=function(){return n.a.createElement("div",null,n.a.createElement("img",{src:h.a,alt:"claw1"}),n.a.createElement("img",{src:f.a,alt:"claw2"}),n.a.createElement("img",{src:y.a,alt:"claw3"}),n.a.createElement("img",{src:E.a,alt:"claw4"}),n.a.createElement("img",{src:O.a,alt:"claw5"}),n.a.createElement("img",{src:j.a,alt:"claw6"}),n.a.createElement("img",{src:k.a,alt:"slash1"}),n.a.createElement("img",{src:H.a,alt:"slash2"}),n.a.createElement("img",{src:P.a,alt:"slash3"}),n.a.createElement("img",{src:L.a,alt:"slash4"}),n.a.createElement("img",{src:B.a,alt:"slash5"}))},_=(a(28),a(30),function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(u.a)(this,Object(o.a)(e).call(this))).state={},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"player ".concat(this.props.type," ").concat(this.props.status)},n.a.createElement("div",{className:"player-hit ".concat(this.props.status)}))}}]),e}(r.Component)),G=(a(32),function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(u.a)(this,Object(o.a)(e).call(this))).state={},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"bird ".concat(this.props.status)},n.a.createElement("div",{className:"bird-hit ".concat(this.props.status)}))}}]),e}(r.Component)),I=(a(34),function(t){var e=t.count.map(function(e,a){return n.a.createElement("div",{key:"".concat(t.char).concat(a),className:"heart-point"})});return n.a.createElement("section",{className:"hearts ".concat(t.char)},e)}),M=(a(36),function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(o.a)(e).call(this))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"staff"},n.a.createElement("div",{className:"clef ".concat(this.props.clef)}),n.a.createElement("div",{className:"note ".concat(this.props.currentPitch)}))}}]),e}(r.Component)),R=(a(38),function(t){return n.a.createElement("div",{className:"".concat(t.letter," pitch"),onClick:function(){t.submitLetter(t.letter)}},t.letter)}),J=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(o.a)(e).call(this))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.submitLetter;return n.a.createElement("section",{className:"input-section"},n.a.createElement(R,{submitLetter:t,letter:"a"}),n.a.createElement(R,{submitLetter:t,letter:"b"}),n.a.createElement(R,{submitLetter:t,letter:"c"}),n.a.createElement(R,{submitLetter:t,letter:"d"}),n.a.createElement(R,{submitLetter:t,letter:"e"}),n.a.createElement(R,{submitLetter:t,letter:"f"}),n.a.createElement(R,{submitLetter:t,letter:"g"}))}}]),e}(r.Component),W=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(u.a)(this,Object(o.a)(e).call(this))).submitLetter=function(e){e===t.state.currentPitch?t.playerAttack():t.birdAttack()},t.playerAttack=function(){if("attack"!==t.state.playerStatus&&"hit"!==t.state.playerStatus&&!t.state.gameOver){t.setState({playerStatus:"attack",birdStatus:"hit"});var e=setTimeout(t.hurtBird,750);t.timeouts.push(e)}},t.birdAttack=function(){if("attack"!==t.state.birdStatus&&"hit"!==t.state.birdStatus&&!t.state.gameOver){t.setState({birdStatus:"attack",playerStatus:"hit"});var e=setTimeout(t.hurtPlayer,700);t.timeouts.push(e)}},t.hurtBird=function(){var e=t.state.birdHearts.findIndex(function(e){return e===t.state.currentPitch});console.log(e);var a=t.state.birdHearts.map(function(t){return t});if(a.splice(e,1),a.length>0)t.setState({playerStatus:"idle",birdStatus:"idle",birdHearts:a}),t.timeouts=t.timeouts.filter(function(t){return"hurtBirdTimeout"!==t}),t.setRandomPitch();else{t.setState({playerStatus:"idle",birdStatus:"dead",birdHearts:a,gameOver:!0}),t.timeouts=t.timeouts.filter(function(t){return"hurtBirdTimeout"!==t});var r=setTimeout(t.victory,3e3);t.timeouts.push(r)}},t.hurtPlayer=function(){var e=t.state.playerHearts.map(function(t){return t});e.shift(),e.length>0?(t.setState({playerStatus:"idle",birdStatus:"idle",playerHearts:e}),t.timeouts=t.timeouts.filter(function(t){return"hurtPlayerTimeout"!==t})):t.setState({playerStatus:"dead",birdStatus:"idle",playerHearts:e,gameOver:!0})},t.victory=function(){t.setState({playerStatus:"victory"}),t.timeouts=t.timeouts.filter(function(t){return"victoryTimeout"!==t})},t.switchGender=function(){t.state.gameOver||("player-one"===t.state.playerType?t.setState({playerType:"player-two"}):t.setState({playerType:"player-one"}))},t.resetGame=function(){t.timeouts.forEach(function(t){clearTimeout(t)}),t.setState({playerStatus:"idle",playerHearts:[0,0,0],birdStatus:"idle",birdHearts:["a","b","c","d","e","f","g"],gameOver:!1})},t.state={playerStatus:"idle",playerHearts:[0,0,0],playerType:"player-one",birdStatus:"idle",birdHearts:["a","b","c","d","e","f","g"],gameOver:!1,currentPitch:void 0},t.timeouts=[],t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setRandomPitch()}},{key:"setRandomPitch",value:function(){var t=Math.floor(Math.random()*this.state.birdHearts.length),e=this.state.birdHearts[t];this.setState({currentPitch:e})}},{key:"render",value:function(){return n.a.createElement("main",{className:"game-wrapper"},n.a.createElement("h1",{className:"game-title"},"PITCH BATTLES"),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("button",{onClick:this.switchGender},"switch character"),n.a.createElement("button",{onClick:this.resetGame},"reset")),n.a.createElement("section",{className:"forest"},n.a.createElement(I,{char:"player-life",count:this.state.playerHearts}),n.a.createElement(_,{type:this.state.playerType,status:this.state.playerStatus}),n.a.createElement(G,{status:this.state.birdStatus}),n.a.createElement(I,{char:"bird-life",count:this.state.birdHearts})),n.a.createElement(M,{currentPitch:this.state.currentPitch}),n.a.createElement(J,{submitLetter:this.submitLetter}))}}]),e}(r.Component),D=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(W,null),n.a.createElement("div",{className:"preloading"},n.a.createElement(A,null)))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[19,2,1]]]);
//# sourceMappingURL=main.56e78d10.chunk.js.map