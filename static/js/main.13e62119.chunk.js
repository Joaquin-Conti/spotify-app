(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"userAuthorized",(function(){return Be})),r.d(n,"authCodeObtained",(function(){return ke})),r.d(n,"getAccessToken",(function(){return Ce})),r.d(n,"getRefreshToken",(function(){return Fe}));var a={};r.r(a),r.d(a,"getUserProfileInfo",(function(){return Le})),r.d(a,"getUserTopData",(function(){return Pe})),r.d(a,"userInputSelected",(function(){return He})),r.d(a,"testAction",(function(){return Ye}));var c={};r.r(c),r.d(c,"toggleLoading",(function(){return Ke}));var o,s,i=r(0),u=r.n(i),A=r(24),p=r.n(A),l=(r(74),r(54)),d=r.n(l),O=r(36),T=r.n(O),g=r(20),f=g.c,E=r.p+"static/media/Spotify_Logo_RGB_White.f48fb565.png",h=r(56),j=r.n(h),y=r(3),S=function(e){return e.show?Object(y.jsx)("div",{className:j.a.Backdrop,children:e.children}):null},b=r(57),w=r.n(b),D=function(){return Object(y.jsx)("div",{id:"Loader",className:w.a.Loader,children:"Loading..."})},m=r(15),I=(r(33),r(13));function R(e){return{REQUEST:"".concat(e,".REQUEST"),SUCCESS:"".concat(e,".SUCCESS"),FAILURE:"".concat(e,".FAILURE")}}!function(e){e.USER_AUTHORIZED="USER_AUTHORIZED",e.USER_LOGOUT="USER_LOGOUT",e.USER_PROFILE_INFO_OBTAINED="USER_PROFILE_INFO_OBTAINED",e.AUTH_CODE_OBTAINED="AUTH_CODE_OBTAINED",e.ACCESS_TOKEN_OBTAINED="ACCESS_TOKEN_OBTAINED",e.REFRESH_TOKEN_OBTAINED="REFRESH_TOKEN_OBTAINED",e.USER_TOP_DATA_OBTAINED="USER_TOP_DATA_OBTAINED",e.USER_INPUT_SELECTED="USER_INPUT_SELECTED",e.TOGGLE_LOADING="TOGGLE_LOADING",e.ERROR="ERROR"}(o||(o={})),function(e){e.ERROR_AUTHENTICATION="ERROR_AUTHENTICATION",e.ERROR_USER_PROFILE_INFO="ERROR_USER_PROFILE_INFO",e.ERROR_USER_TOP_DATA="ERROR_USER_TOP_DATA"}(s||(s={}));var x={POST_TEST:R("POST_TEST"),PUT_TEST:R("PUT_TEST"),GET_TEST:R("GET_TEST"),DELETE_TEST:R("DELETE_TEST")},v={loading:!1},U={userTopData:[],userProfileInfo:{display_name:"",images:[]},userInputSelect:{type:"artists",timeTerm:"long_term"}},G={isLoggedIn:!1,authCode:"",accessToken:"",refreshToken:"",expiresAt:new Date},N={error:null},_=Object(m.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.USER_AUTHORIZED:return Object(I.a)(Object(I.a)({},e),{},{isLoggedIn:t.payload.isLoggedIn,accessToken:t.payload.accessToken,refreshToken:t.payload.refreshToken});case o.AUTH_CODE_OBTAINED:return Object(I.a)(Object(I.a)({},e),{},{authCode:t.payload});case o.ACCESS_TOKEN_OBTAINED:return Object(I.a)(Object(I.a)({},e),{},{accessToken:t.payload.access_token,refreshToken:t.payload.refresh_token?t.payload.refresh_token:e.refreshToken,expiresAt:t.payload.expires_in});case x.POST_TEST.REQUEST:return console.log("aca se mando.. #esperando"),e;case x.POST_TEST.SUCCESS:return console.log("aca anduvo.."),e;case x.POST_TEST.FAILURE:return console.log("aca fall\xf3.."),e;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.USER_INPUT_SELECTED:return Object(I.a)(Object(I.a)({},e),{},{userInputSelect:t.payload});case o.USER_TOP_DATA_OBTAINED:return Object(I.a)(Object(I.a)({},e),{},{userTopData:t.payload});case o.USER_PROFILE_INFO_OBTAINED:return Object(I.a)(Object(I.a)({},e),{},{userProfileInfo:Object(I.a)({},t.payload)});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.TOGGLE_LOADING:return{loading:t.payload};default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.ERROR:return{error:t.payload};default:return e}}}),B=r(66),k=r(58),C=r(5),F=r.n(C),L=r(8),P=r(21),H=r(59),Y=r.n(H),K=function(){var e=Object(P.a)(F.a.mark((function e(){var t,r,n,a,c,o,s=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"aca pones ej /song/isjd1941",r=s.length>1?s[1]:void 0,n=s.length>2&&void 0!==s[2]?s[2]:"aca metes la url de spotify","GET"===(a=M(r)).method&&a.params&&(t+=Y.a.stringify(a.params,{addQueryPrefix:!0})),c="".concat(n,"/api/").concat(t),e.next=8,fetch(c,a);case 8:if((o=e.sent).ok){e.next=11;break}throw new Error(o.statusText);case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function M(e){var t=e.body,r="[object Object]"===Object.prototype.toString.call(t),n=r?{"Content-Type":"application/json"}:{},a=r?{body:JSON.stringify(t)}:{};return Object.assign({},e,{headers:n},a)}function W(e){return K("/auth/google-token",{method:"POST",body:e})}function J(e){return K("/auth/refresh-token",{method:"PUT",body:e})}function Q(){return K("/auth/refresh-token",{method:"DELETE"})}function z(e){return K("/mock?user=".concat(e.email),{method:"GET"})}var Z=F.a.mark(ae),V=F.a.mark(ce),q=F.a.mark(oe),X=F.a.mark(se),$=F.a.mark(ie),ee=F.a.mark(ue),te=F.a.mark(Ae),re=F.a.mark(pe),ne=F.a.mark(le);function ae(e){var t,r;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.body,console.log("[SAGA]: Request"),n.next=5,Object(L.b)(W,t);case 5:return r=n.sent,console.log("[SAGA]: Success"),n.next=9,Object(L.d)({type:x.POST_TEST.SUCCESS,payload:r});case 9:n.next=16;break;case 11:return n.prev=11,n.t0=n.catch(0),console.log("[SAGA]: Failure"),n.next=16,Object(L.d)({type:x.POST_TEST.FAILURE,message:n.t0.message||n.t0});case 16:case"end":return n.stop()}}),Z,null,[[0,11]])}function ce(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(x.POST_TEST.REQUEST,ae);case 2:case"end":return e.stop()}}),V)}function oe(e){var t;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(L.b)(z,e.body);case 3:return t=r.sent,r.next=6,Object(L.d)({type:x.GET_TEST.SUCCESS,payload:t});case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(L.d)({type:x.GET_TEST.FAILURE,message:r.t0.message||r.t0});case 12:case"end":return r.stop()}}),q,null,[[0,8]])}function se(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(x.GET_TEST.REQUEST,oe);case 2:case"end":return e.stop()}}),X)}function ie(e){var t,r;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.body,n.next=4,Object(L.b)(Q,t);case 4:return r=n.sent,n.next=7,Object(L.d)({type:x.DELETE_TEST.SUCCESS,payload:r});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(L.d)({type:x.DELETE_TEST.FAILURE,message:n.t0.message||n.t0});case 13:case"end":return n.stop()}}),$,null,[[0,9]])}function ue(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(x.DELETE_TEST.REQUEST,ie);case 2:case"end":return e.stop()}}),ee)}function Ae(e){var t;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(L.b)(J,e.body);case 3:return t=r.sent,r.next=6,Object(L.d)({type:x.PUT_TEST.SUCCESS,payload:t});case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(L.d)({type:x.PUT_TEST.FAILURE,message:r.t0.message||r.t0});case 12:case"end":return r.stop()}}),te,null,[[0,8]])}function pe(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(x.PUT_TEST.REQUEST,Ae);case 2:case"end":return e.stop()}}),re)}function le(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.c)(ce),Object(L.c)(se),Object(L.c)(ue),Object(L.c)(pe)]);case 2:case"end":return e.stop()}}),ne)}var de=F.a.mark(Oe);function Oe(){var e;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[le].map(L.c),t.next=3,Object(L.a)(e);case 3:case"end":return t.stop()}}),de)}var Te=Oe,ge=Object(B.a)(),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,Ee=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),he=Object(m.e)((function(e,t){return"USER_LOGOUT"===t.type&&(e=void 0),_(e,t)}),Ee,fe(Object(m.a)(k.a),Object(m.a)(ge)));he.subscribe((function(){return function(e){try{var t=JSON.stringify(e);"7"!==localStorage.getItem("app-version")&&(localStorage.clear(),localStorage.setItem("app-version","7")),localStorage.setItem("state",t)}catch(r){console.log(r)}}(he.getState())})),ge.run(Te);var je=r(26),ye=r.n(je),Se=he.getState();he.subscribe((function(){Se=he.getState(),ve.set("code",Se.login.authCode),Ue.set("refresh_token",Se.login.refreshToken||"")}));var be="https://accounts.spotify.com/api/token",we="https://joaquinconti.github.io/spotify-app/",De="https://api.spotify.com/v1",me="e4f6b37ece0b444f968fb0fc51aa80a6",Ie="user-read-private user-read-email user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing",Re="https://accounts.spotify.com/authorize?response_type=code&client_id="+me+"&scope="+encodeURIComponent(Ie)+"&redirect_uri="+encodeURIComponent(we),xe=btoa("".concat(me,":").concat("656c1bec03e7497caf18c88a094d8fbc")),ve=new URLSearchParams;ve.append("grant_type","authorization_code"),ve.append("redirect_uri",we),ve.append("code",Se.login.authCode);var Ue=new URLSearchParams;Ue.append("grant_type","refresh_token"),Ue.append("client_id",me);var Ge,Ne=he.getState();he.subscribe((function(){Ne=he.getState(),Ge={headers:{Authorization:"Bearer ".concat(Ne.login.accessToken)}}}));var _e={headers:{Authorization:"Basic ".concat(xe),"Content-Type":"application/x-www-form-urlencoded"}},Be=function(e){return function(){var t=Object(P.a)(F.a.mark((function t(r){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={isLoggedIn:!0},e||(r({type:o.USER_LOGOUT,payload:null}),n={isLoggedIn:!1,accessToken:"",refreshToken:""}),localStorage.clear(),r({type:o.USER_AUTHORIZED,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ke=function(e){return{type:o.AUTH_CODE_OBTAINED,payload:e}},Ce=function(){return function(){var e=Object(P.a)(F.a.mark((function e(t){var r,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[Access Token] fetching"),e.prev=1,e.next=4,ye.a.post(be,ve,_e);case 4:r=e.sent,(n=r.data).expires_in=new Date,n.expires_in.setHours(n.expires_in.getHours()+1),window.history.pushState({},"","/spotify-app"),t({type:o.ACCESS_TOKEN_OBTAINED,payload:n}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:o.ERROR,payload:{errorType:s.ERROR_AUTHENTICATION,message:"There was an error authenticating, please refresh the page and try again."}}),localStorage.clear(),console.log(e.t0.response);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},Fe=function(e){return function(){var e=Object(P.a)(F.a.mark((function e(t){var r,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[RefreshToken Token] fetching"),e.prev=1,e.next=4,ye.a.post(be,Ue,_e);case 4:r=e.sent,n=r.data,console.log(n),n.expires_in=new Date,n.expires_in.setHours(n.expires_in.getHours()+1),t({type:o.ACCESS_TOKEN_OBTAINED,payload:n}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:o.ERROR,payload:{errorType:s.ERROR_AUTHENTICATION,message:"There was an error authenticating, please refresh the page and try again."}}),localStorage.clear(),console.log(e.t0.response);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},Le=function(){return function(){var e=Object(P.a)(F.a.mark((function e(t){var r,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ye.a.get("".concat(De,"/me"),Ge);case 3:r=e.sent,n=r.data,t({type:o.USER_PROFILE_INFO_OBTAINED,payload:n}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:o.ERROR,payload:{errorType:s.ERROR_USER_PROFILE_INFO,message:"There was an error obtaining your profile."}}),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Pe=function(e,t){var r=e.type,n=e.timeTerm;return function(){var e=Object(P.a)(F.a.mark((function e(t){var a,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:o.ERROR,payload:null}),t({type:o.TOGGLE_LOADING,payload:!0}),e.prev=2,t({type:o.USER_TOP_DATA_OBTAINED,payload:[]}),e.next=6,ye.a.get("".concat(De,"/me/top/").concat(r,"?time_range=").concat(n),Ge);case 6:a=e.sent,c=a.data,t({type:o.USER_TOP_DATA_OBTAINED,payload:c.items}),t({type:o.TOGGLE_LOADING,payload:!1}),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),localStorage.clear(),t({type:o.TOGGLE_LOADING,payload:!1}),console.log(e.t0.response),t({type:o.ERROR,payload:{errorType:s.ERROR_USER_TOP_DATA,message:"Something went wrong and we couldn't get your data. Please try re-logging in."}});case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()},He=function(e){return function(){var t=Object(P.a)(F.a.mark((function t(r){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:o.ERROR,payload:null}),r({type:o.USER_TOP_DATA_OBTAINED,payload:[]});try{r({type:o.USER_INPUT_SELECTED,payload:e})}catch(n){localStorage.clear(),console.log(n.response),r({type:o.ERROR,payload:{errorType:s.ERROR_USER_TOP_DATA,message:"Something went wrong and we couldn't get your data. Please try re-logging in."}})}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ye=function(){return{type:x.POST_TEST.REQUEST}},Ke=function(e){return{type:o.TOGGLE_LOADING,payload:e}},Me=function(){var e=Object(g.b)();return Object(m.b)(n,e)},We=function(e){var t={code:""},r=document.createElement("a");r.href=e;for(var n=r.search.substring(1).split("&"),a=0;a<n.length;a++){var c=n[a].split("=");t[c[0]]=decodeURIComponent(c[1])}return t},Je=r(65),Qe=r(123),ze=r(122),Ze=r(121),Ve=r(125),qe=function(e){var t=e.split(" ");return(t.shift().charAt(0)+t.pop().charAt(0)).toUpperCase()},Xe=function(){var e=f((function(e){return e.error})).error;f((function(e){return e.login})).accessToken,Me().userAuthorized;return Object(y.jsx)(u.a.Fragment,{children:Object(y.jsx)("p",{children:null===e||void 0===e?void 0:e.message})})},$e=r(118),et=r(124),tt=r(120),rt=r(37),nt=r.n(rt),at=function(){var e=f((function(e){return e.userData})),t=e.userTopData,r=e.userInputSelect;return Object(y.jsx)(u.a.Fragment,{children:Object(y.jsx)($e.a,{cols:2,cellHeight:300,spacing:1,className:nt.a.GridList,children:t&&t.map((function(e,t){var n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAIECAMAAAD2Nw2uAAAAq1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NbREAAAAOHRSTlMA+wxEWi4XjwXz9wgTIeACJ9pNG+86cNFTzOzmD7CrlceDm3vVP+m2oYh1SLumNWpdYWW+MMKMf65C5/AAABduSURBVHja7NtbctpAEIXhFgQhgYww4W4ghAA2l+CY4OTsf2V5SiUlYxtkTamn63xb+Eua0UxL3hNVSJFIChP1tg/PrRikSrAeTDfDUD4o6d8zrWaDek/y60wDkHa33xLJIx0OQF6IN6FcrTcCeSPeRnKVZAHyyrJ31ePbAnkm+JbKpfrcW/lon8hF0i8gLy0/ywWiGchTrba8K2Vfj93dyHvqII/dhvK2Pshr80je0uP+2Xd1eUPC71//deR1PL8y4G4ir+mBDKjLK1JeH5kQ1OS8IciEmZzHB9iKtpyzAxnxIOfwjNKMxkReShogK47y0iPIjJ/y0hRkRjCRrLQLsqMjWQeQIXUuwbY9SxYHsUzpStYeZEkiGUuQJSfJWIMs2UkG/xK1ZSgZHMay5RMD28bAxuUNPHuqUomepk4Dx1Whkq3GDgN3hEp3ajgLPBVSYOMs8FBIgYOzwCchBT47C1wTUiBkYNsY2DgGNo6BjWNg4xjYOAY2joGNY2DjGNg4BjaOgY1jYOMY2DgGNo6BjWNg4xjYOAY2joGNY2DjGNg4BjaOgY1jYOMY2DgGNo6BjWNg4xjYOAY2joE1aN6cVrvOrnq4qTCwLc1VfzG/wz/j0fdtdcLAFqS93/MAZw1+VSMG9tuhfoe3jBcrBvZW8zjC+263Ewb20eTbGpeJf4UM7JvmdozLxZsJA3ulc4vrrI8pA3sjnOF6z20G9kRnjDwafQb2QfQFed0nDKxeOEd+rRMDK1dr4SPiDgOrturiY4IjAytWjfFhfQZWa9VAAR4ZWKlDjEL8YGCVbtYoRlBlYIUqSxSl22Zgfb6jOMsKA2vziCI9MLAy7QYK9YmBVUnnKFY3ZGBN+ijajIEVCWMUrsrAeixQvGXEwFrU4MKRgbWYwYVWxMA6tOHGEwPrsIAbSwZWIWnAkR0Da9CHKzMG1mAAV4KEgctXgztHBi7fb7izZ+DyjeBOUGHgsoVwqcPAZRvCpToDl60Ol0YMfD1/lmAgaDJwudIYTp0YOA/9Fw1//WDgcu3g1lcGzkPrtOxLDwxcrg3c2jNwDh7cBf81YOAc1E/r/NNi4HLdw601A5drD7e6DHwVBmZgvqIZ+D9TZHGT9Ye9O9FJHYqiMLyLFyyFMoOAjApXBVFwuK73f7I7J6a0UqStp/us7wlI/tCk3WdQha9JyvFDh3I97OOnSkVaCMFhgx5FhOG4UA3XQQgO/PW4wB4u2dHkCvu46E6RHUJw2awePsJw4bseTQRw64ou59jHzWeKdBHE7aO61BDADeC6BDcI8wgHZdoOAngIiy4TpGNRZ2AjdJGOJ56TZYhnpKFWYWBDdJGGRx5GaowxktfkccLm8B0krsUDwQ0yR9LGPNLfJJUmklVuM7BRug4S9cRrdQzzhiSNeTGWaer3SE6tysDGqdaQFO+Fl1MaqNhBQvq8XtZIZx4S0eMF0YZqOUjAnFe8G6vvJNGXgc3V8nCia2Fgk3WHOIWzEwY2m7/A5w2XwsCmK2zwWQNfGDgHdmV8yp0rDJwL/j2O11yKMHBebC9xHG9eEQbOkcK8jCNsfBEGzpfqXdzEzqYhwsD5M1o1cVjn3Bdh4JxaXnXwEedmWxFh4Bxz1+cLhPu+2VVFhIFzr9Sfj5se3rl8Pt815BcGVqPeflj3t7vtt1a3UZHfGJgYmBjYAgysHAMrx8DKMbByDKwcAyvHwMoxsHIMrBwDK8fAyjGwcgysHAMrx8DKMbByDKwcAyvHwMoxsHIMrBwDK8fAyjGwcgysHAMrZ0Hgl950Mr6dtwpiI+2BR9c1/ONNumIf5YG3Q7w3bottVAeu3CJgeCaW0Ry4cI89Tkvsojjw6BUhHMv+w3oDVwcI1WmITdQGLl0gQrMqFtEauL1ApGdX7KE0sN/EB67EHjoDN2r40EqsoTJw8TsO6IstNAZ+GOKQ8oNYQmHgbgeHXdry0VJf4LMy4hhYMlxSF7jlIZ5xXWygLXDfQVx3YgNlgbcO4tuJBXQFfsIxnKXopypwD1HsnTtoCnyNKBbPHRQFvkMUm+cOegKfI4rhc4fq2a73tPblPwYOU79CFKPnDqPeDH/VpkX5g4FDuBt8Vku+jrvq4J1NSX5h4H3uGJ9WfpGv0p4Ff8s3EWHgPZUbnKDWlq/RuMSeNxEGDio84ySDinyF9iVCvDFw0GiGE03qkj13gFArBo5cHhtk9NxhhQiPDPxeaYEEbCVr1TKibBk4sHzydN5SMrZCJKfPwP/5NSRj6Eu2LhDNWTNw4EXjdIuRZKl04IHCwL+9DJGce1cy1Dq06pOBRR46iGD+3OEaH+sUGXhZRrJ6kp0NDvjesD3w2kNist8cPsAhNd/uwH0PiSsXJSN1Dwc12zYH/uYgBbWSZMNHDIuSvYF3DlIxq0gmWojjompr4EekZSKZWCGWWcHOwCukZy5ZuEU8zxUbA88RJTdzhxliunHtC/wDqfK6kr4O4pq4lgWuTxElP3OHNuK7rVsVuH6LKDmaO5zhCFObArsTZODGlXT1cIw7ewJXbpCJqaRriqO82RK4cI8P5Wbu8Irj9OwIPHpFVpy1pGmIIz3ZEPjw8sm8zB1KONpWf+Cf7N2HctpAEIDhFUVRR0KiixpaqMa0ff8nSyaZTDo6XZHulPsewJ7xPwbjXRazh5kUmTusMDejX/XA8RIJyT93OGN+zr7agf0Ai3YEUT7QbfZWOXCu9Unp5w4HpGGfqhu4ucYyNECMEVJJmlUNfBpiDtLPHVKktA6rGbhjY0nWPgjQQVqBX8XAdRtL00uBvwtSi+LqBW47mJ/Uc4cH0lt6VQvcN5CGzHOHDTIYpNUK/GZgyc7AW4AsZrUqBT5j6bjPHWrI5upWJ3AXJZA0gasT+98FVQn8RClwnju8IatJqxqBP6Ekvs8dpNn63VYi8AeUxhE4GiO7qfqBWwuUyBP4iZCDT6oHto4olQbw4hrIw0e1A7tjlAu/uUMT+eiqHNjdoGy4zR36yMm7uoFrV5RPrwZfyPTar6FqYG+GMtq0gIcJ8mK01QzsDVBOH4CHHnLj1FUMHC9RVmdgZznIj91RL7AfobSMOjALkSf7pFrgMECJJSGwaiNXw6ZagcMRSi3y2G8Y8rUOVQp8G6Lk7i6w2SJnga9O4E6C0tsCmwHyFpmqBF7ZqICPwMRG7paeGoH3DiqhDwx8FGCQqhC4X/p6HSHnBPT2KMK9Jn/ghip9EUexdEf6Dq7sgS/q9GWaOyxQjLEld2Ap1ifJjVtAaYaCHFsyB/6IinkApQRFWUgceI7KeQcqJorzQdrAEq1Pip471FGgT3IGlmt9klgSyvdWnI8yBm5tUU1Uc4cpCtWVL7A1QVVdLcjtimJdZAss4fqk0LnDGsUyGnIFlnJ9ktwOcvJQNKMtU+D0jmrrQz4rFM6pyxNY2vVJYXOHdxTP7sgS2Oyh8kaxfG+YTG5yBI4lXp8kN6hR3DAUbNiUIbAv9fqkoLlDgNwYtu38K8PILz+w7OuTQj4yI0UW9vKweJ4b+5Nvpq4FX7mm36z3z/PFYengD0FcRGAJr4sKcRF+fiXYPC4dDzKYnctjE+BX95IDnxRYnyRmrATeMByNd/UUcvDqH8drvBQRWMbrokIkoZirMsGiEQMVv1VEYCmviwoRedzPr9iTd2U/4r2tyHos/7lDhGTWi7YLAIoGVmY9No8FEHCRxHDaaQE/7iIRFVjW66JC7CDbDTM5k74LnLmNjSEksKzXRcVoQ6YGZoi6HggRfwwKCrzDqrJvjLuFxrgO4lj9A/fA8l4XFWIUs5xfcaY+CBYuHL6BJb4uSoN97rDEf0nmHhQgfthCA0+x2jKu/FoG/t1wV4OCeHObX+BqrMfm8Ynm/Ir9TKFA3ieHV2C5r4sKccl9w9B5eFAwc2rwCSz3dVEhjFXON2BNfChBuOESuDLrsTkMXwQ74u96KyjJfskhcHXWY3NYesQ3DJOzBaWxPjrMgaW/LkqBYe7QcvAX4xhK5R9YA1dqfZLcguj8yroPpXtL2AIrcF1UiC7BDcOtBxKIN0yBFbguKoTRzjq/kkjw6/vNu80QWIXrokLYt9c3DA8xSMOf0Qeu3PokscB8cX7F2LVAItaDOrAa10WFGLj/vGE46oBk9kPKwIpcFxViAr+L8aurCdKJZ3SBVbkuKsT87zcMHxZIyIqpAitzXVSIt7+cenPeQBFEgSu5PknMWf1xw3C4AlWQpPv0X/f9Y+6wM6IQWJmdRnc+PW6us0GvN5hdN5PpvNvoxMDbf96OzDKFn/ke0GuF/edk6eA/OMvxvBFaOnCxDhbwUKs/DzYScO7zvacDF2gKrFqn58zAPAbzjqUDF6ULLKz2do0Ukknf1YELYeyBVmu/TZCafWxbOnAB7CZQiZ8BMlp/CnVg8QIT8quPDeTh2m7pwKLNXMjHagyQm+jd1YEF6+bLew6Qq/XO1YFFOlh58l4C5G7UdXVgYXopkOtHKMTo0tKBWbHfsrxdUZhBRwcWwb4BKW9hoEhHUwfmrw2k+iMULHnXgXn7CITiMRbgGurAXI2BUD/BQtjvOjBHyxSI1BZYmLGnA/Nih0DkFmGBRisdmJM3IPLmYKGMrg7MxRFIWFMs3LGmA7OLUiDg3bEEvVgHZmWcgIAfYSlGNx2Y0RwIdIZYEnuvAzPpWZCp1Dd+GA0dmNsDtJx3s991YLGftNMwsFxdHZjW0iXoi6Xr6sCU6tI/Pn9z1oGpTCDTXo4f4JsOTMHxIUvHQUp27zg/9zuhb6apF4ed/eW5nSX094B0YBFDYH9IVWP26Pst+Ju4Pb87SME+6cB5BS5k8CLMLZjuXXjJrT+WmNvI14F5D5Gse+4KjxMQac4jzKlX04Fz6bUgwxRzMcZ7C8itjg7mMtGB+a7ZvWEe9gcfcjLna8xjpwPncIcMNydP3nkKFNzuCMkZdR2Y3/84ahHD0gA5d2cjsaGpA5OaQYYt5vIAWuYCiW10YF7PwH2KF9W0Tj0k1dWByfTgtTjBvM4sH8tAmslp6sBEGvDamOpr0jtFSGbW0oEJBJaAEaFRB3q1LZLp6sDsT5jeGmnYHWBwJktl+zpwJseDlxZIJ2lCFvbNvo0OnGkLL52Q1sgHBmGEJNo6cJYTvHRHapEJDLwB0fewdODXBgKXsHopMEjvSKCrA7OcS7ICZHF3gUGNpHDi6cCvGCa8ckY2GwsYpJ/Zu7elRGIgDMA9LIc5wQADIuBykIOAgCig//s/2W7VrluoS5LpzAxU2d+9Vy2Q9J90utAbS4H51/mDvv0SzkY4hZYXSoEVbknlBtYqZKM6h9ZSCnyeF2g+wPbeyMbWN/gIS4GZ0e0L0vBENnbQmkiBmd/Q0zzCDPvDYPNACnyGXyCFJtLhPJKFoAOdFykwaw29Rkr8Nlko+dCYSoE5t22rYOEHD/y1fFsK/H8xKSyRnnmV+KIRNBZS4P9qkILbh8aqlVPwUHKg5t9Jgf9naLXEGtDMh7FOSHxLaDxJgRNvkjZQ82KipsN45oPhbg61vRT4PxxVmhd4Jh3CXU7Bwws0ylLghFHwrVlMdwNzm4i43AbUnqTACX+CB4b9wTHMDbPrWB6lwF8903luC0q9Aude6Zi4ogaUnFAK/EWdzpsZZ3TRJpd3TZ+gVpQCf9ay2Jg4Mf3jPsDcjpiCHpQWUuDP1qTQSXDBvjDiT8gx9wqleSQFTnDWogy1GZ0KOzDmz4inDrWSFPiTF34bq0YfxTUYax2I5wilJynwJ23+T/BScXZKa17PZJm1kAJ/oupjjaB0oM9KLRirxcQROlCpSYE/qtF5ga8J2L9qZx88rKFUlgJ/sKfzDozB0omCh0IGwf+jFPiDBb8xOLO+xrR2019Hr6TAH7yx95yea3/PZRBRcjWobKTAxp3oB16H5C3j4GEBlY4U2Hj4WY0x8yGH4OEFKn4kBTaMGlxHs5r5JK/goQSlWAp86o59YDakT5jBwzMl5PpQaUuBTzh03g+o9EkhOGYZPHSgspMCn5jTec/8FIrusgweFlCZSIFPTOm8ic36t9ywf3yBt0yvSIFPjNjb4BWpVfsw1quneDJrIwU+8cD+JiySQrbBwwwqaynwiQG7zzEjnbYHY9MwtWZlVwp8YsMOC+vpPpHWLZCxECo1KbBh1tDlXEnkBw8BmYocKPSlwCfu2dvNAilkHDx4UOhJgQ03Ow2ouGRiwvhn0+tBwZMCn6iwswYyU4G5JRnqQ8GXAp8YZl1gWsDcSgqctnvLr2g992f6wcNcvqJNLdjzsQpkKNjDmHNLJlqyyDK1YW+TyoxpsXr+DzIg2yRjg3QaHfkGDwVpdBhbs1uVbVLINnioQqVDPsS7Lnv+yi0lUO+lGTy0obKnFoTJjKxKimepth6MNUKrRxQHVIN412N3oSqUyI8kwcMdKa00W/sRxDsn4jaSf1Iytw6M7QOLR7rGtIEw2e08cm+t2c8V/+nyrwg/0xvEPwf2JaA7SmiVVvDQ0hzlb0KYvAodQKnNmK9h7pV9XrtKIYTRBIc5Pxmwf+FywjxG4LhEXQiTu0FH/ipLHzzw//WG2o3fK4RJM3rIODOfQ/DQ0TZftxDvuvx174H1TJ318+FlgwvPDYi/WuyWICbEEFoHDzuD6dcTiHdlbmqDI3HENcvgYaBbRP9Wlrzhnxl/kmFMHPWe1fPhd77JyqACYRAaDBl/mnLwUFZ8QyvW9rF8hFMYszMinh++RfDwYHZubwzxR8fiUawSMdgFD2XHrL8WSGZ40vk5q5bRq8DP7OBhArPZTtKQ/mfL/xFuFYhpxfwRcfvGzzAOIbRLpWZmjwIvedcviub9zUA60vqDlQUHSo2IOPjBwwhq1Y/DjQWAvs3bsjviigaM58MfE60YDx4EgKrFMYyGS1zBOvnz4d1kkzdnshvWXQgKHe0fsxW6SZ8Pv006t68tJ2g1iSE9QK1fILZwCmNem8idJt7Tl2Q7DPQimx3rmBg4r3iUaMU4BVJeQ2zpvIIHNb9ODJzgYeZBzYnpq2giV5UmVtuZPTFwFroOc+hXaY9vrksKW+i8kIWZj+xPiBa/+wmPmBQ60PCqZKHpICV9l86JdlN8Z092wcDIJQvPufzSUPv+G2+Z9qQQzKGzJBs3SIUfklowGx+/aefDKVvOumqSjTHSMCQDUf3xZbKsfDsHUgh96Hh1sjFECuokmF6hVSuThWgDaxsSXGUPWqOALLhrWHLkA2xhCb0HqwoXRrCzIMEXtgzPTvGFHdhwqiQsrGBg4JJl8MBXIWEjaCDzb+n6HGy9OxJWmjBxDMnCoWXRihOW1jDRqF4keOi4JCzVfZhoPV4ieGiTsDaBmbeI+HaywroYtwMz+zjn4KFWIJGCrQMzrWK+wcMjiVRMYOohzjF4GJJIR3SEKW8V5BU8TAMSKYlbMNZoEpP7gAT8EonU3CKB7iOxzEbS4riYJZLoFl1KKGoeJUS6oGiNRGqTmBIIbxpIpCs/wCkLa0jG+VkskBG3OfCRTE9CwtTVW0jKGzyXSSMsbnpIypcWZQZmDhg6lduYzohvX0cOGIokMrADU29fuWkeYpf+iuJt82m4n4NpRSITK9jx+rVGo9bzHFh5JZGN63j0QjqUGVri4hYRiYxcw8z8hZzh0LqC60RsQ/n8fnVdKy1ZX127FweXMiGRgx8eLsKX/kY2rmQGVU/6k7kpH5G7juQLOXIryNlG8sF8FT3kyLkhkbN6F7lpbEnkzl0iJ/dywP0yZg3koN8kcSHB0kHW7uUG8CUdusjUdEbioqLnPjLTupHs6PIKYx+ZcIYhiWsQDx2kzlnIAKzrUb13kK6BlPe6VF89pMa/l/Jen1+T0aLSJJOaIhvDKBiMgENIlvKS2phldFphEANhZXGKBp0VRycFBz0QMFchM3Y1TRhGwZAAvPqynCQ2q9TFRttVQwpwqyrLShE5XqVjzjxa7w5JIMCiKIu3aS2tY2bAOrrUeWgDJlYhfU0NdQVB6K4zRk4pQQV1DTMxIdbRed5hB7i5aZhfATx+d+PZ5dxWAAAAAElFTkSuQmCC";return"artists"===r.type?e.images[0]&&(n=e.images[0].url):e.album.images[0]&&(n=e.album.images[0].url),Object(y.jsxs)(et.a,{cols:0===t?2:1,rows:1,children:[Object(y.jsx)("img",{className:nt.a.ArtistImage,src:n,alt:e.name}),Object(y.jsx)(tt.a,{title:"".concat(t+1,". ").concat(e.name),titlePosition:"top",actionPosition:"left",className:nt.a.TitleBar})]},t)}))})})},ct=r(27),ot=r.n(ct),st=Object(Ze.a)((function(e){return Object(Ve.a)({small:{width:e.spacing(7),height:e.spacing(7)},large:{width:e.spacing(15),height:e.spacing(15)}})})),it=function(){var e=Object(i.useState)(!1),t=Object(Je.a)(e,2),r=(t[0],t[1],f((function(e){return e.userData}))),n=r.userInputSelect,c=r.userTopData,o=r.userProfileInfo,s=f((function(e){return e.login})),A=s.accessToken,p=s.refreshToken,l=s.expiresAt,d=f((function(e){return e.error})).error,O=function(){var e=Object(g.b)();return Object(m.b)(a,e)}(),T=O.getUserProfileInfo,E=O.getUserTopData,h=O.userInputSelected,j=Me(),S=j.userAuthorized,b=j.getRefreshToken,w=st(),D=function(e,t){h({type:"type"===t?e.target.value:n.type,timeTerm:"timeTerm"===t?e.target.value:n.timeTerm})};return Object(i.useEffect)((function(){if(A){var e=new Date;new Date(l).getTime()<e.getTime()&&b(p),o.id||T(),c.length||E(n,l)}}),[o,p,A,n]),c.length?Object(y.jsxs)(u.a.Fragment,{children:[o.id&&Object(y.jsxs)(u.a.Fragment,{children:[Object(y.jsx)("h4",{children:o.display_name}),o.images.length?Object(y.jsx)(Qe.a,{className:"".concat(ot.a.UserImage," ").concat(w.large),src:o.images[0].url,alt:"".concat(o.display_name," image")}):Object(y.jsx)(Qe.a,{className:"".concat(ot.a.UserImage," ").concat(w.small),children:qe(o.display_name)})]}),d&&Object(y.jsx)(Xe,{}),Object(y.jsx)(ze.a,{variant:"contained",onClick:function(){return S(!1)},children:"Log Out"}),Object(y.jsxs)("div",{className:ot.a.GroupDiv,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"type",children:"Get your top: "}),Object(y.jsxs)("select",{value:n.type,className:ot.a.Select,name:"type",onChange:function(e){return D(e,e.target.name)},children:[Object(y.jsx)("option",{value:"artists",children:"Artists"}),Object(y.jsx)("option",{value:"tracks",children:"Tracks"})]})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{htmlFor:"timeTerm",children:"From: "}),Object(y.jsxs)("select",{value:n.timeTerm,className:ot.a.Select,name:"timeTerm",onChange:function(e){return D(e,e.target.name)},children:[Object(y.jsx)("option",{value:"short_term",children:"This month"}),Object(y.jsx)("option",{value:"medium_term",children:"6 months"}),Object(y.jsx)("option",{value:"long_term",children:"All time"})]})]})]}),Object(y.jsx)(at,{})]}):null},ut=function(){var e=f((function(e){return e.login})),t=e.authCode,r=(e.isLoggedIn,e.accessToken),n=f((function(e){return e.ui})).loading,a=(f((function(e){return e.error})).error,Me()),c=(a.userAuthorized,a.authCodeObtained),o=a.getAccessToken;Object(g.b)();return Object(i.useEffect)((function(){var e=We(window.location.href).code;e&&e!==t&&(c(e),o())}),[]),Object(y.jsxs)("main",{className:T.a.Container,children:[Object(y.jsx)("img",{className:T.a.Logo,src:E,alt:"spotify-logo"}),r?Object(y.jsxs)(u.a.Fragment,{children:[Object(y.jsx)(S,{show:n,children:Object(y.jsx)(D,{})}),Object(y.jsx)(it,{})]}):Object(y.jsx)(u.a.Fragment,{children:Object(y.jsx)("a",{className:T.a.Anchor,href:Re,children:"LOG IN WITH SPOTIFY"})})]})},At=r(64);r(101);var pt=function(){return Object(y.jsx)("div",{className:d.a.App,children:Object(y.jsx)(At.a,{children:Object(y.jsx)(ut,{})})})},lt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,127)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};p.a.render(Object(y.jsx)(g.a,{store:he,children:Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(pt,{})})}),document.getElementById("root")),lt()},27:function(e,t,r){e.exports={UserImage:"Main_UserImage__3qxFL"}},36:function(e,t,r){e.exports={ContainerAbsolute:"Layout_ContainerAbsolute__GVuZd",Container:"Layout_Container__BQf6m",Loader:"Layout_Loader__1uyud",Logo:"Layout_Logo__1vjZI",Anchor:"Layout_Anchor__16oze"}},37:function(e,t,r){e.exports={TitleBar:"UserTopData_TitleBar__3Y7Do"}},54:function(e,t,r){e.exports={App:"App_App__1B3w2",Anchor:"App_Anchor__1EPTJ",Logo:"App_Logo__TfFJ9"}},56:function(e,t,r){e.exports={Backdrop:"Backdrop_Backdrop__3Q11w"}},57:function(e,t,r){e.exports={Loader:"Spinner_Loader__15U4I",spinner:"Spinner_spinner__3ClXT"}},74:function(e,t,r){}},[[103,1,2]]]);
//# sourceMappingURL=main.13e62119.chunk.js.map