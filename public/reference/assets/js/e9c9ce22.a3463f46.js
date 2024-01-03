"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2688],{42932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>k});var s=r(87462),a=(r(67294),r(3905)),i=r(26389),l=r(94891),n=(r(75190),r(47507)),o=r(24310),m=r(63303),p=(r(75035),r(85162));const u={id:"get-cluster-overview",title:"Cluster summary",description:"Cluster summary",sidebar_label:"Cluster summary",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Cluster Resources"],operationId:"GetClusterOverview",deprecated:!0,responses:{200:{description:"ok",content:{"application/json":{schema:{required:["results"],properties:{results:{type:"array",items:{required:["metric_name","data"],properties:{data:{required:["resultType","result"],properties:{result:{type:"array",items:{required:["value"],properties:{value:{type:"array",items:{}}}}},resultType:{type:"string"}}},metric_name:{type:"string"}}}}}}}}}},description:"Cluster summary",method:"get",path:"/kapis/resources.kubesphere.io/v1alpha3/metrics",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Cluster summary",description:{type:"text/plain"},url:{path:["kapis","resources.kubesphere.io","v1alpha3","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},c=void 0,d={unversionedId:"api/v4.0.0/get-cluster-overview",id:"api/v4.0.0/get-cluster-overview",title:"Cluster summary",description:"Cluster summary",source:"@site/docs/api/v4.0.0/get-cluster-overview.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/get-cluster-overview",permalink:"/reference/api/v4.0.0/get-cluster-overview",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-cluster-overview",title:"Cluster summary",description:"Cluster summary",sidebar_label:"Cluster summary",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Cluster Resources"],operationId:"GetClusterOverview",deprecated:!0,responses:{200:{description:"ok",content:{"application/json":{schema:{required:["results"],properties:{results:{type:"array",items:{required:["metric_name","data"],properties:{data:{required:["resultType","result"],properties:{result:{type:"array",items:{required:["value"],properties:{value:{type:"array",items:{}}}}},resultType:{type:"string"}}},metric_name:{type:"string"}}}}}}}}}},description:"Cluster summary",method:"get",path:"/kapis/resources.kubesphere.io/v1alpha3/metrics",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Cluster summary",description:{type:"text/plain"},url:{path:["kapis","resources.kubesphere.io","v1alpha3","metrics"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Get whole cluster's resource usage",permalink:"/reference/api/v4.0.0/get-cluster-quotas"},next:{title:"Cluster level resources",permalink:"/reference/api/v4.0.0/list-cluster-resources"}},y={},k=[{value:"Cluster summary",id:"cluster-summary",level:2}],v={toc:k},h="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,s.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cluster-summary"},"Cluster summary"),(0,a.kt)("admonition",{title:"deprecated",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,a.kt)("p",null,"Cluster summary"),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"ok")),(0,a.kt)("div",null,(0,a.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"results"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(o.Z,{collapsible:!1,name:"value",required:!0,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",items:{}},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(o.Z,{collapsible:!1,name:"resultType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,a.kt)(o.Z,{collapsible:!1,name:"metric_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(n.Z,{responseExample:'{\n  "results": [\n    {\n      "data": {\n        "result": [\n          {\n            "value": [\n              null\n            ]\n          }\n        ],\n        "resultType": "string"\n      },\n      "metric_name": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);