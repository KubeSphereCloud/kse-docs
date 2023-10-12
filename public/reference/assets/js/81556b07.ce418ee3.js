"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4472],{33842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>y});var s=r(87462),a=(r(67294),r(3905)),i=r(26389),o=r(94891),p=(r(75190),r(47507)),n=r(24310),l=r(63303),c=(r(75035),r(85162));const u={id:"get-cluster-quotas",title:"Get whole cluster's resource usage",description:"Get whole cluster's resource usage",sidebar_label:"Get whole cluster's resource usage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Cluster Resources"],operationId:"GetClusterQuotas",deprecated:!0,responses:{200:{description:"ok",content:{"application/json":{schema:{required:["namespace","data"],properties:{data:{description:"resource quota status",properties:{hard:{description:"Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/",type:"object",additionalProperties:{required:["i","d","s","Format"],properties:{Format:{type:"string"},d:{required:["Dec"],properties:{Dec:{required:["unscaled","scale"],properties:{scale:{type:"integer",format:"int32"},unscaled:{required:["neg","abs"],properties:{abs:{type:"array",items:{type:"integer",format:"integer"}},neg:{type:"boolean"}}}}}}},i:{required:["value","scale"],properties:{scale:{type:"integer",format:"int32"},value:{type:"integer",format:"int64"}}},s:{type:"string"}}}},used:{description:"Used is the current observed total usage of the resource in the namespace.",type:"object",additionalProperties:{required:["i","d","s","Format"],properties:{Format:{type:"string"},d:{required:["Dec"],properties:{Dec:{required:["unscaled","scale"],properties:{scale:{type:"integer",format:"int32"},unscaled:{required:["neg","abs"],properties:{abs:{type:"array",items:{type:"integer",format:"integer"}},neg:{type:"boolean"}}}}}}},i:{required:["value","scale"],properties:{scale:{type:"integer",format:"int32"},value:{type:"integer",format:"int64"}}},s:{type:"string"}}}}}},namespace:{description:"namespace",type:"string"}}}}}}},description:"Get whole cluster's resource usage",method:"get",path:"/kapis/resources.kubesphere.io/v1alpha2/quotas",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Get whole cluster's resource usage",description:{type:"text/plain"},url:{path:["kapis","resources.kubesphere.io","v1alpha2","quotas"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},d=void 0,m={unversionedId:"api/v4.0.0/get-cluster-quotas",id:"api/v4.0.0/get-cluster-quotas",title:"Get whole cluster's resource usage",description:"Get whole cluster's resource usage",source:"@site/docs/api/v4.0.0/get-cluster-quotas.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/get-cluster-quotas",permalink:"/reference/api/v4.0.0/get-cluster-quotas",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-cluster-quotas",title:"Get whole cluster's resource usage",description:"Get whole cluster's resource usage",sidebar_label:"Get whole cluster's resource usage",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Cluster Resources"],operationId:"GetClusterQuotas",deprecated:!0,responses:{200:{description:"ok",content:{"application/json":{schema:{required:["namespace","data"],properties:{data:{description:"resource quota status",properties:{hard:{description:"Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/",type:"object",additionalProperties:{required:["i","d","s","Format"],properties:{Format:{type:"string"},d:{required:["Dec"],properties:{Dec:{required:["unscaled","scale"],properties:{scale:{type:"integer",format:"int32"},unscaled:{required:["neg","abs"],properties:{abs:{type:"array",items:{type:"integer",format:"integer"}},neg:{type:"boolean"}}}}}}},i:{required:["value","scale"],properties:{scale:{type:"integer",format:"int32"},value:{type:"integer",format:"int64"}}},s:{type:"string"}}}},used:{description:"Used is the current observed total usage of the resource in the namespace.",type:"object",additionalProperties:{required:["i","d","s","Format"],properties:{Format:{type:"string"},d:{required:["Dec"],properties:{Dec:{required:["unscaled","scale"],properties:{scale:{type:"integer",format:"int32"},unscaled:{required:["neg","abs"],properties:{abs:{type:"array",items:{type:"integer",format:"integer"}},neg:{type:"boolean"}}}}}}},i:{required:["value","scale"],properties:{scale:{type:"integer",format:"int32"},value:{type:"integer",format:"int64"}}},s:{type:"string"}}}}}},namespace:{description:"namespace",type:"string"}}}}}}},description:"Get whole cluster's resource usage",method:"get",path:"/kapis/resources.kubesphere.io/v1alpha2/quotas",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Get whole cluster's resource usage",description:{type:"text/plain"},url:{path:["kapis","resources.kubesphere.io","v1alpha2","quotas"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Get abnormal workloads",permalink:"/reference/api/v4.0.0/get-cluster-abnormal-workloads"},next:{title:"Cluster summary",permalink:"/reference/api/v4.0.0/get-cluster-overview"}},h={},y=[{value:"Get whole cluster&#39;s resource usage",id:"get-whole-clusters-resource-usage",level:2}],g={toc:y},k="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,s.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-whole-clusters-resource-usage"},"Get whole cluster's resource usage"),(0,a.kt)("admonition",{title:"deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,a.kt)("p",null,"Get whole cluster's resource usage"),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"ok")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"resource quota status")),(0,a.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"hard"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Hard is the set of enforced hard limits for each named resource. More info: ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"https://kubernetes.io/docs/concepts/policy/resource-quotas/"))),(0,a.kt)(n.Z,{collapsible:!1,name:"required",required:!1,schemaName:"",qualifierMessage:void 0,schema:["i","d","s","Format"],mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"properties",required:!1,schemaName:"",qualifierMessage:void 0,schema:{Format:{type:"string"},d:{required:["Dec"],properties:{Dec:{required:["unscaled","scale"],properties:{scale:{type:"integer",format:"int32"},unscaled:{required:["neg","abs"],properties:{abs:{type:"array",items:{type:"integer",format:"integer"}},neg:{type:"boolean"}}}}}}},i:{required:["value","scale"],properties:{scale:{type:"integer",format:"int32"},value:{type:"integer",format:"int64"}}},s:{type:"string"}},mdxType:"SchemaItem"})))),(0,a.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"used"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Used is the current observed total usage of the resource in the namespace.")),(0,a.kt)(n.Z,{collapsible:!1,name:"required",required:!1,schemaName:"",qualifierMessage:void 0,schema:["i","d","s","Format"],mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"properties",required:!1,schemaName:"",qualifierMessage:void 0,schema:{Format:{type:"string"},d:{required:["Dec"],properties:{Dec:{required:["unscaled","scale"],properties:{scale:{type:"integer",format:"int32"},unscaled:{required:["neg","abs"],properties:{abs:{type:"array",items:{type:"integer",format:"integer"}},neg:{type:"boolean"}}}}}}},i:{required:["value","scale"],properties:{scale:{type:"integer",format:"int32"},value:{type:"integer",format:"int64"}}},s:{type:"string"}},mdxType:"SchemaItem"}))))))),(0,a.kt)(n.Z,{collapsible:!1,name:"namespace",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"namespace",type:"string"},mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "data": {\n    "hard": {},\n    "used": {}\n  },\n  "namespace": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);