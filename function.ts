function detail(name:string){
return name
}
function count(number:number){
    return number
    }
// detail(true)  it is show error because parameter define as a string 
detail("isha")
count(5)

// function signUpUser(email:string,password:string,isPaid:boolean){
//     let detail=`Email is ${email}  password is ${password} paid is ${isPaid}`;
//     return detail
// }

//this function is example for by default set value and also set what is return this function
function signUpUser(email:string,password:string,isPaid:boolean=false):string{
    let detail=`Email is ${email}  password is ${password} paid is ${isPaid}`;
    return detail
}
signUpUser("isha@gmail.com","isha@123")
signUpUser("isha@gmail.com","isha@123",true)

//Arrow function

const helloWorld=(s:string):string=>{
return "ishh"
}

// const data=["test","test1","test2"];  //it is automatic predict is this array is string[]
const data2=[1,2,3]; //it is automatic predict is this array is number[]
data2.map((item:number)=>{
    return item
}) 

//example of return never function
const error=(msg1:string):never=>{
    throw new Error(msg1)
}
//example of return void function
const nothingReturn=(msg1:string):void=>{
   console.log(msg1);
   
}
// complicated function in below function we can see that boolean and string return then what should we do



export {}