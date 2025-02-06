(function(){"use strict";var e={2951:function(e,n,t){var a=t(5130),o=(t(5524),t(7768)),i=t(4533),r=t(5741),s=t(8330),u=(t(4529),t(6768));const l={id:"app"};function c(e,n,t,a,o,i){const r=(0,u.g2)("AdminPortal");return(0,u.uX)(),(0,u.CE)("div",l,[(0,u.bF)(r)])}const d={class:"admin-portal",style:{position:"relative !important",top:"180px !important"}};function f(e,n,t,a,o,i){const r=(0,u.g2)("a-button"),s=(0,u.g2)("a-table"),l=(0,u.g2)("a-pagination");return(0,u.uX)(),(0,u.CE)("div",d,[n[1]||(n[1]=(0,u.Lk)("h2",null,"Admin Portal - Data Zilizotumwa",-1)),(0,u.bF)(s,{columns:e.columns,"data-source":e.submissions,"row-key":"id",bordered:"",pagination:e.paginationConfig},{bodyCell:(0,u.k6)((({column:t,record:a})=>["action"===t.key?((0,u.uX)(),(0,u.Wv)(r,{key:0,type:"danger",onClick:n=>e.handleDelete(a.id)},{default:(0,u.k6)((()=>n[0]||(n[0]=[(0,u.eW)("Delete")]))),_:2},1032,["onClick"])):(0,u.Q3)("",!0)])),_:1},8,["columns","data-source","pagination"]),e.totalSubmissions>10?((0,u.uX)(),(0,u.Wv)(l,{key:0,current:e.currentPage,total:e.totalSubmissions,pageSize:10,onChange:e.handlePageChange,style:{"margin-top":"20px"}},null,8,["current","total","onChange"])):(0,u.Q3)("",!0)])}t(8992),t(4520),t(1454);var p=t(144),g=t(6400),m=t(7617);const v={apiKey:"AIzaSyAe7DLAE11yB3fEw9ZSXoUAnvbrmKh404s",authDomain:"plessfinance.firebaseapp.com",projectId:"plessfinance",storageBucket:"plessfinance.firebasestorage.app",messagingSenderId:"1085622291510",appId:"1:1085622291510:web:8062b8501be7c4530c5c97",measurementId:"G-R6NSRK4LQ8"},y=(0,g.Wp)(v),b=(0,m.aU)(y);var h=(0,u.pM)({name:"AdminPortal",setup(){const e=(0,p.KR)([]),n=(0,p.KR)(0),t=(0,p.KR)(1),a=(0,p.KR)({pageSize:10});let o=null;const i=[{title:"Jina la Kwanza",dataIndex:"firstName",key:"firstName"},{title:"Jina la Mwisho",dataIndex:"lastName",key:"lastName"},{title:"Simu",dataIndex:"phoneNumber",key:"phoneNumber"},{title:"Jinsia",dataIndex:"gender",key:"gender"},{title:"Umri",dataIndex:"age",key:"age"},{title:"Mkoa",dataIndex:"region",key:"region"},{title:"Wilaya",dataIndex:"district",key:"district"},{title:"Tarehe ya Kutuma",dataIndex:"regDate",key:"regDate",render:e=>new Date(e).toLocaleString()},{title:"Action",key:"action"}],r=(t=1)=>{try{o&&o();const i=(t-1)*a.value.pageSize;o=(0,m.aQ)((0,m.rJ)(b,"applications"),(t=>{const o=t.docs.map((e=>({id:e.id,...e.data()})));e.value=o.slice(i,i+a.value.pageSize),n.value=o.length}))}catch(i){console.error("Error fetching submissions:",i)}},s=e=>{t.value=e,r(e)},l=async t=>{try{await(0,m.kd)((0,m.H9)(b,"applications",t)),e.value=e.value.filter((e=>e.id!==t)),n.value-=1,console.log("Submission deleted successfully!")}catch(a){console.error("Error deleting submission:",a)}};return(0,u.sV)((()=>{r(t.value)})),(0,u.hi)((()=>{o&&o()})),{submissions:e,columns:i,paginationConfig:a,totalSubmissions:n,currentPage:t,handlePageChange:s,handleDelete:l}}}),k=t(1241);const S=(0,k.A)(h,[["render",f],["__scopeId","data-v-38af6333"]]);var w=S,x={name:"App",components:{AdminPortal:w}};const I=(0,k.A)(x,[["render",c]]);var A=I;const C=(0,o.$N)({icons:{iconfont:"mdi"},components:i,directives:r}),O=(0,a.Ef)(A);O.use(C),O.use(s.Ay),O.mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={exports:{}};return e[a].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,i){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,u=0;u<a.length;u++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](a[u])}))?a.splice(u--,1):(s=!1,i<r&&(r=i));if(s){e.splice(c--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,i,r=a[0],s=a[1],u=a[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var c=u(t)}for(n&&n(a);l<r.length;l++)i=r[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},a=self["webpackChunkfurs_form"]=self["webpackChunkfurs_form"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(2951)}));a=t.O(a)})();
//# sourceMappingURL=app.4bbb6a4b.js.map