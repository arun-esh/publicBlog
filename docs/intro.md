---
sidebar_position: 1
title: Welcome
---

# Tutorial Intro

## Getting Started

### Push code to the GitHub

```shell
GIT_USER=<gitHub Username> USE_SSH=true npm run deploy
```

### Start your site

Run the development server:

```bash
cd my-website
npm run start
```

## Install math functions

```sh
npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
```

## Install Diagrams

Enable Mermaid functionality by adding plugin `@docusaurus/theme-mermaid` and setting `markdown.mermaid` to `true` in your `docusaurus.config.js`.

```sh
npm install --save @docusaurus/theme-mermaid
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


