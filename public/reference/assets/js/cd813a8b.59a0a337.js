"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6086],{15405:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>k,default:()=>v,frontMatter:()=>d,metadata:()=>h,toc:()=>y});var s=t(87462),i=(t(67294),t(3905)),p=t(26389),n=t(94891),r=t(75190),o=t(47507),c=t(24310),m=t(63303),l=(t(75035),t(85162));const d={id:"list-namespaces-workspace",title:"List the namespaces in workspace",description:"List the namespaces in workspace",sidebar_label:"List the namespaces in workspace",hide_title:!0,hide_table_of_contents:!0,api:{tags:["User Related Resources"],operationId:"list-namespaces-workspace",parameters:[{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"ok",content:{"application/json":{schema:{required:["items","totalItems"],properties:{items:{type:"array",items:{}},totalItems:{type:"integer",format:"int32"}}}}}}},description:"List the namespaces in workspace",method:"get",path:"/kapis/tenant.kubesphere.io/v1alpha2/workspaces/{workspace}/namespaces",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"List the namespaces in workspace",description:{type:"text/plain"},url:{path:["kapis","tenant.kubesphere.io","v1alpha2","workspaces",":workspace","namespaces"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The specified workspace.",type:"text/plain"},type:"any",value:"",key:"workspace"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},k=void 0,h={unversionedId:"api/v4.0.0/list-namespaces-workspace",id:"api/v4.0.0/list-namespaces-workspace",title:"List the namespaces in workspace",description:"List the namespaces in workspace",source:"@site/docs/api/v4.0.0/list-namespaces-workspace.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/list-namespaces-workspace",permalink:"/reference/api/v4.0.0/list-namespaces-workspace",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-namespaces-workspace",title:"List the namespaces in workspace",description:"List the namespaces in workspace",sidebar_label:"List the namespaces in workspace",hide_title:!0,hide_table_of_contents:!0,api:{tags:["User Related Resources"],operationId:"list-namespaces-workspace",parameters:[{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"ok",content:{"application/json":{schema:{required:["items","totalItems"],properties:{items:{type:"array",items:{}},totalItems:{type:"integer",format:"int32"}}}}}}},description:"List the namespaces in workspace",method:"get",path:"/kapis/tenant.kubesphere.io/v1alpha2/workspaces/{workspace}/namespaces",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"List the namespaces in workspace",description:{type:"text/plain"},url:{path:["kapis","tenant.kubesphere.io","v1alpha2","workspaces",":workspace","namespaces"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The specified workspace.",type:"text/plain"},type:"any",value:"",key:"workspace"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Get workspace metrics",permalink:"/reference/api/v4.0.0/get-workspace-metrics"},next:{title:"Create namespace in workspace",permalink:"/reference/api/v4.0.0/create-namespace"}},u={},y=[{value:"List the namespaces in workspace",id:"list-the-namespaces-in-workspace",level:2}],w={toc:y},b="wrapper";function v(e){let{components:a,...t}=e;return(0,i.kt)(b,(0,s.Z)({},w,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"list-the-namespaces-in-workspace"},"List the namespaces in workspace"),(0,i.kt)("p",null,"List the namespaces in workspace"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(p.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"ok")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"items",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",items:{}},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"totalItems",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "items": [\n    null\n  ],\n  "totalItems": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);