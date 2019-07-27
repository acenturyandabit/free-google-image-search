# Free Google Image Search
Search for images with Google, without the use of Custom Search JSON/Atom API

# Installation
To install you can simply run the following command in your NodeJS project:

```
npm install free-google-image-search --save
```
# Usage Example
This package has only one dependency that will be installed properly! Because the preivous package had a bunch of dependencies that weren't listed. 

```javascript

const GoogleImageSearch=require('free-google-image-search');

GoogleImageSearch.searchImage("cats")
.then((res) => {
    console.log(res); // This will return array of image URLs
})

```

# Issues
Feel free to submit issues and enchantment requests

# Contributing
Please you the "fork-and-pull" Git workflow

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that I can review your changes

Please refer to the [following](https://github.com/felixge/node-style-guide) code styling guide

# Notice
Please use this library mainly for testing purposes. It can be unstable in production environments
