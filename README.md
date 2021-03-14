# IPCA Price Video Banner Web App
A web app to display product prices on top of video.

![subs-tab](/readme/price-video-overlay.png)

## Demo
Here is a live demo :  [demo-link]

## Features
 - Ability to display responsive video banner
 - Responsive positioning of product prices over video
 - On-demand price update from API
 - Prices will only show when video is completely loaded
 - Prices will be hidden when video has ended

## Usage
1. Load from [demo-link]
2. Video should load and prices should position nicely on-top of white-placeholders


## Bugs
- None so far

## TODO
- Ability to show prices when video is on fullscreen mode (needs collab)

## Tech Stack Used
- Javascript and CSS3
- [Svelte.dev v3](https://svelte.dev)
- [Nodejs](https://nodejs.org)
- [VSCode editor](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

## Dev Setup
1. Using `GitHub Desktop` app, clone from https://github.com/fatkenji/ipca-task2-dev.git
2. Inside the app directory run NPM to install dependencies
```
npm install
```
3. To run locally
```
npm run dev
```

## Deployment
1. Inside the app directory run
```
npm run build
```
2. It will compile and update the `public` folder with your recent changes
3. Go inside `public` folder
4. select all files and upload to https://github.com/fatkenji/ipca-task2-app
5. May take some time to propagate and see changes
6. open web browser and go to [demo-link]

[demo-link]:https://fatkenji.github.io/ipca-task2-app
