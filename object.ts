/**
 * 接口：用于定义类的结构,规定一个类的实例中应该有哪些实例和方法
 */
interface props1 {
  name: string
  age: number
}

const ming: props1 = { age: 44, name: "11", sex: "male" }

/**
 * 接口是可以重复命名的，最终结果以所有重名的接口的合集为准
 */
interface props1 {
  sex: string
}

/**
 * 定义类的时候使用implements关键字实现接口
 */

class Person implements props1 {
  /**
   * ts新增机制，可以通过
   * public（公有，可以在任意地方访问），
   * private（私有，只能在本类使用）
   * protected（受保护，只能在当前类和子类中使用）
   * 限制属性的访问权限级别，规避对属性直接操作
   * 通过添加set/get方法，可以实现访问属性
   */

  // 使用接口的情况下，设置private会报错，怎么破？
  private _name: string
  private _sex: string
  protected _age: number
  constructor(name: string, age: number, sex: string) {
    // const { name, sex, age } = prop
    this._name = name
    this._age = age
    this._sex = sex
  }

  // set/get来设置私有属性，并且在赋值的时候能够实现逻辑控制
  get name(): string {
    return this._name
  }

  set name(v: string) {
    this._name = v
  }
  get sex(): string {
    return this._sex
  }

  set sex(v: string) {
    this._sex = v
  }
  get age(): number {
    return this._age
  }

  set age(v: number) {
    this._age = v
  }
}

class Man extends Person {
  constructor(name: string, age: number, sex = "male") {
    super(name, age, sex)
  }
}

let liao = new Man("liao", 18)
console.log(liao)

liao.name = "zz"
console.log(liao)

/**
 * 在定义函数或者类，如果类型不明确，就可以使用泛型
 *
 */
// 这种情况下，就可以限定传入的数据类型
const fun = <T>(a: T) => {
  console.log(a)
}

interface Kinter {
  length: number
}

// 我们也可以让泛型继承接口，保证传入的数据必须具有某些属性
// 此时传入的参数必须是一个具有length属性的参数
const fun1 = <K extends Kinter>(a: K): void => {
  console.log(a)
}

// 也可以在调用的时候指定传入的参数类型，而且这个类型必须
fun1<Array<string>>(["1"])

fun1({ length: 1 })
