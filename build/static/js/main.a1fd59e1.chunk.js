(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(e,t,n){"use strict";n(51);var a=n(16),o=n.n(a),r=n(27),c=n.n(r),i=n(39),s=n(48);function l(){return(l=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.a)("/oauth/token",{method:"POST",body:t}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}n(18);var u=n(42),d=n(25),p=n(50);n.d(t,"c",function(){return h}),n.d(t,"b",function(){return m}),n.d(t,"d",function(){return f}),n.d(t,"a",function(){return g});var h=function(e){return function(t,n){return new Promise(function(n,a){var o=e;t({type:d.a,payload:{response:o,currentAuthority:o.token},receivedAt:Date.now()}),p.default.dispatch(Object(u.a)()).then(function(e){}).catch(function(e){}),n(o)}).catch(function(e){o.a.fail(e.message,3,null,!1)})}},m=function(e){return function(t,n){return new Promise(function(n,a){(function(e){return l.apply(this,arguments)})(e).then(function(e){if(t({type:d.a,payload:{response:e,currentAuthority:e.access_token},receivedAt:Date.now()}),"undefined"===typeof e.error)p.default.dispatch(Object(u.a)()).then(function(e){}).catch(function(e){}),n(e);else{var a=e.error_description;o.a.fail(a)}}).catch(function(e){o.a.fail(e.message,3,null,!1)})})}},f=function(){return function(e,t){return new Promise(function(t,n){var a={access_token:"",status:!0,message:"\u767b\u51fa\u6210\u529f"};e({type:d.a,payload:{response:a,currentAuthority:a.access_token},receivedAt:Date.now()}),e({type:d.c,payload:{response:a,id:""},pending:!0,receivedAt:Date.now()}),o.a.success("\u767b\u51fa\u6210\u529f",3,null,!1),window.location.href="#/",t(a)})}},g=function(e){return function(t,n){return new Promise(function(n,a){var o={access_token:"",status:!0,message:"\u6ca1\u6709\u6743\u9650"};t({type:d.a,payload:{response:o,currentAuthority:o.access_token},receivedAt:Date.now()}),t({type:d.c,payload:{response:o,id:""},pending:!0,receivedAt:Date.now()}),window.location.href="#/login?from_hash=".concat(e),n(o)})}}},118:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var a=n(27),o=n.n(a),r=n(39),c=(n(70),n(48)),i=n(18);function s(){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c.a)("/v4/user"));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c.a)("/v4/users/".concat(Object(i.d)()),{method:"PUT",body:t}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}},121:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(11),o=n(12),r=n(15),c=n(13),i=n(14),s=n(0),l=n.n(s),u=n(140),d=n.n(u),p=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:d.a.empty,style:this.props.style},this.props.img,l.a.createElement("p",null,this.props.text))}}]),t}(s.PureComponent);p.defaultProps={img:l.a.createElement("img",{src:n(239),alt:"\u6682\u65e0\u6570\u636e"}),text:"\u6682\u65e0\u6570\u636e"}},129:function(e,t,n){e.exports={BasicLayout:"_601mbk-GFZyQjzIAu_D-u"}},131:function(e,t,n){e.exports=n.p+"static/media/arrows.82220469.svg"},133:function(e,t,n){e.exports=n.p+"static/media/wechat.2bae0982.svg"},134:function(e,t,n){e.exports=n.p+"static/media/help.3942a450.svg"},135:function(e,t,n){e.exports=n.p+"static/media/setting.425fbb44.svg"},136:function(e,t,n){e.exports=n.p+"static/media/wechat-screenshot.aa126fb6.png"},138:function(e,t,n){e.exports={"loading-icon":"_2mhKs_711oKy2tCZzTSngn"}},139:function(e,t,n){e.exports={"top-nav-container":"_176WRClvdXndctPKgddYe6"}},140:function(e,t,n){e.exports={empty:"_1iygKU2dfsBtQ-2s6FERrT"}},151:function(e,t,n){e.exports=n(50)},161:function(e,t,n){},18:function(e,t,n){"use strict";function a(){return localStorage.getItem("token")}function o(e){return localStorage.setItem("token",e)}function r(){return localStorage.getItem("user_id")}function c(e){return localStorage.setItem("user_id",e)}function i(e){return localStorage.setItem("isShowHead",e)}function s(){return localStorage.getItem("isShowHead")}function l(e){return localStorage.setItem("initShowHead",e)}function u(){return localStorage.getItem("initShowHead")}n.d(t,"a",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"h",function(){return c}),n.d(t,"g",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"b",function(){return u})},207:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a);t.default=function(e){return o.a.createElement("div",e)}},211:function(e,t,n){"use strict";n.r(t);n(143);var a=n(67),o=n.n(a),r=n(11),c=n(12),i=n(15),s=n(13),l=n(14),u=n(0),d=n.n(u),p=n(24),h=n(20),m=n(23),f=n(9),g=n.n(f),y=(n(215),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={is_show_nav:!0},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({is_show_nav:Object(m.c)("is_show_nav",this.props.location.search)})}},{key:"render",value:function(){var e="false"===this.state.is_show_nav||"undefined"!=typeof this.props.location.state&&this.props.location.state.hasOwnProperty("is_show_nav")&&!this.props.location.state.is_show_nav;return d.a.createElement("div",{className:g()("page-nav-layout")},this.props.children||"",e?null:d.a.createElement("footer",{className:"footer"},d.a.createElement(o.a,{justify:"center",className:"bottom-nav"},d.a.createElement(o.a.Item,null,d.a.createElement(p.c,{exact:!0,to:"/",className:"home",activeclassname:"active"},"\u9996\u9875")),d.a.createElement(o.a.Item,null,d.a.createElement(p.c,{to:"/account",className:"account",activeclassname:"active"},"\u6211\u7684")))))}}]),t}(u.PureComponent));t.default=Object(h.g)(y)},215:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n(12),r=n(15),c=n(13),i=n(14),s=n(0),l=n.n(s),u=n(20),d=n(49),p=n(71),h=n.n(p),m=function(e){function t(e){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){console.log("UserLayout:\u66f4\u65b0\u5b8c\u6bd5")}},{key:"render",value:function(){var e=this,t=[l.a.createElement("span",{key:"cancel",style:{color:"#000",fontSize:"16px"},onClick:function(){return e.props.history.push("/")}},"\u53d6\u6d88")];return l.a.createElement("div",{className:h.a.UserLayout},l.a.createElement("header",null,l.a.createElement(d.a,{title:"",leftContent:"",rightContent:t})),this.props.children||"")}}]),t}(s.PureComponent);t.default=Object(u.g)(m)},217:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n(12),r=n(15),c=n(13),i=n(14),s=n(0),l=n.n(s),u=n(20),d=n(49),p=n(71),h=n.n(p),m=function(e){function t(e){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){console.log("UserLayout:\u66f4\u65b0\u5b8c\u6bd5")}},{key:"render",value:function(){return l.a.createElement("div",{className:h.a.UserLayout},l.a.createElement("header",null,l.a.createElement(d.a,{title:""})),this.props.children||"")}}]),t}(s.PureComponent);t.default=Object(u.g)(m)},218:function(e,t,n){"use strict";n.r(t);n(147);var a=n(116),o=n.n(a),r=(n(149),n(117)),c=n.n(r),i=(n(141),n(99)),s=n.n(i),l=n(11),u=n(12),d=n(15),p=n(13),h=n(14),m=n(0),f=n.n(m),g=n(36),y=n(24),b=n(20),v=n(8),w=n.n(v),E=n(42),O=function(e){return f.a.createElement("footer",{className:w.a.footer},f.a.createElement("div",{className:w.a.bg}),f.a.createElement("div",null,f.a.createElement("span",null,f.a.createElement("img",{src:n(89),alt:""}),"\u9ad8\u8d28\u91cf"),f.a.createElement("span",null,f.a.createElement("img",{src:n(89),alt:""}),"\u9ad8\u6548\u7387"),f.a.createElement("span",null,f.a.createElement("img",{src:n(89),alt:""}),"\u9ad8\u6210\u679c")))},j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={data:["AiyWuByWklrrUDlFignR","TekJlZRVCjLFexlOCuWn","IJOtIlfsYdTyaDTRVrLI"],refreshing:!1,height:document.documentElement.clientHeight-60},n.onRefresh=function(){n.setState({refreshing:!0}),Promise.all([n.props.dispatch(Object(E.a)())]).then(function(){return n.setState({refreshing:!1})}).catch(function(){return n.setState({refreshing:!1})})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.currentUser.payload,a=t.name,r=t.last_activity_on,i=t.state,l=t.web_url;return f.a.createElement("div",{className:w.a["home-container"]},f.a.createElement(o.a,{damping:60,ref:function(t){return e.ptr=t},style:{height:this.state.height,overflow:"auto"},refreshing:this.state.refreshing,onRefresh:this.onRefresh},f.a.createElement("div",{className:w.a["main-data"]},f.a.createElement("header",{className:w.a.header},f.a.createElement("div",{className:w.a.logo},f.a.createElement("span",null,"react")),f.a.createElement("div",{className:w.a.message,onClick:function(){return e.props.history.push("/message")}},f.a.createElement("span",null,"\u6d88\u606f"))),f.a.createElement("div",{className:w.a.card},f.a.createElement("div",{className:w.a.content},f.a.createElement("p",{className:w.a.title},a||"\u4f5a\u540d"),f.a.createElement("p",{className:w.a.status},i||"\u672a\u77e5\u72b6\u6001"),f.a.createElement(s.a,{className:w.a.button,type:"primary",size:"small",onClick:function(){window.location.href=l}},"\u7ad9\u70b9"),f.a.createElement("p",{className:w.a.tips},r||"\u672a\u77e5\u6700\u540e\u6d3b\u52a8\u65f6\u95f4")),f.a.createElement(O,{user:this.props.currentUser,status:i}))),f.a.createElement("div",{className:w.a["hot-events"]},f.a.createElement("header",{className:w.a.title},"\u70ed\u95e8\u6d3b\u52a8"),f.a.createElement(c.a,{className:w.a["hot-carousel"],autoplay:!1,infinite:!0,dots:!1},this.state.data.map(function(t){return f.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},f.a.createElement("img",{src:"https://zos.alipayobjects.com/rmsportal/".concat(t,".png"),alt:"",style:{width:"100%",height:"120px",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))),f.a.createElement("div",{className:w.a.guide},f.a.createElement("header",{className:w.a.title},"\u65b0\u624b\u6307\u5f15"),f.a.createElement("div",{className:w.a.content},f.a.createElement(y.b,{className:w.a.item,to:"/help-list?tag=1&key=0",style:{backgroundImage:"url(".concat(n(227),")")}},f.a.createElement("p",null,"Git \u57fa\u7840"),f.a.createElement("p",null,"\u5305\u62ec Subversion \u548c\u8fd1\u4f3c\u5de5\u5177")),f.a.createElement(y.b,{className:w.a.item,to:"/help-list?tag=0&key=1",style:{backgroundImage:"url(".concat(n(228),")")}},f.a.createElement("p",null,"Git \u7b80\u53f2"),f.a.createElement("p",null,"\u4e13\u6709\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf"))))))}}]),t}(m.PureComponent);t.default=Object(b.g)(Object(g.b)(function(e){return{currentUser:e.user.currentUser}})(j))},227:function(e,t,n){e.exports=n.p+"static/media/step.c37f7ecc.png"},228:function(e,t,n){e.exports=n.p+"static/media/detail.c52cdcad.png"},229:function(e,t,n){"use strict";n.r(t);n(230);var a=n(132),o=n.n(a),r=(n(62),n(56)),c=n.n(r),i=n(55),s=n(11),l=n(12),u=n(15),d=n(13),p=n(14),h=(n(142),n(73)),m=n.n(h),f=n(0),g=n.n(f),y=n(36),b=n(20),v=n(133),w=n.n(v),E=n(134),O=n.n(E),j=n(135),x=n.n(j),k=n(136),_=n.n(k),N=n(29),S=n.n(N),U=n(137),C=n.n(U),P=m.a.Item;var D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).showModal=function(e){return function(t){t.preventDefault(),n.setState(Object(i.a)({},e,!0)),C()("\u5f90\u8001\u5e08\u5f00\u53d1\u8bfe")?n.setState({weixinTips:"\u516c\u4f17\u53f7\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f\uff0c\u6253\u5f00\u5fae\u4fe1\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u201c+\u201d\u53f7\u2014\u6dfb\u52a0\u670b\u53cb\u2014\u516c\u4f17\u53f7\u201c\u7c98\u8d34\u201d\u2014\u5173\u6ce8\u3010\u5f90\u8001\u5e08\u5f00\u53d1\u8bfe\u3011"}):n.setState({weixinTips:"\u60a8\u7684\u8bbe\u5907\u4e0d\u652f\u6301\u81ea\u52a8\u590d\u5236\u529f\u80fd\uff0c\u6253\u5f00\u5fae\u4fe1\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u201c+\u201d\u53f7\u2014\u6dfb\u52a0\u670b\u53cb\u2014\u516c\u4f17\u53f7\u201c\u641c\u7d22\u201d\u2014\u5173\u6ce8\u3010\u5f90\u8001\u5e08\u5f00\u53d1\u8bfe\u3011"})}},n.onClose=function(e){return function(){n.setState(Object(i.a)({},e,!1))}},n.onWrapTouchStart=function(e){/iPhone|iPod|iPad/i.test(navigator.userAgent)&&(function(e,t){for(var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e;){if(n.call(e,t))return e;e=e.parentElement}return null}(e.target,".am-modal-content")||e.preventDefault())},n.state={couponNum:0,wechatModal:!1,weixinTips:"\u6253\u5f00\u5fae\u4fe1\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u201c+\u201d\u53f7\u2014\u6dfb\u52a0\u670b\u53cb\u2014\u516c\u4f17\u53f7\u201c\u641c\u7d22\u201d\u2014\u5173\u6ce8\u3010\u5f90\u8001\u5e08\u5f00\u53d1\u8bfe\u3011",height:document.documentElement.clientHeight-60},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.currentUser;return g.a.createElement("div",{className:S.a["account-container"],style:{height:this.state.height}},g.a.createElement(o.a,{visible:this.state.wechatModal,transparent:!0,platform:"ios",maskClosable:!0,onClose:this.onClose("wechatModal"),title:"",className:S.a["wechat-container"],wrapClassName:S.a["wechat-wrap"],wrapProps:{onTouchStart:this.onWrapTouchStart}},g.a.createElement("div",{className:S.a["wechat-content"]},g.a.createElement(c.a,{type:"cross",onClick:this.onClose("wechatModal")}),g.a.createElement("p",{className:S.a["main-title"]},"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7"),g.a.createElement("p",null,this.state.weixinTips),g.a.createElement("div",{className:S.a["img-container"]},g.a.createElement("img",{src:_.a,alt:"\u5f90\u8001\u5e08\u5f00\u53d1\u8bfe"})),g.a.createElement("a",{className:S.a.button,href:"weixin://"},"\u53bb\u5fae\u4fe1"))),g.a.createElement("div",{className:S.a["account-content"]},g.a.createElement("div",{className:S.a.header,style:{backgroundImage:"url(".concat(t.payload.avatar_url,")")}}),g.a.createElement("div",{className:S.a.phone},t.payload.name?t.payload.name:"\u4f5a\u540d"),g.a.createElement("div",{className:S.a.intro},"undefined"===typeof t.payload.last_activity_on||null===t.payload.last_activity_on?"\u672a\u77e5\u6700\u540e\u6d3b\u52a8\u65f6\u95f4":"\u6700\u540e\u6d3b\u52a8\u65f6\u95f4\uff1a".concat(t.payload.last_activity_on))),g.a.createElement(m.a,{className:S.a["account-link-list"]},g.a.createElement(P,{thumb:w.a,arrow:"horizontal",onClick:this.showModal("wechatModal"),extra:""},"\u5fae\u4fe1\u5ba2\u670d"),g.a.createElement(P,{thumb:O.a,arrow:"horizontal",onClick:function(){e.props.history.push("/help")},extra:""},"\u5e2e\u52a9\u4e2d\u5fc3"),g.a.createElement(P,{thumb:x.a,arrow:"horizontal",onClick:function(){e.props.history.push("/setting")},extra:""},"\u8bbe\u7f6e")))}}]),t}(f.PureComponent);t.default=Object(b.g)(Object(y.b)(function(e){return{currentUser:e.user.currentUser}})(D))},23:function(e,t,n){"use strict";n(122);var a=[{name:"401",path:"/exception/401",component:"/exception/401",authority:!1},{name:"403",path:"/exception/403",component:"/exception/403",authority:!1},{name:"404",path:"/exception/404",component:"/exception/404",authority:!1},{name:"500",path:"/exception/500",component:"/exception/500",authority:!1},{name:"\u7f51\u7edc\u5f02\u5e38",path:"/exception/no-network",component:"/exception/no-network",authority:!1},{name:"\u6ce8\u518c\u534f\u8bae",path:"/agreement",component:"/agreement",authority:!1},{name:"\u6ce8\u518c",path:"/register",component:"/register",authority:!1,layout:"/register-layout"},{name:"\u767b\u5f55",path:"/login",component:"/login",authority:!1,layout:"/user-layout"},{name:"\u4fee\u6539\u5bc6\u7801",path:"/password",component:"/password",authority:!0},{name:"\u9996\u9875",path:"/",component:"/",authority:!1,layout:"/page-nav-layout",animated:"none"},{name:"\u6211\u7684",path:"/account",component:"/account",authority:!0,layout:"/page-nav-layout",animated:"none"},{name:"\u8bbe\u7f6e",path:"/setting",component:"/setting",authority:!0},{name:"\u5173\u4e8e\u6211\u4eec",path:"/about-us",component:"/about-us",authority:!1},{name:"\u5e2e\u52a9\u4e2d\u5fc3",path:"/help",component:"/help",authority:!1},{name:"\u67e5\u770b\u95ee\u9898",path:"/help-list",component:"/help-list",authority:!1},{name:"\u6d88\u606f",path:"/message",component:"/message",authority:!0}],o={"/blank-layout":n(210),"/basic-layout":n(91),"/page-nav-layout":n(211),"/user-layout":n(216),"/register-layout":n(217),"/":n(218),"/account":n(229)},r=n(21),c=n.n(r),i=(n(51),n(16)),s=n.n(i),l=n(11),u=n(12),d=n(15),p=n(13),h=n(14),m=n(0),f=n.n(m),g=n(20),y=n(138),b=n.n(y),v=n(92),w=n.n(v),E=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){return this.props.error?s.a.loading("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25\uff0c\u5c06\u91cd\u65b0\u8fdb\u884c\u52a0\u8f7d",2,function(){window.location.reload()}):this.props.timedOut?s.a.loading("\u8d44\u6e90\u52a0\u8f7d\u8d85\u65f6\uff0c\u5c06\u91cd\u65b0\u8fdb\u884c\u52a0\u8f7d",2,function(){window.location.reload()}):this.props.pastDelay?s.a.loading("\u52a0\u8f7d\u4e2d...",2):f.a.createElement("div",null,f.a.createElement("img",{className:b.a["loading-icon"],src:w.a,alt:"logo"}))}},{key:"render",value:function(){return f.a.createElement("div",null)}}]),t}(m.PureComponent),O=Object(g.g)(E),j={"/exception/401":c()({loader:function(){return n.e(7).then(n.bind(null,393))},loading:O,delay:300}),"/exception/403":c()({loader:function(){return n.e(8).then(n.bind(null,394))},loading:O,delay:300}),"/exception/404":c()({loader:function(){return n.e(9).then(n.bind(null,395))},loading:O,delay:300}),"/exception/500":c()({loader:function(){return n.e(10).then(n.bind(null,396))},loading:O,delay:300}),"/exception/no-network":c()({loader:function(){return n.e(11).then(n.bind(null,397))},loading:O,delay:300}),"/agreement":c()({loader:function(){return n.e(17).then(n.bind(null,398))},loading:O,delay:300}),"/register":c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(20)]).then(n.bind(null,405))},loading:O,delay:300}),"/login":c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,399))},loading:O,delay:300}),"/help":c()({loader:function(){return n.e(12).then(n.bind(null,400))},loading:O,delay:300}),"/help-list":c()({loader:function(){return n.e(13).then(n.bind(null,401))},loading:O,delay:300}),"/account":c()({loader:function(){return Promise.resolve().then(n.bind(null,229))},loading:O,delay:300}),"/password":c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,402))},loading:O,delay:300}),"/setting":c()({loader:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,403))},loading:O,delay:300}),"/about-us":c()({loader:function(){return n.e(16).then(n.bind(null,404))},loading:O,delay:300}),"/message":c()({loader:function(){return Promise.all([n.e(5),n.e(15)]).then(n.bind(null,406))},loading:O,delay:300})},x=Object.assign(o,j),k=JSON.parse(JSON.stringify(a));k.forEach(function(e){"string"===typeof e.component&&x[e.component]&&(e.component=x[e.component].default||x[e.component]),"string"===typeof e.layout&&x[e.layout]&&(e.layout=x[e.layout].default||x[e.layout])});var _=k;n(31),n(70),n(18);n.d(t,"d",function(){return N}),n.d(t,"a",function(){return S}),n.d(t,"c",function(){return U}),n.d(t,"b",function(){return C});function N(e){return-1!==e.indexOf("?")&&(e=e.split("?")[0]),_.find(function(t){return t.path===e})}function S(e,t){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var a in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return e}function U(e,t){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=decodeURIComponent(t).substr(1).match(n);return null!=a?unescape(a[2]):null}function C(){var e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,n=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return!!e.match(/MicroMessenger/i)?"weixin":t?"android":n?"ios":"web"}},239:function(e,t,n){e.exports=n.p+"static/media/empty.04fa3a5e.svg"},25:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return r});var a="GET_CURRENT_USER",o="SET_CURRENT_USER",r="CHANGE_LOGIN_STATUS"},29:function(e,t,n){e.exports={"account-container":"_6cQnDhkiPDPpetRHENVZ-","account-content":"_3f3_5HWUerzuzDJBPICRP4",header:"_16mZlUitC4H-YYxMJDB5CV",phone:"_19wWtRODQThSu_V6NQFxdz",intro:"dRolYf7UMVBSh_FiDFORx","wechat-container":"kuHZe_A6nmZVS_x0j_WOI","wechat-content":"_1fFvFpSOq4GDK2HPCZ-VUH","main-title":"_1gB8UN1Nyi35Igx7Wiz38G",button:"_3DJMiVXuEOsWl7519nr4Tx",key:"iU1uGSp5BrhqTtDrDvz5t","img-container":"_3sOO5qKScjoF2SFKielaUS","account-link-list":"_1ltCPmLsFf2DPqGpq0PszZ",extra:"DGBcAs3Tbe2nklhYfDKK-"}},42:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(51);var a=n(16),o=n.n(a),r=n(118),c=n(25),i=function(){return function(e,t){return new Promise(function(t,n){Object(r.b)().then(function(n){0!==Object.keys(n).length?e({type:c.b,payload:n,receivedAt:Date.now()}):o.a.fail("\u7528\u6237\u4fe1\u606f\u4e3a\u7a7a"),t(n)}).catch(function(e){o.a.fail("\u7528\u6237\u6743\u9650\u83b7\u53d6\u5931\u8d25"),n(e)})})}}},48:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(32),o=(n(51),n(16)),r=n.n(o),c=n(18),i=n(50),s=n(101),l={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"};function u(e){if(e.status>=200&&e.status<300||409===e.status)return e;var t=l[e.status]||e.statusText;console.error("\u8bf7\u6c42\u9519\u8bef ".concat(e.status,": ").concat(e.url)),r.a.fail(t);var n=new Error(t);throw n.name=e.status,n.response=e,n}function d(e,t){var o=Object(a.a)({},{credentials:"include"},t);return o.headers={Authorization:"Bearer ".concat(Object(c.a)())},"POST"!==o.method&&"PUT"!==o.method&&"DELETE"!==o.method||(o.body instanceof FormData?o.headers=Object(a.a)({Accept:"application/json"},o.headers):(o.headers=Object(a.a)({Accept:"application/json","Content-Type":"application/json; charset=utf-8"},o.headers),o.body=JSON.stringify(o.body))),r.a.loading("\u8bf7\u6c42\u6570\u636e\u4e2d..."),fetch(e,o).then(u).then(function(e){return r.a.hide(),"DELETE"===o.method||204===e.status?e.text():e.json()}).catch(function(e){r.a.hide();var t=i.default.dispatch,a=e.name,o=n(26).createBrowserHistory().location.hash.replace("#","");if(401!==a)if(403!==a)if(a<=504&&a>=500)window.location.href="#/exception/500";else{if(!(a>=404&&a<422))return Promise.reject(e);window.location.href="#/exception/404"}else window.location.href="#/exception/403";else t(Object(s.a)(o))})}},49:function(e,t,n){"use strict";n(208);var a=n(130),o=n.n(a),r=n(11),c=n(12),i=n(15),s=n(13),l=n(14),u=n(0),d=n.n(u),p=n(20),h=n(131),m=n.n(h),f=n(23),g=n(18),y=n(139),b=n.n(y),v=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.leftContent,r=t.rightContent,c=t.history;return d.a.createElement("div",null,"weixin"===Object(f.b)()||"false"===Object(g.c)()?null:d.a.createElement("div",{className:b.a["top-nav-container"]},d.a.createElement(o.a,{mode:"light",icon:""===a?null:d.a.createElement("img",{src:m.a,alt:"\u8fd4\u56de"}),onLeftClick:""===a?function(){}:function(){"REPLACE"===c.action?e.props.history.push("/"):e.props.history.goBack()},rightContent:r},n)))}}]),t}(u.PureComponent);t.a=Object(p.g)(v)},50:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),i=n(30),s=n(36),l=n(124),u=(n(160),n(32)),d=n(25),p=n(18),h=Object(i.c)({currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pending:!0,payload:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.b:return Object(p.h)(t.payload.id),Object(u.a)({},e,{pending:!1,payload:t.payload,lastUpdated:t.receivedAt});case d.c:return Object(p.h)(t.payload.id),Object(u.a)({},e,{pending:t.pending,payload:t.payload,lastUpdated:t.receivedAt});default:return e}}}),m=Object(i.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pending:!0,payload:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.a:return Object(p.e)(t.payload.currentAuthority),Object(u.a)({},e,{pending:!1,payload:t.payload,lastUpdated:t.receivedAt});default:return e}}}),f=Object(i.c)({user:h,login:m}),g=(n(161),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var b=n(24),v=(n(51),n(16)),w=n.n(v),E=n(27),O=n.n(E),j=n(39),x=n(11),k=n(12),_=n(15),N=n(13),S=n(14),U=n(20),C=n(98),P=(n(207),n(91)),D=n(42),A=n(23),T=n(121),R=n(26).createBrowserHistory(),M=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(_.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(o)))).asyncAuthUpdate=Object(j.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.updateToken();case 2:return e.next=4,n.updateAuthInfo();case 4:case"end":return e.stop()}},e)})),n.updateToken=function(){var e=Object(A.c)("token",n.props.location.search);e&&Object(p.e)(e)},n.updateAuthInfo=function(){n.props.dispatch(Object(D.a)()).then(function(e){}).catch(function(e){w.a.fail("\u62b1\u6b49\uff0c\u672a\u767b\u5f55\u6216\u767b\u5f55\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",3,null,!1)})},n}return Object(S.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location,n="undefined"===typeof Object(A.d)(t.pathname)?null:Object(A.d)(t.pathname);n&&n.authority&&this.asyncAuthUpdate(),document.title=n&&n.name,null===Object(p.b)()&&(Object(p.g)(Object(A.c)("is_show_head",t.search)),Object(p.f)(!1)),R.listen(function(t,n){var a=t.hash.replace("#","");document.title=Object(A.d)(a)&&Object(A.d)(a).name,Object(A.d)(a)&&Object(A.d)(a).authority&&e.asyncAuthUpdate()})}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.currentUser,r="undefined"===typeof Object(A.d)(t.pathname)?null:Object(A.d)(t.pathname),c=r&&"undefined"!=typeof r.layout?r.layout:P.default,i=r&&"undefined"!=typeof r.speed?r.speed:300,s=r&&"undefined"!=typeof r.animated?r.animated:"animated-slider";return r?r.authority?a.pending?o.a.createElement(T.a,{img:o.a.createElement("img",{src:n(92),alt:"empty"}),text:"\u7ec4\u4ef6\u52a0\u8f7d\u4e2d..."}):a.payload?o.a.createElement(C.a,{timeout:i,className:s},o.a.createElement(c,{title:r.name},o.a.createElement(U.b,{exact:!0,path:r.path,component:r.component}))):o.a.createElement(U.a,{to:"/login?from_hash=".concat(this.props.location.pathname)}):o.a.createElement(C.a,{timeout:i,className:s},o.a.createElement(c,{title:r.name},o.a.createElement(U.b,{exact:!0,path:r.path,component:r.component}))):o.a.createElement(U.a,{to:"/exception/404"})}}]),t}(o.a.Component),W=Object(U.g)(Object(s.b)(function(e){return{currentUser:e.user.currentUser}})(M));var I=function(e){return e.history,o.a.createElement(b.a,null,o.a.createElement(W,null))},L=[l.a];var B=Object(i.d)(f,i.a.apply(void 0,L));c.a.render(o.a.createElement(s.a,{store:B},o.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}();t.default=B},71:function(e,t,n){e.exports={UserLayout:"h7HWU0kRGDHPHQ01W7bPD"}},8:function(e,t,n){e.exports={"home-container":"_2X2pBZ-8zLy2zceZVDd2-t","main-data":"_1jf_5VeTfR8m1exouYSxtv",header:"_2un50c50vFWBoQoUhUTD9w",logo:"_1qbZdkiP8342C-elogfZAW",message:"_3qT4ahL8WNuy7NqQe_YQT7",card:"Mh8mth7-dWTuGpayS62KJ",content:"_1Exkseo1Q2j9L_9Cxe3VNy",title:"_2vaTRmwi5CCIgWkmDxQ4mz",status:"_1BYLyxP4V77XZag3hB6YjI",button:"_1CvWQPVB8dkpRt3L1TwOUS",footer:"gRKOnUuaMHv4LbDuSPC9H",bg:"AxMx8P_jkGYTn9Lxp9LmP","hot-events":"_2fB0GFPWeSUMDy3Sdtt79x",item:"_35UbU6dUZYhiXU6QbBREXU",infade:"_1j6BgERVPpvgqM73iWdFa0",guide:"_2WwJiRmJIM0weWKMtpbpH-"}},89:function(e,t,n){e.exports=n.p+"static/media/icon.52d695ac.svg"},91:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n(12),r=n(15),c=n(13),i=n(14),s=n(0),l=n.n(s),u=n(129),d=n.n(u),p=n(49),h=function(e){function t(e){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){console.log("BasicLayout:\u66f4\u65b0\u5b8c\u6bd5")}},{key:"render",value:function(){var e=this.props.title;return l.a.createElement("div",{className:d.a.BasicLayout},l.a.createElement("header",null,l.a.createElement(p.a,{title:e,rightContent:null})),this.props.children||"")}}]),t}(s.PureComponent);t.default=h},92:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[151,3,4]]]);
//# sourceMappingURL=main.a1fd59e1.chunk.js.map