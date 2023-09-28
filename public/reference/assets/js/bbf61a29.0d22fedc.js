"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3660],{64210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>n,metadata:()=>u,toc:()=>d});var s=r(87462),o=(r(67294),r(3905)),c=r(26389),a=(r(94891),r(75190)),i=(r(47507),r(24310),r(63303),r(75035),r(85162));const n={id:"get-cluster-resource",title:"Get cluster scope resource",description:"Get cluster scope resource",sidebar_label:"Get cluster scope resource",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Cluster Resources"],operationId:"get-cluster-resource",deprecated:!0,parameters:[{description:"cluster level resource type, e.g. pods,jobs,configmaps,services.",name:"resources",in:"path",required:!0,schema:{type:"string"}},{description:"the name of the clustered resources",name:"name",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"ok"}},description:"Get cluster scope resource",method:"get",path:"/kapis/resources.kubesphere.io/v1alpha3/{resources}/{name}",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Get cluster scope resource",description:{type:"text/plain"},url:{path:["kapis","resources.kubesphere.io","v1alpha3",":resources",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) cluster level resource type, e.g. pods,jobs,configmaps,services.",type:"text/plain"},type:"any",value:"",key:"resources"},{disabled:!1,description:{content:"(Required) the name of the clustered resources",type:"text/plain"},type:"any",value:"",key:"name"}]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},p=void 0,u={unversionedId:"api/v4.0.0/get-cluster-resource",id:"api/v4.0.0/get-cluster-resource",title:"Get cluster scope resource",description:"Get cluster scope resource",source:"@site/docs/api/v4.0.0/get-cluster-resource.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/get-cluster-resource",permalink:"/reference/api/v4.0.0/get-cluster-resource",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-cluster-resource",title:"Get cluster scope resource",description:"Get cluster scope resource",sidebar_label:"Get cluster scope resource",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Cluster Resources"],operationId:"get-cluster-resource",deprecated:!0,parameters:[{description:"cluster level resource type, e.g. pods,jobs,configmaps,services.",name:"resources",in:"path",required:!0,schema:{type:"string"}},{description:"the name of the clustered resources",name:"name",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"ok"}},description:"Get cluster scope resource",method:"get",path:"/kapis/resources.kubesphere.io/v1alpha3/{resources}/{name}",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Get cluster scope resource",description:{type:"text/plain"},url:{path:["kapis","resources.kubesphere.io","v1alpha3",":resources",":name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) cluster level resource type, e.g. pods,jobs,configmaps,services.",type:"text/plain"},type:"any",value:"",key:"resources"},{disabled:!1,description:{content:"(Required) the name of the clustered resources",type:"text/plain"},type:"any",value:"",key:"name"}]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Cluster level resources",permalink:"/reference/api/v4.0.0/list-cluster-resources"},next:{title:"Namespaced Resources",permalink:"/reference/api/v4.0.0/namespaced-resources"}},l={},d=[{value:"Get cluster scope resource",id:"get-cluster-scope-resource",level:2}],m={toc:d},h="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-cluster-scope-resource"},"Get cluster scope resource"),(0,o.kt)("admonition",{title:"deprecated",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,o.kt)("p",null,"Get cluster scope resource"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(a.Z,{className:"paramsItem",param:{description:"cluster level resource type, e.g. pods,jobs,configmaps,services.",name:"resources",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(a.Z,{className:"paramsItem",param:{description:"the name of the clustered resources",name:"name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(c.Z,{mdxType:"ApiTabs"},(0,o.kt)(i.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"ok")),(0,o.kt)("div",null)))))}k.isMDXComponent=!0}}]);