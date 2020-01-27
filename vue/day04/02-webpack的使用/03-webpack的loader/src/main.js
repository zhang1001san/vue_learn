// 1.commonjs 模块化规范
const {sum,mul} =require('./js/matchUtils')

console.log(sum(2, 4));
console.log(mul(30, 5));

// 2.ES6 模块化规范
import {name,age,mo} from "./js/info";
console.log(name, age,mo);

// 3.引入css
require("./css/normal.css")

// 4.依赖less
require("./css/specail.less")