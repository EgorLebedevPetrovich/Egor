// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Личный Кабинет Контрагента',
  tagline: 'Документация проекта',
  favicon: 'img/Group 13.png',

  // Set the production url of your site here
  url: 'https://docs.gazprom.w6p.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ГПН-СМ', // Usually your GitHub org/user name.
  projectName: 'Документация ЛКК', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo 1.png',
      navbar: {
        title: 'Главная',
        logo: {
          alt: 'Logo',
          src: 'img/logo 1.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Содержание',
          },
          {
            href: 'https://gitlab.com/webpractik/gazprom-neft',
            label: 'GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Информация о проекте',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Площадки',
            items: [
              {
                label: 'Продакшн',
                href: 'https://lkk.gazpromneft-sm.ru/',
              },
              {
                label: 'ПредПрод',
                href: 'https://gazprom.w6p.ru/',
              },
              {
                label: 'Тест',
                href: 'https://test.gazprom.w6p.ru/',
              },
            ],
          },
          {
            title: 'Репозитории',
            items: [
              {
                label: 'Документация',
                href: 'https://gitlab.com/webpractik/gazprom-neft/docs',
              },
              {
                label: 'Разработка',
                href: 'https://gitlab.com/webpractik/gazprom-neft/gazpromneft-backend-lk',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config
