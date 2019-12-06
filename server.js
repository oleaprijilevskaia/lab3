'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res)=>{
let text = '';
let i;
  let date1 = Date.now();

  for(i=0;i<5000000;i++){
Math.sqrt(Math.random());
}

let date2 = Date.now();
let diff = date2-date1;

var os =require("os");
  res.send('Hello word!' + os.hostname() + '\n' + diff + '\n');
});

app.listen(POST,HOST);
console.log('punning on http://${HOST}:${POST}');
