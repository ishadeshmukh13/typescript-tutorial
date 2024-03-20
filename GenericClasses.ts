//in this you can return object multi value pass

const handleGeneriClasses=<T,U>(value1:T,value2:U):object=>{
return {
    value1,
    value2
}
}
handleGeneriClasses(3,2)
//in this pass second value only string if you pass any another type then it will showing error
const handleGeneriClasses2=<T,U extends string>(value1:T,value2:U):object=>{
    return {
        value1,
        value2
    }
    }
    handleGeneriClasses2(3,"jdh")

//in this pass second value only same database type if you pass any another type then it will showing error

interface Database{
    name:string
}
    const handleGeneriClasses3=<T,U extends Database>(value1:T,value2:U):object=>{
    return {
        value1,
        value2
    }
    }
    handleGeneriClasses3(3,{name:"ish"})

export{}
