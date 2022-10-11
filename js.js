let rate=document.getElementById("rateBook");
let radioBtn=document.querySelectorAll("[type='radio']");
let yesRadioBtn=radioBtn[0];
let noRadioBtn=radioBtn[1];

function checkRadioButton(){
    let haveRead=document.getElementById("yes").checked;
    if(haveRead){
        console.log(`yes is being selected`);
        rate.classList.remove('hide');
    }else{
        console.log(`no is being selected`);
        rate.classList.add('hide');
    }
}
yesRadioBtn.onclick=()=>{
    checkRadioButton();
}
noRadioBtn.onclick=()=>{
    checkRadioButton();
}