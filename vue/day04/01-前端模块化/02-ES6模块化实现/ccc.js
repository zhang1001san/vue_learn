import {flag,sum} from './aaa.js'

if (flag){
  console.log('ccc:' + sum(3, 4));
}

import {num1,sunFun} from "./aaa.js";

console.log("ccc:"+num1);
console.log("ccc:" + sunFun(1, 5));


import {mul,Person} from "./aaa.js";

console.log("cccc：" + mul(2, 5));

let p=new Person("王五");
p.run();

// export default
// import addr from './aaa.js';
// console.log(addr);

import fun from './aaa.js';
fun("魔法师fun");