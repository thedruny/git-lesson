(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(15),r=n.n(a),o=n(16),s=n(64),u={initialized:!1},c=function(){return function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e(Object(s.b)()),n.next=3,r.a.awrap(Promise.all([t]));case 3:e({type:"INITIALIZED_SUCCESS"});case 4:case"end":return n.stop()}}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(o.a)({},e,{initialized:!0});default:return e}}},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n(0);var a=function(e){return e?void 0:"Field is required"},r=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols"):void 0}}},128:function(e,t,n){e.exports={formControl:"FormsControls_formControl__KoJWe",error:"FormsControls_error__1mA74",formSummaryError:"FormsControls_formSummaryError__3sDnM"}},134:function(e,t,n){e.exports={preloader:"Preloader_preloader__2DPbf",spinner:"Preloader_spinner__1h1Va",spin:"Preloader_spin__12HVz"}},135:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__3cQ6e",posts:"MyPosts_posts__1lAYa"}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(143),r=n(0),o=n.n(r),s=n(128),u=n.n(s),c=n(131),i=function(e){return function(t){var n=t.input,r=t.meta,s=r.touched,c=r.error,i=Object(a.a)(t,["input","meta"]),l=s&&c;return o.a.createElement("div",{className:u.a.formControl+" "+(l?u.a.error:"")},o.a.createElement(e,Object.assign({},n,i)),l&&o.a.createElement("span",null," ",c," "))}},l=function(e,t,n,a,r){return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r)))}},159:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(71),r=n(16),o={dialogs:[{id:1,name:"Andrey"},{id:2,name:"Kolya"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are u"},{id:3,message:"Smile"},{id:4,message:"Lol"}]},s=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:5,message:n}])});default:return e}}},196:function(e,t,n){"use strict";var a=n(30),r=n(31),o=n(32),s=n(33),u=n(34),c=n(0),i=n.n(c),l=(n(336),n(54)),f=n(203),d=n.n(f),p=n(77),m=n(132),h=function(e){var t=Object(c.useState)(!1),n=Object(m.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(e.status),s=Object(m.a)(o,2),u=s[0],l=s[1];Object(c.useEffect)((function(){l(e.status)}),[e.status]);return i.a.createElement("div",null,!a&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){r(!0)}}," ",e.status||"No status"," ")),a&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(u)},onChange:function(e){l(e.currentTarget.value)},value:u})))},g=function(e){var t=e.profile,n=e.status,a=e.updateStatus;return t?i.a.createElement("div",null,i.a.createElement("div",{className:d.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large}),i.a.createElement("h3",null,"Profile Status"),i.a.createElement(h,{status:n,updateStatus:a}))):i.a.createElement(p.a,null)},E=n(52),b=n(135),v=n.n(b),O=n(204),_=n.n(O),S=function(e){return i.a.createElement("div",{className:_.a.item},i.a.createElement("img",{src:"https://pbs.twimg.com/profile_images/1210987730299166721/jSUc6abq_400x400.jpg",alt:"ava"}),e.massage,i.a.createElement("div",null,i.a.createElement("span",null,"Like")," ",e.likesCont))},w=n(131),y=n(197),j=n(122),P=n(142),I=n(417),C=Object(j.a)(10),T=Object(P.a)("textarea"),k=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(S,{massage:e.message,likesCont:e.likesCount,key:e.id})})).reverse();return i.a.createElement("div",{className:v.a.postsBlock},i.a.createElement("h3",null,"My post"),i.a.createElement(x,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:v.a.posts},t))})),x=Object(y.a)({form:"profileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(w.a,{component:T,placeholder:"Post message",name:"newPostText",validate:[j.b,C]})),i.a.createElement("div",null,i.a.createElement(I.a,{color:"blue",type:"submit"},"Add Post ")))})),A=k,U=n(24),L=Object(U.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(E.a)(t))}}}))(A),N=function(e){return i.a.createElement("div",{className:"ui-container"},i.a.createElement(g,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(L,null))},F=n(13),R=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(N,this.props)}}]),t}(i.a.Component),G=Object(F.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:E.d,getStatus:E.c,updateStatus:E.e}),l.f)(R),z=n(418),D=n(44),M=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).state={activeItem:"home"},n.handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return i.a.createElement(z.a,{pointing:!0,secondary:!0,size:"massive",color:"teal"},i.a.createElement(z.a.Item,{name:"Profile",active:"profile"===e,onClick:this.handleItemClick,as:D.b,to:"/profile"}),i.a.createElement(z.a.Item,{name:"Messages",active:"dialogs"===e,onClick:this.handleItemClick,as:D.b,to:"/dialogs"}),i.a.createElement(z.a.Item,{name:"Users",active:"users"===e,onClick:this.handleItemClick,as:D.b,to:"/users"}),this.props.isAuth?i.a.createElement(z.a.Menu,{position:"right"},i.a.createElement(z.a.Item,{name:"logout",active:"logout"===e,onClick:this.props.logout})):i.a.createElement(z.a.Menu,{position:"right"},i.a.createElement(z.a.Item,{name:"Login",active:"logout"===e,onClick:this.handleItemClick,as:D.b,to:"/login"})))}}]),t}(c.Component),B=n(64),W=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(M,this.props)}}]),t}(i.a.Component),H=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,email:e.auth.email}}),{logout:B.d})(W),J=n(100),K=(n(411),i.a.lazy((function(){return Promise.all([n.e(6),n.e(5)]).then(n.bind(null,465))}))),V=i.a.lazy((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,462))})),Y=i.a.lazy((function(){return Promise.all([n.e(7),n.e(4)]).then(n.bind(null,466))})),Z=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?i.a.createElement("div",{className:"app-wrapper"},i.a.createElement(H,null),i.a.createElement("div",{className:"app-wrapper-content"},i.a.createElement(c.Suspense,{fallback:i.a.createElement(p.a,null)},i.a.createElement(l.b,{path:"/dialogs",render:function(){return i.a.createElement(K,null)}}),i.a.createElement(l.b,{path:"/login",render:function(){return i.a.createElement(V,null)}}),i.a.createElement(l.b,{path:"/users",render:function(){return i.a.createElement(Y,null)}})),i.a.createElement(l.b,{path:"/profile/:userId?",render:function(){return i.a.createElement(G,null)}}))):i.a.createElement(p.a,null)}}]),t}(c.Component);t.a=Object(F.d)(l.f,Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:J.b}))(Z)},199:function(e,t,n){"use strict";var a=n(15),r=n.n(a),o=n(71),s=n(16),u=n(27),c=function(e,t,n,a){return e.map((function(e){return e[t]===n?Object(s.a)({},e,{},a):e}))};n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return b}));var i={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},l=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},m=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(n){var a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n(p(!0)),n(d(e)),o.next=4,r.a.awrap(u.c.getUsers(e,t));case 4:a=o.sent,n(p(!1)),n({type:"SET_USERS",users:a.items}),n({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return o.stop()}}))}},g=function(e,t,n,a){return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e(m(!0,t)),o.next=3,r.a.awrap(n(t));case 3:0===o.sent.data.resultCode&&e(a(t)),e(m(!1,t));case 6:case"end":return o.stop()}}))},E=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:g(t,e,u.c.follow.bind(u.c),l);case 1:case"end":return n.stop()}}))}},b=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:g(t,e,u.c.unfollow.bind(u.c),f);case 1:case"end":return n.stop()}}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)({},e,{users:c(e.users,"id",t.userId,{followed:!0})});case"UNFOLLOW":return Object(s.a)({},e,{users:c(e.users,"id",t.userId,{followed:!1})});case"SET_USERS":return Object(s.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(s.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(s.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(s.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},203:function(e,t,n){e.exports={descriptionBlock:"Profileinfo_descriptionBlock__1Yly_"}},204:function(e,t,n){e.exports={item:"Post_item__1vZkF"}},263:function(e,t,n){e.exports=n(412)},27:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var a=n(200),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"877ec7b8-009a-44b1-9f94-b4b8ea47f202"}}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},335:function(e,t,n){},336:function(e,t,n){},412:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(13),r=n(52),o=n(159),s=n(199),u=n(64),c=n(201),i=n(198),l=n(100),f=Object(a.c)({profilePage:r.b,dialogsPage:o.a,usersPage:s.a,auth:u.a,form:i.a,app:l.a}),d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,p=Object(a.e)(f,d(Object(a.a)(c.a)));window.__store__=p;var m=p,h=n(0),g=n.n(h),E=n(45),b=n.n(E),v=(n(335),n(196)),O=n(44),_=n(24);b.a.render(g.a.createElement(O.a,null,g.a.createElement(_.a,{store:m},g.a.createElement(v.a,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return p}));var a=n(15),r=n.n(a),o=n(71),s=n(16),u=n(27),c={posts:[{id:1,message:"Hi, how are you",likesCount:12},{id:2,message:"Hi guys, it's my first post",likesCount:34},{id:3,message:"I love this year 2019",likesCount:3},{id:4,message:"Post Malone best writer",likesCount:123}],profile:null,status:""},i=function(e){return{type:"ADD-POST",newPostText:e}},l=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(u.c.getProfile(e));case 2:n=a.sent,t({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return a.stop()}}))}},d=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(u.b.getStatus(e));case 2:n=a.sent,t(l(n.data));case 4:case"end":return a.stop()}}))}},p=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(u.b.updateStatus(e));case 2:0===n.sent.data.resultCode&&t(l(e));case 4:case"end":return n.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(s.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(s.a)({},e,{status:t.status});case"DELETE_POST":return Object(s.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p}));var a=n(15),r=n.n(a),o=n(16),s=n(27),u=n(74),c="social-network/auth/SET_USER_DATA",i={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:c,payload:{userId:e,email:t,login:n,isAuth:a}}},f=function(){return function(e){var t,n,a,o,u;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,r.a.awrap(s.a.me());case 2:0===(t=c.sent).data.resultCode&&(n=t.data.data,a=n.id,o=n.email,u=n.login,e(l(a,o,u,!0)));case 4:case"end":return c.stop()}}))}},d=function(e,t,n){return function(a){var o,c;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,r.a.awrap(s.a.login(e,t,n));case 2:0===(o=i.sent).data.resultCode?a(f()):(c=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(u.a)("login",{_error:c})));case 4:case"end":return i.stop()}}))}},p=function(){return function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(s.a.logout());case 2:0===t.sent.data.resultCode&&e(l(null,null,null,!1));case 4:case"end":return t.stop()}}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(o.a)({},e,{},t.payload);default:return e}}},77:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(134),s=n.n(o);t.a=function(e){return r.a.createElement("div",{className:s.a.preloader},r.a.createElement("div",{className:s.a.spinner}))}}},[[263,1,2]]]);
//# sourceMappingURL=main.eb248d35.chunk.js.map