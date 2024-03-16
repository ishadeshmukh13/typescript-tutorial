interface UserDetails {
    readonly _id: number;
    userFirstName: string;
    userMiddleName?: string;
    userLastName: string;
    isActive: boolean;
    userDetail(): {
        userFirstName: string;
        userLastName: string;
    };
    handleActivePart(active:boolean):string
}

// in this all property extends from above UserDetails
interface UserDetails{
role:"Adopter" |"Rescuer"  
}

// interface has one property  which is extends in this property we can
//  extend one interface in this which interface we will extend then all property inherit

interface admin extends UserDetails{
     readonly user_id:number
} 

let details: admin = {
    _id: 23,
    user_id:23,
    userFirstName: "ish",
    userLastName: "ish",
    role:"Adopter",
    isActive: false,
    userDetail: function () {
        return {
            userFirstName: this.userFirstName,
            userLastName: this.userLastName
        };
    },
    handleActivePart:function(active:true){
        return `${this.userFirstName} is ${this.isActive ? "online":"offline"}`
    }
};

details['userMiddleName'] = "ish";

console.log(details.userDetail()); 
details['userMiddleName']="ish"
// details['_id']="izh"   it will be showing error because it is only readonly value you can not change
export {}