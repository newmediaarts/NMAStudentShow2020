# KCC NMA Student Show 2020

## Get Started

**Make Sure You Have Node.js installed for npm**

1. Install Dependencies `npm i`
2. Run command `npm start` to run live server
3. Run command `npm run build` to build/bundle the site for production


## Creating and populating Students section

1. Go to the `students.js` file in `src/js/data`
2. Edit the key value pair for each student accordingly
3. Make sure the paths of image are relative to the `index.html` file

## Creating your own branch

1. `git checkout -b yourname`

## Updates

* May 19th 2020 - modified build command to support relative paths
`parcel build src/index.html --public-url ./`