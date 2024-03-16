
type cradNumber={
    card_number:number;
}
type cradHolderName={
    card_holder_name:string;
}

type cardDetails=cradNumber & cradHolderName &{
card_expiry_date:string 
}
type objectUser={
first_name:string;
last_name:string;
isActive:boolean;
}

function handleUserDetail(user:objectUser):objectUser{
   return user;
}
const user={
    first_name:"ish",
    last_name:"ish",
    isActive:true,
}
handleUserDetail(user)


type objectUserCreate={
   readonly _id:string;
    first_name:string;
    isActive:boolean;
    credit_number?:number;    // if user can pass then it will be great other wise code as well run because this is optional variable
}

const userDetailsForAccount:objectUserCreate={
    _id:"",
    first_name:"",
    isActive:true,
}
// userDetailsForAccount._id=12345   you can not change because _id is readonly variable
userDetailsForAccount.first_name="dummy"
export{}