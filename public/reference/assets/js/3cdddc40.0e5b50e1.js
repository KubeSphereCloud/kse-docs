"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[693],{52991:(e,t,r)=>{r.d(t,{Z:()=>v});var i=r(67294),n=r(86010),c=r(53438),l=r(39960),a=r(13919),s=r(95999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return i.createElement(l.Z,{href:t,className:(0,n.Z)("card padding--lg",o.cardContainer)},r)}function m(e){let{href:t,icon:r,title:c,description:l}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,n.Z)("text--truncate",o.cardTitle),title:c},r," ",c),l&&i.createElement("p",{className:(0,n.Z)("text--truncate",o.cardDescription),title:l},l))}function d(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?i.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return i.createElement(m,{href:t.href,icon:r,title:t.label,description:n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(p,{item:t});case"category":return i.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,c.jA)();return i.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return i.createElement(h,e);const l=(0,c.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},l.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},10294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var i=r(87462),n=(r(67294),r(3905)),c=r(52991),l=r(53438);const a={id:"multi-cluster",title:"Multi-cluster",description:"Multi-cluster",custom_edit_url:null},s=void 0,o={unversionedId:"api/v4.0.0/multi-cluster",id:"api/v4.0.0/multi-cluster",title:"Multi-cluster",description:"Multi-cluster",source:"@site/docs/api/v4.0.0/multi-cluster.tag.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/multi-cluster",permalink:"/reference/api/v4.0.0/multi-cluster",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"multi-cluster",title:"Multi-cluster",description:"Multi-cluster",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"User info endpoint",permalink:"/reference/api/v4.0.0/openid-userinfo"},next:{title:"Cluster validation",permalink:"/reference/api/v4.0.0/validate-cluster"}},u={},m=[],d={toc:m},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);