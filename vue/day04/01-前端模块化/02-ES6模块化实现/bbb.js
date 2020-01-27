import {sum} from './aaa.js'
var name='李四';
var flag=false;

console.log("bbb：" + sum(1, 4));

// 统一全部导入
import * as info from './aaa.js'

console.log("bbb："+info.mul(2, 5));


