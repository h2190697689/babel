const fs =  require("fs");
const path = require("path");
const { parse } = require("@babel/parser");

const content = fs.readFileSync(path.resolve(__dirname,"./read/index.js"),"utf-8");
const ast = parse(content,{sourceType:"module"});
const astJson = JSON.stringify(ast,null,2);
fs.writeFile("./out.json",astJson,(err)=>{

})

