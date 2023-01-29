import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '275'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '2cb'),
    exact: true
  },
  {
    path: '/blog/first-post',
    component: ComponentCreator('/blog/first-post', '572'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '7a4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '0ce'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', 'a18'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '74f'),
    exact: true
  },
  {
    path: '/docs/tags/commands',
    component: ComponentCreator('/docs/tags/commands', '862'),
    exact: true
  },
  {
    path: '/docs/tags/installation',
    component: ComponentCreator('/docs/tags/installation', '45f'),
    exact: true
  },
  {
    path: '/docs/tags/maria-db',
    component: ComponentCreator('/docs/tags/maria-db', 'fb4'),
    exact: true
  },
  {
    path: '/docs/tags/sql',
    component: ComponentCreator('/docs/tags/sql', '7c6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '659'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '725'),
    routes: [
      {
        path: '/docs/category/mariadb',
        component: ComponentCreator('/docs/category/mariadb', 'f53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mariaDB/install-maria-db-from-source-code',
        component: ComponentCreator('/docs/mariaDB/install-maria-db-from-source-code', 'acd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mariaDB/maria-db-commands',
        component: ComponentCreator('/docs/mariaDB/maria-db-commands', '470'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd7b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
