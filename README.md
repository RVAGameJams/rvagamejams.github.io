# rvagamejams.com
Hexo-based homepage for RVA Game Jams and anything regarding game development in the Richmond VA area

## Setup
-Install node.js
-Then `npm install -g hexo-cli`
-Checkout `dev` branch
-Navigate to folder and `npm install`

## Dev
`hexo server` to start a server on localhost:4000 that will recompile the site automatically as you make changes

## Build/Deploy
-`hexo generate` to compile local files
-`git clone https://github.com/RVAGameJams/rvagamejams.github.io.git -b master .deploy_git` to init deploy folder the first time, or `cd .deploy_git` -> `git pull` -> `cd ..` if you have the folder already
-`hexo deploy` to make a new commit with the compiled files in the deploy folder
-`cd .deploy_git` -> `git push` -> `cd ..` to push the commits and actually update the server (BE CAREFUL WITH THIS, obviously)