# teleportHQ Blog

## Setup

Our blog is built with teleportHQ's intermediary representation and libraries. In this case, we're using Next.js as an output format.

## Setup

```
npm i
npm i nodemon -g 
```

## Development
The purpose of this repo is to demonstrate how a teleportHQ's intermediary representation can be transformed in real-time in a chosen target code. 
Therefore, we'll chain 3 distinct operations:

1. Our intermediare representation is defined using TypeScript so we need to transpile TypeScript into JavaScript
2. On each file update, we want to re-generate our Next.js code and will do so with `nodemon` (The Next.js code will be generated in `/next` folder
3. To see the life result in a browser we'll run Next's `npm run dev` command

Open 3 consoles. 

In the first console type:
```
tsc -w
``` 

In the second console type:
```
nodemon dist/index.js --ignore next/`. 
```

In the third, type: 
```
cd next
npm run dev
```
