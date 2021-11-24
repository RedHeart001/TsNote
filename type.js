// ts可以进行字面量声明进行，例如：
var a;
a = 'male';
a = true; // 这也是合法的
//a = 1; 这就不合法了
// ts中，不声明一个变量的类型，那这个变量就是默认为any类型
var d;
d = 1;
d = true;
var e;
// 如果一个
e = d;
console.log(e);
