import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/publicBlog/blog',
    component: ComponentCreator('/publicBlog/blog', '8a0'),
    exact: true
  },
  {
    path: '/publicBlog/blog/archive',
    component: ComponentCreator('/publicBlog/blog/archive', '43a'),
    exact: true
  },
  {
    path: '/publicBlog/blog/first-blog-post',
    component: ComponentCreator('/publicBlog/blog/first-blog-post', '0bc'),
    exact: true
  },
  {
    path: '/publicBlog/blog/long-blog-post',
    component: ComponentCreator('/publicBlog/blog/long-blog-post', 'a7b'),
    exact: true
  },
  {
    path: '/publicBlog/blog/mdx-blog-post',
    component: ComponentCreator('/publicBlog/blog/mdx-blog-post', 'a62'),
    exact: true
  },
  {
    path: '/publicBlog/blog/tags',
    component: ComponentCreator('/publicBlog/blog/tags', '106'),
    exact: true
  },
  {
    path: '/publicBlog/blog/tags/docusaurus',
    component: ComponentCreator('/publicBlog/blog/tags/docusaurus', 'b78'),
    exact: true
  },
  {
    path: '/publicBlog/blog/tags/facebook',
    component: ComponentCreator('/publicBlog/blog/tags/facebook', '80f'),
    exact: true
  },
  {
    path: '/publicBlog/blog/tags/hello',
    component: ComponentCreator('/publicBlog/blog/tags/hello', '845'),
    exact: true
  },
  {
    path: '/publicBlog/blog/tags/hola',
    component: ComponentCreator('/publicBlog/blog/tags/hola', 'a6c'),
    exact: true
  },
  {
    path: '/publicBlog/blog/welcome',
    component: ComponentCreator('/publicBlog/blog/welcome', '274'),
    exact: true
  },
  {
    path: '/publicBlog/markdown-page',
    component: ComponentCreator('/publicBlog/markdown-page', '84c'),
    exact: true
  },
  {
    path: '/publicBlog/docs',
    component: ComponentCreator('/publicBlog/docs', '053'),
    routes: [
      {
        path: '/publicBlog/docs/intro',
        component: ComponentCreator('/publicBlog/docs/intro', '33e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/publicBlog/',
    component: ComponentCreator('/publicBlog/', 'e20'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
