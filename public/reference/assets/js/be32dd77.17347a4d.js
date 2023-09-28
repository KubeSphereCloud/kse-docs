"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4628],{94635:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var a=s(87462),i=(s(67294),s(3905)),r=s(26389),o=s(94891),p=(s(75190),s(47507)),n=s(24310),c=s(63303),l=(s(75035),s(85162));const m={id:"list-workspaces",title:"List workspaces",description:"List workspaces",sidebar_label:"List workspaces",hide_title:!0,hide_table_of_contents:!0,api:{tags:["User Related Resources"],operationId:"list-workspaces",responses:{200:{description:"ok",content:{"application/json":{schema:{required:["items","total_count"],properties:{items:{description:"paging data",type:"array",items:{}},total_count:{description:"total count",type:"integer",format:"int32"}}}}}}},description:"List workspaces",method:"get",path:"/kapis/tenant.kubesphere.io/v1alpha2/workspaces",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"List workspaces",description:{type:"text/plain"},url:{path:["kapis","tenant.kubesphere.io","v1alpha2","workspaces"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},d=void 0,u={unversionedId:"api/v4.0.0/list-workspaces",id:"api/v4.0.0/list-workspaces",title:"List workspaces",description:"List workspaces",source:"@site/docs/api/v4.0.0/list-workspaces.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/list-workspaces",permalink:"/reference/api/v4.0.0/list-workspaces",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-workspaces",title:"List workspaces",description:"List workspaces",sidebar_label:"List workspaces",hide_title:!0,hide_table_of_contents:!0,api:{tags:["User Related Resources"],operationId:"list-workspaces",responses:{200:{description:"ok",content:{"application/json":{schema:{required:["items","total_count"],properties:{items:{description:"paging data",type:"array",items:{}},total_count:{description:"total count",type:"integer",format:"int32"}}}}}}},description:"List workspaces",method:"get",path:"/kapis/tenant.kubesphere.io/v1alpha2/workspaces",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"List workspaces",description:{type:"text/plain"},url:{path:["kapis","tenant.kubesphere.io","v1alpha2","workspaces"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"List the namespaces for the current user",permalink:"/reference/api/v4.0.0/list-namespaces"},next:{title:"Create workspace",permalink:"/reference/api/v4.0.0/create-workspace"}},k={},h=[{value:"List workspaces",id:"list-workspaces",level:2}],b={toc:h},y="wrapper";function v(e){let{components:t,...s}=e;return(0,i.kt)(y,(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"list-workspaces"},"List workspaces"),(0,i.kt)("p",null,"List workspaces"),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"ok")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"items",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{description:"paging data",type:"array",items:{}},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"total_count",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{description:"total count",type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "items": [\n    null\n  ],\n  "total_count": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);