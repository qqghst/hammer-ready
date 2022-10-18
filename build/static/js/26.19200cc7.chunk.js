(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[26,39],{521:function(t,e,n){"use strict";n.r(e);var a=n(1);n(0);e.default=function(t){var e=t.name,n=t.desc;return Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsxs)("span",{className:"font-weight-bold text-dark",children:[e,":"]}),Object(a.jsxs)("span",{className:"text-gray-light",children:[" ",n]})]})}},522:function(t,e,n){"use strict";var a=n(3),c=n(4),l=n(0),r=n(6),o=n.n(r),s=n(37),i=n(45),d=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n},m=function(t){var e=t.prefixCls,n=t.className,r=t.hoverable,s=void 0===r||r,m=d(t,["prefixCls","className","hoverable"]);return l.createElement(i.a,null,(function(t){var r=(0,t.getPrefixCls)("card",e),i=o()("".concat(r,"-grid"),n,Object(a.a)({},"".concat(r,"-grid-hoverable"),s));return l.createElement("div",Object(c.a)({},m,{className:i}))}))},b=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n},j=function(t){return l.createElement(i.a,null,(function(e){var n=e.getPrefixCls,a=t.prefixCls,r=t.className,s=t.avatar,i=t.title,d=t.description,m=b(t,["prefixCls","className","avatar","title","description"]),j=n("card",a),u=o()("".concat(j,"-meta"),r),h=s?l.createElement("div",{className:"".concat(j,"-meta-avatar")},s):null,p=i?l.createElement("div",{className:"".concat(j,"-meta-title")},i):null,x=d?l.createElement("div",{className:"".concat(j,"-meta-description")},d):null,f=p||x?l.createElement("div",{className:"".concat(j,"-meta-detail")},p,x):null;return l.createElement("div",Object(c.a)({},m,{className:u}),h,f)}))},u=n(519),h=n(513),p=n(514),x=n(56),f=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n};var O=function(t){var e,n,r,d=l.useContext(i.b),b=d.getPrefixCls,j=d.direction,O=l.useContext(x.b),g=t.prefixCls,y=t.className,v=t.extra,C=t.headStyle,E=void 0===C?{}:C,w=t.bodyStyle,F=void 0===w?{}:w,N=t.title,S=t.loading,D=t.bordered,I=void 0===D||D,k=t.size,A=t.type,P=t.cover,z=t.actions,T=t.tabList,B=t.children,L=t.activeTabKey,H=t.defaultActiveTabKey,M=t.tabBarExtraContent,K=t.hoverable,V=t.tabProps,R=void 0===V?{}:V,J=f(t,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),W=b("card",g),G=0===F.padding||"0px"===F.padding?{padding:24}:void 0,$=l.createElement("div",{className:"".concat(W,"-loading-block")}),q=l.createElement("div",{className:"".concat(W,"-loading-content"),style:G},l.createElement(h.a,{gutter:8},l.createElement(p.a,{span:22},$)),l.createElement(h.a,{gutter:8},l.createElement(p.a,{span:8},$),l.createElement(p.a,{span:15},$)),l.createElement(h.a,{gutter:8},l.createElement(p.a,{span:6},$),l.createElement(p.a,{span:18},$)),l.createElement(h.a,{gutter:8},l.createElement(p.a,{span:13},$),l.createElement(p.a,{span:9},$)),l.createElement(h.a,{gutter:8},l.createElement(p.a,{span:4},$),l.createElement(p.a,{span:3},$),l.createElement(p.a,{span:16},$))),Q=void 0!==L,U=Object(c.a)(Object(c.a)({},R),(e={},Object(a.a)(e,Q?"activeKey":"defaultActiveKey",Q?L:H),Object(a.a)(e,"tabBarExtraContent",M),e)),X=T&&T.length?l.createElement(u.a,Object(c.a)({size:"large"},U,{className:"".concat(W,"-head-tabs"),onChange:function(e){t.onTabChange&&t.onTabChange(e)}}),T.map((function(t){return l.createElement(u.a.TabPane,{tab:t.tab,disabled:t.disabled,key:t.key})}))):null;(N||v||X)&&(r=l.createElement("div",{className:"".concat(W,"-head"),style:E},l.createElement("div",{className:"".concat(W,"-head-wrapper")},N&&l.createElement("div",{className:"".concat(W,"-head-title")},N),v&&l.createElement("div",{className:"".concat(W,"-extra")},v)),X));var Y=P?l.createElement("div",{className:"".concat(W,"-cover")},P):null,Z=l.createElement("div",{className:"".concat(W,"-body"),style:F},S?q:B),_=z&&z.length?l.createElement("ul",{className:"".concat(W,"-actions")},function(t){return t.map((function(e,n){return l.createElement("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(n)},l.createElement("span",null,e))}))}(z)):null,tt=Object(s.a)(J,["onTabChange"]),et=k||O,nt=o()(W,(n={},Object(a.a)(n,"".concat(W,"-loading"),S),Object(a.a)(n,"".concat(W,"-bordered"),I),Object(a.a)(n,"".concat(W,"-hoverable"),K),Object(a.a)(n,"".concat(W,"-contain-grid"),function(){var e;return l.Children.forEach(t.children,(function(t){t&&t.type&&t.type===m&&(e=!0)})),e}()),Object(a.a)(n,"".concat(W,"-contain-tabs"),T&&T.length),Object(a.a)(n,"".concat(W,"-").concat(et),et),Object(a.a)(n,"".concat(W,"-type-").concat(A),!!A),Object(a.a)(n,"".concat(W,"-rtl"),"rtl"===j),n),y);return l.createElement("div",Object(c.a)({},tt,{className:nt}),r,Y,Z,_)};O.Grid=m,O.Meta=j;e.a=O},534:function(t,e,n){"use strict";e.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}},902:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(67),l=n(0),r=n(128),o=n(521),s=n(3268),i=n(534),d=n(82),m=n(522),b=function(){var t=d.a.Option,e=Object(l.useState)("start"),n=Object(c.a)(e,2),o=n[0],s=n[1],i=Object(l.useState)("start"),m=Object(c.a)(i,2),b=m[0],j=m[1],u=Object(l.useState)("row"),h=Object(c.a)(u,2),p=h[0],x=h[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{alignItems:o,justifyContent:b,flexDirection:p,children:Object(a.jsx)(a.Fragment,{children:["danger","warning","success"].map((function(t,e){return Object(a.jsx)("div",{className:"bg-".concat(t," m-2"),style:{width:40,height:1===e?25:40,borderRadius:4}},t)}))})}),Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsxs)(r.a,{alignItems:"center",mobileFlex:!1,children:[Object(a.jsx)("span",{className:"font-weight-semibold mr-3",children:"alignItems: "}),Object(a.jsx)(d.a,{defaultValue:"start",style:{width:120},onChange:function(t){s(t)},children:["start","end","center","baseline","stretch"].map((function(e){return Object(a.jsx)(t,{value:e,children:e},e)}))}),Object(a.jsxs)(r.a,{alignItems:"center",mobileFlex:!1,className:"ml-md-4",children:[Object(a.jsx)("span",{className:"font-weight-semibold mr-3",children:"justifyContent: "}),Object(a.jsx)(d.a,{defaultValue:"start",style:{width:120},onChange:function(t){j(t)},children:["start","end","center","between","around","stretch"].map((function(e){return Object(a.jsx)(t,{value:e,children:e},e)}))})]}),Object(a.jsxs)(r.a,{alignItems:"center",mobileFlex:!1,className:"ml-md-4",children:[Object(a.jsx)("span",{className:"font-weight-semibold mr-3",children:"flexDirection: "}),Object(a.jsx)(d.a,{defaultValue:"row",style:{width:120},onChange:function(t){x(t)},children:["row","column","row-reverse","column-reverse"].map((function(e){return Object(a.jsx)(t,{value:e,children:e},e)}))})]})]})})]})};e.default=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Flex"}),Object(a.jsxs)("div",{className:"mt-4",children:[Object(a.jsx)(o.default,{name:"Location",desc:"src/components/shared-components/Flex.js"}),Object(a.jsx)(o.default,{name:"Description",desc:"Flex component"}),Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsxs)(m.a,{title:"Example",children:[Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsx)(s.a,{className:"hl-code",language:"jsx",style:i.a,children:"import React, { useState } from 'react'\nimport Flex from 'components/shared-components/Flex'\nimport { Select } from 'antd'\n\nexport default const Demo = () =>  {\n\tconst { Option } = Select;\n\tconst arr = ['danger', 'warning', 'success']\n\tconst alignItemsList = ['start', 'end', 'center', 'baseline', 'stretch']\n\tconst justifyContentList = ['start', 'end', 'center', 'between', 'around', 'stretch']\n\tconst flexDirectionList = ['row', 'column', 'row-reverse', 'column-reverse']\n\tconst [alignItems, setAlignItems] = useState('start')\n\tconst [justifyContent, setJustifyContent] = useState('start');\n\tconst [flexDirection, setFlexDirection] = useState('row');\n\treturn (\n\t\t<>\n\t\t\t<Flex \n\t\t\t\talignItems={alignItems}\n\t\t\t\tjustifyContent={justifyContent}\n\t\t\t\tflexDirection={flexDirection}\n\t\t\t>\n\t\t\t\t<>\n\t\t\t\t\t{arr.map((elm, index) => (\n\t\t\t\t\t\t<div \n\t\t\t\t\t\t\tkey={elm} \n\t\t\t\t\t\t\tclassName={`bg-${elm} m-2`} \n\t\t\t\t\t\t\tstyle={{width: 40, height: index === 1 ? 25 : 40, borderRadius: 4}}\n\t\t\t\t\t\t></div>\n\t\t\t\t\t))}\n\t\t\t\t</>\n\t\t\t</Flex>\n\t\t\t<div className=\"mt-4\">\n\t\t\t\t<Flex alignItems=\"center\" mobileFlex={false}>\n\t\t\t\t\t<span className=\"font-weight-semibold mr-3\">alignItems: </span>\n\t\t\t\t\t<Select defaultValue=\"start\" style={{ width: 120 }} onChange={val => {setAlignItems(val)}}>\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\talignItemsList.map(elm => (\n\t\t\t\t\t\t\t\t<Option key={elm} value={elm}>{elm}</Option>\n\t\t\t\t\t\t\t))\n\t\t\t\t\t\t}\n\t\t\t\t\t</Select>\n\t\t\t\t\t<Flex alignItems=\"center\" mobileFlex={false} className=\"ml-md-4\">\n\t\t\t\t\t\t<span className=\"font-weight-semibold mr-3\">justifyContent: </span>\n\t\t\t\t\t\t<Select defaultValue=\"start\" style={{ width: 120 }} onChange={val => {setJustifyContent(val)}}>\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tjustifyContentList.map(elm => (\n\t\t\t\t\t\t\t\t\t<Option key={elm} value={elm}>{elm}</Option>\n\t\t\t\t\t\t\t\t))\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</Select>\n\t\t\t\t\t</Flex>\n\t\t\t\t\t<Flex alignItems=\"center\" mobileFlex={false} className=\"ml-md-4\">\n\t\t\t\t\t\t<span className=\"font-weight-semibold mr-3\">flexDirection: </span>\n\t\t\t\t\t\t<Select defaultValue=\"row\" style={{ width: 120 }} onChange={val => {setFlexDirection(val)}}>\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tflexDirectionList.map(elm => (\n\t\t\t\t\t\t\t\t\t<Option key={elm} value={elm}>{elm}</Option>\n\t\t\t\t\t\t\t\t))\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</Select>\n\t\t\t\t\t</Flex>\n\t\t\t\t</Flex>\n\t\t\t</div>\n\t\t</>\n\t)\n}\n"})})]})}),Object(a.jsx)("h4",{className:"mt-4",children:"Props"}),Object(a.jsx)("div",{className:"api-container border-0 p-0",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Property"}),Object(a.jsx)("th",{children:"Description"}),Object(a.jsx)("th",{children:"Type"}),Object(a.jsx)("th",{children:"Default"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"alignItems"}),Object(a.jsx)("td",{children:"Alignment of flex items on the cross axis"}),Object(a.jsx)("td",{children:"start, end, center, baseline, stretch"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"justifyContent"}),Object(a.jsx)("td",{children:"Alignment of flex items on the main axis"}),Object(a.jsx)("td",{children:"start, end, center, between, around, stretch"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"flexDirection"}),Object(a.jsx)("td",{children:"Set the direction of flex items in a flex container"}),Object(a.jsx)("td",{children:"row, column, row-reverse, column-reverse"}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"mobileFlex"}),Object(a.jsx)("td",{children:"Enable flex in mobile view"}),Object(a.jsx)("td",{children:"boolean"}),Object(a.jsx)("td",{children:"true"})]})]})]})})]})]})}}}]);
//# sourceMappingURL=26.19200cc7.chunk.js.map