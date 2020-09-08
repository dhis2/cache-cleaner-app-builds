(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[127],{165:function(e,a,t){e.exports={actions:"Actions_actions__1BcAq"}},166:function(e,a,t){e.exports={container:"FormSection_container__20Fh9",groupHeadline:"FormSection_groupHeadline__3kOHC"}},167:function(e,a,t){e.exports={actions:"ClearForm_actions__2P0VA",action:"ClearForm_action__243lJ",groupHeadline:"ClearForm_groupHeadline__2C-rb"}},168:function(e,a,t){e.exports={container:"Home_container__2aYrM",headline:"Home_headline__2WsGZ"}},169:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var s=t(7),n=t(1),c=t.n(n),l=t(5),o=t.n(l),r=t(161),i=t(160),d=t(165),m=t.n(d);const h=({children:e})=>c.a.createElement("div",{className:m.a.actions},c.a.createElement(s.b,null,e));var u=t(164),g=t(166),b=t.n(g);const y=e=>({label:e,value:e}),S=({deselectButtonLabel:e,emptyMessage:a,form:t,headline:n,selectButtonLabel:l,storageKeys:o,storageName:r})=>{const d=r.toLowerCase();return c.a.createElement("div",{className:b.a.container,"data-test":"dhis2-cachecleaner-".concat(d)},c.a.createElement("h2",{className:b.a.groupHeadline},n),!o.length&&c.a.createElement("p",{"data-test":"dhis2-cachecleaner-emptystoragemessage"},a),!!o.length&&c.a.createElement(h,null,c.a.createElement(s.a,{onClick:()=>t.change(r,o),dataTest:"dhis2-cachecleaner-formsection-selectall"},l),c.a.createElement(s.a,{onClick:()=>t.change(r,[]),dataTest:"dhis2-cachecleaner-formsection-deselectall"},e)),c.a.createElement(i.a,{name:r,options:o.map(y),component:u.a}))};var p=t(167),E=t.n(p);const K=e=>{const a={};return e.localStorageKeys.length||e.sessionStorageKeys.length||e.indexedDatabaseKeys.length||(a[r.a]=o.a.t("No data selected")),a},f=({onSubmit:e,initialValues:a,localStorageKeys:t,sessionStorageKeys:n,indexedDatabaseKeys:l})=>c.a.createElement(i.b,{onSubmit:a=>{e(a)},initialValues:a,validate:K},({handleSubmit:e,errors:a,submitFailed:i,form:d})=>c.a.createElement("form",{onSubmit:e},c.a.createElement(h,null,c.a.createElement(s.a,{onClick:()=>(e=>{e.batch(()=>{e.change("localStorageKeys",t),e.change("sessionStorageKeys",n),e.change("indexedDatabaseKeys",l)})})(d),dataTest:"dhis2-cachecleaner-selectall"},o.a.t("Select all")),c.a.createElement(s.a,{onClick:()=>(e=>{e.batch(()=>{e.change("localStorageKeys",[]),e.change("sessionStorageKeys",[]),e.change("indexedDatabaseKeys",[])})})(d),dataTest:"dhis2-cachecleaner-deselectall"},o.a.t("Deselect all")),c.a.createElement(s.a,{disabled:!!a[r.a],destructive:!0,type:"submit",dataTest:"dhis2-cachecleaner-clear-top"},o.a.t("Clear all selected items"))),c.a.createElement(S,{form:d,emptyMessage:o.a.t("Local storage empty"),selectButtonLabel:o.a.t("Select all local storage items"),deselectButtonLabel:o.a.t("Deselect all local storage items"),headline:o.a.t("Local storage"),storageKeys:t,storageName:"localStorageKeys"}),c.a.createElement(S,{form:d,emptyMessage:o.a.t("Session storage empty"),selectButtonLabel:o.a.t("Select all session storage items"),deselectButtonLabel:o.a.t("Deselect all session storage items"),headline:o.a.t("Session storage"),storageKeys:n,storageName:"sessionStorageKeys"}),c.a.createElement(S,{form:d,emptyMessage:o.a.t("No indexed databases"),selectButtonLabel:o.a.t("Select all databases"),deselectButtonLabel:o.a.t("Deselect all databases"),headline:o.a.t("Indexed database"),storageKeys:l,storageName:"indexedDatabaseKeys"}),c.a.createElement("div",{className:E.a.formErrors},a[r.a]&&i&&c.a.createElement(s.f,{error:!0},a[r.a])),c.a.createElement(h,null,c.a.createElement(s.a,{disabled:!!a[r.a],destructive:!0,type:"submit",dataTest:"dhis2-cachecleaner-clear-bottom"},o.a.t("Clear all selected items")))));f.defaultProps={initialValues:{localStorageKeys:[],sessionStorageKeys:[],indexedDatabaseKeys:[]}};const w=(e,a)=>(a.forEach(a=>e.removeItem(a)),a.reduce((a,t)=>!!a&&null===e.getItem(t),!0)),D=[...Object.keys(Storage.prototype),"dhis2.menu.ui.headerBar.title","dhis2.menu.ui.headerBar.link","dhis2.menu.ui.headerBar.userStyle","DHIS2_BASE_URL"],_=e=>{const[a,t]=Object(n.useState)([]),s=Object(n.useCallback)(()=>{const a=(e=>Object.keys(e).filter(e=>!D.includes(e)))(e);t(a)},[e]);return Object(n.useEffect)(()=>{s()},[s]),{keys:a,refetch:s}},v=e=>new Promise((a,t)=>{let s=!0;const n=window.indexedDB.open(e);n.onsuccess=()=>{n.result.close(),s?a(!0):x(e).then(()=>a(!1))},n.onerror=e=>t(e),n.onupgradeneeded=()=>s=!1}),x=e=>v(e).then(a=>a?new Promise((a,t)=>{const s=window.indexedDB.deleteDatabase(e);s.onsuccess=a,s.onerror=t}):Promise.reject()),B=["dhis2ou","dhis2","dhis2tc","dhis2ec","dhis2de","dhis2er","dhis2ca"],k=()=>v("dhis2ca").then(async e=>{let a,t=[];if(e)try{a=await(s="dhis2ca",new Promise((e,a)=>{const t=window.indexedDB.open(s);t.onsuccess=()=>e(t.result),t.onerror=a}));const e=await((e,a,t)=>new Promise((s,n)=>{try{const c=e.transaction(a).objectStore(a).get(t);c.onsuccess=e=>s(e.target.result),c.onerror=n}catch(c){n(c)}}))(a,"userCaches","accessHistory");e&&e.values&&(t=e.values.map(e=>"dhis2ca".concat(e)))}catch(n){t=[]}finally{a&&a.close()}var s;return t}),C=()=>{const[e,a]=Object(n.useState)(0),[t,s]=Object(n.useState)(!0),[c,l]=Object(n.useState)({staticDatabases:[],userDatabases:[]});return Object(n.useEffect)(()=>{(async()=>{s(!0);const e=await Promise.all(B.map(e=>v(e).then(a=>a?e:null))).then(e=>e.filter(e=>e)).catch(()=>[]),a=await k().catch(()=>[]);l({staticDatabases:e,userDatabases:a}),s(!1)})()},[e]),{loading:t,data:c,refetch:()=>a(e+1)}},L=async e=>{var a,t;e.localStorageKeys&&(t=e.localStorageKeys,w(window.localStorage,t)),e.sessionStorageKeys&&(e=>{w(window.sessionStorage,e)})(e.sessionStorageKeys),(null===(a=e.indexedDB)||void 0===a?void 0:a.length)&&await(e=>Promise.all(e.map(x)))(e.indexedDB)};var N=t(168),j=t.n(N);const H=()=>{const{keys:e,refetch:a}=_(window.localStorage),{keys:t,refetch:s}=_(window.sessionStorage),{loading:n,error:l,data:r,refetch:i}=C(),{staticDatabases:d,userDatabases:m}=r,h=!n&&!l;return c.a.createElement("div",{className:j.a.container},n&&c.a.createElement("p",{"data-test":"dhis2-cachecleaner-loading"},o.a.t("Loading clearable data...")),l&&o.a.t("Something went wrong: ".concat(l.message)),h&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:j.a.headline,"data-test":"dhis2-cachecleaner-homeheadline"},o.a.t("DHIS 2 browser cache cleaner")),c.a.createElement(f,{localStorageKeys:e,sessionStorageKeys:t,indexedDatabaseKeys:d,onSubmit:async e=>{const t=((e,a)=>{const{indexedDatabaseKeys:t,localStorageKeys:s,sessionStorageKeys:n}=e,c=(null===t||void 0===t?void 0:t.includes("dhis2ca"))&&(null===a||void 0===a?void 0:a.length);return{localStorageKeys:s||[],sessionStorageKeys:n||[],indexedDB:[...t||[],...c?a:[]]}})(e,m);await L(t),await(async()=>{a(),s(),await i()})()}})))};function O(){return c.a.createElement("div",{className:"container"},c.a.createElement(s.e,{colors:!0,spacers:!0}),c.a.createElement(H,null))}}}]);
//# sourceMappingURL=app.d39b4398.chunk.js.map