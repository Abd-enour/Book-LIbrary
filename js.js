let rate=document.getElementById("rateBook");
let radioBtn=document.querySelectorAll("[type='radio']");
let yesRadioBtn=radioBtn[0];
let noRadioBtn=radioBtn[1];
let closeForm=document.getElementById("closeForm");
let popUpField=document.getElementById("popUp");
let overlay=document.getElementById("overlay");
let container=document.getElementById("container");

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
    popUpField.style.cssText='scale:0';
    overlay.classList.remove("active");
};
let addToLibraryBtn= document.getElementById("add-btn");
addToLibraryBtn.onclick=()=>{
    overlay.classList.add('active');
    popUpField.style.cssText='z-index:1;animation:popUpField ease-out 400ms forwards';
}
let BookArray=[
    {
        title:'The Miricle Morning',
        author:'Pal Hal',
        pages:191,
        isRead:'Read',
        starsNbr:undefined,
    }
];
createCard(BookArray[BookArray.length-1].title,BookArray[BookArray.length-1].author,BookArray[BookArray.length-1].pages,BookArray[BookArray.length-1].isRead);

function createCard(BookTitle,Author,Pages,isRead){
    let index=BookArray.length-1;

    let cardContainer=document.createElement('div');
    cardContainer.setAttribute('class','card-container');
    container.appendChild(cardContainer);

    let theBack=document.createElement("div");
    theBack.setAttribute("class","theBack");
    cardContainer.appendChild(theBack);

    let bookInfo=document.createElement("div");
    bookInfo.setAttribute('class','book-info');
    theBack.appendChild(bookInfo);
    for (let i = 1; i<=4 ;i++) {
        if (i==1) {
            let abbr=document.createElement('abbr');
            abbr.setAttribute('title','BOOK Title');
            bookInfo.appendChild(abbr);
            abbr.textContent=BookTitle;
        }else if(i==2){
            let abbr=document.createElement('abbr');
            abbr.setAttribute('title','BOOK Author');
            bookInfo.appendChild(abbr);
            abbr.textContent=Author;
        }else if(i==3){
            let abbr=document.createElement('abbr');
            abbr.setAttribute('title','Number Of Pages');
            bookInfo.appendChild(abbr);
            abbr.textContent=Pages;
        }else{
            let abbr=document.createElement('abbr');
            abbr.setAttribute('title','Have you read it?');
            bookInfo.appendChild(abbr);
            abbr.textContent=isRead;
    }
    }
    let button=document.createElement('button');
    button.setAttribute('type','button');
    button.setAttribute('class','dlt-btn');
    button.setAttribute('data-event-click',"false");
    button.setAttribute('data-index',index);
    theBack.appendChild(button);
    button.textContent='Delete';
let deleteBtn=document.querySelectorAll('.dlt-btn');
Array.from(deleteBtn);
deleteBtn.forEach(function(btn){
    if(btn.dataset.eventClick ==="false"){
        btn.dataset.eventClick =true;
        btn.addEventListener('click',(e)=>{
            const cnt=Array.from(container.children);
            if(BookArray.length!==0){
            BookArray.splice(btn.dataset.index,1);
        for(let s=0;s<cnt.length;s++){
            // console.log(cnt[s]);
            cnt[s].remove();
        }
        for(let i =0 ;i<BookArray.length;i++){
            createCard(BookArray[i].title,BookArray[i].author,BookArray[i].pages,BookArray[i].isRead);
            console.log(index);
        }
       }   
   })}
})
}

function book(title,author,pages,isRead,starsNbr){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
    this.starsNbr=starsNbr;
}

let addBtn=document.querySelector("#input-field button");
addBtn.onclick=()=>{
    popUpField.style.cssText='animation:none; scale:0';
    overlay.classList.remove("active");

    let input=document.querySelectorAll('#input-field input');
    Array.from(input);
    if(input[0].value==="" || input[1].value==="" || input[2].value===""){
       return alert("You need to fill up the form");
    }else{
    let BookTitle=input[0].value;
    let Author=input[1].value;
    let Pages=input[2].value;
    if(input[3].checked){
         BookArray.push(new book(BookTitle,Author,Pages,"Read"));
         clearPopUpField(input);
    }else if(input[4].checked){
         BookArray.push(new book(BookTitle,Author,Pages,"is Read? No"));
         clearPopUpField(input);
    }else{
        BookArray.push(new book(BookTitle,Author,Pages,"is Read? Not Selected"));
        clearPopUpField(input);
    }
}
createCard(BookArray[BookArray.length-1].title,BookArray[BookArray.length-1].author,BookArray[BookArray.length-1].pages,BookArray[BookArray.length-1].isRead);
}
function clearPopUpField(input) {
    for(let i =0; i<=input.length-1;i++){
        input[i].value="";
     }
}