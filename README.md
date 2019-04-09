# gulp-front-end-starter-pack
using this starter pack you can easily start making any html templates whitout worrying about task managing and doing repetetive things by your self.
## features

 - copying all htmls to dist folder
 - compile and minify sass
 - compile babel and concat all js files into one low size file
 - minify all images
 - live reload and auto compile

## installing
1- download and extract the folder in **[THIS FILE](https://codeload.github.com/hoseinhamzei/gulp-front-end-starter/zip/master)** and rename it.
2-start a command prompt window in that folder and run:

    npm install
* if you don't have installed node.js install it.

## usage
1-using this starter pack, you should put all of your project files in *src* folder:
html files in `/src`
css and scss files in `/src/style` (import multiple scss files into style.scss)
js files in `src/js`
image files in `src/images`

2- run `gulp build` to create dist folder
3- run `gulp start` and start editing and creating new files in above folders, they all will be processed and copied to *dist*  folder automatically.
