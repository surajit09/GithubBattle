# Github Battle
To run the app, go to folder where app has been downloaded or cloned. 
Then type “npm run start” which will spring up a dev server locally for the app
and then in the browser type  http://localhost:8080/ if the the home page does not come up automatically

## Description

This GithubBattle app is a simple game. There are two routes in the navigations - Battle and the Popular. 
1) Popular route fetches the most popular projects in the Github. By default it fetch all the popular projects. If you click on any particular programming language then it will fetch most popular projects in that language

2) When Battle route is clicked then battle game home page is loaded. Here you can type two github account names as two players. Then click battle and it will fetch information about each player from github. Then it will compare and give each player a score and show who has more scores.


## Development server

Webpack will start a dev server when “npm run start” command is typed. Navigate to http://localhost:8080/.
The app will automatically reload if you change any of the source files.

## Build
 The build artifacts will be stored in the `dist/` directory. index_bundle.js has all the javascript code that was run through babel_loader
 which transpiles es6 to es5 and jsx to normal javascript. index.html file in the dist folder has a reference to index_bundle.js
 
 
 
