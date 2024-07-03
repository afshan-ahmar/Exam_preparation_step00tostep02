#!/usr/bin/env node

// HELLO WORLD
let message = "HELLO, WORLD!";
console.log(message);
//JSON_objects



// JSON_OBJECT
function user(std_id:number,name:string,age:number,gender:string,course:string){
    return{
        STUDENT_ID:std_id,
        NAME:name,
        AGE:age,
        GENDER:gender,
        COURSE:course
    }
}
console.log(user(12723,"AFSHAN AHMAR",34,"female","GIAIC"));
//SYNTAX ERROR
lett message="Pakistan"
console.logg(message);

//TYPE ERROR
//introduce a syntax error
let a:number=7;
let b:string="iraq";
let c:number=true;
console.log(iraq,"6",false");

//ASSIGNABILITY ERROR//NUMBER NOT ASSIGNED
let msg="good morning";
msg=7;
console.log(msg);

//never use two variable with same name
let myName="afshan";
let myName="ifra";
console.log(myName);
