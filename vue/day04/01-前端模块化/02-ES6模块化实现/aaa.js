var name = '张三';
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log('aaa:' + sum(1, 2));
}

// 1.第一种导出方式
export {
  flag,
  sum
}
// 2.第二种导出方式
export  let num1=10;
export let sunFun=sum;

// 3.导出函数/类
export function mul(num1,num2) {
  return num1*num2;
}
export class Person {
  constructor(name) {
    this.name=name;
  }
  run(){
    console.log(this.name + " 在run");
  }
}

// export default在同-一个模块中,不允许同时存在多个。
// const  address='深圳'
// // 只有一个export default.import的时候可以随便起名字
// export default address;

export default function (arg) {
  console.log(arg);
}