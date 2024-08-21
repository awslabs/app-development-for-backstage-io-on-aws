"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[1890],{6676:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>x,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=l(4848),i=l(8453);const s={sidebar_position:10},r="Test Cases",d={id:"tests",title:"Test Cases",description:"The described test cases below provider a starting point to map the different features and capabilities that needs to be tested when changes occurs.",source:"@site/docs/tests.md",sourceDirName:".",slug:"/tests",permalink:"/docs/tests",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"CONTRIBUTING",permalink:"/docs/CONTRIBUTING"}},x={},c=[{value:"Assumptions",id:"assumptions",level:2},{value:"Test case, context and expected result",id:"test-case-context-and-expected-result",level:2},{value:"Context",id:"context",level:2},{value:"Expected result",id:"expected-result",level:2},{value:"Test cases",id:"test-cases-1",level:2},{value:"Platform engineering",id:"platform-engineering",level:3},{value:"Environment Providers",id:"environment-providers",level:4},{value:"Environments",id:"environments",level:4},{value:"Developer",id:"developer",level:3},{value:"Application Provisioning",id:"application-provisioning",level:4},{value:"Application operations",id:"application-operations",level:4},{value:"Shared resources",id:"shared-resources",level:3}];function h(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"test-cases",children:"Test Cases"})}),"\n",(0,n.jsx)(t.p,{children:"The described test cases below provider a starting point to map the different features and capabilities that needs to be tested when changes occurs."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This is not intended to be a final or complete list but a starting point to reason about the different use cases and how to test them"})}),"\n",(0,n.jsx)(t.h2,{id:"assumptions",children:"Assumptions"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"You have OPA on AWS platform deployed and running."}),"\n",(0,n.jsx)(t.li,{children:"You have several accounts that are used or can be used to provision environments and applications."}),"\n",(0,n.jsx)(t.li,{children:"You have an identity provider configured with backstage(Okta, AD, etc.)"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"test-case-context-and-expected-result",children:"Test case, context and expected result"}),"\n",(0,n.jsxs)(t.p,{children:["We define a context of a test with the letter ",(0,n.jsx)(t.strong,{children:'"C"'}),". This will allow us to describe the existing state before we can execute a test case."]}),"\n",(0,n.jsxs)(t.p,{children:["We also define test case with the letter ",(0,n.jsx)(t.strong,{children:'"T"'})," which describe the set of instructions to test a scenario on OPA on AWS."]}),"\n",(0,n.jsxs)(t.p,{children:["Lastly we define the expected result with the letter ",(0,n.jsx)(t.strong,{children:'"E"'}),", this will describe the expected assertion of a resulted test case."]}),"\n",(0,n.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ID"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"An entitled user logged-in to backstage"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned ECS Environment(Single provider) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C03"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned EKS Environment(Single provider) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C04"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned Serverless Environment(Single provider) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C05"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned AWS Environment is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned ECS application(Single environment) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned EKS application(Single environment) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C08"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned Serverless application(Single environment) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C09"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned shared RDS Resource is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C10"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned shared S3 Resource is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C11"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A binding between an application and resource exist"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C12"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"An application is deployed to more than one environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C13"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned ECS Environment(Multi provider) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C14"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned EKS Environment(Multi provider)  is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C15"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned Serverless Environment(Multi provider)  is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C16"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned ECS application(Multi environment)  is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C17"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned EKS application(Multi environment) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C18"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned Serverless application(Multi environment) is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C19"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned Terraform application/provider/resource"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C20"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"User chooses that a new VPC should be created"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C21"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"User chooses that an existing VPC ID should be used instead of creating a new VPC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C22"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned EKS Cluster is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C23"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A provisioned EKS Cluster Kubectl Lambda is available"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"expected-result",children:"Expected result"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ID"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision an ECS provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision an EKS provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E03"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision an Serverless provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E04"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision an Environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E05"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision an ECS application(Single provider)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E06"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision an EKS application(Single provider)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E07"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision a Serverless application(Single provider)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E08"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully start and stop an application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E09"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully view application logs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E10"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully view application audit table"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E11"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully set environment variables to an application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E12"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully view cloud related application resources"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E13"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully bind a shared resource to an application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E14"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully deploy an application to additional environments"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E15"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully toggle between deployed environments of an application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E16"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully delete an application from an environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E17"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully delete an application from all environments"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E18"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully delete a shared resource"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E19"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully delete a provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E20"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully delete an environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E21"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully view provider details"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E22"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully unbind a shared resource to an application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E23"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A new VPC is created for the provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E24"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"An existing VPC ID is used by the provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E25"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision an RDS database as a shared resource"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E26"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully provision an S3 bucket as a shared resource"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E27"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully create EKS provider using existing EKS cluster and create new kubectl lambda"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E28"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Successfully create EKS provider using existing EKS cluster and existing kubectl lambda"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"test-cases-1",children:"Test cases"}),"\n",(0,n.jsx)(t.h3,{id:"platform-engineering",children:"Platform engineering"}),"\n",(0,n.jsx)(t.h4,{id:"environment-providers",children:"Environment Providers"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ID"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Context"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Expected Result"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T001"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C20"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an ECS environment provider with serverless compute (Fargate)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E01+E23"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T002"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C21"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an ECS environment provider with serverless compute (Fargate)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E01+E24"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T003"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C20"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an ECS environment provider with EC2 compute"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E01+E23"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T004"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C20"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an EKS environment provider with serverless compute (Fargate)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E02+E23"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T005"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C21"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an EKS environment provider with serverless compute (Fargate)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E02+E24"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T006"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an EKS environment provider with managed nodes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E02"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T007"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an EKS environment provider with private-only API access"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E02"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T008"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C20"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a Serverless environment provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E03+E23"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T009"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C21"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a Serverless environment provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E03+E24"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T010"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+(C02,C03,C04)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View provider information card - on provider page"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E21"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T011"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+(C02,C03,C04)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete provider - on provider management page"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E19"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T012"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C22"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an EKS environment provider and import an existing cluster and create kubectl lambda"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E27"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T013"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C22+C23"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an EKS environment provider and import an existing cluster and reuse existing kubectl lambda"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E28"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"environments",children:"Environments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ID"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Context"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Expected Result"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T200"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision an AWS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E04"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T201"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C05"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View environment information card - on environment page"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E21"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T202"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C05"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete environment - on environment management page"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E21"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T203"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C05"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Add additional provider to an existing environment - on environment page"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E19"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T204"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+C05"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete a provider from an existing environment - on environment page"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E19"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"developer",children:"Developer"}),"\n",(0,n.jsx)(t.h4,{id:"application-provisioning",children:"Application Provisioning"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ID"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Context"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Expected Result"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T400"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a node.js application on Amazon ECS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E05"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T401"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a Java SpringBoot application on Amazon ECS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E05"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T402"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a python application on Amazon ECS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E05"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T403"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a node.js Terraform application on Amazon ECS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E05"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T404"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C03"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a node.js application on Amazon EKS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E06"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T405"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C03"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a Java SpringBoot application on Amazon EKS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E06"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T406"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C03"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a python application on Amazon EKS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E06"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T407"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C03"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a node.js Terraform application on Amazon EKS environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E06"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T408"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01 + C04"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provision a Serverless REST API application on AWS Serverless environment with a single provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E07"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"application-operations",children:"Application operations"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ID"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Context"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Expected Result"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T600"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Start and Stop the application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E08"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T601"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View application cloudwatch logs - on App logs tab"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E09"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T602"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View application audit table - on audit tab"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E10"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T603"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Add/edit/delete environment variables for the application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E11"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T604"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View related cloud resources for the application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E12"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T605"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06 + C02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Deploy application to another available environment"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E14"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T606"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06 + C12"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Toggle between deployed environments for the application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E15"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T607"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete an application from an environment"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E16"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T608"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06 + C12"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete an application from all environments"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E17"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T609"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06 + C09"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bind a shared resource RDS to an application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E13"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T610"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C06 + C09 + C11"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Unbind a shared resource from an application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E22"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T611"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Start and Stop the application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E08"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T612"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View application cloudwatch logs - on App logs tab"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E09"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T613"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View application audit table - on audit tab"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E10"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T614"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Add/edit/delete environment variables for the application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E11"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T615"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View related cloud resources for the application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E12"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T616"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07 + C02"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Deploy application to another available environment"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E14"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T617"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07 + C12"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Toggle between deployed environments for the application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E15"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T618"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete an application from an environment"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E16"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T619"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07 + C12"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete an application from all environments"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E17"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T620"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07 + C09"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bind a shared resource RDS to an application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E13"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T621"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C07 + C09 + C11"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Unbind a shared resource from an application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E22"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"shared-resources",children:"Shared resources"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"ID"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Context"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Expected Result"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T900"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+(C02,C03,C04)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a new RDS database resource"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E25"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"T901"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C01+(C02,C03,C04)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a new S3 bucket resource"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"E26"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>d});var n=l(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);