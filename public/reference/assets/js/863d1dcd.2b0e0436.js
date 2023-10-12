"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1627],{57756:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>k,toc:()=>h});var a=s(87462),r=(s(67294),s(3905)),i=s(26389),n=s(94891),p=s(75190),o=s(47507),c=s(24310),l=s(63303),u=(s(75035),s(85162));const d={id:"get-kubectl-pod",title:"Get user's kubectl pod",description:"Get user's kubectl pod",sidebar_label:"Get user's kubectl pod",hide_title:!0,hide_table_of_contents:!0,api:{tags:["User Related Resources"],operationId:"GetKubectlPod",deprecated:!0,parameters:[{description:"username",name:"user",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"ok",content:{"application/json":{schema:{required:["namespace","pod","container"],properties:{container:{description:"container name",type:"string"},namespace:{description:"namespace",type:"string"},pod:{description:"pod name",type:"string"}}}}}}},description:"Get user's kubectl pod",method:"get",path:"/kapis/resources.kubesphere.io/v1alpha2/users/{user}/kubectl",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Get user's kubectl pod",description:{type:"text/plain"},url:{path:["kapis","resources.kubesphere.io","v1alpha2","users",":user","kubectl"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) username",type:"text/plain"},type:"any",value:"",key:"user"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},m=void 0,k={unversionedId:"api/v4.0.0/get-kubectl-pod",id:"api/v4.0.0/get-kubectl-pod",title:"Get user's kubectl pod",description:"Get user's kubectl pod",source:"@site/docs/api/v4.0.0/get-kubectl-pod.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/get-kubectl-pod",permalink:"/reference/api/v4.0.0/get-kubectl-pod",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-kubectl-pod",title:"Get user's kubectl pod",description:"Get user's kubectl pod",sidebar_label:"Get user's kubectl pod",hide_title:!0,hide_table_of_contents:!0,api:{tags:["User Related Resources"],operationId:"GetKubectlPod",deprecated:!0,parameters:[{description:"username",name:"user",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"ok",content:{"application/json":{schema:{required:["namespace","pod","container"],properties:{container:{description:"container name",type:"string"},namespace:{description:"namespace",type:"string"},pod:{description:"pod name",type:"string"}}}}}}},description:"Get user's kubectl pod",method:"get",path:"/kapis/resources.kubesphere.io/v1alpha2/users/{user}/kubectl",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Get user's kubectl pod",description:{type:"text/plain"},url:{path:["kapis","resources.kubesphere.io","v1alpha2","users",":user","kubectl"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) username",type:"text/plain"},type:"any",value:"",key:"user"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Get users' kubeconfig",permalink:"/reference/api/v4.0.0/get-kubeconfig"},next:{title:"List clusters available to users",permalink:"/reference/api/v4.0.0/user-related-clusters"}},b={},h=[{value:"Get user&#39;s kubectl pod",id:"get-users-kubectl-pod",level:2}],y={toc:h},g="wrapper";function v(e){let{components:t,...s}=e;return(0,r.kt)(g,(0,a.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-users-kubectl-pod"},"Get user's kubectl pod"),(0,r.kt)("admonition",{title:"deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,r.kt)("p",null,"Get user's kubectl pod"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{description:"username",name:"user",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"ok")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"container",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"container name",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"namespace",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"namespace",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"pod",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"pod name",type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "container": "string",\n  "namespace": "string",\n  "pod": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);