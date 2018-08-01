# rvagamejams.com
Hexo-based homepage for RVA Game Jams and anything regarding game development in the Richmond VA area

## Setup
- Install node.js
- Then `npm install -g hexo-cli`
- Checkout `dev` branch
- Navigate to folder and `npm install`

## Dev
- `hexo server` to start a server on localhost:4000 that will recompile the site automatically as you make changes

## Build/Deploy
- `hexo generate` to compile local files into `public`
- `git clone https://github.com/RVAGameJams/rvagamejams.github.io.git -b master .deploy_git` to init deploy folder (only necessary the first time)
- `hexo generate -deploy` to make a new commit with the compiled files and push it to the server (BE CAREFUL WITH THIS, obviously)
- You might have to `git pull` the repo in `.deploy_git` if someone else deployed since your last push