// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

const config = {
  title: 'Research Work',
  tagline: 'I am working for nothing!',
  url: 'https://arun-esh.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/letter-a-com.svg',
  trailingSlash: false,

  organizationName: 'arun-esh', // Usually your GitHub org/user name.
  projectName: 'publicBlog', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],

          editUrl: 'https://github.com/arun-esh/publicBlog/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    defaultMode: 'dark',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'A₹unesh',
      logo: {
        alt: 'Logo',
        src: 'img/tree--com.svg',
      },

      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorials',
        },

        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/arun-esh/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },

        // {
        //   title: 'My Tutorial Links',
        //   items: [
        //     {
        //       label: 'SQL',
        //       href: '/docs/intro',
        //     },
        //     {
        //       label: 'SQL',
        //       href: '/docs/intro',
        //     },
        //     {
        //       label: 'SQL1',
        //       href: '/docs/intro',
        //     },
        //   ],
        // },

        {
          title: 'Social Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/arun-esh/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/arun3sh',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Research Project, Inc. Built with Docusaurus.`,
    },

    presets: [
      [
        'classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
          },
          blog: {
            showReadingTime: true,
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  },
};

module.exports = config;
