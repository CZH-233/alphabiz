(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{1684:function(t,e,i){},2023:function(t,e,i){},"283a":function(t,e,i){"use strict";i("36e6")},"36e6":function(t,e,i){},"5eea":function(t,e,i){"use strict";i("1684")},"713b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"hHh Lpr lFf"}},[i("q-header",{attrs:{bordered:""}},[i("application-bar"),i("q-toolbar",{staticClass:"toolbar"},[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),i("q-toolbar-title",{staticClass:"toolbar-title"},[t._v("\n          "+t._s(t.applicationTitle)+"\n        ")]),i("div",{staticClass:"toolbar-version non-selectable",attrs:{id:"version"},on:{click:t.showAboutDialog}},[t._v("v"+t._s(t.appVersion))]),i("div",{staticClass:"toolbar-commit non-selectable",attrs:{id:"commit"},on:{click:t.showAboutDialog}},[t._v("("+t._s(t.appCommit)+")")])],1)],1),i("q-drawer",{ref:"drawer",attrs:{side:"left",bordered:"","show-if-above":""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",{staticClass:"non-selectable q-pt-md"},t._l(t.essentialLinks,(function(e){return i("EssentialLink",t._b({key:e.title,attrs:{currentTab:t.currentTab,path:t.path},on:{trigger:t.setTab}},"EssentialLink",e,!1))})),1),i("corner")],1),i("q-page-container",{class:t.$q.dark.isActive?"bg-dark":"bg-white"},[i("keep-alive",{attrs:{include:"Player,Index"}},[i("router-view",{attrs:{currentTab:t.currentTab},on:{changeTab:t.setTab,updateTaskNum:t.updateTaskNum,updateLoadingStatus:t.updateLoadingStatus}})],1)],1)],1)},a=[],s=(i("ddb0"),i("9224")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.children&&0!=t.children.length?t.children.length>0?i("div",[i("q-expansion-item",{attrs:{"expand-separator":"",icon:t.icon,label:t.title,caption:t.caption,"default-opened":"/"===t.link}},t._l(t.children,(function(e){return i("EssentialLink",t._b({key:e.title,attrs:{level:.5,currentTab:t.currentTab,path:t.path},on:{trigger:t.onTrigger}},"EssentialLink",e,!1))})),1)],1):t._e():i("div",[i("q-item",{attrs:{clickable:"","inset-level":t.level,active:t.isActive},on:{click:t.onClick}},[t.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1):t._e(),i("q-item-section",[i("q-item-label",[t._v(t._s(t.title))]),i("q-item-label",{attrs:{caption:""}},[t._v("\n        "+t._s(t.caption)+"\n      ")])],1),t.loading?i("q-item-section",{attrs:{side:""}},[i("q-circular-progress",{staticClass:"loading-progress",attrs:{indeterminate:"",size:"24px",thickness:.25,color:"primary","center-color":"transparent","track-color":"transparent"}})],1):t._e()],1)],1)},r=[],c={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},level:{type:Number,default:0},trigger:{type:String,default:""},currentTab:{type:String,default:""},path:{type:String,default:"/"},loading:{type:Boolean,default:!1},children:[]},computed:{isActive(){const t=this.path;return"/"!==t?t===this.link:this.currentTab===this.trigger}},methods:{onClick(){this.$emit("trigger",this.trigger),this.$router.push(this.link)},onTrigger(t){this.$emit("trigger",t)}}},l=c,u=(i("5eea"),i("2877")),d=i("66e5"),p=i("4074"),m=i("0016"),h=i("0170"),g=i("58ea"),b=i("3b73"),f=i("eebe"),v=i.n(f),_=Object(u["a"])(l,o,r,!1,null,"501f638c",null),q=_.exports;v()(_,"components",{QItem:d["a"],QItemSection:p["a"],QIcon:m["a"],QItemLabel:h["a"],QCircularProgress:g["a"],QExpansionItem:b["a"]});var w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"corner absolute-bottom non-selectable",on:{click:t.handleClick}},["signedIn"===t.$store.state.account.authState?i("corner-menu",{on:{signOut:t.signOut,invite:t.invite}}):t._e(),i("q-item",{staticStyle:{height:"65px"},attrs:{clickable:"",exact:!0}},[t.$store.state.account.authState?[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"account_circle"}})],1),i("q-item-section",[i("q-item-label",[t._v(t._s(t.title))]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.caption))])],1)]:[i("q-item-section",{attrs:{avatar:""}},[i("q-spinner",{staticClass:"q-mr-xs q-mb-xs",attrs:{size:"24px"}})],1),i("q-item-section",[i("span",{staticClass:"q-pr-lg"},[t._v(t._s(t.$t("account_loading")))])])]],2)],1)},k=[],x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-menu",{attrs:{"auto-close":"","touch-position":"","transition-show":"jump-up","transition-hide":"jump-down"}},[i("q-list",{staticClass:"corner-menu__list",staticStyle:{"min-width":"160px"}},[i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/account/settings")}}},[i("q-item-section",{attrs:{"data-cy":"account-settings-btn"}},[t._v("\n        "+t._s(t.$t("account_account_setting"))+"\n      ")])],1),i("q-separator"),t.showInvite?i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("invite")}}},[i("q-item-section",{attrs:{"data-cy":"invite-btn"}},[t._v(t._s(t.$t("account_invitation")))])],1):t._e(),i("q-separator"),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("signOut")}}},[i("q-item-section",{attrs:{"data-cy":"sign-out-btn"}},[t._v(t._s(t.$t("account_sign_out"))+"\n      ")])],1)],1)],1)},$=[],C={name:"CornerMenu",computed:{showInvite(){return this.$store.state.account.invitationCode&&this.$store.state.account.invitationCode.findIndex((t=>0===t.invitation_state))>=0}}},y=C,S=i("4e73"),Q=i("1c1c"),z=i("eb85"),I=Object(u["a"])(y,x,$,!1,null,null,null),T=I.exports;v()(I,"components",{QMenu:S["a"],QList:Q["a"],QItem:d["a"],QItemSection:p["a"],QSeparator:z["a"]});var L=i("48f4"),O={name:"Corner",components:{CornerMenu:T},computed:{info(){return"signedIn"===this.$store.state.account.authState?this.$store.getters.accountUserInfo:null},title(){return this.info?this.info.nickname?this.info.nickname:this.info.emailVerified?this.info.email.split("@")[0]:this.info.phoneNumberVerified?this.info.phoneNumber:"???":this.$t("account_want_to_join")},caption(){return this.info?`Lv. ${this.info.accountLevel}`:this.$t("account_sign_up_now")}},methods:{handleClick(){const t=this.$store.state.account.authState;t&&"signedIn"!==t&&this.$amplify.showSignedOutDialog()},signOut(){L["c"].showPositive("signed_out"),L["a"].updateState("signedOut"),(this.$route.path.startsWith("/account")||this.$route.path.startsWith("/credits"))&&this.$router.push("/"),L["a"].signOut().catch((()=>{}))},invite(){this.$router.push({path:"/account/settings",query:{call:"invite"}})}}},A=O,N=(i("283a"),i("0d59")),M=Object(u["a"])(A,w,k,!1,null,"7de4fef4",null),E=M.exports;v()(M,"components",{QItem:d["a"],QItemSection:p["a"],QIcon:m["a"],QItemLabel:h["a"],QSpinner:N["a"]});var D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showAppBar?i("q-bar",{staticClass:"relative-position"},["mac"===t.env?[i("div",{staticClass:"full-height q-pt-xs col-grow",staticStyle:{"margin-left":"0","margin-right":"-8px"}},[i("div",{staticClass:"draggable full-height"})]),i("div",{staticClass:"absolute-left full-width full-height row flex-center",staticStyle:{"pointer-events":"none"}},[i("div",{staticClass:"text-weight-bold non-selectable"},[t._v("Alphabiz")])])]:t._e(),["win","linux"].includes(t.env)?[i("q-img",{staticClass:"ab-icon",attrs:{src:t.abIcon,width:"18px",height:"18px"}}),i("div",{staticClass:"q-ml-md q-pr-md non-selectable",staticStyle:{"font-size":"0.8rem"}},[t._v("Alphabiz")]),t.showMenu?[i("q-btn",{staticClass:"q-px-sm q-pb-none",attrs:{"no-caps":"",dense:"",flat:"",size:"0.7rem",label:"File"}},[i("q-menu",[i("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",[t._v("Open...")])],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",[t._v("New")])],1),i("q-separator"),i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("Preferences")]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{anchor:"top end",self:"top start"}},[i("q-list",t._l(3,(function(e){return i("q-item",{key:e,attrs:{dense:"",clickable:""}},[i("q-item-section",[t._v("Submenu Label")]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{"auto-close":"",anchor:"top end",self:"top start"}},[i("q-list",t._l(3,(function(e){return i("q-item",{key:e,attrs:{dense:"",clickable:""}},[i("q-item-section",[t._v("3rd level Label")])],1)})),1)],1)],1)})),1)],1)],1),i("q-separator"),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",[t._v("Quit")])],1)],1)],1)],1),i("q-btn",{staticClass:"q-px-sm q-py-none",attrs:{"no-caps":"",dense:"",flat:"",size:"0.7rem",label:"Edit"}},[i("q-menu",{attrs:{"auto-close":""}},[i("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("Cut")])],1),i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("Copy")])],1),i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("Paste")])],1),i("q-separator"),i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("Select All")])],1)],1)],1)],1)]:t._e(),i("div",{staticClass:"full-height q-pt-xs col-grow",staticStyle:{"margin-left":"0","margin-right":"-8px"}},[i("div",{staticClass:"draggable full-height"})]),i("div",{staticClass:"full-height no-draggable flex-center row",staticStyle:{"margin-right":"-12px","margin-top":"-4px"}},[i("q-btn",{staticClass:"no-border-radius",attrs:{dense:"",flat:"",size:"xs",padding:"12px 17px 8px 17px",icon:"fas fa-window-minimize"},on:{click:t.minimize}}),i("q-btn",{staticClass:"no-border-radius",attrs:{dense:"",flat:"",size:"xs",padding:"12px 17px 8px 17px",icon:t.maximizeIcon},on:{click:t.maximize}}),i("q-btn",{staticClass:"window-close-button no-border-radius",attrs:{dense:"",flat:"",size:"xs",padding:"12px 17px 8px 17px",icon:"fas fa-times"},on:{click:t.close}})],1)]:t._e()],2):t._e()},j=[];const B=i("ed08").isElectron();var P={name:"ApplicationBar",data(){return{showAppBar:B,showMenu:!1,abIcon:i("a4a1"),env:null,windowControl:null,isMaximized:!1}},created(){if(!B)return;Promise.resolve().then(i.t.bind(null,"34bb",7)).then((({ipcRenderer:t})=>{this.windowControl=e=>t.sendSync("app_window_control",e),this.isMaximized=this.windowControl("isMaximized")}));const t=navigator.userAgent.toLowerCase();console.log(t);const e=/macintosh|mac os x/i.test(t);this.env=e?"mac":"win"},computed:{maximizeIcon(){return this.isMaximized?"far fa-window-restore":"far fa-window-maximize"}},methods:{minimize(){this.windowControl("minimize")},maximize(){this.windowControl(this.isMaximized?"unmaximize":"maximize"),this.isMaximized=this.windowControl("isMaximized")},close(){this.windowControl("close")}}},V=P,J=(i("b17f"),i("d847")),F=i("9c40"),H=i("068f"),W=i("7f67"),R=Object(u["a"])(V,D,j,!1,null,"15cd8e77",null),U=R.exports;v()(R,"components",{QBar:J["a"],QBtn:F["a"],QImg:H["a"],QMenu:S["a"],QList:Q["a"],QItem:d["a"],QItemSection:p["a"],QSeparator:z["a"],QIcon:m["a"]}),v()(R,"directives",{ClosePopup:W["a"]});const G=i("ebd6").commit;var K={name:"MainLayout",components:{Corner:E,EssentialLink:q,ApplicationBar:U},data(){return{currentTab:"downloading",leftDrawerOpen:!1,appVersion:s["a"],appCommit:G,path:"/",drawer:null,taskNum:{downloading:0,uploading:0,downloaded:0},loadingStatus:{uploading:!1}}},computed:{applicationTitle(){const t={Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSettings:"basic_setting",AdvancedSettings:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):"/"===this.$route.path?this.$t(this.currentTab):"Alphabiz"},essentialLinks(){this.$i18n.locale;const t="signedIn"!==this.$store.state.account.authState?[]:[{title:this.$t("account_account_setting"),icon:"account_circle",link:"/account/settings",caption:this.$t("account_setting_caption")}],e=[{title:this.$t("home"),caption:this.$t("home_caption"),icon:"home",link:"/",children:[{title:this.$t("downloading")+` (${this.taskNum.downloading})`,icon:"file_download",link:"/",trigger:"downloading"},{title:this.$t("uploading")+` (${this.taskNum.uploading})`,icon:"file_upload",link:"/",trigger:"uploading",loading:this.loadingStatus.uploading},{title:this.$t("downloaded")+` (${this.taskNum.downloaded})`,icon:"done",link:"/",trigger:"downloaded"}]},{title:this.$t("player"),caption:this.$t("player_caption"),icon:"play_circle_filled",link:"/player"},{title:this.$t("credits"),caption:this.$t("credits_caption"),icon:"savings",link:"/credits"},{title:this.$t("settings"),caption:this.$t("settings_caption"),icon:"settings",children:[...t,{title:this.$t("basic_setting"),icon:"assignment",link:"/settings",caption:this.$t("basic_caption")},{title:this.$t("advanced"),icon:"build",link:"/advancedSettings",caption:this.$t("advanced")}]}];try{this.appVersion.includes("nightly")&&e.push({title:this.$t("development"),caption:this.$t("development_caption"),icon:"developer_mode",link:"/development"})}catch(i){}return e}},methods:{setTab(t){t&&(this.currentTab=t,this.$refs.drawer.belowBreakpoint&&this.$refs.drawer.hide())},updateTaskNum(t){Object.assign(this.taskNum,t)},updateLoadingStatus(t){Object.assign(this.loadingStatus,t)},showAboutDialog(){const t=this.$root.$children[0];t.$refs.about.about_visible()}},watch:{$route(t){this.path=t.path}}},X=K,Y=(i("89d3"),i("4d5a")),Z=i("e359"),tt=i("65c6"),et=i("6ac5"),it=i("9404"),nt=i("09e3"),at=Object(u["a"])(X,n,a,!1,null,null,null);e["default"]=at.exports;v()(at,"components",{QLayout:Y["a"],QHeader:Z["a"],QToolbar:tt["a"],QBtn:F["a"],QToolbarTitle:et["a"],QDrawer:it["a"],QList:Q["a"],QPageContainer:nt["a"]})},"89d3":function(t,e,i){"use strict";i("e87e")},b17f:function(t,e,i){"use strict";i("2023")},e87e:function(t,e,i){},ebd6:function(t){t.exports=JSON.parse('{"commit":"f6ffa49"}')}}]);