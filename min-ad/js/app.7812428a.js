(function(){"use strict";var a={3165:function(a,i,e){var n=e(5130),t=(e(5524),e(7768)),l=e(4533),r=e(5741),u=e(8330),d=(e(4529),e(6768));const o={id:"app"};function s(a,i,e,n,t,l){const r=(0,d.g2)("AdminPortal");return(0,d.uX)(),(0,d.CE)("div",o,[(0,d.bF)(r)])}var m=e(4232);const b={class:"admin-portal",style:{position:"relative !important",top:"180px !important"}};function c(a,i,e,n,t,l){const r=(0,d.g2)("a-button"),u=(0,d.g2)("a-table");return(0,d.uX)(),(0,d.CE)("div",b,[(0,d.Lk)("h2",null,"Admin Portal - Data Zilizotumwa "+(0,m.v_)(t.submissions.length),1),(0,d.bF)(u,{columns:t.columns,"data-source":l.indexedSubmissions,"row-key":"id",bordered:"",pagination:t.paginationConfig},{bodyCell:(0,d.k6)((({column:a,record:e,index:n})=>["index"===a.key?((0,d.uX)(),(0,d.CE)(d.FK,{key:0},[(0,d.eW)((0,m.v_)(n+1),1)],64)):(0,d.Q3)("",!0),"regDate"===a.key?((0,d.uX)(),(0,d.CE)(d.FK,{key:1},[(0,d.eW)((0,m.v_)(l.formatDate(e.regDate)),1)],64)):(0,d.Q3)("",!0),"group"===a.key?((0,d.uX)(),(0,d.CE)(d.FK,{key:2},[(0,d.eW)((0,m.v_)(`${l.formattedParentGroup(e.parentGroup)} - ${l.formattedGroup(e.group)}`),1)],64)):(0,d.Q3)("",!0),"action"===a.key?((0,d.uX)(),(0,d.Wv)(r,{key:3,type:"danger",onClick:a=>l.handleDelete(e.id)},{default:(0,d.k6)((()=>i[0]||(i[0]=[(0,d.eW)("Delete")]))),_:2},1032,["onClick"])):(0,d.Q3)("",!0)])),_:1},8,["columns","data-source","pagination"])])}e(8992),e(4520),e(3949),e(1454);var p=e(6400),f=e(7617);const _={apiKey:"AIzaSyAe7DLAE11yB3fEw9ZSXoUAnvbrmKh404s",authDomain:"plessfinance.firebaseapp.com",projectId:"plessfinance",storageBucket:"plessfinance.firebasestorage.app",messagingSenderId:"1085622291510",appId:"1:1085622291510:web:8062b8501be7c4530c5c97",measurementId:"G-R6NSRK4LQ8"},h=(0,p.Wp)(_),g=(0,f.aU)(h);var k={name:"AdminPortal",data(){return{submissions:[],totalSubmissions:0,currentPage:1,paginationConfig:{pageSize:10},unsubscribe:null,columns:[{title:"#",key:"index",dataIndex:"index",sorter:(a,i)=>a.index-i.index},{title:"Jina la Kwanza",dataIndex:"firstName",key:"firstName",sorter:(a,i)=>a.firstName.localeCompare(i.firstName)},{title:"Jina la Mwisho",dataIndex:"lastName",key:"lastName",sorter:(a,i)=>a.lastName.localeCompare(i.lastName)},{title:"Simu",dataIndex:"phoneNumber",key:"phoneNumber"},{title:"Jinsia",dataIndex:"gender",key:"gender"},{title:"Umri",dataIndex:"age",key:"age",sorter:(a,i)=>a.age-i.age},{title:"Mkoa",dataIndex:"region",key:"region"},{title:"Wilaya",dataIndex:"district",key:"district"},{title:"Tarehe ya Kutuma",dataIndex:"regDate",key:"regDate",sorter:(a,i)=>new Date(a.regDate)-new Date(i.regDate)},{title:"Kundi",dataIndex:"group",key:"group"},{title:"Action",key:"action"}],parentGroups:[{id:"ulinzi",name:"ulinzi",label:"Ulinzi"},{id:"ujenzi",name:"ujenzi",label:"Ujenzi"},{id:"madini",name:"madini",label:"Madini"},{id:"afya",name:"afya",label:"Afya"},{id:"makundi-maalum",name:"makundi-maalum",label:"Makundi Malumu"},{id:"elimu",name:"elimu",label:"Elimu"},{id:"uchukuzi-na-usafirishaji",name:"uchukuzi-na-usafirishaji",label:"Uchukuzi na Usafirishaji"},{id:"utalii",name:"utalii",label:"Utalii"},{id:"kilimo-ufugaji-uvuvi",name:"kilimo-ufugaji-uvuvi",label:"Kilimo, Ufugaji na Uvuvi"},{id:"sanaa-na-michezo",name:"sanaa-na-michezo",label:"Sanaa na Michezo"},{id:"diplomasia",name:"diplomasia",label:"Diplomasia"},{id:"tamaduni",name:"tamaduni",label:"Tamaduni"},{id:"habari-na-mawasiliano",name:"habari-na-mawasiliano",label:"Habari na Mawasiliano"}],groups:[{id:"1",label:"Mgambo",parent_id:"ulinzi",name:"mgambo"},{id:"2",label:"Ulinzi Shirikishi na Polisi Jamii",parent_id:"ulinzi",name:"ulinzi_shirikishi_polisi_jamii"},{id:"3",label:"Sungusungu",parent_id:"ulinzi",name:"Sungusungu"},{id:"4",label:"Wakandarasi",parent_id:"ujenzi",name:"wakandarasi"},{id:"5",label:"Wasanifu Majengo",parent_id:"ujenzi",name:"wasanifu_majengo"},{id:"6",label:"Mafundi",parent_id:"ujenzi",name:"mafundi"},{id:"7",label:"Wachimbaji Wadogo",parent_id:"madini",name:"wachimbaji_wadogo"},{id:"8",label:"Wachimbaji Wakubwa",parent_id:"madini",name:"wachimbaji_wakubwa"},{id:"9",label:"Wamiliki wa Migodi",parent_id:"madini",name:"wamiliki_wa_migodi"},{id:"10",label:"Brokers/Madalali",parent_id:"madini",name:"madalali_brokers"},{id:"11",label:"Wataalamu wa Afya",parent_id:"afya",name:"wataalamu_wa_afya"},{id:"12",label:"Tiba Asili na Tiba Mbadala",parent_id:"afya",name:"tiba_asili_mbadala"},{id:"13",label:"Tiba Asili na Tiba Mbadala",parent_id:"afya",name:"tiba_asili_mbadala"},{id:"14",label:"Kaya Masikini (TASAF)",parent_id:"makundi-maalum",name:"kaya_masikini"},{id:"15",label:"Vikundi vya watu Wenye Ulemavu",parent_id:"makundi-maalum",name:"walemavu"},{id:"16",label:"Wanafunzi wa Vyuo Vikuu",parent_id:"elimu",name:"wanafunzi_wa_vyuo_vikuu"},{id:"17",label:"Wanafunzi wa Sekondari",parent_id:"elimu",name:"wanafunzi_wa_sekondari"},{id:"18",label:"Wanafunzi wa Vyuo Kati",parent_id:"elimu",name:"wanafunzi_wa_vyuo_kati"},{id:"19",label:"Wanafunzi wa Vyuo vya Ufundi",parent_id:"elimu",name:"wanafunzi_wa_vya_ufundi"},{id:"20",label:"Walimu - Sekondari",parent_id:"elimu",name:"walimu_sekondari"},{id:"21",label:"Walimu - Msingi",parent_id:"elimu",name:"walimu_msingi"},{id:"22",label:"Madereva - Malori",parent_id:"uchukuzi-na-usafirishaji",name:"madereva_malori"},{id:"23",label:"Madereva - Daladala",parent_id:"uchukuzi-na-usafirishaji",name:"madereva_daladala"},{id:"23",label:"Madereva - Mabasi Makubwa",parent_id:"uchukuzi-na-usafirishaji",name:"madereva_mabasi_makubwa"},{id:"24",label:"Madereva - Mabasi ya Kukodisha",parent_id:"uchukuzi-na-usafirishaji",name:"madereva_mabasi_kukodisha"},{id:"25",label:"Madereva - Teksi",parent_id:"uchukuzi-na-usafirishaji",name:"madereva_teksi"},{id:"26",label:"Madereva - Bodaboda na Bajaji",parent_id:"uchukuzi-na-usafirishaji",name:"madereva_boda_bajaji"},{id:"27",label:"Madereva wa Watalii",parent_id:"utalii",name:"madereva_watalii"},{id:"28",label:"Wapagazi",parent_id:"utalii",name:"wapagazi"},{id:"29",label:"Wahudumu wa Hoteli",parent_id:"utalii",name:"wahudumu_hoteli"},{id:"30",label:"Waongoza Watalii",parent_id:"utalii",name:"waongoza_watalii"},{id:"31",label:"Wamiliki - Kampuni za Utalii",parent_id:"utalii",name:"wamiliki_kampuni_utalii"},{id:"32",label:"Wafanya Biashara Wadogo na wa Kati",parent_id:"wajasasiriamali",name:"wafanyabiashara_wadogo_wakati"},{id:"33",label:"Wamachinga",parent_id:"wajasasiriamali",name:"wamachinga"},{id:"34",label:"Baba/Mama Lishe",parent_id:"wajasasiriamali",name:"baba_mama_lishe"},{id:"35",label:"Wavuvi",parent_id:"kilimo-ufugaji-uvuvi",name:"wavuvi"},{id:"36",label:"Wafugaji",parent_id:"kilimo-ufugaji-uvuvi",name:"wafugaji"},{id:"37",label:"Wakulima",parent_id:"kilimo-ufugaji-uvuvi",name:"wakulima"},{id:"38",label:"Maafisa Ugani",parent_id:"kilimo-ufugaji-uvuvi",name:"maafisa_ugani"},{id:"39",label:"Wanamuziki",parent_id:"sanaa-na-michezo",name:"wanamuziki"},{id:"40",label:"Waigizaji",parent_id:"sanaa-na-michezo",name:"waigizaji"},{id:"41",label:"Wanamichezo",parent_id:"sanaa-na-michezo",name:"wanamichezo"},{id:"42",label:"Ngoma za Asili",parent_id:"sanaa-na-michezo",name:"ngoma_asili"},{id:"43",label:"Sanaa Nyenginezo",parent_id:"sanaa-na-michezo",name:"sanaa-nyenginezo"},{id:"44",label:"Dayaspora",parent_id:"diplomasia",name:"dayaspora"},{id:"45",label:"Viongozi wa Dini",parent_id:"tamaduni",name:"viongozi_dini"},{id:"46",label:"Viongozi wa Kimila",parent_id:"tamaduni",name:"viongozi_mila"},{id:"47",label:"Wazee Mashuhuri",parent_id:"tamaduni",name:"wazee_mashuhuri"},{id:"48",label:"Wanahabari (Waandishi na Watangazaji)",parent_id:"habari-na-mawasiliano",name:"wanahabari"},{id:"49",label:"Wahariri",parent_id:"habari-na-mawasiliano",name:"wanahabari"},{id:"50",label:"Wamiliki wa Vyombo vya Habari",parent_id:"habari-na-mawasiliano",name:"wamiliki_vyombo_vya_habari"},{id:"51",label:"Waandaa Vipindi",parent_id:"habari-na-mawasiliano",name:"waandaa_vipindi"}]}},methods:{formatDate(a){if(!a||!a.toDate)return"";const i=a.toDate();return i.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formattedParentGroup(a){let i=a;return Object.keys(this.parentGroups).forEach((a=>{const e=this.parentGroups[a];i===e.name&&(i=e.label),null===i&&(i="Hakuchagua kundi")})),i},formattedGroup(a){let i=a;return Object.keys(this.groups).forEach((a=>{const e=this.groups[a];i===e.name&&(i=e.label),null===i&&(i="")})),i},fetchSubmissions(){try{this.unsubscribe&&this.unsubscribe();const a=(0,f.P)((0,f.rJ)(g,"applications"),(0,f.My)("regDate","desc"));this.unsubscribe=(0,f.aQ)(a,(a=>{this.submissions=a.docs.map((a=>({id:a.id,...a.data()}))),this.totalSubmissions=a.size}))}catch(a){console.error("Error fetching submissions:",a)}},handlePageChange(a){this.currentPage=a,this.fetchSubmissions()},async handleDelete(a){try{await(0,f.kd)((0,f.H9)(g,"applications",a)),this.submissions=this.submissions.filter((i=>i.id!==a)),this.totalSubmissions-=1,console.log("Submission deleted successfully!")}catch(i){console.error("Error deleting submission:",i)}}},computed:{indexedSubmissions(){return this.submissions.map(((a,i)=>({...a,index:i+1})))}},mounted(){this.fetchSubmissions()},beforeUnmount(){this.unsubscribe&&this.unsubscribe()}},w=e(1241);const v=(0,w.A)(k,[["render",c],["__scopeId","data-v-accfe7d4"]]);var y=v,z={name:"App",components:{AdminPortal:y}};const j=(0,w.A)(z,[["render",s]]);var W=j;const M=(0,t.$N)({icons:{iconfont:"mdi"},components:l,directives:r}),S=(0,n.Ef)(W);S.use(M),S.use(u.Ay),S.mount("#app")}},i={};function e(n){var t=i[n];if(void 0!==t)return t.exports;var l=i[n]={exports:{}};return a[n].call(l.exports,l,l.exports,e),l.exports}e.m=a,function(){var a=[];e.O=function(i,n,t,l){if(!n){var r=1/0;for(s=0;s<a.length;s++){n=a[s][0],t=a[s][1],l=a[s][2];for(var u=!0,d=0;d<n.length;d++)(!1&l||r>=l)&&Object.keys(e.O).every((function(a){return e.O[a](n[d])}))?n.splice(d--,1):(u=!1,l<r&&(r=l));if(u){a.splice(s--,1);var o=t();void 0!==o&&(i=o)}}return i}l=l||0;for(var s=a.length;s>0&&a[s-1][2]>l;s--)a[s]=a[s-1];a[s]=[n,t,l]}}(),function(){e.n=function(a){var i=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(i,{a:i}),i}}(),function(){e.d=function(a,i){for(var n in i)e.o(i,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={524:0};e.O.j=function(i){return 0===a[i]};var i=function(i,n){var t,l,r=n[0],u=n[1],d=n[2],o=0;if(r.some((function(i){return 0!==a[i]}))){for(t in u)e.o(u,t)&&(e.m[t]=u[t]);if(d)var s=d(e)}for(i&&i(n);o<r.length;o++)l=r[o],e.o(a,l)&&a[l]&&a[l][0](),a[l]=0;return e.O(s)},n=self["webpackChunkfurs_form"]=self["webpackChunkfurs_form"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(3165)}));n=e.O(n)})();
//# sourceMappingURL=app.7812428a.js.map