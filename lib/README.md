#### steps to creating my file server

* create a new branch in the repo I created yesterday to utilize the createResponse and parseRequest functions
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
* replace with:
```
fs.readFile('./public/index.html')
    .then((data)=>socket.end(createResponse({body:data})))
```