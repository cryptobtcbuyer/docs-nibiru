(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{398:function(e,t,r){},432:function(e,t,r){"use strict";r(398)},453:function(e,t,r){"use strict";r.r(t);var s={props:["selected","asideBanners","asideBannersUrl","prereq"],data:function(){return{headerCurrent:null}},async mounted(){window.addEventListener("scroll",this.headerActive),window.addEventListener("hashchange",this.headerActive)},beforeDestroy(){window.removeEventListener("scroll",this.headerActive),window.removeEventListener("hashchange",this.headerActive)},computed:{headersFiltered(){return this.$page.headers.filter(e=>{const t=!e.title.match(/{hide}/),r=!e.title.match(/pre-requisite/i);return t&&r})}},methods:{headerActive(e){const t=window.scrollY+50;if(!this.$page.headers)return;const r=this.$page.headers.map(e=>({...e,y:document.getElementById(e.slug).getBoundingClientRect().top})).filter(e=>!e.title.match(/\{hide\}/)).map(e=>({...e,y:e.y+window.scrollY}));r.forEach((e,s)=>{const i=r[s],a=r[s+1];if(i&&a){if(t>=i.y&&t<a.y)return this.headerCurrent={...i}}else if(t>=i.y)return this.headerCurrent={...i}})}}},i=(r(432),r(0)),a=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"search__container"},[e.$themeConfig.versions?t("tm-select-version"):e._e(),e.$themeConfig.algolia?t("div",{staticClass:"search",on:{click:function(t){return e.$emit("search",!0)}}},[t("div",{staticClass:"search__icon"},[t("icon-search")],1),t("div",{staticClass:"search__text"},[e._v("Search")])]):e._e()],1),e.asideBanners&&!e.$themeConfig.custom?t("div",{staticClass:"banners"},e._l(e.asideBanners,(function(r){return t("div",{staticClass:"banners__item"},[t("a",{attrs:{href:r.href,target:"_blank",rel:"noreferrer noopener"}},[t("img",{staticClass:"aside__image",attrs:{src:`${e.asideBannersUrl}/${r.src}`,alt:r.alt},on:{error:function(t){return e.$emit("bannerError",!0)}}})])])})),0):e._e(),e.prereq&&e.prereq.length>0?t("div",[t("div",{staticClass:"aside__title"},[e._v("Pre-requisite reading")]),e._l(e.prereq,(function(r){return t("a",{staticClass:"prereq__item",attrs:{href:r.href}},[e._v(e._s(r.text))])}))],2):e._e(),e.$page.headers&&e.$page.headers.length>0?t("div",[t("div",{staticClass:"aside__title"},[e._v("On this page")]),e._l(e.headersFiltered,(function(r){return t("div",{ref:r.slug,refInFor:!0,staticClass:"aside__link",class:["aside__link__active__"+(e.headerCurrent&&e.headerCurrent.slug===r.slug)]},[t("a",{staticClass:"aside__link__href header-anchor",class:{selected:r.slug==e.selected},attrs:{href:"#"+r.slug}},[e._v(e._s(r.title))])])}))],2):e._e()])])}),[],!1,null,"75d34f3a",null);t.default=a.exports}}]);