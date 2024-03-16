type user={
    name:string;
    number:number
}
let userDetails:Array<user>=[]
let userDeatils2:number[][]=[]
userDeatils2.push([3,4])

// userDeatils2.push("") this will showinng error because userDeatils type number array array so you can not push string and anything is  in this array

// userDetails.push("") this will showinng error because userDeatils type user array so you can not push number and anything is  in this array
userDetails.push({
    name:"ish",
    number:2345678
})


let number:Array<number> =[2,4];
// number.push("")   this will showinng error because number type number array so you can not push string and anything is  in this array

export {}