"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2458],{34084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>b});var a=r(87462),s=(r(67294),r(3905)),p=r(26389),o=r(94891),i=r(75190),m=r(47507),n=r(24310),c=r(63303),l=(r(75035),r(85162));const d={id:"update-workspace-member",title:"Update member from the workspace",description:"Update member from the workspace",sidebar_label:"Update member from the workspace",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Access Management"],operationId:"UpdateWorkspaceMember",parameters:[{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}},{description:"the member from workspace",name:"workspacemember",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}},required:!0},responses:{200:{description:"ok",content:{"application/json":{schema:{required:["message"],properties:{message:{description:"error message",type:"string"}}}}}}},description:"Update member from the workspace",method:"put",path:"/kapis/iam.kubesphere.io/v1beta1/workspaces/{workspace}/workspacemembers/{workspacemember}",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{roleRef:"string",username:"string"},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Update member from the workspace",description:{type:"text/plain"},url:{path:["kapis","iam.kubesphere.io","v1beta1","workspaces",":workspace","workspacemembers",":workspacemember"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The specified workspace.",type:"text/plain"},type:"any",value:"",key:"workspace"},{disabled:!1,description:{content:"(Required) the member from workspace",type:"text/plain"},type:"any",value:"",key:"workspacemember"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},k=void 0,u={unversionedId:"api/v4.0.0/update-workspace-member",id:"api/v4.0.0/update-workspace-member",title:"Update member from the workspace",description:"Update member from the workspace",source:"@site/docs/api/v4.0.0/update-workspace-member.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/update-workspace-member",permalink:"/reference/api/v4.0.0/update-workspace-member",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-workspace-member",title:"Update member from the workspace",description:"Update member from the workspace",sidebar_label:"Update member from the workspace",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Access Management"],operationId:"UpdateWorkspaceMember",parameters:[{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}},{description:"the member from workspace",name:"workspacemember",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}},required:!0},responses:{200:{description:"ok",content:{"application/json":{schema:{required:["message"],properties:{message:{description:"error message",type:"string"}}}}}}},description:"Update member from the workspace",method:"put",path:"/kapis/iam.kubesphere.io/v1beta1/workspaces/{workspace}/workspacemembers/{workspacemember}",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{roleRef:"string",username:"string"},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Update member from the workspace",description:{type:"text/plain"},url:{path:["kapis","iam.kubesphere.io","v1beta1","workspaces",":workspace","workspacemembers",":workspacemember"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The specified workspace.",type:"text/plain"},type:"any",value:"",key:"workspace"},{disabled:!1,description:{content:"(Required) the member from workspace",type:"text/plain"},type:"any",value:"",key:"workspacemember"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Get workspace member",permalink:"/reference/api/v4.0.0/describe-workspace-member"},next:{title:"Delete a member from the workspace",permalink:"/reference/api/v4.0.0/remove-workspace-member"}},h={},b=[{value:"Update member from the workspace",id:"update-member-from-the-workspace",level:2}],y={toc:b},w="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(w,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"update-member-from-the-workspace"},"Update member from the workspace"),(0,s.kt)("p",null,"Update member from the workspace"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(i.Z,{className:"paramsItem",param:{description:"the member from workspace",name:"workspacemember",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"roleRef",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(p.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"ok")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"error message",type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);