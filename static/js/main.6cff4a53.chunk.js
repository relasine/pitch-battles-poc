(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/claw_1.ec0b360e.png"},function(t,e,a){t.exports=a.p+"static/media/claw_2.fb286121.png"},function(t,e,a){t.exports=a.p+"static/media/claw_3.bb5985f4.png"},function(t,e,a){t.exports=a.p+"static/media/claw_4.dabc6793.png"},function(t,e,a){t.exports=a.p+"static/media/claw_5.323d9f8e.png"},function(t,e,a){t.exports=a.p+"static/media/claw_6.8b0786c5.png"},function(t,e,a){t.exports=a.p+"static/media/slash1.25910cfa.png"},function(t,e,a){t.exports=a.p+"static/media/slash2.43791d0e.png"},function(t,e,a){t.exports=a.p+"static/media/slash3.6b74cfca.png"},function(t,e,a){t.exports=a.p+"static/media/slash4.6a639305.png"},function(t,e,a){t.exports=a.p+"static/media/slash5.f86e7aa2.png"},function(t,e,a){t.exports=a(40)},,,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var i=a(0),n=a.n(i),r=a(7),c=a.n(r),s=(a(24),a(1)),l=a(2),o=a(4),u=a(3),p=a(5),m=(a(26),a(8)),h=a.n(m),f=a(9),d=a.n(f),v=a(10),b=a.n(v),y=a(11),E=a.n(y),g=a(12),S=a.n(g),w=a(13),O=a.n(w),j=a(14),k=a.n(j),N=a(15),x=a.n(N),T=a(16),H=a.n(T),L=a(17),P=a.n(L),C=a(18),G=a.n(C),B=function(){return n.a.createElement("div",null,n.a.createElement("img",{src:h.a,alt:"claw1"}),n.a.createElement("img",{src:d.a,alt:"claw2"}),n.a.createElement("img",{src:b.a,alt:"claw3"}),n.a.createElement("img",{src:E.a,alt:"claw4"}),n.a.createElement("img",{src:S.a,alt:"claw5"}),n.a.createElement("img",{src:O.a,alt:"claw6"}),n.a.createElement("img",{src:k.a,alt:"slash1"}),n.a.createElement("img",{src:x.a,alt:"slash2"}),n.a.createElement("img",{src:H.a,alt:"slash3"}),n.a.createElement("img",{src:P.a,alt:"slash4"}),n.a.createElement("img",{src:G.a,alt:"slash5"}))},A=(a(28),a(30),function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(o.a)(this,Object(u.a)(e).call(this))).state={},t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"player ".concat(this.props.type," ").concat(this.props.status)},n.a.createElement("div",{className:"player-hit ".concat(this.props.status)}))}}]),e}(i.Component)),_=(a(32),function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(o.a)(this,Object(u.a)(e).call(this))).state={},t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"bird ".concat(this.props.status)},n.a.createElement("div",{className:"bird-hit ".concat(this.props.status)}))}}]),e}(i.Component)),I=(a(34),function(t){var e=t.count.map(function(e,a){return n.a.createElement("div",{key:"".concat(t.char).concat(a),className:"heart-point"})});return n.a.createElement("section",{className:"hearts ".concat(t.char)},e)}),R=(a(36),function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(u.a)(e).call(this))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"staff"},n.a.createElement("div",{className:"clef ".concat(this.props.clef)}),n.a.createElement("div",{className:"note ".concat(this.props.currentPitch)}))}}]),e}(i.Component)),M=(a(38),function(t){return n.a.createElement("div",{className:"".concat(t.letter," pitch"),onClick:function(){t.submitLetter(t.letter)}},t.letter)}),J=function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(u.a)(e).call(this))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.submitLetter;return n.a.createElement("section",{className:"input-section"},n.a.createElement(M,{submitLetter:t,letter:"a"}),n.a.createElement(M,{submitLetter:t,letter:"b"}),n.a.createElement(M,{submitLetter:t,letter:"c"}),n.a.createElement(M,{submitLetter:t,letter:"d"}),n.a.createElement(M,{submitLetter:t,letter:"e"}),n.a.createElement(M,{submitLetter:t,letter:"f"}),n.a.createElement(M,{submitLetter:t,letter:"g"}))}}]),e}(i.Component),V={flute:{name:"flute",clef:"treble",pitches:[{pitch:"f",position:"space-one",level:3},{pitch:"g",position:"line-two",level:3},{pitch:"a",position:"space-two",level:2},{pitch:"b",position:"line-three",level:1},{pitch:"c",position:"space-three",level:1},{pitch:"d",position:"line-four",level:1},{pitch:"e",position:"space-four",level:1},{pitch:"f",position:"line-five",level:1},{pitch:"g",position:"above-space-one",level:2},{pitch:"a",position:"above-line-one",level:2},{pitch:"b",position:"above-space-two",level:3}]},clarinet:{name:"clarinet",clef:"treble",pitches:[{pitch:"g",position:"below-space-three",level:3},{pitch:"a",position:"below-line-two",level:3},{pitch:"b",position:"below-space-two",level:2},{pitch:"c",position:"below-line-one",level:1},{pitch:"d",position:"below-space-one",level:1},{pitch:"e",position:"line-one",level:1},{pitch:"f",position:"space-one",level:1},{pitch:"g",position:"line-two",level:1},{pitch:"a",position:"space-two",level:2},{pitch:"b",position:"line-three",level:2},{pitch:"c",position:"space-three",level:4},{pitch:"d",position:"line-four",level:4},{pitch:"e",position:"space-four",level:4},{pitch:"f",position:"line-five",level:4},{pitch:"g",position:"above-space-one",level:4}]},saxophone:{},trumpet:{},horn:{},tromboneBaritone:{}},W=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(o.a)(this,Object(u.a)(e).call(this))).setupGame=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"flute",a=V[e].pitches.filter(function(e){return e.level<=t.state.level});t.setState({birdHearts:a,instrument:e},t.setRandomPitch)},t.setRandomPitch=function(){var e=Math.floor(Math.random()*t.state.birdHearts.length),a=t.state.birdHearts[e];t.setState({currentPitch:a})},t.submitLetter=function(e){e===t.state.currentPitch.pitch?t.playerAttack():t.birdAttack()},t.playerAttack=function(){if("attack"!==t.state.playerStatus&&"hit"!==t.state.playerStatus&&!t.state.gameOver){t.setState({playerStatus:"attack",birdStatus:"hit"});var e=setTimeout(t.hurtBird,750);t.timeouts.push(e)}},t.birdAttack=function(){if("attack"!==t.state.birdStatus&&"hit"!==t.state.birdStatus&&!t.state.gameOver){t.setState({birdStatus:"attack",playerStatus:"hit"});var e=setTimeout(t.hurtPlayer,700);t.timeouts.push(e)}},t.hurtBird=function(){var e=t.state.birdHearts.findIndex(function(e){return e===t.state.currentPitch}),a=t.state.birdHearts.map(function(t){return t});if(a.splice(e,1),a.length>0)t.setState({playerStatus:"idle",birdStatus:"idle",birdHearts:a}),t.timeouts=t.timeouts.filter(function(t){return"hurtBirdTimeout"!==t}),t.setRandomPitch();else{t.setState({playerStatus:"idle",birdStatus:"dead",birdHearts:a,gameOver:!0}),t.timeouts=t.timeouts.filter(function(t){return"hurtBirdTimeout"!==t});var i=setTimeout(t.victory,2e3);t.timeouts.push(i)}},t.hurtPlayer=function(){var e=t.state.playerHearts.map(function(t){return t});e.shift(),e.length>0?(t.setState({playerStatus:"idle",birdStatus:"idle",playerHearts:e}),t.timeouts=t.timeouts.filter(function(t){return"hurtPlayerTimeout"!==t})):t.setState({playerStatus:"dead",birdStatus:"idle",playerHearts:e,gameOver:!0})},t.victory=function(){t.setState({playerStatus:"victory"}),t.timeouts=t.timeouts.filter(function(t){return"victoryTimeout"!==t})},t.switchGender=function(){t.state.gameOver||("player-one"===t.state.playerType?t.setState({playerType:"player-two"}):t.setState({playerType:"player-one"}))},t.resetGame=function(){t.timeouts.forEach(function(t){clearTimeout(t)}),t.setState({playerStatus:"idle",playerHearts:[0,0,0],birdStatus:"idle",gameOver:!1,level:1},t.setupGame)},t.nextLevel=function(){"victory"===t.state.playerStatus&&t.setState({level:t.state.level+1,playerStatus:"idle",birdStatus:"idle",gameOver:!1},t.setupGame)},t.state={playerStatus:"idle",playerHearts:[0,0,0],playerType:"player-one",birdStatus:"idle",birdHearts:[],gameOver:!1,currentPitch:void 0,level:1,instrument:void 0},t.timeouts=[],t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setupGame(this.props.instrument)}},{key:"render",value:function(){return n.a.createElement("main",{className:"game-wrapper"},n.a.createElement("h1",{className:"game-title"},"PITCH BATTLES"),n.a.createElement("p",{className:"description"},"Identify the pitch! Slay the beast!"),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("button",{onClick:this.switchGender},"switch character"),n.a.createElement("button",{onClick:this.resetGame},"reset")),n.a.createElement("section",{className:"forest",onClick:this.nextLevel},n.a.createElement("div",{className:"screen-filter ".concat(this.state.playerStatus," ")}),n.a.createElement("h1",{className:"victory-text ".concat(this.state.playerStatus)},"VICTORY"),this.state.level<3&&n.a.createElement("p",{className:"next-level-text ".concat(this.state.playerStatus)},"click to start the next level..."),n.a.createElement("h1",{className:"game-over-text ".concat(this.state.playerStatus)},"GAME OVER"),n.a.createElement(I,{char:"player-life",count:this.state.playerHearts}),n.a.createElement(A,{type:this.state.playerType,status:this.state.playerStatus}),n.a.createElement(_,{status:this.state.birdStatus}),n.a.createElement(I,{char:"bird-life",count:this.state.birdHearts})),this.state.currentPitch&&n.a.createElement(R,{currentPitch:this.state.currentPitch.position}),n.a.createElement(J,{submitLetter:this.submitLetter}))}}]),e}(i.Component),D=function(t){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(W,null),n.a.createElement("div",{className:"preloading"},n.a.createElement(B,null)))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[19,2,1]]]);
//# sourceMappingURL=main.6cff4a53.chunk.js.map