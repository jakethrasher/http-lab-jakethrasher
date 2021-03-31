#### steps to creating my file server

* create a branch from the repo I created yester day to utilize the createResponse and parseRequest functions
* create a public directory
* create an index.html file in public directory
* in app.js import node file server
    ` const fs = require('fs').promises `

```
fs.readFile('./public/index.html')
    .then((data)=>console.log(data))
    .catch((err)=>console.error(err))
```
* should console log contents of ./public/index.html
