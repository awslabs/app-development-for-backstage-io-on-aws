"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[6278],{245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var o=n(4848),s=n(8453);const a={sidebar_position:2},r="OPA EKS Architecture",i={id:"techdocs/runtimes/kubernetes/architecture",title:"OPA EKS Architecture",description:"To understand how OPA Environments and Environment Providers relate to applications and clusters, take a look at the below diagram.",source:"@site/docs/techdocs/runtimes/kubernetes/architecture.md",sourceDirName:"techdocs/runtimes/kubernetes",slug:"/techdocs/runtimes/kubernetes/architecture",permalink:"/docs/techdocs/runtimes/kubernetes/architecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/techdocs/runtimes/kubernetes/gettingStarted"},next:{title:"EKS Provider Templates",permalink:"/docs/category/eks-provider-templates"}},c={},h=[];function u(e){const t={a:"a",h1:"h1",header:"header",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"opa-eks-architecture",children:"OPA EKS Architecture"})}),"\n",(0,o.jsxs)(t.p,{children:["To understand how OPA ",(0,o.jsx)(t.a,{href:"/docs/techdocs/entities#aws-environment",children:"Environments"})," and ",(0,o.jsx)(t.a,{href:"/docs/techdocs/entities#aws-environment-provider",children:"Environment Providers"})," relate to applications and clusters, take a look at the below diagram."]}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"opa_eks_architecture.png",src:n(2137).A+"",width:"831",height:"711"})})}),"\n",(0,o.jsxs)(t.p,{children:["This example diagram is meant to show that OPA can work across AWS accounts and regions. OPA allows you to create as many clusters as you want, but also to share the clusters between applications and application environments. The above configuration is just one way that you could set up your apps and clusters. OPA gives you full flexibility on how many accounts, regions, clusters, and environments you want to use as well as which ones are used by which applications. The choice is yours on how many environments you create as well as their scope of use. For example, you can choose to create an Environment for each application or each team, or even for groups of applications. For a more in-depth explanation of OPA environments, see our ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=EgfIAPzIAHk&list=PLhr1KZpdzukcf5e7vYOVkpw4h-rzy7Pn3&index=4",children:"OPA environments video on YouTube "}),"."]}),"\n",(0,o.jsx)(t.p,{children:'In the example above, we see an application, "App 1", that is deployed to 4 distinct Environments. The DEV and TEST Environments are for "non-production" use, and run in a non-prod AWS account. The STAGE and PROD Enviroments run on a production AWS account.'}),"\n",(0,o.jsxs)(t.p,{children:["The non-prod Environments point to the same Environment Provider, which means that both of these Environments share the same cluster. Developers can make use of kubernetes ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:"namespaces"})," to separate application resources (within the same cluster) as they see fit. For example, they could choose to create a namespace per application, a namespace per application environment, or even a namespace per team or department."]}),"\n",(0,o.jsx)(t.p,{children:"The STAGE and PROD environments above each use their own separate cluster, which can be on the same AWS account or a different account."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2137:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/opa_eks_architecture-1c2f04f529f51a48bafbf3223730f1a4.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(6540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);