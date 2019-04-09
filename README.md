# rvagamejams.com
Hexo-based homepage for RVA Game Jams and anything regarding game development in the Richmond VA area

## Setup
- Install node.js
- Then `npm install -g hexo-cli`
- Checkout `dev` branch
- Navigate to folder and `npm install`

## Dev
- `hexo server` to start a server on localhost:4000 that will recompile the site automatically as you make changes

## Create

## Events
- `hexo new jam "Jam Name Here"` to create a new jam event in the `source/_posts` folder (a markdown file and a corresponding asset folder)
- Fill out all the information in the YAML front-matter, and then add whatever markdown you want to the details/descriptions
- Add a `header.png` to the asset folder
- You can also do `hexo new event "Event Name Here"` to create a non-jam event, and same for any future scaffolds (see: `scaffolds` folder)

## Podcasts
- `hexo new podcast "Podcast Title"' to create a new podcast in the `source/_posts` folder (a markdown file and a corresponding asset folder)
- Fill out all the information in the YAML front-matter, and then add whatever markdown you want to the details/descriptions
- Add a `header.png` to the asset folder
- Podcasts are hosted at: https://rvagamejams.com/podcast.xml

### Finding Static File URL for Google Drive
- In order to get a static file link for a Google Drive File, you must call the Google Drive API using the file id and retrieve the webContentLink value, otherwise links will be short-lived
- Google Drive API: https://developers.google.com/drive/api/v2/reference/files/get
- In order to get the File ID, click "Get Shareable Link" withing Google Drive web interface, and the id at the end of the link is the file id

## Build/Deploy
- `hexo clean & hexo generate` to compile local files into `public` (YOU MUST CLEAN FIRST!!)
- `git clone https://github.com/RVAGameJams/rvagamejams.github.io.git -b master .deploy_git` to init deploy folder (only necessary the first time)
- `hexo clean & hexo generate -deploy` to make a new commit with the compiled files and push it to the server (BE CAREFUL WITH THIS, obviously)
- You might have to `git pull` the repo in `.deploy_git` if someone else deployed since your last push

## Reference
### Libraries & Frameworks
- Hexo
- Node.js
- Google-Spreadsheet


### FAQ
- How do I update the Google Sheets Link?

- How do I add new Itch.io collections for download?

- Where can I find a template for Google Sheets?

- What options are available for the Google Sheets games?

