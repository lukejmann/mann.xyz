(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1PLV":function(e,t,i){e.exports=i.p+"static/detachSelectApps-3142c4f0db384894b9096de27e574e2c.png"},"1zM5":function(e,t,i){e.exports=i.p+"static/detachTimer1-ace5b507646a3b38cebe9bf110c7d704.png"},"6MEj":function(e,t,i){e.exports=i.p+"static/justGrid-5d884bfe62d6923fff83ac1e533aab06.png"},"8qDK":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=s(i("q1tI")),o=s(i("17x9")),r=s(i("9/5/"));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.defaultFontSize;return"number"==typeof e.defaultFontSize&&(n=e.defaultFontSize+"px"),i.state={fontSize:n},i._onBodyResize=i._onBodyResize.bind(i),i._parentNode=null,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidUpdate",value:function(e){this.props.parent!==e.parent&&this._onBodyResize()}},{key:"componentDidMount",value:function(){0>=this.props.compressor&&console.warn("Warning: The compressor should be greater than 0."),this.props.parent&&(this._parentNode="string"==typeof this.props.parent?document.getElementById(this.props.parent):this.props.parent),window.addEventListener("resize",(0,r.default)(this._onBodyResize,this.props.debounce)),this._onBodyResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",(0,r.default)(this._onBodyResize,this.props.debounce))}},{key:"_getFontSize",value:function(e){var t=this.props;return Math.max(Math.min(e/(10*t.compressor),t.maxFontSize),t.minFontSize)}},{key:"_onBodyResize",value:function(){if(this.element&&this.element.offsetWidth){var e=this.element.offsetWidth;if(this.props.vertical)e=(this._parentNode||this.element.parentNode).offsetHeight;var t=this._getFontSize(e);this.setState({fontSize:t+"px"})}}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{ref:function(t){return e.element=t},style:{fontSize:this.state.fontSize}},this.props.children)}}]),t}(a.default.Component);l.defaultProps={compressor:1,debounce:100,defaultFontSize:"inherit",minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},l.propTypes={children:o.default.oneOfType([o.default.element,o.default.string]),compressor:o.default.number,debounce:o.default.number,defaultFontSize:o.default.string,minFontSize:o.default.number,maxFontSize:o.default.number,parent:o.default.oneOfType([o.default.string,o.default.object])},t.default=l},"9/5/":function(e,t,i){(function(t){var i=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,r=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),d=Object.prototype.toString,h=Math.max,p=Math.min,m=function(){return c.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function u(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var s=a.test(e);return s||o.test(e)?r(e.slice(2),s?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,i){var n,a,o,r,s,l,c=0,d=!1,f=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var i=n,o=a;return n=a=void 0,c=t,r=e.apply(o,i)}function v(e){return c=e,s=setTimeout(I,t),d?y(e):r}function w(e){var i=e-l;return void 0===l||i>=t||i<0||f&&e-c>=o}function I(){var e=m();if(w(e))return A(e);s=setTimeout(I,function(e){var i=t-(e-l);return f?p(i,o-(e-c)):i}(e))}function A(e){return s=void 0,b&&n?y(e):(n=a=void 0,r)}function C(){var e=m(),i=w(e);if(n=arguments,a=this,l=e,i){if(void 0===s)return v(l);if(f)return s=setTimeout(I,t),y(l)}return void 0===s&&(s=setTimeout(I,t)),r}return t=u(t)||0,g(i)&&(d=!!i.leading,o=(f="maxWait"in i)?h(u(i.maxWait)||0,t):o,b="trailing"in i?!!i.trailing:b),C.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},C.flush=function(){return void 0===s?r:A(m())},C}}).call(this,i("yLpj"))},BGvb:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDVweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgNDUgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+UGF0aDwvdGl0bGU+CiAgICA8ZyBpZD0iV09LUklORyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtSEQtQ29weS0xNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcxLjAwMDAwMCwgLTEwMy4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAuMDAwMDAwLCA3My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uczgtYXJyb3ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjUwMDAwMCwgNDcuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC00My41MDAwMDAsIC00Ny4wMDAwMDApIHRyYW5zbGF0ZSgyMS4wMDAwMDAsIDMwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjI3LjYyNSAwIDI3LjYyNSAxMC42MjUgMCAxMC42MjUgMCAyMy4zNzUgMjcuNjI1IDIzLjM3NSAyNy42MjUgMzQgNDQuNjI1IDE3Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},E6YX:function(e,t,i){e.exports=i.p+"static/appStore-517e2600c82170b65736b358b8d7996d.svg"},Gn2Q:function(e,t,i){e.exports=i.p+"static/detachStatusIndicator-920972bf06ae5aabbebb4ce5fcbac28a.png"},"OW/a":function(e,t,i){e.exports=i.p+"static/gridAndPhone-c4ace6de82ec8cf464c7de00db9630f4.png"},THP5:function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),o=i("H2IA");i("EGwR"),i("HzLS");t.a=function(e){var t=e.borderWidth+"px solid "+o.a.sexyBlue,i="rgba(0, 0, 0, 0.4)";return a.a.createElement("div",{style:{position:"absolute",top:0,left:0,height:e.frameHeight,width:e.frameWidth}},a.a.createElement("div",{className:"windowFrame",style:{position:"absolute",top:0,left:0,width:e.frameWidth,height:e.frameSize,backgroundColor:i}}),a.a.createElement("div",{className:"windowFrame",style:{position:"absolute",top:e.frameSize,left:0,width:e.frameSize,height:e.frameHeight-2*e.frameSize,backgroundColor:i}}),a.a.createElement("div",{className:"windowFrame",style:{position:"absolute",top:e.frameSize,right:0,width:e.frameSize,height:e.frameHeight-2*e.frameSize,backgroundColor:i}}),a.a.createElement("div",{className:"windowFrame",style:{position:"absolute",bottom:0,left:0,width:e.frameWidth,height:e.frameSize,backgroundColor:i}}),a.a.createElement("div",{style:{position:"absolute",top:0,left:0,height:e.frameHeight-2*e.borderWidth,width:e.frameWidth-2*e.borderWidth,border:t}}),a.a.createElement("div",{style:{position:"absolute",top:e.frameSize,left:e.frameSize,height:e.frameHeight-2*e.frameSize-2*e.borderWidth,width:e.frameWidth-2*e.frameSize-2*e.borderWidth,border:t}}),a.a.createElement("div",{className:"skewOne",style:{position:"absolute",left:.5*e.frameSize,top:0,width:e.frameWidth-2*e.frameSize,height:e.frameSize+e.borderWidth,borderLeft:t}}),a.a.createElement("div",{className:"skewTwo",style:{position:"absolute",right:.5*e.frameSize,bottom:0,width:e.frameWidth-2*e.frameSize,height:e.frameSize+e.borderWidth,borderRight:t}}),a.a.createElement("div",{className:"skewThree",style:{position:"absolute",left:0,bottom:.5*e.frameSize,width:e.frameSize+e.borderWidth,height:e.frameHeight-2*e.frameSize,borderBottom:t}}),a.a.createElement("div",{className:"skewFour",style:{position:"absolute",right:0,top:.5*e.frameSize,width:e.frameSize,height:e.frameHeight-2*e.frameSize,borderTop:t}}))}},Z8Ot:function(e,t,i){"use strict";i.r(t);var n=i("dI71"),a=i("q1tI"),o=i.n(a),r=(i("lfad"),i("H2IA")),s=(i("njJp"),i("rO8z"),i("HzLS"),i("3XHS"),i("E6xs"),i("qVxK"),i("p04O")),l=i.n(s),c=(i("gZ/5"),i("OW/a"),i("1PLV")),d=i.n(c),h=i("1zM5"),p=i.n(h),m=i("Gn2Q"),g=i.n(m),u=i("o6Jv"),f=i.n(u),b=i("BGvb"),y=i.n(b),v=i("r6q+"),w=i.n(v),I=i("6MEj"),A=i.n(I),C=i("sA84"),S=i.n(C),E=i("E6YX"),z=i.n(E),D=(i("8qDK"),i("oqc9")),M=(i("uuth"),i("THP5")),x=function(e){function t(t){var i;return(i=e.call(this,t)||this).scrollableContainer=null,i.scroller=D.scroller,i.state={windowWidth:0,windowHeight:0},i}Object(n.a)(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this)),document.addEventListener("mousemove",(function(t){e.setState({mousePos:{x:t.pageX,y:t.pageY}})}))},i.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this)),D.Events.scrollEvent.remove("begin"),D.Events.scrollEvent.remove("end")},i.updateDimensions=function(){var e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);this.setState({windowWidth:e,windowHeight:t})},i.render=function(){var e=this.state,t=e.windowWidth,i=e.windowHeight;console.log("windowWidth : "+t);var n=t>500,a=n?.1833*t:.05*t,s=.4*i,c=t-2*a,h=.9*i,m={paddingRight:a,paddingLeft:a},u=function(e){return o.a.createElement("div",{style:{width:t,height:e},className:"solidTile"})},b={fontFamily:"Hndrxx-Medium",fontSize:.02*t,color:r.a.deepBlue,lineHeight:1.2,letterSpacing:-1},v=function(e){return o.a.createElement("div",{style:{position:"relative",height:60}},o.a.createElement("div",{style:{position:"absolute",width:15,height:15,left:20,top:22.5,borderRadius:7.5,backgroundColor:r.a.deepBlue}}),o.a.createElement("div",{style:Object.assign({},b,{fontFamily:"Hndrxx-Medium",position:"absolute",left:75,top:10,bottom:10})},e))},I={bgContainer:{width:this.state.windowWidth,height:this.state.windowHeight,position:"fixed"},background:{position:"absolute",top:0,left:0,width:t>1440?t:1440,height:i>1024?i:1024},sideBlur:{position:"fixed",top:0,height:i,width:.048*t},scrollContainer:{position:"relative",width:t},navText:{color:r.a.deepBlue,display:"inline-block",marginLeft:32,fontSize:.02*t,letterSpacing:-1.37,fontFamily:"Inter-Semibold",height:35,verticalAlign:"center"},navLine:{width:1.1*c,height:8,background:"black",marginTop:33.5},timer1Img:{maxHeight:"50%",maxWidth:"70%",width:"auto",height:"auto",position:"absolute",left:0,right:0,top:0,bottom:0,margin:"auto"},desc1:Object.assign({},b,{position:"absolute",top:100,left:a+c/2,width:.4*c}),timer1Desc:Object.assign({position:"absolute",left:0,top:0},b,{width:.45*c,color:r.a.deepBlue,height:360,paddingLeft:a,paddingRight:.1*c}),frameContainer1:{position:"absolute",top:0,left:a+.55*c,width:.45*c,overflow:"hidden",height:"100%",verticalAlign:"center"},timer1Container:{width:t,position:"relative",height:360},designPrincipleHeader:Object.assign({},b,{fontSize:100,display:"inline-block",width:.35*c}),designPrincipleDesc:Object.assign({},b,{display:"inline-block",width:.65*c}),designPrincipleContainer:{marginTop:40,width:c,position:"relative"},designPrincipleTitle:Object.assign({},b,{fontSize:70,letterSpacing:-1.75,textDecoration:"underline"}),frameContainer2:{position:"absolute",top:0,left:a,width:c,overflow:"hidden",height:"100%",verticalAlign:"center"},proxyIndContainer:{width:t,position:"relative",height:320},detachStatusIndicator:{maxHeight:"71%",width:"auto",height:"auto",position:"absolute",left:0,right:0,bottom:25,marginLeft:"auto",marginRight:"auto"},horizontalBlurSpacer:{position:"absolute",height:"100%",top:0,width:a},proxyDesc:Object.assign({},b,{width:c,position:"relative"},m),proxyDesc2:Object.assign({position:"absolute",left:0,top:0},b,{width:.45*c,color:r.a.deepBlue,height:390,paddingLeft:a,paddingRight:.1*c}),proxyIndicator2FrameContainer:{position:"absolute",top:0,left:a+.55*c,width:.45*c,overflow:"hidden",height:"100%",verticalAlign:"center"},proxyIndicator2Container:{width:t,position:"relative",height:390},proxyIndicator2Img:{maxHeight:"70%",maxWidth:"70%",width:"auto",height:"auto",position:"absolute",left:5,right:0,top:10,bottom:0,margin:"auto"},stackHeader:Object.assign({textDecoration:"underline"},b,{fontSize:50}),stackHContainer:{position:"absolute",top:0,left:a,width:.3*c,height:315},findOnAppStoreDesc:Object.assign({},b,{width:c,position:"relative"},m,{textAlign:"center"}),bottomNavLinks:Object.assign({width:c,position:"relative"},m)};return o.a.createElement("div",null,o.a.createElement("div",{style:I.bgContainer},o.a.createElement("img",{style:I.background,src:l.a})),o.a.createElement("div",{style:I.scrollContainer,className:"totalBlur"},o.a.createElement("div",{style:{height:i,width:t,position:"relative"}},o.a.createElement("div",{style:Object.assign({},b,{position:"absolute",bottom:.42*i,left:.38*t,width:.7*i})},"Detach is an iOS App for time management. Utilizing a proprietary API, the app filters network request from distracting apps. 👇"),o.a.createElement("img",{src:A.a,style:{position:"absolute",bottom:0,left:0,width:t,height:.4*i}}),o.a.createElement("img",{src:S.a,style:{position:"absolute",top:.35*i,left:0,bottom:.9*i,height:.55*i}}),o.a.createElement("div",{style:{position:"absolute",top:.06*i,left:.1*t,alignItems:"center",height:45}},o.a.createElement("img",{src:y.a,style:{display:"inline-block",height:35,color:r.a.deepBlue}}),o.a.createElement("div",{style:I.navText},"mann.xyz")),o.a.createElement("div",{style:{position:"absolute",left:.1*t,top:.15*i}},o.a.createElement("div",{style:{fontSize:.05*t,fontFamily:"Inter-Bold",color:"rgba(0, 0, 0, 0.8)"}},"Detach"),o.a.createElement("div",{style:{fontSize:.015*t,color:"rgba(0, 0, 0, 0.8)"}},o.a.createElement("div",{style:{fontFamily:"Inter-Regular",display:"inline"}},"An")," ",o.a.createElement("div",{style:{fontFamily:"Inter-Bold",display:"inline"}},"iOS App")," ",o.a.createElement("div",{style:{fontFamily:"Inter-Regular",display:"inline"}},"by Luke Mann"))))),o.a.createElement("div",{style:I.bgContainer},o.a.createElement("img",{style:I.background,src:l.a})),o.a.createElement("div",{style:I.scrollContainer},u(s),o.a.createElement("div",{style:{marginLeft:a,marginRight:a,background:"blue"}},function(e,t,n){console.log("isDesktop: "+e+". cWidth "+t);var a=.3*n;return o.a.createElement("div",{style:e?{height:n,width:t,position:"relative"}:{position:"relative",width:t}},o.a.createElement("div",{className:"solidTile",style:{height:e?.35*n:.1*n,width:t}}),o.a.createElement("div",{className:"solidTile",style:e?{display:"inline-block",height:a,width:.45*t,paddingRight:.1*t,verticalAlign:"top"}:{display:"block",width:t,paddingBottom:.2*i,background:"red"}},"The purpose of Detach is to minimize the time users spend on thier phone. Users set a time for which they want to block distractions, select distracting apps to block, and start sessions."),o.a.createElement("div",{style:e?{display:"inline-block",height:a,width:.45*t,position:"relative"}:{display:"block",width:t}},o.a.createElement(M.a,{frameHeight:a,borderWidth:4,frameWidth:e?.45*t:t,frameSize:20}),o.a.createElement("img",{src:p.a,style:I.timer1Img})),o.a.createElement("div",{className:"solidTile",style:{height:e?.35*n:.1*n,width:t}}))}(n,c,i)),u(s),o.a.createElement("div",{style:I.proxyIndContainer},o.a.createElement("div",{style:Object.assign({},I.horizontalBlurSpacer,{left:0}),className:"solidTile"}),o.a.createElement("div",{style:I.frameContainer2},o.a.createElement(M.a,{frameHeight:320,borderWidth:5,frameWidth:c,frameSize:20}),o.a.createElement("img",{src:g.a,style:I.detachStatusIndicator})),o.a.createElement("div",{style:Object.assign({},I.horizontalBlurSpacer,{right:0}),className:"solidTile"})),u(s/5),o.a.createElement("div",{className:"solidTile",style:I.proxyDesc},"Apple APIs do not support content-blocking within apps. To get around this, Detach creates a local proxy on the user’s phone. After Detach connects to this proxy as an external VPN, the proxy prohibits outgoing connections to user’s selected apps."),u(s),o.a.createElement("div",{className:"solidTile",style:Object.assign({width:c},m,{position:"relative",height:h})},o.a.createElement("img",{style:{position:"absolute",top:0,left:a,height:h},src:d.a}),o.a.createElement("div",{style:Object.assign({position:"absolute",right:a,width:.5*c,height:"100%"},b)},o.a.createElement("div",{style:{marginTop:.15*h}},"Detach’s content-blocking proxy supports most popular apps. Blocklists are updated weekly to ensure reliable usage."),o.a.createElement("div",{style:{marginTop:.2*h}}," ","Whereas most content-blockers on the App Store can only block Safari websites, Detach is able to block distractions within apps themselves."))),u(s),o.a.createElement("div",{style:I.proxyIndicator2Container},o.a.createElement("div",{className:"solidTile",style:I.proxyDesc2},"Detach makes it abundantly clear to the user the status of thier proxy at any given time. The app will never record or store any data from the proxy."),o.a.createElement("div",{style:I.proxyIndicator2FrameContainer},o.a.createElement(M.a,{frameHeight:390,borderWidth:4,frameWidth:.45*c,frameSize:20}),o.a.createElement("img",{src:f.a,style:I.proxyIndicator2Img})),o.a.createElement("div",{style:{position:"absolute",height:"100%",top:0,right:0,width:a},className:"solidTile"})),u(s),o.a.createElement("div",{className:"solidTile",style:Object.assign({width:c},m,{position:"relative",height:315})},o.a.createElement("div",{style:I.stackHContainer},o.a.createElement("div",{style:I.stackHeader},"Frontend Stack"),o.a.createElement("div",{style:{height:10}}),v("Swift 5"),v("SwiftUI"),v("Objective-C")),o.a.createElement("div",{style:Object.assign({},I.stackHContainer,{left:a+.55*c})},o.a.createElement("div",{style:I.stackHeader},"Backend Stack"),o.a.createElement("div",{style:{height:10}}),v("Golang"),v("MongoDB"),v("Python"),v("Docker"))),u(s),o.a.createElement("div",{className:"solidTile",style:I.findOnAppStoreDesc},"Detach can be found on the iOS App Store."),u(40),o.a.createElement("div",{className:"solidTile",style:I.findOnAppStoreDesc},o.a.createElement("img",{src:z.a,style:{width:.25*c}})),u(s/7),o.a.createElement("div",{className:"solidTile",style:I.bottomNavLinks},o.a.createElement("div",{style:{position:"absolute",left:a,height:45,color:r.a.deepBlue}},o.a.createElement("img",{src:y.a,style:{display:"inline-block",height:35}}),o.a.createElement("div",{style:I.navText},"mann.xyz")),o.a.createElement("div",{style:{position:"absolute",right:a,height:45}},o.a.createElement("div",{style:I.navText},"AI Art"),o.a.createElement("img",{src:w.a,style:{display:"inline-block",height:35,marginLeft:25}}))),u(s)))},t}(a.Component);t.default=x},o6Jv:function(e,t,i){e.exports=i.p+"static/proxyIndicator2Img-991fd9ecf436f794db5c156061843356.png"},qVxK:function(e,t,i){e.exports=i.p+"static/blurredBG-b982418fb48283f04a51ec9ff60661f0.png"},"r6q+":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDVweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgNDUgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+UGF0aDwvdGl0bGU+CiAgICA8ZyBpZD0iV09LUklORyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtSEQtQ29weS0xNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNzcuMDAwMDAwLCAtNjQxNi4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNC1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MTMuMDAwMDAwLCA2Mzg5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imljb25zOC1hcnJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjY0LjAwMDAwMCwgMjcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMjcuNjI1IDAgMjcuNjI1IDEwLjYyNSAwIDEwLjYyNSAwIDIzLjM3NSAyNy42MjUgMjMuMzc1IDI3LjYyNSAzNCA0NC42MjUgMTciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},sA84:function(e,t,i){e.exports=i.p+"static/justDetachPhone-b1aab291490b4f44fcd3c35c13d93947.png"}}]);
//# sourceMappingURL=component---src-pages-detach-old-js-563a51aeeb3c24f54529.js.map