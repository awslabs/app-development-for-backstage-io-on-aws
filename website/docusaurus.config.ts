// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


const config: Config = {
  title: 'Harmonix on AWS (Deprecated)',
  // tagline: 'Orchestrate Platforms and Applications',
  tagline: 'Deprecated reference implementation - No longer maintained',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://harmonixonaws.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'harmonix', // Usually your repo name.
  organizationName: 'awslabs', // Usually your GitHub org/user name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@docusaurus/theme-mermaid'],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // editUrl:
          //   'https://github.com/awslabs/app-development-for-backstage-io-on-aws/blob/main/website/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-K11BYW5K62',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
      // Replace with your project's social card
    image: 'img/harmonix-blue.png',
    navbar: {
      // title: 'Harmonix on AWS', 
      hideOnScroll: false,
      logo: {
        alt: 'Harmonix on AWS Logo',
        src: 'img/harmonix-white.svg',
        srcDark: 'img/harmonix-white.svg',
        className: 'harmonix-nav-logo',
        // width: 128,
        // height: 128,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation (Archived)',
        },
        {
          to: '/about', 
          label: 'About', 
          position: 'left'
        },
        {
          href: 'https://github.com/awslabs/harmonix',
          position: 'right',
          className: 'header-github-link',
          "aria-label": 'Github repository',
        },
      ],
    },
    announcementBar: {
      id: 'harmonix-deprecated-2025', // This forces the announcement to show even if previous ones were closed
      content:
      '⚠️ <strong>Project Deprecated:</strong> Harmonix on AWS is no longer actively maintained. Please upgrade to v0.4.2 for critical security fixes. <a target="_blank" rel="noopener noreferrer" href="https://github.com/awslabs/harmonix">View on GitHub</a>',
      backgroundColor: '#fff3cd', // Light yellow/amber background
      textColor: '#856404', // Dark amber text
      isCloseable: false, // Don't allow closing this important notice
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation (Archived)',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Features',
              to: '/docs/features',
            },
          ],
        },
        {
          title: 'Project Info',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/awslabs/harmonix',
            },
          ]
        },
      ],
      copyright: `Harmonix on AWS (Deprecated) | Copyright © ${new Date().getFullYear()} Amazon.com, Inc. or its affiliates. All rights reserved`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    zoom: {
      selector: 'img:not(.harmonix-nav-logo)',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['diff']
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    'docusaurus-lunr-search', 
    'docusaurus-plugin-image-zoom', 
    ['docusaurus-plugin-remote-content',  
    {
      name: "content",
      sourceBaseUrl: "https://raw.githubusercontent.com/awslabs/harmonix/main/",
      outDir: "docs",
      documents: ["CHANGELOG.md"],
      performCleanup: true,
      // in the plugin's options:
      // modifyContent(filename, content) {
      //   if (filename.includes("CONTRIBUTING")) {
      //     const re = /\[LICENSE\]\(LICENSE\)/g;
      //     const licenseUrl = "https://github.com/awslabs/app-development-for-backstage-io-on-aws/blob/main/LICENSE"
      //     var newContent = content.replace(re, `[LICENSE](${licenseUrl})`);   
      //     return {
      //         content: newContent
      //     }
      //   }
      //   // don't want to modify this item, since it doesn't contain "CONTRIBUTING" in the name
      //   return undefined
      // },
    }]
  ],
}

export default config;
