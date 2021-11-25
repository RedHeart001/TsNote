// ts可以进行字面量声明进行，例如：
let a: "male" | true
a = "male"
a = true // 这也是合法的
//a = 1; 这就不合法了

// ts中，不声明一个变量的类型，那这个变量就是默认为any类型
let d

d = 1
d = true

let e: string
// 如果一个变量类型是any，那么它此时可以给任意类型变量赋值，并且不会报错
e = d

let f: unknown

// 尽管unknow具有和any相同的可以被赋予任意类型值的特性，但它无法给其他类型变量赋值
f = "hello"
e = f

// 然而unknown实际上是一个类型的“安全缓冲区”，在确定类型的前提下，可以赋值给其他类型变量
if (typeof f == "string") {
  e = f
}

// 或者也可以这样整

e = f as string
e = <string>f

//这两种写法的效果是一样的，这种方式也被称为断言，用来告诉解析器变量的实际类型

// void和nerver主要是用在函数上，前者表示返回为空，后者表示无返回

const fn = (): void => {
  // 这两种写法都是合法的
  return undefined
  return null
}

// 返回为never类型的函数连空都不返回了，因为它是专门用来抛出错误的
const fn2 = (): never => {
  throw new Error("this is a error")
}

// {} 用来指定对象中可以包含的属性,如 {name:string}

let obj: { name: string };

obj = { name: 'liao' };

obj = {}; //  为空则报错，必须要传入name

// 但是上面的写法同时也限定了只能对象中插入name属性，不能再多，多了就会报错
obj = { name: 'aaa', age: 11 }

// 对于这种只要求传入特定属性，其余属性不论的需求，可以这样传入

let obj1: { name: string, [propName: string]: any }
// 这种写法就相当于是只有name是必传的，其余的属性可传可不传
obj1 = { name: 'aaa', age: 11 }

// 而对于函数，这种写法也限定了传入参数和返回的格式，后面的省略参数则是拓展参数，保证函数可以传入不止a和b两个参数
let fn3: (a: number, b: number, ...rest: any) => number;
fn3 = (a, b, c: string) => (a + b)

// 数组声明
/**
 * type[]
 * 或
 * Array<type>
 */

let arr: number[]
let arr2: Array<number>

// Tuple（元组），固定长度的数组