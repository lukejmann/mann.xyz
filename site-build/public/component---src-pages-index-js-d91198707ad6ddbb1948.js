(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,o){"use strict";o.r(t);var s=o("dI71"),n=o("q1tI"),i=o.n(n),a=o("lfad"),r=o("H2IA"),l=o("njJp"),d=o("rO8z"),m=o("HzLS"),u=o("3XHS"),c=o("E6xs"),h=o("p04O"),g=o.n(h),f=o("gZ/5"),p=o.n(f),P=(o("pAKX"),o("oqc9")),E=o("uuth"),w=function(e){function t(t){var o;return(o=e.call(this,t)||this).scrollableContainer=null,o.scroller=P.scroller,o.onPressAbout=function(){o.setState({selectedPage:"about"}),P.scroller.scrollTo("about",{duration:500,delay:0,smooth:!0,offset:-305})},o.onPressPortfolio=function(){o.setState({selectedPage:"portfolio"}),P.scroller.scrollTo("portfolio",{duration:500,delay:0,smooth:!0,offset:-200})},o.onPressResume=function(){o.setState({selectedPage:"resume"}),P.scroller.scrollTo("resume",{duration:500,delay:0,smooth:!0,offset:-200})},o.onPressWritings=function(){o.setState({selectedPage:"writings"}),P.scroller.scrollTo("writings",{duration:500,delay:0,smooth:!0,offset:-200})},o.state={windowWidth:0,windowHeight:0,aboutNavHovered:!1,mousePos:{x:0,y:0},selectedPage:"none",currentPage:"home"},o}Object(s.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this)),document.addEventListener("mousemove",(function(t){e.setState({mousePos:{x:t.pageX,y:t.pageY}})}))},o.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this)),P.Events.scrollEvent.remove("begin"),P.Events.scrollEvent.remove("end")},o.updateDimensions=function(){var e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);this.setState({windowWidth:e,windowHeight:t})},o.render=function(){var e=this,t=this.state,o=t.windowWidth,s=t.windowHeight,n=o<=a.a.mobileMaxWidth,h=o<a.a.mobileMaxWidth?o-20:o>a.a.xlWideMinWidth?.9*a.a.xlWideMinWidth:.9*o,f=o<a.a.mobileMaxWidth?o-20:o>a.a.xlWideMinWidth?.65*a.a.xlWideMinWidth:.65*o,w=Object.assign({mainContainer:{position:"fixed",height:this.state.windowHeight,width:this.state.windowWidth},writings:{display:"block",fontFamily:"SF-Bold",color:r.a.whiteSand,fontSize:70,letterSpacing:-2,textShadow:5-5e-4*this.state.mousePos.x+"px "+(10-.001*this.state.mousePos.y)+"px 10px rgba(6,40,20,0.2)"},scrollContainer:{width:o,position:"absolute",top:0,left:0,overflow:"hidden",paddingLeft:Math.round((o-h)/2)+"px",paddingRight:Math.round((o-h)/2)+"px",paddingTop:305+Object(m.b)(.1,this.state.mousePos.x)+"px"},comingSoon:{height:1200,fontFamily:"Sequel",fontSize:80,color:r.a.whiteSand},background:{position:"absolute",top:0,left:0,width:o>1440?o:1440,height:s>1024?s:1024},resumeText:{display:"block",fontFamily:"SF-Bold",color:r.a.whiteSand,fontSize:70,letterSpacing:-2,textShadow:5-5e-4*this.state.mousePos.x+"px "+(10-.001*this.state.mousePos.y)+"px 10px rgba(6,40,20,0.2)"},resumeButton:{height:200,marginTop:20,width:f,position:"relative",background:"rgba(108,108,108,0.3)",borderColor:r.a.whiteSand,borderWidth:5,borderStyle:"solid",marginBottom:n?250:400,display:"inline-block",hover:"pointer"},resumeC1:{height:75,display:"flex",marginTop:70,marginBottom:70,justifyContent:"center",alignItems:"center"},resumeC2:{display:"inline-block",fontFamily:"Hndrxx-Medium",fontSize:.07*f,color:"white",textDecoration:"underline"}},function(){var e=f<=750,t=e?20:25,o=e?220:257,s=t+(o-2*t)+30,n=e?10+(o-2*t)/2:o-2*t;return{coverImg:{position:"absolute",top:t,left:t,height:n,width:n},projectName:{fontSize:e?"3em":70,color:r.a.yumGreen,position:"absolute",left:e?n+2*t:s,bottom:o/2-10,top:e?t+20:"",fontFamily:"Hndrxx-Semibold"},subText:{fontSize:30,color:r.a.beachSand,position:"absolute",left:e?t:s,top:o/2+(e?22:12),fontFamily:"Hndrxx-Medium",lineHeight:1.1},coverBG:{height:o,position:"relative",width:f,marginTop:45}}}());return i.a.createElement("div",null,i.a.createElement("div",{id:"main",style:w.mainContainer},i.a.createElement("img",{style:w.background,src:g.a}),i.a.createElement(l.a,{selectedPage:this.state.selectedPage,windowHeight:s,windowWidth:h,onPressAbout:this.onPressAbout,onPressPortfolio:this.onPressPortfolio,onPressResume:this.onPressResume,onPressWritings:this.onPressWritings})),i.a.createElement("div",{style:{position:"fixed"}},i.a.createElement(d.a,{diameter:90,xPos:20,yPos:40,height:.2,mousePosX:e.state.mousePos.x,mousePosY:e.state.mousePos.y}),i.a.createElement(d.a,{diameter:141,xPos:201,yPos:-30,height:.5,mousePosX:e.state.mousePos.x,mousePosY:e.state.mousePos.y}),i.a.createElement(d.a,{diameter:247,xPos:-191,yPos:728,height:.4,mousePosX:e.state.mousePos.x,mousePosY:e.state.mousePos.y})),i.a.createElement("div",{style:w.scrollContainer,ref:function(t){e.scrollableContainer=t}},i.a.createElement(P.Element,{name:"about"},i.a.createElement(E.a,{topOffset:.2*s,onEnter:function(){console.log("ENTERING ABOUT"),e.setState({selectedPage:"about"})},onLeave:function(){console.log("LEAVING ABOUT")}}),i.a.createElement(u.default,{id:"about",aboutWindowWidth:h,windowWidth:o,mousePosX:this.state.mousePos.x,mousePosY:this.state.mousePos.y,style:{display:"block",position:"relative",width:h}})),i.a.createElement(P.Element,{name:"portfolio"},i.a.createElement(E.a,{topOffset:.2*s,onEnter:function(){console.log("ENTERING PORTFOLIO")},onLeave:function(){console.log("LEAVING PORTFOLIO"),e.setState({selectedPage:"portfolio"})}}),i.a.createElement(c.default,{name:"portfolio",id:"portfolio",portfolioWindowWidth:f,mousePosX:this.state.mousePos.x,mousePosY:this.state.mousePos.y,style:{position:"relative",width:f,marginTop:n?150:250}})),i.a.createElement(P.Element,{name:"resume"},i.a.createElement(E.a,{topOffset:.2*s,onEnter:function(){console.log("ENTERING RESUME")},onLeave:function(){console.log("LEAVING RESUME"),e.setState({selectedPage:"resume"})}}),i.a.createElement("div",{style:w.resumeText},"Resume"),i.a.createElement("button",{style:w.resumeButton},i.a.createElement("div",{style:w.resumeC1},i.a.createElement("div",{style:w.resumeC2},"LUKE_RESUME.pdf"),!n&&i.a.createElement("img",{src:p.a,style:{height:.07*f,marginLeft:50}})))),i.a.createElement(P.Element,{name:"writings"},i.a.createElement(E.a,{topOffset:.2*s,onEnter:function(){console.log("ENTERING WRITINGS")},onLeave:function(){console.log("LEAVING WRITINGS"),e.setState({selectedPage:"writings"})}}),i.a.createElement("div",{style:w.writings},"Writings")),i.a.createElement("div",{style:w.comingSoon},"COMING SOON.")),i.a.createElement("div",{style:{position:"fixed"}},i.a.createElement(d.a,{diameter:247,xPos:473,yPos:-70,height:.6,mousePosX:e.state.mousePos.x,mousePosY:e.state.mousePos.y,shadow:!0}),i.a.createElement(d.a,{diameter:410,xPos:.85*o,yPos:72.5,height:.9,mousePosX:e.state.mousePos.x,mousePosY:e.state.mousePos.y,shadow:!0})))},t}(n.Component);t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-d91198707ad6ddbb1948.js.map