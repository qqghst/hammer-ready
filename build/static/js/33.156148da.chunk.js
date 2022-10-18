(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[33],{534:function(e,o,n){"use strict";o.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}},910:function(e,o,n){"use strict";n.r(o);var a=n(1),t=(n(0),n(3268)),c=n(534),l=n(757).a.DirectoryTree,r=[{title:"entries",key:"0-0",children:[]},{title:"locales",key:"0-1",children:[]},{title:"index.js",key:"0-2",isLeaf:!0}];o.default=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Localization"}),Object(a.jsxs)("p",{children:["Emilus implement localization through ",Object(a.jsx)("code",{children:"react-intl"}),", corresponding files can be found in ",Object(a.jsx)("code",{children:"src/lang/"}),", folder structure as below"]}),Object(a.jsx)("div",{className:"mb-4",children:Object(a.jsx)(l,{multiple:!0,treeData:r})}),Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h4",{children:"Set new locale"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("code",{children:"locales"})," folder is the place we store language key. Add your language as JSON format in this folder."]}),Object(a.jsx)(t.a,{className:"hl-code",language:"json",style:c.a,children:'{\n\t"sidenav.dashboard": "Dashboard"\n}'}),Object(a.jsxs)("p",{className:"mt-3",children:["Create a config file for your new added language at ",Object(a.jsx)("code",{children:"entries"})," folder, please also include antd language to the configuration."]}),Object(a.jsx)(t.a,{className:"hl-code",language:"javascript",style:c.a,children:"import antdEnUS from 'antd/es/locale/en_US';\nimport enMsg from \"../locales/en_US.json\";\n\nconst EnLang = {\n  antd: antdEnUS,\n  locale: 'en-US',\n  messages: {\n    ...enMsg\n  },\n};\nexport default EnLang;"}),Object(a.jsxs)("p",{className:"mt-3",children:["Add your configuration to the ",Object(a.jsx)("code",{children:"index.js"}),", which is the entry file of i18n. Setup a key with your language config as value in ",Object(a.jsx)("code",{children:"AppLocale"}),". ",Object(a.jsxs)("i",{children:["Note that the key you set will be use as ",Object(a.jsx)("code",{children:"locale"})," value in ",Object(a.jsx)("code",{children:"src/configs/AppConfig.js"})]})]}),Object(a.jsx)(t.a,{className:"hl-code",language:"javascript",style:c.a,children:"import enLang from './entries/en_US';\nimport frLang from './entries/fr_FR';\n\nconst AppLocale = {\n    en: enLang,\n    fr: frLang\n};\n\nexport default AppLocale;"}),Object(a.jsxs)("p",{className:"mt-3",children:["Now, with ",Object(a.jsx)("code",{children:"IntlMessage"})," component, you can translate your language with your language key"]}),Object(a.jsx)(t.a,{className:"hl-code",language:"jsx",style:c.a,children:"import IntlMessage from 'components/util-components/IntlMessage';\n\nconst MyComponent = () => {\n\treturn (\n\t\t<IntlMessage id=\"sidenav.dashboard\" />\n\t\t// output: Dashboard\n\t)\n"})]}),Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h4",{children:"Remove localization"}),Object(a.jsxs)("p",{children:["Currently i18n is only implemented in ",Object(a.jsx)("code",{children:"SideNav"})," & ",Object(a.jsx)("code",{children:"TopNav"})," component, If you want to remove the localization that comes with default, you can setting ",Object(a.jsx)("code",{children:"localization"})," prop to ",Object(a.jsx)("code",{children:"false"})," for the above components"]}),Object(a.jsx)(t.a,{className:"hl-code",language:"jsx",style:c.a,children:"<SideNav localization={false} />\n<TopNav localization={false} />"})]})]})}}}]);
//# sourceMappingURL=33.156148da.chunk.js.map