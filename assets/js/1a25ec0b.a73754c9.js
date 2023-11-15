"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[2019],{4357:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=l(5893),i=l(1151);const s={sidebar_position:8},r="Features",d={id:"features",title:"Features",description:"Version 0.2",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Migration from OpenShift to OPA on AWS",permalink:"/docs/migrations/migration-openshift"},next:{title:"Videos",permalink:"/docs/videos"}},o={},c=[{value:"Version 0.2",id:"version-02",level:2},{value:"1. Platform engineer scope",id:"1-platform-engineer-scope",level:3},{value:"2. Application developer scope",id:"2-application-developer-scope",level:3},{value:"Coming up",id:"coming-up",level:2},{value:"Provided examples and templates",id:"provided-examples-and-templates",level:2},{value:"Backlog",id:"backlog",level:2}];function a(e){const t={h1:"h1",h2:"h2",h3:"h3",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"features",children:"Features"}),"\n",(0,n.jsx)(t.h2,{id:"version-02",children:"Version 0.2"}),"\n",(0,n.jsx)(t.h3,{id:"1-platform-engineer-scope",children:"1. Platform engineer scope"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Dynamic environment provider provisioning"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create unlimited number of providers on multiple accounts and regions"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"ECS environment provider"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create an ECS (Elastic container servicer) based provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Serverless environment provider"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a serverless based provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Abstracted AWS environment"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a environment of which applications and resources can be created"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Application pipeline"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a pipeline for each application to support IAC provisioning and code change stage"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Environment Deployment pipeline"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a pipeline to deploy the code base of an application to another environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Resource Binding"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Allow Binding resources to application to provide access and sharing capabilities for AWS resources"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Deploy to additional environments"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Allow the deployment of an application to additional environments"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Environments selector"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Toggle between the environments of which the application is deployed and present relevant information for the current selected environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Segregated auditing"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Audit actions from platform and pipeline to a segregated auditing table of the target environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Environment level"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Allow to define a number representing the level of the environment thus creates hierarchies that are used for deployments"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Deployment requires approval"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Configure how the pipelines should execute against an environment automatic / require approval"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Delete app"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Remove an application from an environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Delete provider"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Remove a provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Centralized pipelines"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Load pipelines dynamically from a centralized repository"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Component Pending page"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Present a partial page while the component IAC pipeline is still processing"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Terraform/CDK pipelines"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Support both terraform and CDK pipelines to provision resources"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"2-application-developer-scope",children:"2. Application developer scope"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Clone repository while resources are provisioned"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The ability to clone the repository immediately after it was created without waiting for the pipeline to provision the infrastructure"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Start and stop ECS task"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Start and stop the ECS task to load the latest container changes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Change ECS task environment variable"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Change the ECS Task definition environment variables to inject new parameters to the app runtime"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"View related app cloud resources"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View related application resources that are provisioned for this app"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"View application logs"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View the CloudWatch logs for the application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Visualize application software catalog relationship"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View the application relationship including environments, shared resources and owner"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Automatic deployment for additional environment"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Deploy the application to another environment with a click of a button"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Delete app"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Delete the application and it's related resources"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Bind application to resource"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Permit an application to use a shared resource such as RDS database, S3 bucket, EFS etc."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"View application  CI/CD pipelines"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"View the application CI/CD pipelines"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"coming-up",children:"Coming up"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Scope"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Timeline"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"EKS environment provider"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Platform Engineer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a Kubernetes based provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Jan 2024"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Environment Binding"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Platform Engineer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bind Environments to allow network communication across multiple VPC's through AWS Transit gateway"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"February 2024"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"provided-examples-and-templates",children:"Provided examples and templates"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AWS ECS Environment Provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"a provider IAC for ECS runtime"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AWS Serverless Environment Provider"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"a provider IAC for Serverless runtime"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Provider"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"AWS RDS Database"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"an RDS database template"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Resource"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Node.js Terraform Web App"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"a node.js application provisioning by terraform"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Node.js Express Web App With RDS"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"a node.js application with a baked in starter code to connect to RDS database"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Node.js Express Web App"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"a node.js application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Python Flask starter application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"a python flask web server application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Serverless REST API (TypeScript)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"a lambda based serverless REST API application template for typescript"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Java Spring Boot Web Service"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"a java springboot application"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Application"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"backlog",children:"Backlog"}),"\n",(0,n.jsx)(t.table,{children:(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Scope"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>r});var n=l(7294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);