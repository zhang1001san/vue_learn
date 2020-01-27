var moduleA=(function () {
  var name='小明'

  var flag=true;
  function sum(num1,num2){
    return num1+num2;
  }
  console.log(sum(1, 2));
  var obj={};
  obj.flag=flag;
  obj.sum=sum;
  return obj;
})();