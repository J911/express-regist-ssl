# express-regist-ssl
Module that easily link ssl certificates to express

## Install

install `express-regist-ssl`

```
npm install --save express-regist-ssl
```

## Use

```
const express = require('express');
const express_regist_ssl = require('express-regist-ssl');
const ers = new express_regist_ssl('./key.pem', './cert.pem');

var app = express();  

//code ..

ers.createServer(app, ()=>{
    console.log('linked ssl certificate!')
});

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});
```
