"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[785],{52991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),i=r(86010),c=r(53438),o=r(39960),s=r(13919),a=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:c},r," ",c),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o},o))}function m(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},32185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(87462),i=(r(67294),r(3905)),c=r(52991),o=r(53438);const s={id:"non-resource-ap-is",title:"NonResource APIs",description:"NonResource APIs",custom_edit_url:null},a=void 0,l={unversionedId:"api/v4.0.0/non-resource-ap-is",id:"api/v4.0.0/non-resource-ap-is",title:"NonResource APIs",description:"NonResource APIs",source:"@site/docs/api/v4.0.0/non-resource-ap-is.tag.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/non-resource-ap-is",permalink:"/reference/api/v4.0.0/non-resource-ap-is",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"non-resource-ap-is",title:"NonResource APIs",description:"NonResource APIs",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Create node terminal session",permalink:"/reference/api/v4.0.0/create-node-exec"},next:{title:"KubeSphere version info",permalink:"/reference/api/v4.0.0/version-legacy"}},u={},d=[],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);