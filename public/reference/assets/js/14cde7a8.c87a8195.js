"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8328],{90890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>y});var r=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),p=a(75190),n=a(47507),m=a(24310),c=a(63303),d=(a(75035),a(85162));const l={id:"create-workspace-members",title:"Add members to the specified workspace",description:"Add members to the specified workspace",sidebar_label:"Add members to the specified workspace",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Access Management"],operationId:"CreateWorkspaceMembers",parameters:[{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"array",items:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}}},required:!0},responses:{200:{description:"ok",content:{"application/json":{schema:{type:"array",items:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}}}}},description:"Add members to the specified workspace",method:"post",path:"/kapis/iam.kubesphere.io/v1beta1/workspaces/{workspace}/workspacemembers",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:[{roleRef:"string",username:"string"}],info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Add members to the specified workspace",description:{type:"text/plain"},url:{path:["kapis","iam.kubesphere.io","v1beta1","workspaces",":workspace","workspacemembers"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The specified workspace.",type:"text/plain"},type:"any",value:"",key:"workspace"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},k=void 0,u={unversionedId:"api/v4.0.0/create-workspace-members",id:"api/v4.0.0/create-workspace-members",title:"Add members to the specified workspace",description:"Add members to the specified workspace",source:"@site/docs/api/v4.0.0/create-workspace-members.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/create-workspace-members",permalink:"/reference/api/v4.0.0/create-workspace-members",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-workspace-members",title:"Add members to the specified workspace",description:"Add members to the specified workspace",sidebar_label:"Add members to the specified workspace",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Access Management"],operationId:"CreateWorkspaceMembers",parameters:[{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"array",items:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}}},required:!0},responses:{200:{description:"ok",content:{"application/json":{schema:{type:"array",items:{required:["username","roleRef"],properties:{roleRef:{type:"string"},username:{type:"string"}}}}}}}},description:"Add members to the specified workspace",method:"post",path:"/kapis/iam.kubesphere.io/v1beta1/workspaces/{workspace}/workspacemembers",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:[{roleRef:"string",username:"string"}],info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Add members to the specified workspace",description:{type:"text/plain"},url:{path:["kapis","iam.kubesphere.io","v1beta1","workspaces",":workspace","workspacemembers"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The specified workspace.",type:"text/plain"},type:"any",value:"",key:"workspace"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"List all members in the specified workspace",permalink:"/reference/api/v4.0.0/list-workspace-members"},next:{title:"Get workspace member",permalink:"/reference/api/v4.0.0/describe-workspace-member"}},h={},y=[{value:"Add members to the specified workspace",id:"add-members-to-the-specified-workspace",level:2}],b={toc:y},f="wrapper";function g(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"add-members-to-the-specified-workspace"},"Add members to the specified workspace"),(0,s.kt)("p",null,"Add members to the specified workspace"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{description:"The specified workspace.",name:"workspace",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"roleRef",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"ok")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"roleRef",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"username",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'[\n  {\n    "roleRef": "string",\n    "username": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);