(this["webpackJsonppl-betting"]=this["webpackJsonppl-betting"]||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n,o,r=a(0),c=a.n(r),i=a(15),s=a.n(i),d=(a(81),a(10)),l=a(143),u=a(156),b=a(4),p=a(1);function j(e,t){switch(t.type){case n.setUser:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload});default:return e}}!function(e){e.setUser="SetUser"}(n||(n={})),function(e){e.user="User",e.admin="Admin"}(o||(o={}));var m,x=Object(r.createContext)(null),h=Object(r.createContext)((function(){})),f=function(e){var t=e.children,a=Object(r.useReducer)(j,{}),n=Object(d.a)(a,2),o=n[0],c=n[1];return Object(p.jsx)(x.Provider,{value:o,children:Object(p.jsx)(h.Provider,{value:c,children:t})})},O=a(68),g=a.n(O);function v(e,t){switch(t.type){case m.setIsFetching:return t.payload;default:return e}}!function(e){e.setIsFetching="SetIsFetching"}(m||(m={}));var y,w=Object(r.createContext)(!1),C=Object(r.createContext)((function(){return null})),k=function(e){var t=e.children,a=Object(r.useReducer)(v,!1),n=Object(d.a)(a,2),o=n[0],c=n[1];return Object(p.jsx)(w.Provider,{value:o,children:Object(p.jsx)(C.Provider,{value:c,children:t})})},S=a(9),N=a(142),T=Object(N.a)((function(e){var t=e.palette,a=e.breakpoints;return{header:{boxSizing:"border-box",width:"100%",position:"fixed",top:0,left:0,color:"#fff",zIndex:100},navigation:Object(S.a)({padding:"20px",boxSizing:"border-box",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#00000099"},a.down("md"),{padding:"10px"}),navigationFilled:{backgroundColor:"#202020",borderBottom:"3px solid ".concat(t.secondary.dark)},loader:{position:"fixed",zIndex:500,top:"80px",width:"100%"},logo:{width:"100px",height:"auto",marginRight:"auto"},username:Object(S.a)({marginRight:"10px"},a.down("md"),{display:"none"}),button:Object(S.a)({backgroundColor:t.secondary.main,textTransform:"capitalize",fontWeight:"bold",marginRight:"5px"},a.down("md"),{fontSize:"0.7rem",padding:"5px 10px"})}})),I=a(19),R=a.n(I),B=a.p+"static/media/predictor-logo.5b405207.png",P=function(e){var t,a=e.setIsModalOpen,o=T(),c=Object(r.useContext)(x),i=Object(r.useContext)(h),s=Object(r.useContext)(w),b=Object(r.useState)(!1),j=Object(d.a)(b,2),m=j[0],f=j[1],O=function(){window.scrollY>50?f(!0):f(!1)};return Object(r.useEffect)((function(){return document.addEventListener("scroll",O),function(){document.removeEventListener("scroll",O)}}),[]),r.useEffect,Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{className:o.header,children:Object(p.jsxs)("div",{className:m?R()(o.navigation,o.navigationFilled):o.navigation,children:[Object(p.jsx)("img",{src:B,className:o.logo}),Object(p.jsx)(l.a,{variant:"body1",className:o.username,children:null===c||void 0===c||null===(t=c.user)||void 0===t?void 0:t.username}),(null===c||void 0===c?void 0:c.user)?Object(p.jsx)(u.a,{variant:"contained",className:o.button,onClick:function(){return i({type:n.setUser,payload:void 0})},children:"Log Out"}):Object(p.jsx)(u.a,{variant:"contained",className:o.button,onClick:function(){return a({isOpen:!0,target:"log-in"})},children:"Log In"}),Object(p.jsx)(u.a,{variant:"contained",className:o.button,onClick:function(){return a({isOpen:!0,target:"register"})},children:"Register"})]})}),Object(p.jsx)("div",{className:o.loader,children:Object(p.jsx)(g.a,{loading:s,color:"#f88a62"})})]})},z=a(13),F=a.n(z),M=a(21),E=a(153),U=Object(N.a)((function(e){var t=e.palette,a=e.breakpoints;return{container:Object(S.a)({width:"100%",marginTop:"62px",padding:"15px",boxSizing:"border-box",boxShadow:"2px 2px 10px 5px #00000090",backgroundColor:"#2a2a2a",minHeight:"400px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},a.up("md"),{margin:"20px auto",marginTop:"110px",maxWidth:"1100px"}),error:{margin:"auto",padding:"20px",backgroundColor:t.secondary.dark,borderRadius:"2px",boxShadow:"2px 2px 15px 5px #00000060"},mainContent:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap"},rulesContainer:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",backgroundColor:"#2f2f2f",padding:"10px",borderRadius:"2px"},rulesTitle:{textAlign:"left"},rulesList:{width:"100%",listStyle:"none",textAlign:"left",marginBlockStart:"10px",marginBlockEnd:0,paddingInlineStart:0},rule:{display:"flex",alignItems:"center",marginBottom:"5px",flexShrink:0,"&::before":{content:"''",width:"6px",height:"6px",borderRadius:"50%",marginRight:"8px",flexShrink:0,backgroundColor:t.secondary.main}},ruleText:Object(S.a)({display:"flex",alignItems:"center"},a.down("md"),{display:"inline-block"}),accent:{color:t.secondary.main},accentGreen:{backgroundColor:"#39a350",padding:"2px",borderRadius:"2px"},accentBlue:{backgroundColor:"#3c87b5",padding:"2px",borderRadius:"2px"}}}));function A(e,t){switch(t.type){case y.setFixtures:return Object(b.a)(Object(b.a)({},e),{},{fixtures:t.payload});case y.setPrediction:var a;return Object(b.a)(Object(b.a)({},e),{},{fixtures:null===(a=e.fixtures)||void 0===a?void 0:a.map((function(e){return e.id===t.payload.id?t.payload:e}))});case y.setBoostedPrediction:var n;return Object(b.a)(Object(b.a)({},e),{},{fixtures:null===(n=e.fixtures)||void 0===n?void 0:n.map((function(e){return e.id===t.payload.id?Object(b.a)(Object(b.a)({},e),{},{isBoosted:!0}):Object(b.a)(Object(b.a)({},e),{},{isBoosted:!1})}))});default:return e}}!function(e){e.setFixtures="SetFixtures",e.setPrediction="setPrediction",e.setBoostedPrediction="setBoostedPrediction"}(y||(y={}));var L,W=Object(r.createContext)({}),D=Object(r.createContext)((function(){})),G=function(e){var t=e.children,a=Object(r.useReducer)(A,{}),n=Object(d.a)(a,2),o=n[0],c=n[1];return Object(p.jsx)(W.Provider,{value:o,children:Object(p.jsx)(D.Provider,{value:c,children:t})})},H=Object(r.createContext)([]),X=Object(N.a)((function(e){var t=e.palette,a=e.breakpoints;return{container:Object(S.a)({width:"100%",textAlign:"left",flexBasis:"100%",display:"flex",marginBottom:"20px"},a.up("md"),{flexBasis:"68%"}),messageContainer:{width:"100%",textAlign:"center",flexBasis:"100%",display:"flex",flexDirection:"column",marginBottom:"20px",height:"200px",justifyContent:"center",alignItems:"center"},table:{width:"100%",margin:"auto",borderRadius:"2px",boxShadow:"1px 1px 10px 3px #00000060"},tableName:{backgroundColor:t.secondary.dark,textAlign:"center",padding:"10px",borderRadius:"2px",color:"#fff"},row:{backgroundColor:"#404010"},button:{backgroundColor:t.secondary.light,textTransform:"capitalize",fontWeight:"bold",padding:"10px 50px",marginTop:"10px"},submitButton:{marginTop:"10px",backgroundColor:t.secondary.dark,width:"100%",color:"#fff",padding:"10px","&:hover":{backgroundColor:t.secondary.main}},label:{color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"8px",fontSize:"0.8rem"},accent:{color:t.secondary.main},formControl:Object(S.a)({width:"100%",display:"flex",justifyContent:"space-between",margin:"10px 0",padding:"5px"},a.up("sm"),{display:"none"}),select:{color:"#000",backgroundColor:t.secondary.main,padding:"5px",borderRadius:"2px",fontSize:"0.8rem"},customSelectMenu:{backgroundColor:t.secondary.main}}})),J=a(157),q=a(155),Y=Object(N.a)((function(e){var t=e.palette,a=e.breakpoints;return{row:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",backgroundColor:"#ffffff",position:"relative",borderBottom:"1px solid #e0e0e0"},rowSubmitted:{backgroundColor:t.secondary.light},rowExactScore:{backgroundColor:"#39a350"},rowCorrectScore:{backgroundColor:"#3c87b5"},rowIncorrectScore:{backgroundColor:"#c74c4c"},bonusButton:Object(S.a)({display:"none","&:hover":{backgroundColor:t.secondary.dark}},a.up("sm"),{display:"flex",textTransform:"capitalize",boxShadow:"1px 1px 5px 1px #00000060",minWidth:"0",backgroundColor:"#4f4f4f",color:"#fff",borderRadius:"50%",padding:"6px",marginRight:"10px",fontSize:"1rem"}),boostIcon:Object(S.a)({},a.down("sm"),{width:"0.7em",height:"0.7em"}),bonusButtonPressed:{backgroundColor:t.secondary.main},teamName:{padding:"10px",flex:1,color:"#000"},nameText:Object(S.a)({fontSize:"0.75rem"},a.up("md"),{fontSize:"0.875rem"}),scoreInputs:{},scoreInput:Object(S.a)({outline:"none",backgroundColor:"#e0e0e0",width:"25px",height:"25px",border:"none",borderRadius:"2px",margin:"0 2px",textAlign:"center",fontSize:"0.8rem",cursor:"pointer"},a.up("md"),{fontSize:"1.2rem",width:"40px",height:"40px"}),span:{color:"#000"},crest:Object(S.a)({width:"20px",height:"20px",objectFit:"contain",background:"none",strokeOpacity:0,fill:"none",fillOpacity:.5,display:"none","&: > svg":{strokeOpacity:0,fill:"none",fillOpacity:.5}},a.up("md"),{display:"block",width:"30px",height:"30px"})}})),Z=a(33),K=a.n(Z),Q=function(e){var t,a,n,o,c,i,s,d,j=e.fixture,m=Y(),x=Object(r.useContext)(H),h=Object(r.useContext)(D),f=Object(r.useContext)(W),O=Object(b.a)(Object(b.a)({},j),{},{homeTeam:Object(b.a)(Object(b.a)({},j.homeTeam),{},{crestUrl:null===(t=x.find((function(e){return e.id===j.homeTeam.id})))||void 0===t?void 0:t.crestUrl}),awayTeam:Object(b.a)(Object(b.a)({},j.awayTeam),{},{crestUrl:null===(a=x.find((function(e){return e.id===j.awayTeam.id})))||void 0===a?void 0:a.crestUrl})});return Object(p.jsxs)(E.a,{className:j.isSubmited?R()(m.rowSubmitted,m.row):m.row,children:[Object(p.jsx)(u.a,{className:j.isBoosted?R()(m.bonusButtonPressed,m.bonusButton):m.bonusButton,onClick:function(){var e;!!(null===f||void 0===f||null===(e=f.fixtures)||void 0===e?void 0:e.find((function(e){return e.isBoosted&&e.isSubmited})))||j.isSubmited||h({type:y.setBoostedPrediction,payload:{id:j.id}})},title:"double points boost",children:Object(p.jsx)(K.a,{className:m.boostIcon})}),Object(p.jsx)("img",{className:m.crest,src:O.homeTeam.crestUrl,alt:O.homeTeam.name}),Object(p.jsx)("div",{className:m.teamName,children:Object(p.jsx)(l.a,{variant:"body2",className:m.nameText,children:j.homeTeam.name.substring(0,j.homeTeam.name.length-3)})}),Object(p.jsxs)("div",{className:m.scoreInputs,children:[Object(p.jsx)("input",{disabled:O.isSubmited,className:m.scoreInput,type:"text",value:(null===(n=O.prediction)||void 0===n?void 0:n.homeTeamScore)||0===(null===(o=O.prediction)||void 0===o?void 0:o.homeTeamScore)?null===(c=O.prediction)||void 0===c?void 0:c.homeTeamScore:"",onChange:function(e){return h({type:y.setPrediction,payload:Object(b.a)(Object(b.a)({},j),{},{prediction:Object(b.a)(Object(b.a)({},j.prediction),{},{homeTeamScore:e.target.value})})})},maxLength:2}),Object(p.jsx)("span",{className:m.span,children:" : "}),Object(p.jsx)("input",{disabled:O.isSubmited,className:m.scoreInput,type:"text",value:(null===(i=O.prediction)||void 0===i?void 0:i.awayTeamScore)||0===(null===(s=O.prediction)||void 0===s?void 0:s.awayTeamScore)?null===(d=O.prediction)||void 0===d?void 0:d.awayTeamScore:"",onChange:function(e){return h({type:y.setPrediction,payload:Object(b.a)(Object(b.a)({},j),{},{prediction:Object(b.a)(Object(b.a)({},j.prediction),{},{awayTeamScore:e.target.value})})})},maxLength:2})]}),Object(p.jsx)("div",{className:m.teamName,children:Object(p.jsx)(l.a,{variant:"body2",className:m.nameText,style:{textAlign:"right"},children:j.awayTeam.name.substring(0,j.awayTeam.name.length-3)})}),Object(p.jsx)("img",{className:m.crest,src:O.awayTeam.crestUrl,alt:O.awayTeam.name})]})},V=a(69),$=a.n(V).a.create({baseURL:"https://pl-predictor-backend.herokuapp.com/",timeout:3e3,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}),_=function(e){var t,a,n,o=e.setIsModalOpen,c=e.matchdayNumber,i=e.seasonId,s=X(),d=Object(r.useContext)(W),j=Object(r.useContext)(D),h=Object(r.useContext)(x),f=Object(r.useContext)(C),O=!!(null===d||void 0===d||null===(t=d.fixtures)||void 0===t?void 0:t.find((function(e){return e.isBoosted&&e.isSubmited}))),g=function(){var e=Object(M.a)(F.a.mark((function e(){var t,a,n,o,r,s,l;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({type:m.setIsFetching,payload:!0}),e.prev=1,e.next=4,$.post("/gameweek",{gameweek:c,seasonId:i,UserId:null===h||void 0===h||null===(t=h.user)||void 0===t?void 0:t.id});case 4:return o=e.sent,r=[],null===(s=null===(a=d.fixtures)||void 0===a?void 0:a.filter((function(e){return e.prediction.homeTeamScore&&e.prediction.awayTeamScore&&!e.isResolved})).map((function(e){return e.isBoosted?Object(b.a)(Object(b.a)({},e),{},{isBoosted:!0}):Object(b.a)(Object(b.a)({},e),{},{isBoosted:!1})})))||void 0===s||s.forEach((function(e){r.push($.post("/prediction",Object(b.a)(Object(b.a)({},e),{},{GameweekPredictionId:o.data.gameweek[0].id})).catch((function(e){return console.log(e)})))})),l=null===(n=d.fixtures)||void 0===n?void 0:n.map((function(e){var t=null===s||void 0===s?void 0:s.find((function(t){return t.id===e.id}));return t?Object(b.a)(Object(b.a)({},e),{},{prediction:{homeTeamScore:t.prediction.homeTeamScore,awayTeamScore:t.prediction.awayTeamScore},isSubmited:!0,isResolved:!1,isBoosted:t.isBoosted}):e})),j({type:y.setFixtures,payload:l}),e.next=12,Promise.all(r);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:f({type:m.setIsFetching,payload:!1});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),v=Object(r.useMemo)((function(){var e,t,a=null===d||void 0===d||null===(e=d.fixtures)||void 0===e||null===(t=e.find((function(e){return e.isBoosted})))||void 0===t?void 0:t.id;return null!==a&&void 0!==a?a:""}),[d.fixtures]);return Object(p.jsx)("div",{className:s.container,children:(null===h||void 0===h?void 0:h.user)?Object(p.jsxs)("div",{className:s.table,children:[Object(p.jsx)(l.a,{className:s.tableName,variant:"body1",children:"Upcoming Matches"}),null===(a=d.fixtures)||void 0===a?void 0:a.map((function(e){return Object(p.jsx)(Q,{fixture:e},e.id)})),Object(p.jsxs)("div",{className:s.formControl,children:[Object(p.jsxs)(J.a,{className:s.label,children:[Object(p.jsx)("span",{className:s.accent,children:Object(p.jsx)(K.a,{})})," Boost"]}),Object(p.jsxs)(q.a,{className:s.select,value:v,onChange:function(e){var t,a=e.target,n=null===(t=d.fixtures)||void 0===t?void 0:t.find((function(e){return e.id===parseInt(a.value)}));O||(null===n||void 0===n?void 0:n.isSubmited)||j({type:y.setBoostedPrediction,payload:{id:null===n||void 0===n?void 0:n.id}})},classes:{selectMenu:s.customSelectMenu},inputProps:{className:s.customSelectMenu},disabled:O,children:[Object(p.jsx)("option",{value:""}),null===(n=d.fixtures)||void 0===n?void 0:n.map((function(e){return Object(p.jsx)("option",{className:s.customSelectMenu,value:e.id,children:"".concat(e.homeTeam.name.substring(0,e.homeTeam.name.length-3)," - ").concat(e.awayTeam.name.substring(0,e.awayTeam.name.length-3))},e.id)}))]})]}),Object(p.jsx)(u.a,{variant:"contained",className:s.submitButton,onClick:g,children:"Submit"})]}):Object(p.jsxs)("div",{className:s.messageContainer,children:[Object(p.jsx)(l.a,{variant:"body1",children:"Log in to place your predictions..."}),Object(p.jsx)(u.a,{variant:"contained",onClick:function(){return o({isOpen:!0,target:"log-in"})},className:s.button,children:"Log In"})]})})},ee=a(152),te=Object(N.a)((function(e){var t=e.palette,a=e.breakpoints;return{container:Object(S.a)({width:"100%",textAlign:"left",flexBasis:"100%",display:"flex",flexDirection:"column",marginBottom:"10px"},a.up("md"),{flexBasis:"28%",flexGrow:1,marginLeft:"10px"}),tableContainer:{width:"100%",margin:"auto",borderRadius:"2px",boxShadow:"1px 1px 10px 3px #00000060"},tableName:{backgroundColor:t.secondary.dark,textAlign:"center",padding:"10px",borderRadius:"2px",color:"#fff"},table:{width:"100%",tableLayout:"fixed"},tableRow:{backgroundColor:"#fff",cursor:"pointer","&:hover":{backgroundColor:"#e0e0e0"}},tableHeadRow:{backgroundColor:t.secondary.light,fontWeight:"bolder"},button:{width:"100%",marginTop:"10px",padding:"10px",backgroundColor:t.secondary.dark,color:"#fff","&:hover":{backgroundColor:t.secondary.main}},userLink:{cursor:"pointer"},showMore:{width:"100%",margin:"10px 0",color:"#fff",display:"flex",justifyContent:"center"},openTableModal:{margin:"auto",color:"#fff",cursor:"pointer"}}})),ae=a(145),ne=a(146),oe=a(147),re=a(148),ce=a(149),ie=a(150),se=a(154),de=Object(N.a)((function(e){var t=e.palette,a=e.breakpoints;return{dialogMain:Object(S.a)({width:"100%",display:"flex",flexDirection:"column",margin:"20px",alignItems:"center",padding:"5px",backgroundColor:t.secondary.main,color:"#fff",boxSizing:"border-box"},a.up("md"),{minWidth:"300px"}),username:{width:"100%",padding:"10px",borderRadius:"2px",backgroundColor:t.secondary.dark,textAlign:"center",boxSizing:"border-box"},title:{padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",color:"#000"},userPredictions:{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"},tableContainer:{width:"100%"},table:{width:"100%",margin:"auto",marginBottom:"20px",borderRadius:"2px",backgroundColor:t.secondary.light},scoreWrapper:{display:"flex",justifyContent:"center",alignItems:"center"},row:Object(S.a)({width:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"5px 10px",backgroundColor:"#ffffff",position:"relative",borderRadius:"2px",borderBottom:"1px solid #e0e0e0",boxSizing:"border-box"},a.down("md"),{padding:"2px"}),rowBoosted:{backgroundColor:t.secondary.dark,borderBottom:"1px solid ".concat(t.secondary.main)},teamName:Object(S.a)({padding:"10px",flex:1,color:"#000",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden","& > :nth-child(2)":{textAlign:"right",backgroundColor:"red"}},a.down("md"),{fontSize:"0.7rem",padding:"8px 5px"}),name:Object(S.a)({},a.down("md"),{fontSize:"0.7rem"}),crest:Object(S.a)({width:"15px",height:"15px",objectFit:"contain",background:"none",strokeOpacity:0,fill:"none",fillOpacity:.5,display:"none","&: > svg":{strokeOpacity:0,fill:"none",fillOpacity:.5}},a.up("md"),{display:"block",width:"25px",height:"25px"}),score:Object(S.a)({outline:"none",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#e0e0e0",width:"20px",height:"20px",border:"none",borderRadius:"2px",margin:"0 5px",textAlign:"center",cursor:"pointer",color:"#000"},a.up("md"),{fontSize:"1rem",width:"30px",height:"30px"}),exactScore:{backgroundColor:"#39a350"},correctScore:{backgroundColor:"#3c87b5"},incorrectScore:{backgroundColor:"#c74c4c"},span:{color:"#000"},points:{padding:"5px",borderRadius:"2px",backgroundColor:t.secondary.dark,color:"#fff"}}})),le=function(e){var t=e.isOpen,a=e.setIsOpen,n=e.player,o=(e.matchdayNumber,de()),c=Object(r.useContext)(H),i=Object(r.useState)([]),s=Object(d.a)(i,2),u=s[0],j=s[1],x=Object(r.useContext)(C),h=function(){var e=Object(M.a)(F.a.mark((function e(){var t,a,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x({type:m.setIsFetching,payload:!0}),e.prev=1,e.next=4,$.post("/userPredictions",{id:null===n||void 0===n?void 0:n.id});case 4:t=e.sent,(a=t.data.userPredictions)&&(o=[],a.forEach((function(e){var t=e.matchPredictions.reduce((function(e,t){return e+=t.points}),0);o.push(Object(b.a)(Object(b.a)({},e),{},{points:t}))})),j(o)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:x({type:m.setIsFetching,payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){t&&h()}),[t]);return Object(p.jsxs)(se.a,{classes:{paper:o.dialogMain},open:t,onClose:function(){j([]),a(!1)},children:[Object(p.jsx)(l.a,{variant:"h4",component:"h2",className:o.username,children:null===n||void 0===n?void 0:n.username}),Object(p.jsx)(E.a,{className:o.userPredictions,children:u.length>0?Object(p.jsx)("div",{className:o.tableContainer,children:u.map((function(e){return Object(p.jsxs)("div",{className:o.table,children:[Object(p.jsxs)("div",{className:o.title,children:[Object(p.jsx)(l.a,{children:"Gameweek "+e.gameweek}),Object(p.jsx)(l.a,{className:o.points,children:1===e.points?e.points+" point":e.points+" points"})]}),Object(p.jsx)("div",{children:e.matchPredictions.map((function(e){var t,a;return Object(p.jsxs)("div",{className:e.isBoosted?R()(o.rowBoosted,o.row):o.row,children:[Object(p.jsx)("img",{className:o.crest,src:null===(t=c.find((function(t){return t.name===e.homeTeamName})))||void 0===t?void 0:t.crestUrl,alt:e.homeTeamName}),Object(p.jsx)("div",{className:o.teamName,children:Object(p.jsx)(l.a,{className:o.name,variant:"body2",children:e.homeTeamName.substring(0,e.homeTeamName.length-3)})}),Object(p.jsxs)("div",{className:o.scoreWrapper,children:[Object(p.jsx)(l.a,{className:e.isExactScore?R()(o.exactScore,o.score):e.isCorrectScore?R()(o.correctScore,o.score):e.isResolved?R()(o.incorrectScore,o.score):o.score,variant:"body2",children:e.homeTeamScore}),Object(p.jsx)("span",{className:o.span,children:" : "}),Object(p.jsx)(l.a,{className:e.isExactScore?R()(o.exactScore,o.score):e.isCorrectScore?R()(o.correctScore,o.score):e.isResolved?R()(o.incorrectScore,o.score):o.score,variant:"body2",children:e.awayTeamScore})]}),Object(p.jsx)("div",{className:o.teamName,children:Object(p.jsx)(l.a,{className:o.name,variant:"body2",style:{textAlign:"right"},children:e.awayTeamName.substring(0,e.awayTeamName.length-3)})}),Object(p.jsx)("img",{className:o.crest,src:null===(a=c.find((function(t){return t.name===e.awayTeamName})))||void 0===a?void 0:a.crestUrl,alt:e.homeTeamName})]},e.id)}))})]},e.id)}))}):Object(p.jsx)(l.a,{children:"No predictions yet..."})})]})},ue=Object(N.a)((function(e){var t=e.palette,a=e.breakpoints;return{dialogMain:Object(S.a)({width:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"5px",margin:"32px",backgroundColor:t.secondary.main,color:"#fff"},a.up("md"),{minWidth:"300px"}),title:{width:"100%",padding:"10px",borderRadius:"2px",backgroundColor:t.secondary.dark,textAlign:"center",boxSizing:"border-box"},table:{width:"100%",tableLayout:"fixed"},tableRow:{backgroundColor:"#fff",cursor:"pointer","&:hover":{backgroundColor:"#e0e0e0"}},tableHeadRow:{backgroundColor:t.secondary.light,fontWeight:"bolder"}}})),be=function(e){var t=e.isOpen,a=e.setIsOpen,n=e.standings,o=ue();return Object(p.jsxs)(se.a,{classes:{paper:o.dialogMain},open:t,onClose:function(){return a(!1)},children:[Object(p.jsx)(l.a,{variant:"h4",component:"h2",className:o.title,children:"Standings"}),Object(p.jsx)(ae.a,{children:Object(p.jsxs)(ne.a,{className:o.table,children:[Object(p.jsx)(oe.a,{children:Object(p.jsxs)(re.a,{className:o.tableHeadRow,children:[Object(p.jsx)(ce.a,{size:"small",style:{width:"50px"},children:Object(p.jsx)(l.a,{variant:"body1",children:"P"})}),Object(p.jsx)(ce.a,{children:Object(p.jsx)(l.a,{variant:"body1",children:"Name"})}),Object(p.jsx)(ce.a,{align:"right",children:Object(p.jsx)(l.a,{variant:"body1",children:"Points"})})]})}),Object(p.jsx)(ie.a,{children:n.map((function(e,t){return Object(p.jsxs)(re.a,{className:o.tableRow,children:[Object(p.jsx)(ce.a,{children:Object(p.jsx)(l.a,{noWrap:!0,variant:"body1",children:t+1})}),Object(p.jsx)(ce.a,{children:Object(p.jsx)(l.a,{noWrap:!0,variant:"body1",children:e.username})}),Object(p.jsx)(ce.a,{align:"right",children:Object(p.jsx)(l.a,{variant:"body1",children:e.points})})]},e.id)}))})]})})]})};function pe(e,t){switch(t.type){case L.setUser:return t.payload}}!function(e){e.setUser="SetPlayers"}(L||(L={}));var je=Object(r.createContext)([]),me=Object(r.createContext)((function(){return null})),xe=function(e){var t=e.children,a=Object(r.useReducer)(pe,[]),n=Object(d.a)(a,2),o=n[0],c=n[1];return Object(p.jsx)(je.Provider,{value:o,children:Object(p.jsx)(me.Provider,{value:c,children:t})})},he=function(e){var t,a=e.matchdayNumber,n=te(),o=Object(r.useContext)(x),c=Object(r.useContext)(w),i=Object(r.useContext)(C),s=Object(r.useContext)(je),j=Object(r.useContext)(me),h=Object(r.useState)(!1),f=Object(d.a)(h,2),O=f[0],g=f[1],v=Object(r.useState)(!1),y=Object(d.a)(v,2),k=y[0],S=y[1],N=Object(r.useState)(null),T=Object(d.a)(N,2),I=T[0],R=T[1],B=Object(r.useMemo)((function(){return s.sort((function(e,t){return t.points-e.points}))}),[s]),P=function(){var e=Object(M.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.get("/users");case 2:t=e.sent,j({type:L.setUser,payload:t.data.users});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){P()}),[]);var z=function(){var e=Object(M.a)(F.a.mark((function e(){var t,a,n,o,r,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=26;break}return e.prev=1,i({type:m.setIsFetching,payload:!0}),t=Object(ee.a)(new Date,"yyyy-MM-dd"),e.next=6,fetch("https://api.football-data.org/v2/competitions/2021/matches?dateFrom=2021-08-01&dateTo=".concat(t,"&status=FINISHED"),{headers:{"X-Auth-Token":"d4a9110b90c6415bb3d252836a4bf034"},mode:"cors"});case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,o=[],e.next=13,$.get("gameweekPredictions");case 13:return r=e.sent,null===(s=r.data.gameweekPredictions)||void 0===s||s.forEach((function(e){var t=0,a=e.matchPredictions.filter((function(e){return!e.isResolved}));(null===a||void 0===a?void 0:a.length)>0&&(a.forEach((function(e){var a,r=null===(a=n.matches)||void 0===a?void 0:a.find((function(t){return t.id===e.matchId})),c=e.isBoosted?1:0,i=Object(b.a)(Object(b.a)({},e),{},{isResolved:!0});r&&null!==(null===r||void 0===r?void 0:r.score.fullTime.homeTeam)&&void 0!==(null===r||void 0===r?void 0:r.score.fullTime.homeTeam)&&null!==(null===r||void 0===r?void 0:r.score.fullTime.awayTeam)&&void 0!==(null===r||void 0===r?void 0:r.score.fullTime.awayTeam)&&(e.homeTeamScore===r.score.fullTime.homeTeam&&e.awayTeamScore===r.score.fullTime.awayTeam?(t+=3+3*c,i=Object(b.a)(Object(b.a)({},i),{},{isExactScore:!0,isCorrectScore:!0,points:3+3*c})):e.homeTeamScore>e.awayTeamScore&&r.score.fullTime.homeTeam>r.score.fullTime.awayTeam||e.homeTeamScore===e.awayTeamScore&&r.score.fullTime.homeTeam===r.score.fullTime.awayTeam||e.homeTeamScore<e.awayTeamScore&&r.score.fullTime.homeTeam<r.score.fullTime.awayTeam?(t+=1+1*c,i=Object(b.a)(Object(b.a)({},i),{},{isExactScore:!1,isCorrectScore:!0,points:1+1*c})):i=Object(b.a)(Object(b.a)({},i),{},{isExactScore:!1,isCorrectScore:!1,points:0}),o.push($.put("/prediction",i).catch((function(e){return console.log(e)}))))})),o.push($.put("/user",{UserId:e.UserId,points:t}).catch((function(e){return console.log(e)}))))})),e.next=18,Promise.all(o);case 18:i({type:m.setIsFetching,payload:!1}),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0),i({type:m.setIsFetching,payload:!1});case 25:P();case 26:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(){return e.apply(this,arguments)}}(),E=function(e){(null===o||void 0===o?void 0:o.user)&&(R(e),g(!0))};return Object(p.jsxs)("div",{className:n.container,children:[Object(p.jsxs)("div",{className:n.tableContainer,children:[Object(p.jsx)(l.a,{className:n.tableName,variant:"body1",children:"Standings"}),Object(p.jsx)(ae.a,{children:Object(p.jsxs)(ne.a,{className:n.table,children:[Object(p.jsx)(oe.a,{children:Object(p.jsxs)(re.a,{className:n.tableHeadRow,children:[Object(p.jsx)(ce.a,{size:"small",style:{width:"50px"},children:Object(p.jsx)(l.a,{variant:"body1",children:"P"})}),Object(p.jsx)(ce.a,{children:Object(p.jsx)(l.a,{variant:"body1",children:"Name"})}),Object(p.jsx)(ce.a,{align:"right",children:Object(p.jsx)(l.a,{variant:"body1",children:"Points"})})]})}),B.length<=10?Object(p.jsx)(ie.a,{children:B.map((function(e,t){return Object(p.jsxs)(re.a,{className:n.tableRow,onClick:function(){return E(e)},tabIndex:0,role:"button",children:[Object(p.jsx)(ce.a,{children:Object(p.jsx)(l.a,{noWrap:!0,variant:"body1",children:t+1})}),Object(p.jsx)(ce.a,{children:Object(p.jsx)(l.a,{noWrap:!0,variant:"body1",children:e.username})}),Object(p.jsx)(ce.a,{align:"right",children:Object(p.jsx)(l.a,{variant:"body1",children:e.points})})]},e.id)}))}):Object(p.jsxs)(ie.a,{children:[B.slice(0,10).map((function(e,t){return Object(p.jsxs)(re.a,{className:n.tableRow,onClick:function(){return E(e)},tabIndex:0,role:"button",children:[Object(p.jsx)(ce.a,{children:Object(p.jsx)(l.a,{noWrap:!0,variant:"body1",children:t+1})}),Object(p.jsx)(ce.a,{children:Object(p.jsx)(l.a,{noWrap:!0,variant:"body1",children:e.username})}),Object(p.jsx)(ce.a,{align:"right",children:Object(p.jsx)(l.a,{variant:"body1",children:e.points})})]},e.id)})),Object(p.jsx)(re.a,{className:n.tableRow,children:Object(p.jsx)(ce.a,{variant:"footer",colSpan:3,children:Object(p.jsx)(l.a,{variant:"body1",children:". . ."})})})]})]})})]}),B.length>10&&Object(p.jsx)(u.a,{className:n.button,onClick:function(){return S(!0)},children:"Display all"}),"User"===(null===o||void 0===o||null===(t=o.user)||void 0===t?void 0:t.role)&&Object(p.jsx)(u.a,{className:n.button,onClick:z,children:"Update Standings"}),Object(p.jsx)(le,{isOpen:O,setIsOpen:g,player:I,matchdayNumber:a}),Object(p.jsx)(be,{isOpen:k,setIsOpen:S,standings:B})]})},fe=function(e){var t=e.setIsModalOpen,a=U(),n=Object(r.useContext)(D),o=Object(r.useContext)(x),c=Object(r.useContext)(C),i=Object(r.useState)(0),s=Object(d.a)(i,2),u=s[0],j=s[1],h=Object(r.useState)(null),f=Object(d.a)(h,2),O=f[0],g=f[1],v=Object(r.useState)([]),w=Object(d.a)(v,2),k=w[0],S=w[1],N=Object(r.useState)(null),T=Object(d.a)(N,2),I=T[0],R=T[1],B=Object(r.useMemo)((function(){return k}),[k]),P=Object(r.useCallback)(Object(M.a)(F.a.mark((function e(){var t,a,r,i,s,d,l,u,p,x,h,f,O,v,w,C;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(null),e.next=4,fetch("https://api.football-data.org/v2/competitions/2021/",{headers:{"X-Auth-Token":"d4a9110b90c6415bb3d252836a4bf034"},mode:"cors"});case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,j(a.currentSeason.currentMatchday),e.next=11,fetch("https://api.football-data.org/v2/competitions/2021/matches?matchday=".concat(a.currentSeason.currentMatchday,"&status=SCHEDULED"),{headers:{"X-Auth-Token":"d4a9110b90c6415bb3d252836a4bf034"},mode:"cors"});case 11:return r=e.sent,e.next=14,r.json();case 14:if(!(i=e.sent).matches){e.next=31;break}if(d=i.matches.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{prediction:{homeTeamScore:null,awayTeamScore:null},isSubmited:!1,isResolved:!1,isBoosted:!1})})),!(null===o||void 0===o||null===(s=o.user)||void 0===s?void 0:s.id)){e.next=22;break}return e.next=20,$.post("/userGameweek",{UserId:null===o||void 0===o||null===(l=o.user)||void 0===l?void 0:l.id,gameweek:a.currentSeason.currentMatchday,seasonId:d[0].season.id});case 20:x=e.sent,(null===(u=x.data)||void 0===u||null===(p=u.gameweek)||void 0===p?void 0:p.matchPredictions.length)>0?(f=null===(h=x.data)||void 0===h?void 0:h.gameweek.matchPredictions,O=d.map((function(e){var t=f.find((function(t){return t.matchId===e.id}));return t?Object(b.a)(Object(b.a)({},e),{},{prediction:{homeTeamScore:t.homeTeamScore,awayTeamScore:t.awayTeamScore},isSubmited:!0,isResolved:t.isResolved,isExactScore:t.isExactScore,isCorrectScore:t.isCorrectScore,isBoosted:t.isBoosted,points:t.points,GameweekPredictionId:t.GameweekPredictionId}):e})),n({type:y.setFixtures,payload:O})):n({type:y.setFixtures,payload:d});case 22:return g(d[0].season.id),e.next=25,fetch("https://api.football-data.org/v2/competitions/2021/teams",{headers:{"X-Auth-Token":"d4a9110b90c6415bb3d252836a4bf034"},mode:"cors"});case 25:return v=e.sent,e.next=28,v.json();case 28:w=e.sent,C=w.teams,S(C);case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(0),console.log(e.t0),R("Error. Try again in a minute...");case 37:c({type:m.setIsFetching,payload:!1});case 38:case"end":return e.stop()}}),e,null,[[0,33]])}))),[o,n]);return Object(r.useEffect)((function(){(null===o||void 0===o?void 0:o.user)&&P()}),[null===o||void 0===o?void 0:o.user,P]),Object(p.jsx)(E.a,{className:a.container,children:I?Object(p.jsx)(l.a,{variant:"h5",className:a.error,children:I}):Object(p.jsxs)(H.Provider,{value:B,children:[Object(p.jsxs)(E.a,{className:a.mainContent,children:[Object(p.jsx)(_,{setIsModalOpen:t,matchdayNumber:u,seasonId:O}),Object(p.jsx)(he,{matchdayNumber:u,seasonId:O})]}),Object(p.jsxs)(E.a,{className:a.rulesContainer,children:[Object(p.jsx)(l.a,{className:a.rulesTitle,variant:"h6",children:"Zasady"}),Object(p.jsxs)("ul",{className:a.rulesList,children:[Object(p.jsx)("li",{className:a.rule,children:Object(p.jsxs)(l.a,{children:["Wytypowanie dok\u0142adnego wyniku meczu - ",Object(p.jsx)("span",{className:a.accentGreen,children:"3 pkt"})]})}),Object(p.jsx)("li",{className:a.rule,children:Object(p.jsxs)(l.a,{children:["Wytypowanie zwyci\u0119zcy (remisu) - ",Object(p.jsx)("span",{className:a.accentBlue,children:"1 pkt"})]})}),Object(p.jsx)("li",{className:a.rule,children:Object(p.jsxs)(l.a,{className:a.ruleText,children:["Boost ",Object(p.jsx)("span",{className:a.accent,children:Object(p.jsx)(K.a,{})})," jest do wykorzystania w ka\u017cdej kolejce i podwaja zdobyte punkty za dany typ"]})}),Object(p.jsx)("li",{className:a.rule,children:Object(p.jsx)(l.a,{className:a.ruleText,children:"Nie trzeba przesy\u0142a\u0107 wszystkich typ\xf3w jednocze\u015bnie"})}),Object(p.jsx)("li",{className:a.rule,children:Object(p.jsx)(l.a,{className:a.ruleText,children:"By sprawdzi\u0107 typy innego zawodnika, kliknij jego nazw\u0119 w tabeli"})})]})]})]})})},Oe=Object(N.a)((function(e){var t=e.palette;return{modal:{backgroundColor:t.secondary.dark,border:"1px solid ".concat(t.secondary.main),borderRadius:"2px",display:"flex",justifyContent:"center",boxShadow:"1px 1px 15px 3px #00000060"},modalContent:{padding:"20px",width:"100%",color:"white",textAlign:"center"},validationMessage:{color:t.secondary.contrastText,margin:"10px 0"},inputContainer:{width:"100%",display:"flex",flexDirection:"column",marginTop:"10px",textAlign:"left"},input:{outline:"none",borderRadius:"2px",border:"none",padding:"5px",marginTop:"5px",backgroundColor:t.secondary.main,color:"#fff",fontSize:"1.1rem","&:focus":{backgroundColor:t.secondary.light}},button:{backgroundColor:"#fff",marginTop:"45px",width:"100%","&:hover":{backgroundColor:"#e0e0e0"}}}})),ge=function(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=Oe(),c=Object(r.useState)({login:"",password:""}),i=Object(d.a)(c,2),s=i[0],j=i[1],x=Object(r.useState)(""),f=Object(d.a)(x,2),O=f[0],g=f[1],v=Object(r.useContext)(h),y=Object(r.useContext)(me),k=Object(r.useContext)(w),S=Object(r.useContext)(C),N=function(){a(Object(b.a)(Object(b.a)({},t),{},{isOpen:!1})),j({login:"",password:""}),g("")},T=function(){return Object.values(s).some((function(e){return""===e}))?(g("Please fill in all the required fields"),!1):(g(""),!0)},I=function(){var e=Object(M.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T()||k){e.next=18;break}return e.prev=2,S({type:m.setIsFetching,payload:!0}),e.next=6,$.post("/userCreate",{username:s.login,password:s.password,role:"User"});case 6:return t=e.sent,e.next=9,$.get("/users");case 9:a=e.sent,y({type:L.setUser,payload:a.data.users}),g(t.data.message),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),S({type:m.setIsFetching,payload:!1});case 18:S({type:m.setIsFetching,payload:!1});case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(M.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T()||k){e.next=15;break}return e.prev=2,S({type:m.setIsFetching,payload:!0}),e.next=6,$.post("/user",{username:s.login,password:s.password});case 6:t=e.sent,g(t.data.message),t.data.user&&(v({type:n.setUser,payload:t.data.user}),N()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),S({type:m.setIsFetching,payload:!1});case 15:S({type:m.setIsFetching,payload:!1});case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(se.a,{open:t.isOpen,onClose:N,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(p.jsx)("div",{className:o.modal,children:Object(p.jsxs)("div",{className:o.modalContent,children:[Object(p.jsx)(l.a,{variant:"body1",children:"register"===t.target?"Register Account":"Log In"}),Object(p.jsx)(l.a,{variant:"body1",className:o.validationMessage,children:O}),Object(p.jsxs)("div",{className:o.inputContainer,children:[Object(p.jsx)("label",{children:"Login"}),Object(p.jsx)("input",{className:o.input,type:"text",value:s.login,onChange:function(e){return j(Object(b.a)(Object(b.a)({},s),{},{login:e.target.value}))}})]}),Object(p.jsxs)("div",{className:o.inputContainer,children:[Object(p.jsx)("label",{children:"Password"}),Object(p.jsx)("input",{className:o.input,type:"password",value:s.password,onChange:function(e){return j(Object(b.a)(Object(b.a)({},s),{},{password:e.target.value}))}})]}),Object(p.jsx)(u.a,{className:o.button,onClick:"register"===t.target?I:R,children:"register"===t.target?"Register":"Log In"})]})})})},ve=(a(115),a(70)),ye=a(151),we=Object(ve.a)({palette:{primary:{light:"#8e8e8e",main:"#616161",dark:"#373737",contrastText:"#fff"},secondary:{light:"#faa68d",main:"#f88a62",dark:"#f87c4f",contrastText:"#000"}},typography:{fontFamily:["Roboto","sans-serif"].join()}}),Ce=function(){var e=Object(r.useState)({isOpen:!1,target:"log-in"}),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(ye.a,{theme:we,children:Object(p.jsx)(k,{children:Object(p.jsx)(f,{children:Object(p.jsx)(xe,{children:Object(p.jsxs)(G,{children:[Object(p.jsx)(ge,{isModalOpen:a,setIsModalOpen:n}),Object(p.jsx)(P,{setIsModalOpen:n}),Object(p.jsx)(fe,{setIsModalOpen:n})]})})})})})})},ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,159)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Ce,{})}),document.getElementById("root")),ke()},81:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.6ecec9b5.chunk.js.map