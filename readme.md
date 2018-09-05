# teleportHQ Blog
teleportHQ's official blog.

Our blog is built with teleportHQ's intermediary representation and libraries. In this case, we're using Next.js as an output format.

[![Build Status](https://travis-ci.com/teleporthq/blog.svg?branch=master)](https://travis-ci.com/teleporthq/blog)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Development

```
npm run dev
``` 

The purpose of this repo is to demonstrate how a teleportHQ's intermediary representation can be transformed in real-time in a chosen target code. 
Therefore, we'll chain 3 distinct operations:

1. Our intermediare representation is defined using TypeScript
2. On each file update, we want to re-generate our Next.js code
3. To see the life result in a browser we'll run Next's `npm run dev`
