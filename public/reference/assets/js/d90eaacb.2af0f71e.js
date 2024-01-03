(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5316],{52852:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));n(44996),n(50941);var r=n(63303),a=n(85162);n(93162);const s={id:"introduction",title:"Introduction",description:"KubeSphere Enterprise OpenAPI",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},l=void 0,u={unversionedId:"api/v4.0.0/introduction",id:"api/v4.0.0/introduction",title:"Introduction",description:"KubeSphere Enterprise OpenAPI",source:"@site/docs/api/v4.0.0/introduction.info.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/introduction",permalink:"/reference/api/v4.0.0/introduction",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"introduction",title:"Introduction",description:"KubeSphere Enterprise OpenAPI",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"KubeSphere",permalink:"/reference/category/v4.0.0"},next:{title:"Authentication",permalink:"/reference/api/v4.0.0/authentication"}},c={},d=[],p={toc:d},f="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: v4.0.0"),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"KubeSphere Enterprise OpenAPI"),(0,i.kt)("div",{style:{marginBottom:"2rem"}},(0,i.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,i.kt)(r.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,i.kt)(a.Z,{label:"API Key: BearerToken",value:"BearerToken",mdxType:"TabItem"},(0,i.kt)("p",null,"Bearer Token Authentication"),(0,i.kt)("div",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Security Scheme Type:"),(0,i.kt)("td",null,"apiKey")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Header parameter name:"),(0,i.kt)("td",null,"Authorization")))))))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,i.kt)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,i.kt)("span",null,"KubeSphere: ",(0,i.kt)("a",{href:"mailto:support@kubesphere.cloud"},"support@kubesphere.cloud")),(0,i.kt)("span",null,"URL: ",(0,i.kt)("a",{href:"https://kubesphere.com.cn"},"https://kubesphere.com.cn"))))}m.isMDXComponent=!0},93162:function(e,t,n){var o,i,r,a=n(25108);i=[],void 0===(r="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(a.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,n)},o.onerror=function(){a.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var a=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):i(l.href)?o(e,t,n):r(l,l.target="_blank")):(l.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(i(e))o(e,n,a);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,a=/constructor/i.test(s.HTMLElement)||s.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||r&&a||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},c.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,p=d.createObjectURL(e);i?i.location=p:location.href=p,i=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});s.saveAs=u.saveAs=u,e.exports=u})?o.apply(t,i):o)||(e.exports=r)}}]);