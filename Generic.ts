//In this if we add type and then if you write string then return string and same type return S

function handleType<Type>(value:Type):Type{
    return value
}
//same pattern 
function handleType2<T>(value:T):T{
    return value
}
handleType("ish")
handleType(9)

interface Bootle{
    name:string,
    score:number
}

function handleType3<Bootle>(value:Bootle):Bootle{
    return value
}

handleType3({
    name:"ish",
    score:34
})

const score:Array<string>=[];

//in this function pass array but return only same type of one value not all array 
function handleArray<T>(arr:T[]):T{
    return arr[3];
}
//in this function pass array but return only same type of one value not all array  (arrow function)
const handleArray2=<T>(arr:T[]):T=>{
    return arr[3];
}
handleArray([3,53,3])



export {}
