// commonjs 模块化规范
const {sum,mul} =require('./matchUtils')

console.log(sum(2, 4));
console.log(mul(30, 5));

// ES6 模块化规范
import {name,age,mo} from "./info";
console.log(name, age,mo);