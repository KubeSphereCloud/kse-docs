"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8049],{41146:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>w,frontMatter:()=>l,metadata:()=>u,toc:()=>y});var n=i(87462),r=(i(67294),i(3905)),s=i(26389),a=i(94891),o=(i(75190),i(47507)),p=i(24310),c=i(63303),d=(i(75035),i(85162));const l={id:"openid-token",title:"Token endpoint",description:"The resource owner password credentials grant type is suitable in",sidebar_label:"Token endpoint",hide_title:!0,hide_table_of_contents:!0,api:{description:"The resource owner password credentials grant type is suitable in\ncases where the resource owner has a trust relationship with the\nclient, such as the device operating system or a highly privileged application.",tags:["Authentication"],operationId:"openid-token",requestBody:{content:{"application/x-www-form-urlencoded":{schema:{type:"object",properties:{grant_type:{description:"OAuth defines four grant types: authorization code, implicit, resource owner password credentials, and client credentials.",type:"string"},client_id:{description:"Valid client credential.",type:"string"},client_secret:{description:"Valid client credential.",type:"string"},username:{description:"The resource owner username.",type:"string"},password:{description:"The resource owner password.",type:"string"},code:{description:"Valid authorization code.",type:"string"}},required:["grant_type","client_id","client_secret"]}}},required:!0},responses:{200:{description:"ok",content:{"application/json":{schema:{required:["access_token"],properties:{access_token:{type:"string"},expires_in:{type:"integer",format:"int32"},id_token:{type:"string"},refresh_token:{type:"string"},token_type:{type:"string"}}}}}}},method:"post",path:"/oauth/token",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Token endpoint",description:{content:"The resource owner password credentials grant type is suitable in\ncases where the resource owner has a trust relationship with the\nclient, such as the device operating system or a highly privileged application.",type:"text/plain"},url:{path:["oauth","token"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"urlencoded",urlencoded:[]}}},sidebar_class_name:"post api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},m=void 0,u={unversionedId:"api/v4.0.0/openid-token",id:"api/v4.0.0/openid-token",title:"Token endpoint",description:"The resource owner password credentials grant type is suitable in",source:"@site/docs/api/v4.0.0/openid-token.api.mdx",sourceDirName:"api/v4.0.0",slug:"/api/v4.0.0/openid-token",permalink:"/reference/api/v4.0.0/openid-token",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openid-token",title:"Token endpoint",description:"The resource owner password credentials grant type is suitable in",sidebar_label:"Token endpoint",hide_title:!0,hide_table_of_contents:!0,api:{description:"The resource owner password credentials grant type is suitable in\ncases where the resource owner has a trust relationship with the\nclient, such as the device operating system or a highly privileged application.",tags:["Authentication"],operationId:"openid-token",requestBody:{content:{"application/x-www-form-urlencoded":{schema:{type:"object",properties:{grant_type:{description:"OAuth defines four grant types: authorization code, implicit, resource owner password credentials, and client credentials.",type:"string"},client_id:{description:"Valid client credential.",type:"string"},client_secret:{description:"Valid client credential.",type:"string"},username:{description:"The resource owner username.",type:"string"},password:{description:"The resource owner password.",type:"string"},code:{description:"Valid authorization code.",type:"string"}},required:["grant_type","client_id","client_secret"]}}},required:!0},responses:{200:{description:"ok",content:{"application/json":{schema:{required:["access_token"],properties:{access_token:{type:"string"},expires_in:{type:"integer",format:"int32"},id_token:{type:"string"},refresh_token:{type:"string"},token_type:{type:"string"}}}}}}},method:"post",path:"/oauth/token",security:[{BearerToken:[]}],securitySchemes:{BearerToken:{description:"Bearer Token Authentication",type:"apiKey",name:"Authorization",in:"header"}},info:{description:"KubeSphere Enterprise OpenAPI",title:"Introduction",contact:{name:"KubeSphere",url:"https://kubesphere.com.cn",email:"support@kubesphere.cloud"},version:"v4.0.0"},postman:{name:"Token endpoint",description:{content:"The resource owner password credentials grant type is suitable in\ncases where the resource owner has a trust relationship with the\nclient, such as the device operating system or a highly privileged application.",type:"text/plain"},url:{path:["oauth","token"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"urlencoded",urlencoded:[]}}},sidebar_class_name:"post api-method",info_path:"api/v4.0.0/introduction",custom_edit_url:null},sidebar:"kubesphere-v4.0.0",previous:{title:"Logout",permalink:"/reference/api/v4.0.0/logout"},next:{title:"User info endpoint",permalink:"/reference/api/v4.0.0/openid-userinfo"}},h={},y=[{value:"Token endpoint",id:"token-endpoint",level:2}],g={toc:y},k="wrapper";function w(e){let{components:t,...i}=e;return(0,r.kt)(k,(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"token-endpoint"},"Token endpoint"),(0,r.kt)("p",null,"The resource owner password credentials grant type is suitable in\ncases where the resource owner has a trust relationship with the\nclient, such as the device operating system or a highly privileged application."),(0,r.kt)(a.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"grant_type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"OAuth defines four grant types: authorization code, implicit, resource owner password credentials, and client credentials.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"client_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Valid client credential.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"client_secret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Valid client credential.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The resource owner username.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The resource owner password.",type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Valid authorization code.",type:"string"},mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"ok")),(0,r.kt)("div",null,(0,r.kt)(a.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"access_token",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"expires_in",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"id_token",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"refresh_token",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"token_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "access_token": "string",\n  "expires_in": 0,\n  "id_token": "string",\n  "refresh_token": "string",\n  "token_type": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}w.isMDXComponent=!0}}]);