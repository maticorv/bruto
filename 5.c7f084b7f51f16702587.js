"use strict";(self.webpackChunkangular_ngrx_material_starter=self.webpackChunkangular_ngrx_material_starter||[]).push([[5],{3005:(fn,ge,p)=>{p.r(ge),p.d(ge,{AboutModule:()=>gn});var f=p(8583),_=p(3679),te=p(9790),H=p(1095),fe=p(3273),be=p(7441),A=p(9238),P=p(8553),S=p(7636),t=p(7716),l=p(2458),k=p(6237),C=p(9765),u=(p(5319),p(6682),p(2759),p(5917),p(8634),p(7238),p(9761),p(7519),p(6782),p(9490)),v=p(521),c=p(6461),N=(p(946),p(303));let Oe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,l.BQ,S.eL,l.si,P.Q8,A.rt],l.BQ]}),i})();p(9193),p(13);let Fe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[v.ud]]}),i})();var B=p(8295);let Le=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[l.rD],imports:[[Fe,B.lN,l.BQ],Fe,B.lN]}),i})();function la(i,r){if(1&i&&(t.O4$(),t._UZ(0,"circle",3)),2&i){const e=t.oxw();t.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),t.uIk("r",e._getCircleRadius())}}function da(i,r){if(1&i&&(t.O4$(),t._UZ(0,"circle",3)),2&i){const e=t.oxw();t.Udp("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),t.uIk("r",e._getCircleRadius())}}const pa=(0,l.pj)(class{constructor(i){this._elementRef=i}},"primary"),He=new t.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});class V extends pa{constructor(r,e,a,n,s){super(r),this._document=a,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const o=V._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),o.has(a.head)||o.set(a.head,new Set([100])),this._fallbackAnimation=e.EDGE||e.TRIDENT,this._noopAnimations="NoopAnimations"===n&&!!s&&!s._forceAnimations,s&&(s.diameter&&(this.diameter=s.diameter),s.strokeWidth&&(this.strokeWidth=s.strokeWidth))}get diameter(){return this._diameter}set diameter(r){this._diameter=(0,u.su)(r),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(r){this._strokeWidth=(0,u.su)(r)}get value(){return"determinate"===this.mode?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,(0,u.su)(r)))}ngOnInit(){const r=this._elementRef.nativeElement;this._styleRoot=(0,v.kV)(r)||this._document.head,this._attachStyleNode(),r.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const r=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${r} ${r}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const r=this._styleRoot,e=this._diameter,a=V._diameters;let n=a.get(r);if(!n||!n.has(e)){const s=this._document.createElement("style");s.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),s.textContent=this._getAnimationText(),r.appendChild(s),n||(n=new Set,a.set(r,n)),n.add(e)}}_getAnimationText(){const r=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*r).replace(/END_VALUE/g,""+.2*r).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}V.\u0275fac=function(r){return new(r||V)(t.Y36(t.SBq),t.Y36(v.t4),t.Y36(f.K0,8),t.Y36(k.Qb,8),t.Y36(He))},V.\u0275cmp=t.Xpm({type:V,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(r,e){2&r&&(t.uIk("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),t.Udp("width",e.diameter,"px")("height",e.diameter,"px"),t.ekj("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[t.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(r,e){1&r&&(t.O4$(),t.TgZ(0,"svg",0),t.YNc(1,la,1,9,"circle",1),t.YNc(2,da,1,7,"circle",2),t.qZA()),2&r&&(t.Udp("width",e.diameter,"px")("height",e.diameter,"px"),t.Q6J("ngSwitch","indeterminate"===e.mode),t.uIk("viewBox",e._getViewBox()),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1))},directives:[f.RF,f.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),V._diameters=new WeakMap;let Ne=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.BQ,f.ez],l.BQ]}),i})();p(5257),p(8345);const Ge=new t.OlP("mat-chips-default-options"),Ia={separatorKeyCodes:[c.K5]};let Qe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[l.rD,{provide:Ge,useValue:Ia}],imports:[[l.BQ]]}),i})(),je=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})(),$e=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.si,l.BQ,P.Q8,je],l.BQ,je]}),i})();const Na=["*",[["mat-card-footer"]]],za=["*","mat-card-footer"],Za=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],qa=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let Ja=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=t.lG2({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),i})(),Ua=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=t.lG2({type:i,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),i})(),ja=(()=>{class i{constructor(e){this._animationMode=e}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(k.Qb,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(e,a){2&e&&t.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode)},exportAs:["matCard"],ngContentSelectors:za,decls:2,vars:0,template:function(e,a){1&e&&(t.F$t(Na),t.Hsn(0),t.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),i})(),$a=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:qa,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(e,a){1&e&&(t.F$t(Za),t.Hsn(0),t.TgZ(1,"div",0),t.Hsn(2,1),t.qZA(),t.Hsn(3,2))},encapsulation:2,changeDetection:0}),i})(),We=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.BQ],l.BQ]}),i})();var Ke=p(7746),Xe=p(6627),et=p(1436),tt=p(7001);let at=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})(),it=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[at,l.si,l.BQ,P.Q8],at,l.BQ]}),i})();var nt=p(1769);let ki=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,l.BQ],l.BQ]}),i})();var q=p(625);p(5435);let G=(()=>{class i{constructor(){this.changes=new C.xQ,this.calendarLabel="Calendar",this.openCalendarLabel="Open calendar",this.closeCalendarLabel="Close calendar",this.prevMonthLabel="Previous month",this.nextMonthLabel="Next month",this.prevYearLabel="Previous year",this.nextYearLabel="Next year",this.prevMultiYearLabel="Previous 24 years",this.nextMultiYearLabel="Next 24 years",this.switchToMonthViewLabel="Choose date",this.switchToMultiYearViewLabel="Choose month and year"}formatYearRange(e,a){return`${e} \u2013 ${a}`}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({factory:function(){return new i},token:i,providedIn:"root"}),i})();const Xi={provide:new t.OlP("mat-datepicker-scroll-strategy"),deps:[q.aV],useFactory:function(i){return()=>i.scrollStrategies.reposition()}};let cn=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[G,Xi],imports:[[f.ez,H.ot,q.U8,A.rt,S.eL,l.BQ],N.ZD]}),i})();var me=p(9577),y=p(9976),vt=p(5115);let hn=(()=>{class i{constructor(e){e.addIcons(vt.zhw,vt.cly,y.r8p,y.Xcf,y.$aW,y.NBC,y.l1h,y.eW2,y.eHv,y.G_j,y.A8,y.LEp,y.pL1,y.BCn,y.XsY,y.X8G,y.iAX,y.aC2,y.FL8)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(me.by))},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,_.u5,te.aw,H.ot,be.LD,Oe,Le,Ne,Qe,We,$e,Ke.ie,fe.Tx,Xe.Ps,et.AV,tt.ZX,it,nt.t,me.uH],f.ez,_.u5,_.UX,te.aw,H.ot,fe.Tx,Oe,Qe,Le,Ne,$e,We,Ke.ie,be.LD,Xe.Ps,et.AV,tt.ZX,it,nt.t,ki,cn,l.XK,me.uH]}),i})();var kt=p(6983),un=p(1404);function pn(i,r){if(1&i&&(t.ynx(0,4),t.TgZ(1,"mat-card",5),t.TgZ(2,"mat-card-header"),t.TgZ(3,"mat-card-title"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.qZA(),t._UZ(6,"img",6),t.qZA(),t.BQk()),2&i){const e=r.$implicit;t.xp6(4),t.Oqu(t.lcZ(5,2,e.label)),t.xp6(2),t.s9C("src",e.image,t.LSH)}}const mn=[{path:"",component:(()=>{class i{constructor(){this.routeAnimationsElements=un.rd,this.releaseButler="assets/release-butler.png",this.navigation=[{link:"about",label:"anms.card.promoIndividual",image:"assets/menu/promos_para_mi.png"},{link:"about",label:"anms.card.promoCompartir",image:"assets/menu/promo_para_compartir.png"},{link:"about",label:"anms.card.cafeteriaClasicos",image:"assets/menu/cafeter\xeda_nuestros_cl\xe1sicos.png"},{link:"about",label:"anms.card.cafeteriaEspeciales",image:"assets/menu/cafeteria_nuestros_espeaciales.png"},{link:"about",label:"anms.card.jugos",image:"assets/menu/jugos_licuados.png"},{link:"about",label:"anms.card.batidos",image:"assets/menu/batidos_malteadas.png"},{link:"about",label:"anms.card.te",image:"assets/menu/te.png"},{link:"about",label:"anms.card.coldCoffee",image:"assets/menu/cold_coffee.png"},{link:"about",label:"anms.card.limonadas",image:"assets/menu/limonadas.png"},{link:"about",label:"anms.card.tortasPorcion",image:"assets/menu/tortas_por_porci\xf3n.png"},{link:"about",label:"anms.card.tortasIndividuales",image:"assets/menu/tortas_individuales.png"},{link:"about",label:"anms.card.tentaciones",image:"assets/menu/mas_tentaciones.png"},{link:"about",label:"anms.card.panaderia",image:"assets/menu/medialunas_tortitas.png"},{link:"about",label:"anms.card.tostadas",image:"assets/menu/tostadas_tostados.png"},{link:"about",label:"anms.card.brunch",image:"assets/menu/brunch.png"},{link:"about",label:"anms.card.hotcakes",image:"assets/menu/hotcakes_pancakes.png"},{link:"about",label:"anms.card.yogourt",image:"assets/menu/yogourt.png"},{link:"about",label:"anms.card.frutas",image:"assets/menu/bowl_frutas.png"},{link:"about",label:"anms.card.huevos",image:"assets/menu/huevos_revueltos.png"},{link:"about",label:"anms.card.gaseosas",image:"assets/menu/gaseosas_cervezas.png"},{link:"about",label:"anms.card.freeTacc",image:"assets/menu/sin_tacc.png"},{link:"about",label:"anms.card.coffeeShop",image:"assets/menu/cofee_shop.png"}]}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["anms-about"]],decls:7,vars:4,consts:[[1,"background"],[1,"gradient"],[1,"actions","grid"],["class","",4,"ngFor","ngForOf"],[1,""],[1,"example-card"],["mat-card-image","","alt","Photo of a Shiba Inu",3,"src"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,pn,7,4,"ng-container",3),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"anms.about.title")),t.xp6(3),t.Q6J("ngForOf",a.navigation))},directives:[f.sg,ja,$a,Ja,Ua],pipes:[te.X$],styles:['h1[_ngcontent-%COMP%]{text-align:center;font-size:3em;text-transform:uppercase}h2[_ngcontent-%COMP%]{font-size:1.5em;text-transform:uppercase}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:15px;gap:15px}.background[_ngcontent-%COMP%]{padding:80px 0 0;position:relative}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{text-align:center;margin:50px;z-index:1}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-weight:bold;padding:20px 10px 30px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 5px 10px 0}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.actions-main[_ngcontent-%COMP%]{text-transform:uppercase;padding:3px 24px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:1px}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{max-width:700px;margin:50px auto;letter-spacing:.01px;overflow-wrap:break-word;z-index:1;overflow:hidden}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:.9em;display:inline-block;word-wrap:break-word;white-space:normal;margin:0 0 10px}.background[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;bottom:0;right:0;background-image:url(intro.18d734fe9d9d1210b318.jpg);background-repeat:no-repeat;background-position:center top;background-size:cover;opacity:.7;content:"";z-index:0}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{position:absolute;top:51%;left:0;bottom:0;right:0;content:"";z-index:0}.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative}.follow-releases[_ngcontent-%COMP%]{max-width:700px;margin:0 auto 60px}.follow-releases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:40px}.follow-releases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-bottom:3px solid}.follow-releases[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:80%;max-height:80%;margin:20px auto 0;border-radius:5px;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.contributors[_ngcontent-%COMP%]{max-width:700px;margin:0 auto 60px}.contributors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-bottom:3px solid}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:8px;width:100px;display:inline-block;text-align:center}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:10px 0 0;line-height:16px}.contributors[_ngcontent-%COMP%]   .contributors-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;width:100px;border:5px solid;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}@media (max-width: 768px){.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin:50px 0}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{width:auto}.follow-releases[_ngcontent-%COMP%]{width:auto}.follow-releases[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:15px;gap:15px}}@media (max-width: 576px){.background[_ngcontent-%COMP%]{padding:40px 0 0}.background[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:1em}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin:40px 0 0}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:10px 0 20px}.background[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%}.background[_ngcontent-%COMP%]   .get-started[_ngcontent-%COMP%]{width:auto;margin:40px auto}.follow-releases[_ngcontent-%COMP%]{margin:0 auto 40px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:15px;gap:15px}}@media (min-width: 576px){.grid[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;grid-gap:15px;gap:15px;align-items:center}}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:15px;gap:15px}}@media (min-width: 992px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:15px;gap:15px}}@media (min-width: 1200px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:15px;gap:15px}}@media (min-width: 1600px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:15px;gap:15px}}img[_ngcontent-%COMP%]{display:block;max-width:80%;max-height:80%;margin:20px auto 0;border-radius:5px;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}img[_ngcontent-%COMP%]{display:block;max-width:80%;max-height:50%;margin:20px auto 0;border-radius:5px;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}'],changeDetection:0}),i})(),data:{title:"anms.menu.about"}}];let _n=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[kt.Bz.forChild(mn)],kt.Bz]}),i})(),gn=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,hn,_n]]}),i})()}}]);