# Lit-Element + TypeScript + Webpack

Main focus of this repo: `src/index.ts`, `src/components/hello.ts`, `public/index.html`, `webpack.config.js`

Repo exhibits component structure, usually seen in vue.js boilerplate code: 
- a main html with `<App />`, 
- index.js declaring the root app structure, reusing
- component.js with css

`index.html` not packed with `html-loader`. `tslint-loader` not used as I use vsc. I want to keep it simple.

(Note: I am a novice programmer. This is a product of toying around with new fresh libs and different build tools. I chose webpack solely because parcel and rollup didn't work for me.)

## Dev

webserver uses express to statically serve index.html and bundled js.

webserver runs at localhost:3000/

```bash
# Traditional build and webserver
$ npm test

# With hot-reloading provided by webpack-dev-server
$ npm run dev
```
