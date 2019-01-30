var scraperjs = require('scraperjs');


var collectionList = [
    'https://itch.io/c/371539/ludum-dare-42',
'https://itch.io/c/371551/ludum-dare-41',
'https://itch.io/c/371562/global-game-jam-2018',
'https://itch.io/c/371553/ludum-dare-40',
'https://itch.io/c/372029/ludum-dare-39',
'https://itch.io/c/371549/ludum-dare-38',
'https://itch.io/c/372030/ludum-dare-37',
'https://itch.io/c/372018/0h-game-jam-2016',
'https://itch.io/c/371555/ludum-dare-36',
'https://itch.io/c/372016/ludum-dare-35',
'https://itch.io/c/371576/global-game-jam-2016',
'https://itch.io/c/372021/ludum-dare-34',
'https://itch.io/c/372031/ludum-dare-33',
'https://itch.io/c/372023/ludum-dare-32',
'https://itch.io/c/372024/ludum-dare-31',
'https://itch.io/c/371573/ludum-dare-30'];

var i;
for(i = 0; i < collectionList.length; i++){
    scraperjs.StaticScraper.create(collectionList[i])
        .scrape(function($) {
            return $(".game_cell").map(function() {
               // return [$(this).find(".game_cell_data .game_title > a").text()] //, $(this).html() ];
                return [$(this).find(".game_link").attr('href')] //, $(this).html() ];

            }).get();
        })
        .then(function(news) {
            console.log(news);
        })
}
