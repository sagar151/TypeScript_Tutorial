// number
let age:number=20;
console.log(age)

// string
let emp_name: string="Sagar Gajera";
console.log(emp_name)

// array
let emp_id:number[]=[23,44,56]
console.log(emp_id)
// emp_id[0]=''   // Error: Type 'string' is not assignable to type 'number'.

// boolean
let isValidId:boolean=false;
console.log(isValidId)

// tuples
let user:[number,string]=[1,'Sagar'] // Note: It only use full with 2 element just like key value pair best practice is to use only 2 element
// user.push(1) //Worded but need to fix this on TypeScript side
console.log(user)

// enums
// enum  Size { small=0, medium=1, large=2} // number value
enum  Size { small='s', medium='m', large='l'} // string value
let mySize: Size= Size.medium;  // to use enum
console.log(mySize)

// function
function calculateTax1(income : number) : void { console.log(income) } // when we not need to return anything then give type void
calculateTax1(23000)

function calculateTax2(income : number) : number {
  if(income<2000) return income*0.29  // only when If Error: Function lacks ending return statement and return type does not include 'undefined'.
  else return  income*0.45
}
console.log(calculateTax2(23000))

function calculateTax3(income : number,taxYear?:number) : number {  //Note When taxYear is not passed then goes to else case best to assign default value to params
      if(taxYear<2024) return income*0.29
      else return  income*0.45
}
console.log(calculateTax3(23000,2023))

// Objects
let employee1={
    id:1
}
employee1.name='Sagar'  // Error: Property 'name' does not exist on type '{ id: number; }'

type Employee={
    readonly id: number,
    name: string,
    retire: (date: Date)=> void,
    isActive?: boolean  // ? is used for option is it is not present on object then works
}
let employee2:Employee={ // Type object
    id: 1,
    name:'Sagar',
    retire: (date: Date)=>{
        console.log(date)
    }
}
// employee2.id = 234 // Error: Cannot assign to 'id' because it is a read-only property


// Union Type
function kgToLb(weight: number | string) : number{
    if(typeof weight==='number'){
        return weight* 2.2;
    } else {
        return parseInt(weight)*2.2
    }
}
kgToLb(10)   // both works we can pass two number or string
kgToLb('10kg')

// Intersection Type
type Draggable={
    drag:()=>void
}
type Resizable={
    resize:()=>void
}
type UIWidget= Draggable & Resizable;
let textBox: UIWidget = {
    drag: ()=>{},
    resize: ()=>{}
}

// Literal Type (exact, specific)
let quantity: 50 | 100 = 100; //works
type Quantity=50 | 100
let quantity:Quantity = 110; //Gives error
type Quantity='inch' | 'cm'
let quantity:Quantity = 110; // also work with string value

// Nullable Type
function kgToLb(name:string) {
    console.log(name.toString())
}
kgToLb(null)   // Not works gives error for Null value

function kgToLb(name:string | null | undefined) {
    if(name){
        console.log(name.toString())
    } else  {
        console.log('Hello TypeScript')
    }
}
kgToLb(null)   // Now works with null and undefined value
kgToLb(undefined)




