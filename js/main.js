let submit =document.querySelector(".submit");
let inputVal=document.getElementById("#email");
let error =document.querySelector(".error");
let span =document.querySelector("form span");
let emailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

submit.addEventListener("click" ,function(e){
    if (inputVal.value !== "" && emailValid.test(inputVal.value)){
    } else {
        
        console.log("error")
        error.style.setProperty("display" ,"block" ,"important");
        span.style.setProperty("display" ,"block" ,"important");
        e.preventDefault();
    }
});

inputVal.addEventListener("focus" ,function(){
    inputVal.value= ""
    error.style.setProperty("display" ,"none" ,"important");
    span.style.setProperty("display" ,"none" ,"important");
});


