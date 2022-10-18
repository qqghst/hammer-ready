(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[76],{3256:function(e,t,n){"use strict";n.r(t);var o=n(18),a=n(1),c=n(0),i=n(179),s=n(50),r=n(596),u=n(43),l=n(91),m=[{name:"Introduction",key:"introduction",sub:[]},{name:"Product Content",key:"product-content",sub:[]},{name:"Folder Structure",key:"folder-structure",sub:[]},{name:"Layout Overview",key:"layout-overview",sub:[]},{name:"Installation",key:"installation",sub:[]},{name:"TemplateSetting",key:"template-setting",sub:[]},{name:"Routing",key:"routing",sub:[]},{name:"Authentication",key:"authentication",sub:[{name:"JWT",key:"jwt",sub:[]},{name:"Firebase",key:"firebase",sub:[]}]},{name:"Localization",key:"localization",sub:[]},{name:"Components",key:"components",sub:[{name:"AvatarStatusDemo",key:"avatar-status-demo",sub:[]},{name:"ChartWidgetDemo",key:"chart-widget-demo",sub:[]},{name:"CustomStatisticDemo",key:"custom-statistic-demo",sub:[]},{name:"ColorPickerDemo",key:"color-picker-demo",sub:[]},{name:"DataDisplayWidgetDemo",key:"data-display-demo",sub:[]},{name:"DonutChartWidgetDemo",key:"donut-chart-Widget-demo",sub:[]},{name:"EllipsisDropdownDemo",key:"ellipsis-dropdown-demo",sub:[]},{name:"FlexDemo",key:"flex-demo",sub:[]},{name:"GoalWidgetDemo",key:"goal-widget-demo",sub:[]},{name:"LoadingDemo",key:"loading-demo",sub:[]},{name:"RegiondataWidgetDemo",key:"regiondata-widget-demo",sub:[]},{name:"StatisticWidgetDemo",key:"statistic-widget-demo",sub:[]},{name:"CustomIconDemo",key:"custom-icon-demo",sub:[]}]},{name:"UtilityClasses",key:"utility-classes",sub:[]},{name:"Changelog",key:"changelog",sub:[]}],d="documentation/",j=function(e){var t=e.match,n=e.location;return Object(a.jsx)("div",{className:"w-100",children:Object(a.jsx)(i.a,{defaultSelectedKeys:"".concat(t.url,"/").concat(d,"introduction"),mode:"inline",selectedKeys:[n.pathname],children:m.map((function(e){return 0===e.sub.length?Object(a.jsxs)(i.a.Item,{children:[Object(a.jsx)("span",{children:e.name}),Object(a.jsx)(s.c,{to:"".concat(t.url,"/").concat(d).concat(e.key)})]},"".concat(t.url,"/").concat(d).concat(e.key)):Object(a.jsx)(i.a.SubMenu,{title:e.name,children:e.sub.map((function(e){return Object(a.jsxs)(i.a.Item,{children:[Object(a.jsx)("span",{children:e.name}),Object(a.jsx)(s.c,{to:"".concat(t.url,"/").concat(d).concat(e.key)})]},"".concat(t.url,"/").concat(d).concat(e.key))}))},"".concat(t.url,"/").concat(d).concat(e.key))}))})})};t.default=function(e){var t=e.match;return Object(a.jsx)(r.a,{sideContent:Object(a.jsx)(j,Object(o.a)({},e)),mainContent:Object(a.jsx)("div",{className:"p-4",children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(l.a,{}),children:Object(a.jsxs)(u.d,{children:[m.map((function(e){return 0===e.sub.length?Object(a.jsx)(u.b,{path:"".concat(t.url,"/").concat(d).concat(e.key),component:Object(c.lazy)((function(){return n(803)("./".concat(e.name.replace(/\s/g,"")))}))},e.key):e.sub.map((function(e){return Object(a.jsx)(u.b,{path:"".concat(t.url,"/").concat(d).concat(e.key),component:Object(c.lazy)((function(){return n(803)("./".concat(e.name.replace(/\s/g,"")))}))},e.key)}))})),Object(a.jsx)(u.a,{from:"".concat(t.url),to:"".concat(t.url,"/").concat(d,"introduction")})]})})})}),sideContentWidth:300,sideContentGutter:!1,border:!0})}},596:function(e,t,n){"use strict";var o=n(1),a=n(18),c=n(67),i=n(0),s=n(210),r=n(501),u=n(54),l=n(632),m=s.a.useBreakpoint,d=function(e){var t=e.sideContent,n=e.sideContentWidth,a=void 0===n?250:n,c=e.border;return Object(o.jsx)("div",{className:"side-content ".concat(c?"with-border":""),style:{width:"".concat(a,"px")},children:t})},j=function(e){var t=e.sideContent,n=e.visible,a=e.onSideContentClose;return Object(o.jsx)(r.a,{width:320,placement:"left",closable:!1,onClose:a,visible:n,bodyStyle:{paddingLeft:0,paddingRight:0},children:Object(o.jsx)("div",{className:"h-100",children:t})})};t.a=function(e){var t=e.mainContent,n=e.pageHeader,s=e.sideContentGutter,r=void 0===s||s,b=!u.a.getBreakPoint(m()).includes("lg"),g=Object(i.useState)(!1),h=Object(c.a)(g,2),y=h[0],p=h[1];return Object(o.jsxs)("div",{className:"inner-app-layout",children:[b?Object(o.jsx)(j,Object(a.a)({visible:y,onSideContentClose:function(e){p(!1)}},e)):Object(o.jsx)(d,Object(a.a)({},e)),Object(o.jsxs)("div",{className:"main-content ".concat(n?"has-page-header":""," ").concat(r?"gutter":"no-gutter"),children:[b?Object(o.jsx)("div",{className:"font-size-lg mb-3 ".concat(r?"":"pt-3 px-3"),children:Object(o.jsx)(l.a,{onClick:function(){p(!0)}})}):null,t]})]})}},632:function(e,t,n){"use strict";var o=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},c=n(9),i=function(e,t){return o.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};i.displayName="MenuOutlined";t.a=o.forwardRef(i)},803:function(e,t,n){var o={"./AvatarStatusDemo":[892,1,0,18],"./AvatarStatusDemo.js":[892,1,0,18],"./Changelog":[893,38],"./Changelog.js":[893,38],"./ChartWidgetDemo":[894,1,0,6,23,24],"./ChartWidgetDemo.js":[894,1,0,6,23,24],"./ColorPickerDemo":[895,1,0,25],"./ColorPickerDemo.js":[895,1,0,25],"./ComponentIntro":[521,39],"./ComponentIntro.js":[521,39],"./CustomIconDemo":[896,1,0,20],"./CustomIconDemo.js":[896,1,0,20],"./CustomStatisticDemo":[897,1,0,21],"./CustomStatisticDemo.js":[897,1,0,21],"./DataDisplayWidgetDemo":[898,1,0,15],"./DataDisplayWidgetDemo.js":[898,1,0,15],"./DonutChartWidgetDemo":[899,1,0,6,16],"./DonutChartWidgetDemo.js":[899,1,0,6,16],"./EllipsisDropdownDemo":[900,1,0,22],"./EllipsisDropdownDemo.js":[900,1,0,22],"./Firebase":[901,0,31],"./Firebase.js":[901,0,31],"./FlexDemo":[902,1,0,26],"./FlexDemo.js":[902,1,0,26],"./FolderStructure":[903,4,10,40],"./FolderStructure.js":[903,4,10,40],"./GoalWidgetDemo":[904,1,0,30,28],"./GoalWidgetDemo.js":[904,1,0,30,28],"./Installation":[905,41],"./Installation.js":[905,41],"./Introduction":[906,42],"./Introduction.js":[906,42],"./JWT":[907,0,32],"./JWT.js":[907,0,32],"./LayoutOverview":[908,43],"./LayoutOverview.js":[908,43],"./LoadingDemo":[909,1,0,27],"./LoadingDemo.js":[909,1,0,27],"./Localization":[910,0,4,10,33],"./Localization.js":[910,0,4,10,33],"./ProductContent":[911,34],"./ProductContent.js":[911,34],"./RegiondataWidgetDemo":[912,1,0,7,19],"./RegiondataWidgetDemo.js":[912,1,0,7,19],"./Routing":[913,0,35],"./Routing.js":[913,0,35],"./StatisticWidgetDemo":[914,1,0,17],"./StatisticWidgetDemo.js":[914,1,0,17],"./TemplateSetting":[915,0,36],"./TemplateSetting.js":[915,0,36],"./UtilityClasses":[916,12],"./UtilityClasses.js":[916,12]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=803,e.exports=a}}]);
//# sourceMappingURL=76.67d6982f.chunk.js.map