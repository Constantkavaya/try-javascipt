
function user(password){
    if(password<123){
        return "access accepted";
    }
    else if(password>123){
        return "access denied"
    }
    else{
    console.log("The account is blocked")
    }
}
console.log(user(81))
console.log(user(54455566667))



let name=prompt("what is your real n name?");
switch(name){
    case"judith":
        console.log("welcome to Javascipt class");
        break;
    case "constance":
        console.log("you are not welcomed to javascript class")
        break;

}

