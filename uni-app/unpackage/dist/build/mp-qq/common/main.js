(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{3737:function(t,e,n){"use strict";n.r(e);var o=n("7835"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},"45d2":function(t,e,n){"use strict";(function(t){n("b5a0"),n("921b");var e=i(n("66fd")),o=i(n("c779")),r=c(n("206d")),u=i(n("058d"));n("89ae");var a=i(n("acbb"));function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("common/componets/cu-custom").then(n.bind(null,"b9fd"))};e.default.component("cu-custom",l);var p=function(){return n.e("common/componets/tm-footer").then(n.bind(null,"9d3c"))};e.default.component("tm-footer",p),e.default.prototype.$api=r,u.default.locale("zh-cn"),e.default.prototype.$moment=u.default,e.default.prototype.$qs=a.default,o.default.mpType="app";var d=new e.default(s({},o.default));t(d).$mount(),e.default.mixin({onShareAppMessage:function(){return{}}})}).call(this,n("a821")["createApp"])},"608f":function(t,e,n){},7835:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("a34a")),r=u(n("66fd"));u(n("acbb"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,r,u,a){try{var c=t[u](a),i=c.value}catch(s){return void n(s)}c.done?e(i):Promise.resolve(i).then(o,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var u=t.apply(e,n);function c(t){a(u,o,r,c,i,"next",t)}function i(t){a(u,o,r,c,i,"throw",t)}c(void 0)})}}var i={methods:{update:function(){var t=wx.getUpdateManager();t.onCheckForUpdate(function(t){console.log("是否有新版本？",t.hasUpdate)}),t.onUpdateReady(function(){wx.showModal({title:"发现新版本",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&t.applyUpdate()}})})},init:function(){t.getSystemInfo({success:function(t){r.default.prototype.StatusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();r.default.prototype.Custom=e,r.default.prototype.CustomBar=e.bottom+e.top-t.statusBarHeight}})},login:function(){var e=this;wx.login({success:function(){var n=c(o.default.mark(function n(r){return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:console.log("尝试登录",r),r.code?wx.getSetting({success:function(){var n=c(o.default.mark(function n(u){var a;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!u.authSetting["scope.userInfo"]){n.next=5;break}console.log("用户已授权",u),wx.getUserInfo({success:function(){var n=c(o.default.mark(function n(u){var a,c;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return console.log("尝试获取用户信息",u),a={code:r.code},Object.assign(a,u.userInfo),n.next=5,e.$api.login(a);case 5:c=n.sent,t.setStorageSync("openid",c);case 7:case"end":return n.stop()}},n,this)}));function u(t){return n.apply(this,arguments)}return u}()}),n.next=9;break;case 5:return n.next=7,e.$api.login({code:r.code});case 7:a=n.sent,t.setStorageSync("openid",a);case 9:case"end":return n.stop()}},n,this)}));function u(t){return n.apply(this,arguments)}return u}()}):console.log("登录失败！"+r.errMsg);case 2:case"end":return n.stop()}},n,this)}));function r(t){return n.apply(this,arguments)}return r}()})}},onLaunch:function(){console.log("APP onLaunch"),this.update(),this.init(),this.login()},onHide:function(){console.log("App Hide")}};e.default=i}).call(this,n("a821")["default"])},"82b2":function(t,e,n){"use strict";var o=n("608f"),r=n.n(o);r.a},c779:function(t,e,n){"use strict";n.r(e);var o=n("3737");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("82b2");var u,a,c=n("2877"),i=Object(c["a"])(o["default"],u,a,!1,null,null,null);e["default"]=i.exports}},[["45d2","common/runtime","common/vendor"]]]);