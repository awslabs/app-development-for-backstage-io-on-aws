"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[5843],{17833:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var s=n(74848),t=n(28453);const o={sidebar_position:6,title:"Permissions"},a="Authorization and Permissions",r={id:"techdocs/permission",title:"Permissions",description:'The Security Authentication section captures mechanisms used to authenticate and store users and organizational data.  At sign-in, it is possible to restrict access to OPA on AWS through configuration of identity provider integration to provide authorization at the "front door" of the application.  It is also possible to provide a more granular mechanism to enforce authorization of access to APIs, UI components, and data by utilizing the Backstage permission framework.',source:"@site/docs/techdocs/permission.md",sourceDirName:"techdocs",slug:"/techdocs/permission",permalink:"/docs/techdocs/permission",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Permissions"},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/techdocs/security"},next:{title:"Customizations",permalink:"/docs/techdocs/customizations"}},c={},p=[{value:"Specifying a policy",id:"specifying-a-policy",level:2},{value:"Defining Groups",id:"defining-groups",level:2},{value:"Restricting access to OPA audit logs",id:"restricting-access-to-opa-audit-logs",level:2},{value:"Restricting access to templates",id:"restricting-access-to-templates",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"authorization-and-permissions",children:"Authorization and Permissions"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"/docs/techdocs/security#authentication",children:"Security Authentication section"}),' captures mechanisms used to authenticate and store users and organizational data.  At sign-in, it is possible to restrict access to OPA on AWS through configuration of identity provider integration to provide authorization at the "front door" of the application.  It is also possible to provide a more granular mechanism to enforce authorization of access to APIs, UI components, and data by utilizing the ',(0,s.jsx)(i.a,{href:"https://backstage.io/docs/permissions/overview",children:"Backstage permission framework"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"The sections below document examples of how you can specify a policy and restrict access to specific types of actions and entities through group membership."}),"\n",(0,s.jsx)(i.h2,{id:"specifying-a-policy",children:"Specifying a policy"}),"\n",(0,s.jsxs)(i.p,{children:["The OPA on AWS plugins for Backstage provide example permission policies to demonstrate how the permission framework can be leveraged to enforce access controls to specific template types and OPA APIs.  In the reference implementation, the policy used by the permission framework is found in the ",(0,s.jsx)(i.code,{children:"backstage/packages/backend/src/plugins/permission.ts"}),' file.  By default, an "allow all" sample policy is used.  In the example below, the policy configuration is modified to specify an alternative sample policy named ',(0,s.jsx)(i.code,{children:"OpaSamplePermissionPolicy"}),"."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-diff",metastring:'{4-5,13-14} title="backstage/packages/backend/src/plugins/permission.ts"',children:"  import { createRouter } from '@backstage/plugin-permission-backend';\n  import { Router } from 'express';\n  import { PluginEnvironment } from '../types';\n- import { OpaSampleAllowAllPolicy } from './OpaSamplePermissionPolicy';\n+ import { OpaSamplePermissionPolicy } from './OpaSamplePermissionPolicy';\n\n\n  export default async function createPlugin(env: PluginEnvironment): Promise<Router> {\n    return await createRouter({\n      config: env.config,\n      logger: env.logger,\n      discovery: env.discovery,\n-     policy: new OpaSampleAllowAllPolicy(),\n+     policy: new OpaSamplePermissionPolicy(),\n      identity: env.identity,\n    });\n  }\n"})}),"\n",(0,s.jsx)(i.h2,{id:"defining-groups",children:"Defining Groups"}),"\n",(0,s.jsxs)(i.p,{children:["The sample ",(0,s.jsx)(i.code,{children:"OpaSamplePermissionPolicy"})," policy example assumes that groups named 'admins', 'dev-ops', and 'developers' are created by the provider which populates the catalog with organizational data.  The defined organizational groups are used in policy decisions defined in the permission policy function. The sample code for groups can be modified as needed to customize the group names."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",metastring:'title="backstage/packages/backend/src/plugins/OpaSamplePermissionPolicy.ts"',children:"// The Group entity ref constants below are based on group identifiers created from the auth IdP or manually created\n// Update the entity ref identifiers as appropriate to match your Backstage installation\nconst ADMINS_GROUP = stringifyEntityRef({ \n    kind: 'Group', \n    namespace: DEFAULT_NAMESPACE, \n    name: \"admins\" \n    });\nconst DEVOPS_GROUP = stringifyEntityRef({ \n    kind: 'Group', \n    namespace: DEFAULT_NAMESPACE, \n    name: \"dev-ops\" \n    });\nconst DEVELOPERS_GROUP = stringifyEntityRef({ \n    kind: 'Group', \n    namespace: DEFAULT_NAMESPACE, \n    name: \"developers\" \n    });\n"})}),"\n",(0,s.jsx)(i.p,{children:"With the groups defined, we can now review and modify the policy decision code to return authorization results to Backstage plugins."}),"\n",(0,s.jsx)(i.h2,{id:"restricting-access-to-opa-audit-logs",children:"Restricting access to OPA audit logs"}),"\n",(0,s.jsxs)(i.p,{children:["OPA on AWS provides an example permission to control access to OPA application audit logs using the ",(0,s.jsx)(i.code,{children:"readOpaAppAuditPermission"})," permission definition (defined in the ",(0,s.jsx)(i.code,{children:"@aws/plugin-aws-apps-common-for-backstage"})," plugin).  The code below is part of the ",(0,s.jsx)(i.code,{children:"OpaSamplePermissionPolicy.ts"})," permission policy."]}),"\n",(0,s.jsxs)(i.p,{children:["Additional permissions for OPA on AWS APIs may be provided in the future.  If there is a specific permission required,  ",(0,s.jsx)(i.a,{href:"https://github.com/awslabs/app-development-for-backstage-io-on-aws/issues",children:"open an issue"})," or ",(0,s.jsx)(i.a,{href:"https://github.com/awslabs/app-development-for-backstage-io-on-aws/pulls",children:"submit a pull request"})," for support."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",metastring:'title="backstage/packages/backend/src/plugins/OpaSamplePermissionPolicy.ts"',children:"...\n// store the array of entityRefs which allow this user to claim ownership of an entity\nconst ownershipGroups = user?.identity.ownershipEntityRefs || [];\n\n// Example permission decision:\n//   ALLOW admin and devops group members to perform any action\nconst allowAllGroups = [ADMINS_GROUP, DEVOPS_GROUP];\nif (ownershipGroups.some(x => allowAllGroups.includes(x))) {\n    return { result: AuthorizeResult.ALLOW };\n}\n\n// Example permission decision: \n//   DENY audit read access unless the user is a member of Admin or DevOps\n//   The implementation below assumes that prior checks have returned an\n//   'allow' policy decision for groups other than 'developer'\nif (isPermission(request.permission, readOpaAppAuditPermission) && ownershipGroups.includes(DEVELOPERS_GROUP)) {\n    return { result: AuthorizeResult.DENY };\n}\n...\n"})}),"\n",(0,s.jsx)(i.h2,{id:"restricting-access-to-templates",children:"Restricting access to templates"}),"\n",(0,s.jsx)(i.p,{children:"A common use case may be to restrict access to AWS Environment and Environment Provider template to only members of a specific group.  For example, you may want Platform Engineers to use these templates, but prevent Application Developers and other groups from creating new AWS infrastructure."}),"\n",(0,s.jsxs)(i.p,{children:["The code snippet below is part of the ",(0,s.jsx)(i.code,{children:"OpaSamplePermissionPolicy.ts"})," permission policy and shows how a conditional decision can be returned for templates of type ",(0,s.jsx)(i.code,{children:"aws-environment"})," or ",(0,s.jsx)(i.code,{children:"aws-environment-provider"}),'.  Unless the user is an owner of the template, they will not be allowed to view or execute these software template types ("ownership" is either through direct user ownership or a member of the group that owns the template).']}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",metastring:'title="backstage/packages/backend/src/plugins/OpaSamplePermissionPolicy.ts"',children:"...\n// Example permission decision:\n//   Multiple groups of permission decisions can be nested under the first check to ensure we're working with catalog entities\nif (isResourcePermission(request.permission, RESOURCE_TYPE_CATALOG_ENTITY)) {\n\n  // Example permission decision:\n  //   DENY users access to software templates of type 'aws-environment' or\n  //   'aws-environment-provider' if they cannot claim ownership of the entity\n  if (isPermission(request.permission, catalogEntityReadPermission)) {\n    return createCatalogConditionalDecision(request.permission, {\n      not: {\n        allOf: [\n          catalogConditions.isEntityKind({ kinds: ['template'] }),\n          {\n            anyOf: [\n              catalogConditions.hasSpec({ key: 'type', value: 'aws-environment' }),\n              catalogConditions.hasSpec({ key: 'type', value: 'aws-environment-provider' }),\n            ],\n          },\n        ],\n      },\n    });\n  }\n}\n...\n"})})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var s=n(96540);const t={},o=s.createContext(t);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);