let hh2= document.querySelector("#btn1");
let currMod="light";

function changeMod(){
    console.log(alert("Mode will change"));
    if(currMod=="light"){
       currMod="dark";
       document.querySelector("body").style.backgroundColor ="black";
    }
    else{
        currMod="light"
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currMod);
}
hh2.addEventListener("click", changeMod);