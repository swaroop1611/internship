let isValidBody= function(body){
    return Object.keys(body).length>0;
};
const isValid=function(value){
    if(typeof value==="undefined"||value===null)return false;
    if(typeof value==="string"&&value.trim().length===0)return false;
    if(typeof value===Number&&value.trim().length==0)return false;
    return true;
};
module.exports={isValidBody, isValid};



let isValidName = /^[a-zA-Z]*$/;
let isValidEmail=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
let isValidMobile = /^(?:(?:\+|0{0,2})91[\s\-]?)?([6-9]\d{9})$/;


module.exports = {isValidBody,isValid,isValidName,isValidEmail,isValidMobile};