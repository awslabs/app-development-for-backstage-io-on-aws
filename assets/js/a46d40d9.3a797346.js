"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[1260],{1228:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(7624),s=n(2172);const o={sidebar_position:4},r="Processes",a={id:"techdocs/process",title:"Processes",description:"Deploying a template",source:"@site/docs/techdocs/process.md",sourceDirName:"techdocs",slug:"/techdocs/process",permalink:"/docs/techdocs/process",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/techdocs/plugins"},next:{title:"Security",permalink:"/docs/techdocs/security"}},l={},c=[{value:"Deploying a template",id:"deploying-a-template",level:2},{value:"Executing Gitlab pipeline",id:"executing-gitlab-pipeline",level:2},{value:"Abstracted centralized pipelines",id:"abstracted-centralized-pipelines",level:3},{value:"Modular pipelines",id:"modular-pipelines",level:3},{value:"Pipeline jobs",id:"pipeline-jobs",level:3},{value:"Deploy an application to another environment",id:"deploy-an-application-to-another-environment",level:2},{value:"Continuous deployment for app code",id:"continuous-deployment-for-app-code",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"processes",children:"Processes"}),"\n",(0,t.jsx)(i.h2,{id:"deploying-a-template",children:"Deploying a template"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"The process described below is true for all templates with the exception of AWS Environment."})}),"\n",(0,t.jsxs)(i.p,{children:["When a user selects a template in the catalog and clicks ",(0,t.jsx)(i.em,{children:"Create"}),", the below process is initiated."]}),"\n",(0,t.jsx)(i.mermaid,{value:"flowchart LR;\n    subgraph Backstage to GitLab\n    id(Template Creation)--\x3eid2(Rendered Entity Data);\n    id2(Rendered Entity Data)--\x3eid3(Create Repository);\n    id3(Create Repository)--\x3eid4(Store initial files and pipeline);\n    end\n    subgraph GitLab Pipeline\n    id4(Store initial files and pipeline)--\x3eid5(Pipeline execution);\n    id5(Pipeline execution)--\x3eid6(Get Credentials);\n    id6(Get Credentials)--\x3eid7(Provision IAC);\n    id7(Provision IAC)--\x3eid8(Update Entity catalog);\n    end"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Template Creation"}),": The process of filling the template with the required input from the user, text fields, selecting other entities, choosing options etc."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Rendered Entity Data"}),": Based on the previous selection, this process will fetch all the required data before populating the repository. This includes information about the selected environment entity, platform configurations and entity rendered data. You can see the result of this process in the generated repository right after creation. This process make use of the Scaffolder actions plugin."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Create Repository"}),": Create the git repository for the entity, code, IaC and environment information. Based on the type of template, the repository will be created in a git project group: environments, environment-providers, aws-app, aws-resources. This allows us to segregate access control from managing repositories under different security domains."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Store initial files and pipeline"}),": Persisting the generated files from step 2 in the repository including the particular pipeline pattern that fits the selected template (See below for more details on pipeline process)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Pipeline execution"}),": Using Gitlab runner executing the pipeline in a separate shell. For building container images, we use Docker in Docker with Paketo build packs or Kaniko"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Get Credentials"}),": Fetch credentials from the target (Environment provider) provisioning role in order to provision the IAC for the template."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Provision IaC"}),": Provision the IaC against the target destination (Environment provider) - cdk deploy / terraform apply"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Update Entity catalog"}),": Based on step 7 select the desired IaC deployment output and update the entity catalog file (",(0,t.jsx)(i.em,{children:"catalog-info.yaml"}),") with the resources information."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"executing-gitlab-pipeline",children:"Executing Gitlab pipeline"}),"\n",(0,t.jsx)(i.p,{children:"The pipeline execution process is composed of several patterns and abstractions. This was done for several reasons, but mostly for reusability and security controls."}),"\n",(0,t.jsx)(i.h3,{id:"abstracted-centralized-pipelines",children:"Abstracted centralized pipelines"}),"\n",(0,t.jsx)(i.p,{children:"In order to allow updates and changes for pipelines that may be enforced by the platform engineering team, we externalized some of the pipeline actions and provide only the necessary variables as an input."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-pipeline",metastring:'title=".gitlab-ci.yml"',children:"stages:\n  - env-creation\n  - prepare-dev-stage\n  - dev-stage\n\nvariables:\n  APP_SHORT_NAME: \"my-app\"\n  APP_TEMPLATE_NAME: \"example-nodejs\"\n  OPA_PLATFORM_REGION: \"us-east-1\"\n\ninclude:\n  - project: 'opa-admin/backstage-reference'\n    ref: main \n    file:\n      - 'common/cicd/.gitlab-ci-job-defaults-cdk.yml'\n      - 'common/cicd/.gitlab-ci-aws-base.yml'\n      - 'common/cicd/.gitlab-ci-aws-iac-ecs.yml'\n      - 'common/cicd/.gitlab-ci-aws-image-kaniko.yml'\n"})}),"\n",(0,t.jsxs)(i.p,{children:['The first part of our pipeline, "',(0,t.jsx)(i.em,{children:"stages"}),'", defines the stages of this pipeline for the current state. This part is not fixed, we may introduce more stages when our application will be deployed to additional environments. Nonetheless we can see the first two stages for our dev environment:']}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"prepare-dev-stage"})," - this stage provisions and prepares the environment to be able to run the application before we start making continuous code changes to our repositories."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"dev-stage"})," - this stage is responsible for compiling, building and deploying new versions of our application each time we push new code changes to our application logic (/src directory)"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"env-creation"})," is the stage to create the two stages above, the reason this is a stage on it's own is because we can reuse it to create more stages later, when the application is deployed to other environments."]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.em,{children:"include"})," clause allows us to dynamically pull pipelines from another repository each time the pipeline will run."]})}),"\n",(0,t.jsx)(i.h3,{id:"modular-pipelines",children:"Modular pipelines"}),"\n",(0,t.jsx)(i.p,{children:"The idea of modular pipelines is to include smaller pipelines that contain jobs which together can provide a building block for different pipeline orchestrations. You may have already noticed from the example above we use several include statements. These statements help to reuse similar functionally for different templates / application patterns."}),"\n",(0,t.jsxs)(i.p,{children:["The complete list of pipeline patterns is available at: ",(0,t.jsx)(i.a,{href:"https://github.com/awslabs/app-development-for-backstage-io-on-aws/tree/main/backstage-reference/common/cicd",children:"CICD Directory"})]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-base.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-dind-spring-boot.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-iac-ecs.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-iac-rds.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-iac-serverless-api.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-iac-tf-ecs.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-image-kaniko.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-provider-ecs.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-provider-serverless.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-aws-tf-base.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-job-defaults-cdk.yml"}),"\n",(0,t.jsx)(i.li,{children:".gitlab-ci-job-defaults-tf.yml"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"pipeline-jobs",children:"Pipeline jobs"}),"\n",(0,t.jsx)(i.p,{children:"There are several jobs imported into the pipeline based on the pattern you use. Below is an example of pipeline executions and the job for each one of them:"}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"pipeline1.png",src:n(224).c+"",width:"1596",height:"492"})})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Initial commit"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"create-ci-stages - The job creates new stages for a target environment with its providers."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Added CICD environment stage"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"iac-deployment-ENVXXX-ProviderYYY - the job provision IAC against the target environment/provider"}),"\n",(0,t.jsx)(i.li,{children:"get-aws-creds-ENVXXX-ProviderYYY - the job gets credentials from the provisioning role of the target provider"}),"\n",(0,t.jsx)(i.li,{children:"build-image-ENVXXX-ProviderYYY - the job build a new image from the /src directory and update the container image"}),"\n",(0,t.jsx)(i.li,{children:"delete-aws-creds-ENVXXX-ProviderYYY - delete the temporary credentials so that they are not persisted in the repository"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"updating entity details"}),' - update cataloginfo.yaml with the IaC metadata. There is no need to run the pipeline again after this update, which is why the pipeline is showing as "Skipped".']}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"deploy-an-application-to-another-environment",children:"Deploy an application to another environment"}),"\n",(0,t.jsx)(i.p,{children:"The process of deploying an application to another environment works by utilizing the jobs and stage we describe above. To visualize how the git pipeline looks when performing a multi-environment deployment, let's look at the below diagram."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"pipeline2.png",src:n(9544).c+"",width:"1670",height:"1158"})})}),"\n",(0,t.jsx)(i.p,{children:"We can see that once we deploy an application to another environment we essentially created new stages for the new target environment."}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["The process to deploy an application to another environment is done by submitting a commit to git with a specific message ",(0,t.jsx)(i.strong,{children:"generate CICD stages"})," along with a properties file that contains the information of the new target environment. When the pipeline job runs, it will process the new file and create corresponding stages for the new target destination. This change will automatically execute the pipeline and stage to deploy the application to the new target environment."]})}),"\n",(0,t.jsx)(i.h3,{id:"continuous-deployment-for-app-code",children:"Continuous deployment for app code"}),"\n",(0,t.jsx)(i.p,{children:"How do the application logic code changes propagate to multiple environments?\nFor example - if we have the below pattern of commit on our repository - every time we merge changes to the main branch /src directory (Can be configured differently) the ENV-XXX-stage will be triggered."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(i.p,{children:"If we have several stages for multiple environments, all of them will be triggered in the original order they were created in."}),"\n",(0,t.jsx)(i.mermaid,{value:"gitGraph\n    commit\n    commit\n    branch feature1\n    commit\n    commit\n    checkout main\n    merge feature1\n    branch feature2\n    commit\n    commit\n    commit\n    checkout main\n    merge feature2\n    commit\n    commit"}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["If we configured the environment with ",(0,t.jsx)(i.em,{children:'"Requires approval"'}),", the pipeline that pushes code changes will halt until an approval is granted. This is useful in cases where we want supervision of what changes are propagated to a sensitive environment. Additional security controls can also be implemented."]})})]})}function p(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},224:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/pipeline1-1c26339d695f24b943dfc418e13a0250.png"},9544:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/pipeline2-546c7b41023040f57cf73a8d9080852f.png"},2172:(e,i,n)=>{n.d(i,{I:()=>a,M:()=>r});var t=n(1504);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);