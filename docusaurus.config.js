// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Explore Tourist Places',
  tagline: 'Your guide to beautiful destinations',
  favicon: 'img/favicon.ico',

  // Optional: this helps you test future Docusaurus v4 features
  future: {
    v4: true,
  },

  // Base settings
  url: 'https://vijayshree-vm.github.io',
  baseUrl: '/tourist-places/',

  // GitHub info – safe to leave as-is if not using GitHub Pages
  organizationName: 'vijayshree-vm',
  projectName: 'tourist-places',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          editUrl: undefined, // You can remove or leave null if not using GitHub
        },
        blog: {
          showReadingTime: true,
          editUrl: undefined,
          blogSidebarTitle: 'All Blog Posts',
          blogSidebarCount: 'ALL',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Explore Tourist Places',
        logo: {
          alt: 'Tourist Places Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tourist Places',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Places',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Explore Tourist Places.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
