"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3067],{52991:(e,t,r)=>{r.d(t,{Z:()=>g});var s=r(67294),n=r(86010),c=r(53438),i=r(39960),a=r(13919),o=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return s.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:c,description:i}=e;return s.createElement(u,{href:t},s.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:c},r," ",c),i&&s.createElement("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?s.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return s.createElement(d,{href:t.href,icon:r,title:t.label,description:n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(p,{item:t});case"category":return s.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,c.jA)();return s.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return s.createElement(h,e);const i=(0,c.MN)(t);return s.createElement("section",{className:(0,n.Z)("row",r)},i.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(f,{item:e})))))}},30333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=r(87462),n=(r(67294),r(3905)),c=r(52991),i=r(53438);const a={id:"user-related-resources",title:"User Related Resources",description:"User Related Resources",custom_edit_url:null},o=void 0,l={unversionedId:"api/v4.0.0/user-related-resources",id:"api/v4.0.0/user-related-resources",title:"User Related Resources",description:"User Related Resources",source:"@site/docs/api/v4.0.0/user-related-resources.tag.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/user-related-resources",permalink:"/reference/api/v4.0.0/user-related-resources",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user-related-resources",title:"User Related Resources",description:"User Related Resources",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Describe the specified system component",permalink:"/reference/api/v4.0.0/get-components-status-v-1-alpha-3"},next:{title:"Get users' kubeconfig",permalink:"/reference/api/v4.0.0/get-kubeconfig"}},u={},d=[],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);