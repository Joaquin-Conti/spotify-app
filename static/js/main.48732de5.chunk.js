(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"userAuthorized",(function(){return we})),n.d(r,"getUserProfileInfo",(function(){return Ne})),n.d(r,"authCodeObtained",(function(){return Ce})),n.d(r,"getAccessToken",(function(){return Pe})),n.d(r,"getRefreshToken",(function(){return Ge}));var a={};n.r(a),n.d(a,"getUserTopData",(function(){return Be})),n.d(a,"userInputSelected",(function(){return Fe})),n.d(a,"testAction",(function(){return He}));var c={};n.r(c),n.d(c,"toggleLoading",(function(){return Qe}));var o,s=n(0),i=n.n(s),u=n(24),p=n.n(u),l=(n(71),n(52)),d=n.n(l),T=n(34),O=n.n(T),f=n(20),E=f.c,_=n.p+"static/media/Spotify_Logo_RGB_White.f48fb565.png",h=n(54),g=n.n(h),b=n(3),j=function(e){return e.show?Object(b.jsx)("div",{className:g.a.Backdrop,children:e.children}):null},S=n(55),y=n.n(S),m=function(){return Object(b.jsx)("div",{id:"Loader",className:y.a.Loader,children:"Loading..."})},v=n(15),x=(n(32),n(13));function A(e){return{REQUEST:"".concat(e,".REQUEST"),SUCCESS:"".concat(e,".SUCCESS"),FAILURE:"".concat(e,".FAILURE")}}!function(e){e.USER_AUTHORIZED="USER_AUTHORIZED",e.USER_LOGOUT="USER_LOGOUT",e.USER_PROFILE_INFO_OBTAINED="USER_PROFILE_INFO_OBTAINED",e.AUTH_CODE_OBTAINED="AUTH_CODE_OBTAINED",e.ACCESS_TOKEN_OBTAINED="ACCESS_TOKEN_OBTAINED",e.REFRESH_TOKEN_OBTAINED="REFRESH_TOKEN_OBTAINED",e.USER_TOP_DATA_OBTAINED="USER_TOP_DATA_OBTAINED",e.USER_INPUT_SELECTED="USER_INPUT_SELECTED",e.TOGGLE_LOADING="TOGGLE_LOADING",e.ERROR="ERROR"}(o||(o={}));var R={POST_TEST:A("POST_TEST"),PUT_TEST:A("PUT_TEST"),GET_TEST:A("GET_TEST"),DELETE_TEST:A("DELETE_TEST")},I={loading:!1},U={userTopData:[],userInputSelect:{type:"artists",timeTerm:"long_term"}},L={isLoggedIn:!1,userProfileInfo:{},authCode:"",accessToken:"",refreshToken:"",expiresAt:new Date},k={error:null},D=Object(v.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.USER_AUTHORIZED:return Object(x.a)(Object(x.a)({},e),{},{isLoggedIn:t.payload.isLoggedIn,accessToken:t.payload.accessToken,refreshToken:t.payload.refreshToken});case o.USER_PROFILE_INFO_OBTAINED:return Object(x.a)(Object(x.a)({},e),{},{userProfileInfo:Object(x.a)({},t.payload)});case o.AUTH_CODE_OBTAINED:return Object(x.a)(Object(x.a)({},e),{},{authCode:t.payload});case o.ACCESS_TOKEN_OBTAINED:return Object(x.a)(Object(x.a)({},e),{},{accessToken:t.payload.access_token,refreshToken:t.payload.refresh_token?t.payload.refresh_token:e.refreshToken,expiresAt:t.payload.expires_in});case R.POST_TEST.REQUEST:return console.log("aca se mando.. #esperando"),e;case R.POST_TEST.SUCCESS:return console.log("aca anduvo.."),e;case R.POST_TEST.FAILURE:return console.log("aca fall\xf3.."),e;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.USER_INPUT_SELECTED:return Object(x.a)(Object(x.a)({},e),{},{userInputSelect:t.payload});case o.USER_TOP_DATA_OBTAINED:return Object(x.a)(Object(x.a)({},e),{},{userTopData:t.payload});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.TOGGLE_LOADING:return{loading:t.payload};default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.ERROR:return{error:t.payload};default:return e}}}),w=n(64),N=n(56),C=n(5),P=n.n(C),G=n(8),B=n(21),F=n(57),H=n.n(F),Q=function(){var e=Object(B.a)(P.a.mark((function e(){var t,n,r,a,c,o,s=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"aca pones ej /song/isjd1941",n=s.length>1?s[1]:void 0,r=s.length>2&&void 0!==s[2]?s[2]:"aca metes la url de spotify","GET"===(a=z(n)).method&&a.params&&(t+=H.a.stringify(a.params,{addQueryPrefix:!0})),c="".concat(r,"/api/").concat(t),e.next=8,fetch(c,a);case 8:if((o=e.sent).ok){e.next=11;break}throw new Error(o.statusText);case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function z(e){var t=e.body,n="[object Object]"===Object.prototype.toString.call(t),r=n?{"Content-Type":"application/json"}:{},a=n?{body:JSON.stringify(t)}:{};return Object.assign({},e,{headers:r},a)}function J(e){return Q("/auth/google-token",{method:"POST",body:e})}function K(e){return Q("/auth/refresh-token",{method:"PUT",body:e})}function q(){return Q("/auth/refresh-token",{method:"DELETE"})}function Z(e){return Q("/mock?user=".concat(e.email),{method:"GET"})}var M=P.a.mark(re),V=P.a.mark(ae),W=P.a.mark(ce),X=P.a.mark(oe),Y=P.a.mark(se),$=P.a.mark(ie),ee=P.a.mark(ue),te=P.a.mark(pe),ne=P.a.mark(le);function re(e){var t,n;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.body,console.log("[SAGA]: Request"),r.next=5,Object(G.b)(J,t);case 5:return n=r.sent,console.log("[SAGA]: Success"),r.next=9,Object(G.d)({type:R.POST_TEST.SUCCESS,payload:n});case 9:r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(0),console.log("[SAGA]: Failure"),r.next=16,Object(G.d)({type:R.POST_TEST.FAILURE,message:r.t0.message||r.t0});case 16:case"end":return r.stop()}}),M,null,[[0,11]])}function ae(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)(R.POST_TEST.REQUEST,re);case 2:case"end":return e.stop()}}),V)}function ce(e){var t;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(G.b)(Z,e.body);case 3:return t=n.sent,n.next=6,Object(G.d)({type:R.GET_TEST.SUCCESS,payload:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(G.d)({type:R.GET_TEST.FAILURE,message:n.t0.message||n.t0});case 12:case"end":return n.stop()}}),W,null,[[0,8]])}function oe(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)(R.GET_TEST.REQUEST,ce);case 2:case"end":return e.stop()}}),X)}function se(e){var t,n;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.body,r.next=4,Object(G.b)(q,t);case 4:return n=r.sent,r.next=7,Object(G.d)({type:R.DELETE_TEST.SUCCESS,payload:n});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(0),r.next=13,Object(G.d)({type:R.DELETE_TEST.FAILURE,message:r.t0.message||r.t0});case 13:case"end":return r.stop()}}),Y,null,[[0,9]])}function ie(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)(R.DELETE_TEST.REQUEST,se);case 2:case"end":return e.stop()}}),$)}function ue(e){var t;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(G.b)(K,e.body);case 3:return t=n.sent,n.next=6,Object(G.d)({type:R.PUT_TEST.SUCCESS,payload:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(G.d)({type:R.PUT_TEST.FAILURE,message:n.t0.message||n.t0});case 12:case"end":return n.stop()}}),ee,null,[[0,8]])}function pe(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)(R.PUT_TEST.REQUEST,ue);case 2:case"end":return e.stop()}}),te)}function le(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.c)(ae),Object(G.c)(oe),Object(G.c)(ie),Object(G.c)(pe)]);case 2:case"end":return e.stop()}}),ne)}var de=P.a.mark(Te);function Te(){var e;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[le].map(G.c),t.next=3,Object(G.a)(e);case 3:case"end":return t.stop()}}),de)}var Oe=Te,fe=Object(w.a)(),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,_e=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),he=Object(v.e)((function(e,t){return"USER_LOGOUT"===t.type&&(e=void 0),D(e,t)}),_e,Ee(Object(v.a)(N.a),Object(v.a)(fe)));he.subscribe((function(){return function(e){try{var t=JSON.stringify(e);"3"!==localStorage.getItem("app-version")&&(localStorage.clear(),localStorage.setItem("app-version","3")),localStorage.setItem("state",t)}catch(n){console.log(n)}}(he.getState())})),fe.run(Oe);var ge=n(26),be=n.n(ge),je=he.getState();he.subscribe((function(){je=he.getState(),Ie.set("code",je.login.authCode),Ue.set("refresh_token",je.login.refreshToken||"")}));var Se="https://accounts.spotify.com/api/token",ye="https://joaquinconti.github.io/spotify-app/",me="https://api.spotify.com/v1",ve="f3a2db5e99624a8daad132d12e58301d",xe="user-read-private user-read-email user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing",Ae="https://accounts.spotify.com/authorize?response_type=code&client_id="+ve+"&scope="+encodeURIComponent(xe)+"&redirect_uri="+encodeURIComponent(ye),Re=btoa("".concat(ve,":").concat("161be9ac95d54fd29d8c1596e17ee947")),Ie=new URLSearchParams;Ie.append("grant_type","authorization_code"),Ie.append("redirect_uri",ye),Ie.append("code",je.login.authCode);var Ue=new URLSearchParams;Ue.append("grant_type","refresh_token"),Ue.append("client_id",ve);var Le,ke=he.getState();he.subscribe((function(){ke=he.getState(),Le={headers:{Authorization:"Bearer ".concat(ke.login.accessToken)}}}));var De={headers:{Authorization:"Basic ".concat(Re),"Content-Type":"application/x-www-form-urlencoded"}},we=function(e){return function(){var t=Object(B.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={isLoggedIn:!0},e||(n({type:o.USER_LOGOUT,payload:null}),r={isLoggedIn:!1,accessToken:"",refreshToken:""}),localStorage.clear(),n({type:o.USER_AUTHORIZED,payload:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ne=function(){return function(){var e=Object(B.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,be.a.get("".concat(me,"/me"),Le);case 3:n=e.sent,r=n.data,t({type:o.USER_PROFILE_INFO_OBTAINED,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Ce=function(e){return{type:o.AUTH_CODE_OBTAINED,payload:e}},Pe=function(){return function(){var e=Object(B.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[Access Token] fetching"),e.prev=1,e.next=4,be.a.post(Se,Ie,De);case 4:n=e.sent,(r=n.data).expires_in=new Date,r.expires_in.setHours(r.expires_in.getHours()+1),window.history.pushState({},"","/spotify-app"),t({type:o.ACCESS_TOKEN_OBTAINED,payload:r}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:o.ERROR,payload:"There was an error authenticating, please try again."}),localStorage.clear(),console.log(e.t0.response);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},Ge=function(e){return function(){var e=Object(B.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[RefreshToken Token] fetching"),e.prev=1,e.next=4,be.a.post(Se,Ue,De);case 4:n=e.sent,r=n.data,console.log(r),r.expires_in=new Date,r.expires_in.setHours(r.expires_in.getHours()+1),t({type:o.ACCESS_TOKEN_OBTAINED,payload:r}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:o.ERROR,payload:"There was an error authenticating, please try again."}),localStorage.clear(),console.log(e.t0.response);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},Be=function(e,t){var n=e.type,r=e.timeTerm;return function(){var e=Object(B.a)(P.a.mark((function e(t){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:o.ERROR,payload:null}),t({type:o.TOGGLE_LOADING,payload:!0}),e.prev=2,t({type:o.USER_TOP_DATA_OBTAINED,payload:[]}),e.next=6,be.a.get("".concat(me,"/me/top/").concat(n,"?time_range=").concat(r),Le);case 6:a=e.sent,c=a.data,t({type:o.USER_TOP_DATA_OBTAINED,payload:c.items}),t({type:o.TOGGLE_LOADING,payload:!1}),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),localStorage.clear(),t({type:o.TOGGLE_LOADING,payload:!1}),console.log(e.t0.response),t({type:o.ERROR,payload:"Something went wrong. Try re-logging in."});case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()},Fe=function(e){return function(){var t=Object(B.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:o.ERROR,payload:null}),n({type:o.USER_TOP_DATA_OBTAINED,payload:[]});try{n({type:o.USER_INPUT_SELECTED,payload:e})}catch(r){localStorage.clear(),console.log(r.response),n({type:o.ERROR,payload:"Something went wrong. Try re-logging in."})}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},He=function(){return{type:R.POST_TEST.REQUEST}},Qe=function(e){return{type:o.TOGGLE_LOADING,payload:e}},ze=function(){var e=Object(f.b)();return Object(v.b)(r,e)},Je=function(e){var t={code:""},n=document.createElement("a");n.href=e;for(var r=n.search.substring(1).split("&"),a=0;a<r.length;a++){var c=r[a].split("=");t[c[0]]=decodeURIComponent(c[1])}return t},Ke=n(63),qe=n(117),Ze=n(116),Me=n(114),Ve=n(118),We=n(115),Xe=n(35),Ye=n.n(Xe),$e=function(){var e=E((function(e){return e.userData})),t=e.userTopData,n=e.userInputSelect;return Object(b.jsx)(i.a.Fragment,{children:Object(b.jsx)(Me.a,{cols:2,cellHeight:300,spacing:1,className:Ye.a.GridList,children:t&&t.map((function(e,t){return Object(b.jsxs)(Ve.a,{cols:0===t?2:1,rows:1,children:[Object(b.jsx)("img",{className:Ye.a.ArtistImage,src:"artists"===n.type?e.images[0].url:e.album.images[0].url,alt:e.name}),Object(b.jsx)(We.a,{title:"".concat(t+1,". ").concat(e.name),titlePosition:"top",actionPosition:"left",className:Ye.a.TitleBar})]},t)}))})})},et=n(30),tt=n.n(et),nt=function(){var e=Object(s.useState)(!1),t=Object(Ke.a)(e,2),n=(t[0],t[1],E((function(e){return e.userData}))),r=n.userInputSelect,c=n.userTopData,o=E((function(e){return e.login})),u=o.accessToken,p=o.refreshToken,l=o.expiresAt,d=o.userProfileInfo,T=function(){var e=Object(f.b)();return Object(v.b)(a,e)}(),O=T.getUserTopData,_=T.userInputSelected,h=ze(),g=h.getUserProfileInfo,j=h.userAuthorized,S=h.getRefreshToken,y=d.display_name,m=d.images,x=function(e,t){_({type:"type"===t?e.target.value:r.type,timeTerm:"timeTerm"===t?e.target.value:r.timeTerm})};return Object(s.useEffect)((function(){if(u){var e=new Date;new Date(l).getTime()<e.getTime()&&S(p),d.display_name||g(),O(r,l)}}),[d,p,u,r]),c.length&&d.display_name?Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)("h4",{children:y}),Object(b.jsx)(qe.a,{className:tt.a.UserImage,src:m[0].url,alt:"".concat(y," image")}),Object(b.jsx)(Ze.a,{variant:"contained",onClick:function(){return j(!1)},children:"Log Out"}),Object(b.jsxs)("div",{className:tt.a.GroupDiv,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"typeSelect",children:"Get your top: "}),Object(b.jsxs)("select",{value:r.type,className:tt.a.Select,name:"type",onChange:function(e){return x(e,e.target.name)},children:[Object(b.jsx)("option",{value:"artists",children:"Artists"}),Object(b.jsx)("option",{value:"tracks",children:"Tracks"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"timeTermSelect",children:"From: "}),Object(b.jsxs)("select",{value:r.timeTerm,className:tt.a.Select,name:"timeTerm",onChange:function(e){return x(e,e.target.name)},children:[Object(b.jsx)("option",{value:"short_term",children:"This month"}),Object(b.jsx)("option",{value:"medium_term",children:"6 months"}),Object(b.jsx)("option",{value:"long_term",children:"All time"})]})]})]}),Object(b.jsx)($e,{})]}):null},rt=function(){var e=E((function(e){return e.error})).error,t=ze().userAuthorized;return Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)("p",{children:e}),Object(b.jsx)(Ze.a,{variant:"contained",onClick:function(){return t(!1)},children:"Log Out"})]})},at=function(){var e=E((function(e){return e.login})),t=e.authCode,n=(e.isLoggedIn,e.accessToken),r=E((function(e){return e.ui})).loading,a=E((function(e){return e.error})).error,c=ze(),o=(c.userAuthorized,c.authCodeObtained),u=c.getAccessToken;Object(f.b)();return Object(s.useEffect)((function(){var e=Je(window.location.href).code;e&&e!==t&&(o(e),u())}),[]),Object(b.jsxs)("main",{className:O.a.Container,children:[Object(b.jsx)("img",{className:O.a.Logo,src:_,alt:"spotify-logo"}),a&&Object(b.jsx)(rt,{}),n?Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)(j,{show:r,children:Object(b.jsx)(m,{})}),Object(b.jsx)(nt,{})]}):Object(b.jsx)(i.a.Fragment,{children:Object(b.jsx)("a",{className:O.a.Anchor,href:Ae,children:"LOG IN WITH SPOTIFY"})})]})},ct=n(62);n(98);var ot=function(){return Object(b.jsx)("div",{className:d.a.App,children:Object(b.jsx)(ct.a,{children:Object(b.jsx)(at,{})})})},st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};p.a.render(Object(b.jsx)(f.a,{store:he,children:Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(ot,{})})}),document.getElementById("root")),st()},30:function(e,t,n){e.exports={UserImage:"Main_UserImage__3qxFL"}},34:function(e,t,n){e.exports={ContainerAbsolute:"Layout_ContainerAbsolute__GVuZd",Container:"Layout_Container__BQf6m",Loader:"Layout_Loader__1uyud",Logo:"Layout_Logo__1vjZI",Anchor:"Layout_Anchor__16oze"}},35:function(e,t,n){e.exports={TitleBar:"UserTopData_TitleBar__3Y7Do"}},52:function(e,t,n){e.exports={App:"App_App__1B3w2",Anchor:"App_Anchor__1EPTJ",Logo:"App_Logo__TfFJ9"}},54:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3Q11w"}},55:function(e,t,n){e.exports={Loader:"Spinner_Loader__3GTOq",spinner:"Spinner_spinner__s3qqN"}},71:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.48732de5.chunk.js.map