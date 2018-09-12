# teleportHQ Blog
teleportHQ's official blog.


[![Build Status](https://travis-ci.com/teleporthq/blog.svg?branch=master)](https://travis-ci.com/teleporthq/blog)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

- [Introduction](#introduction)
- [Getting started](#getting-started)
- [Tutorial](#tutorial)

## Introduction
Our blog is built with teleportHQ's User Interface Definition Language (UIDL) and libraries. In this technology demo, we're generating [Next.js](https://nextjs.org/) code.

## Getting started

```
git clone https://github.com/teleporthq/blog.git
cd blog
npm i
npm run dev
```

### Tutorial

The purpose of this repo is to demonstrate how a teleport project (plain JavaScript object or JSON file respecting teleportHQ's UIDL) can be transformed in real-time in a chosen target code.

1. Our intermediare representation is defined using TypeScript
2. On each file update, we re-generate our Next.js code in `next/` folder
3. To see the life result in a browser we run `npm run dev`

