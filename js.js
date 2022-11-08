let rate=document.getElementById("rateBook");
let radioBtn=document.querySelectorAll("[type='radio']");
let yesRadioBtn=radioBtn[0];
let noRadioBtn=radioBtn[1];
let closeForm=document.getElementById("closeForm");
let popUpField=document.getElementById("popUp");
let overlay=document.getElementById("overlay");
let main =document.getElementsByTagName('main');

function checkRadioButton(){
    let haveRead=document.getElementById("yes").checked;
    if(haveRead){
        rate.classList.remove('hide');
    }else{
        rate.classList.add('hide');
    }
}
yesRadioBtn.onclick=()=>{
    checkRadioButton();
}
noRadioBtn.onclick=()=>{
    checkRadioButton();
}
closeForm.onclick=()=>{
    popUpField.remove();
    overlay.classList.remove("active");
};

// function book(title,author,pages,isRead,starsNbr){
//     this.title;
//     this.author;
//     this.pages;
//     this.isRead;
//     this.starsNbr;
// }

let form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newForm= new FormData(form);
    const obj= Object.fromEntries(newForm)
    console.log(obj);
});

let addToLibraryBtn= document.getElementById("add-to-library-btn");

addToLibraryBtn.onclick=()=>{
    createCard();
}

function createCard(){
    let cardContainer=document.createElement('div');
    cardContainer.setAttribute('class','card-container');
    main[0].appendChild(cardContainer);

    let theCard=document.createElement('div');
    theCard.setAttribute('class','the-card');
    cardContainer.appendChild(theCard);

    let theFront=document.createElement("div")
    theFront.setAttribute("class","theFront");
    theCard.appendChild(theFront);

    let img=document.createElement('img');
    img.setAttribute('src','');
    img.setAttribute('alt','Book image');
    theFront.appendChild(img);
    let theBack=document.createElement("div");
    theBack.setAttribute("class","theBack");
    theCard.appendChild(theBack);

    let bookInfo=document.createElement("div");
    bookInfo.setAttribute('class','book-info');
    theBack.appendChild(bookInfo);
    for (let i = 1; i<=3 ;i++) {
        if (i==1) {
            let abbr=document.createElement('abbr');
            abbr.setAttribute('title','BOOK Title');
            bookInfo.appendChild(abbr);
        }else if(i==2){
            let abbr=document.createElement('abbr');
            abbr.setAttribute('title','BOOK Author');
            bookInfo.appendChild(abbr);
    }else{
        let abbr=document.createElement('abbr');
            abbr.setAttribute('title','Number Of Pages');
            bookInfo.appendChild(abbr);
    }
    }
    let button=document.createElement('button');
    button.setAttribute('type','button');
    theBack.appendChild(button);
    button.textContent='Delete';
}