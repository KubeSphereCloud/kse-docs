"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7511],{52991:(e,t,n)=>{n.d(t,{Z:()=>y});var i=n(67294),a=n(86010),r=n(53438),c=n(39960),s=n(13919),o=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return i.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function d(e){let{href:t,icon:n,title:r,description:c}=e;return i.createElement(m,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:r},n," ",r),c&&i.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:c},c))}function u(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?i.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(t.docId??void 0);return i.createElement(d,{href:t.href,icon:n,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(p,{item:t});case"category":return i.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,r.jA)();return i.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return i.createElement(g,e);const c=(0,r.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),r=n(52991),c=n(53438);const s={id:"identity-management",title:"Identity Management",description:"Identity Management",custom_edit_url:null},o=void 0,l={unversionedId:"api/v4.0.0/identity-management",id:"api/v4.0.0/identity-management",title:"Identity Management",description:"Identity Management",source:"@site/docs/api/v4.0.0/identity-management.tag.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/identity-management",permalink:"/reference/api/v4.0.0/identity-management",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"identity-management",title:"Identity Management",description:"Identity Management",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Update kubeconfig",permalink:"/reference/api/v4.0.0/update-kube-config"},next:{title:"List users",permalink:"/reference/api/v4.0.0/list-users"}},m={},d=[],u={toc:d},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);