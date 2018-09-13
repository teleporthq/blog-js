# teleportHQ Blog
teleportHQ's official blog.


[![Build Status](https://travis-ci.com/teleporthq/blog.svg?branch=master)](https://travis-ci.com/teleporthq/blog)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

- [Introduction](#introduction)
- [Getting started](#getting-started)
- [Purpose](#purpose)
- [Project Structure](#project-structure)
- [How it works](#how-it-works)
- [Teleport project definition](#teleport-project-definition)

## Introduction
Our blog is built with teleportHQ's User Interface Definition Language (UIDL) and libraries. In this technology demo, we're generating [Next.js](https://nextjs.org/) code.

## Getting started
```
git clone https://github.com/teleporthq/blog.git
cd blog
npm i
npm run build
npm run dev
```

**NOTE**: our blog is an app which is mounted on https://teleporthq.io/blog thanks to the awesome [Now platform](https://zeit.co). Therefore, locally only urls built after `/blog` will be working.

## Purpose
The purpose of this repo is to demonstrate how a teleport project (plain JavaScript object or JSON file respecting teleportHQ's UIDL) can be transformed in real-time in a chosen target code.

## Project Structure
- `src/index.ts`: main file in which we're building a teleport project definition, generating the code, and saving the files to disk, in the `dist` folder
- `src/data/target.ts`: a configuration object (common to) and injected in all pages
- `src/data`: list of all the project elements, components and pages, wrapped into functions

## How it works
When you run `npm run dev` we chain 2 operations:

- on every file change in `src` folder, we transpile in memory and run all our TypeScript code width `ts-node`. At this stage, all the code of our Next.js project is generated in the `dist` folder ran with node and saved to disk in the `dist` folder
- then we run `npm run dev` in `dist` folder. This will start Next.js default server and you can see your project on http://localhost:3000

### Teleport Project Definition
At every change, you can see the resulting teleport project definition file here [http://localhost:3000/static/blog/teleport.json](http://localhost:3000/static/blog/teleport.json)
