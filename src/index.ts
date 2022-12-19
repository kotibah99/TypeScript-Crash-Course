//Basic type 
let id : number = 5 
let company : string = 'kotibah_4_IT'
let isPublish : boolean = true 
let x:any = 'hello'
let age : number = 5
//////////////////////*/////////////////

//Array 
let ids : number[] = [1,2,3,4,5]
let arr : any[] = [1,'hello',true]

//Tuple 
let person : [number , boolean ,string] = [1 , true , 'hello'] 
//Tuple Array 
let employee : [number , string][]
employee = [
    [1 , 'kotibah_4_IT'],
    [2 , 'kotibah_4_IT'],
    [3, 'kotibah_4_IT'],
]

//Union 
let pid : string | number =22

//Enum
enum direction {
    up,
    bottom,
    left,
    right
}
 
//objects 
const user :{
    id :number ,
    name : string
} =
{
    id : 2 ,
    name :'kotibah'
}
// Type Assertion 
let cid : any =1 
//let customerId = <number> cid
let customerId = cid as number 

//Functions 
function addNumber(x:number,y :number):number
{
    return x+y 

}
console.log(addNumber(1,2))

//interface
interface UserInterface
{
    id : number ,
    name : String
    age?  : number //? اختياري
}
const user1 :UserInterface = 
{
    id : 1, 
    name : 'kotibah'
}
//interface Function 
interface MathFunc {
    (x:number ,y:number):number
}
const add : MathFunc = (x:number , y:number):number => x+y
const sub : MathFunc = (x:number , y:number):number => x-y
interface PersonInterface {
    id: number
    name: string
    register(): string
  }
  
  // Classes
  class Person implements PersonInterface {
    id: number
    name: string
  
    constructor(id: number, name: string) {
      this.id = id
      this.name = name
    }
  
    register() {
      return `${this.name} is now registered`
    }
  }
  
  const brad = new Person(1, 'kotibah ')
  const mike = new Person(2, 'mohamad')
  
  // Subclasses
  class Employee extends Person {
    position: string
  
    constructor(id: number, name: string, position: string) {
      super(id, name)
      this.position = position
    }
  }
  
  const emp = new Employee(3, 'kotibah', 'Developer')
  
  // Generics
  function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
  }
  
  let numArray = getArray<number>([1, 2, 3, 4])
  let strArray = getArray<string>(['kotibah_4_IT', 'kotibah', 'rammah'])
  
