let checkbox=document.querySelector("[type='checkbox']");
let closeForm=document.getElementById("closeForm");
let popUpField=document.getElementById("popUp");
let overlay=document.getElementById("overlay");
let container=document.getElementById("container");
let isRead=document.getElementById("isRead");

function checkBoxButton(changeStatus){
    let isChecked=document.getElementById("isRead").checked;
    if(isChecked){
        changeStatus.classList.add('read');
        changeStatus.textContent="Read";
    }else{
        changeStatus.classList.add('not-read');
        changeStatus.textContent='Not Read';
    }
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
        isRead:true,
        starsNbr:undefined,
    }
];
createCard(BookArray[BookArray.length-1].title,BookArray[BookArray.length-1].author,BookArray[BookArray.length-1].pages,BookArray[BookArray.length-1].isRead,0);

function createCard(BookTitle,Author,Pages,isRead,index){
    this.index=index;

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
        let changeStatus=document.createElement('button');
        changeStatus.setAttribute('type','button');
        changeStatus.setAttribute('data-event-click',"false");
        theBack.appendChild(changeStatus);
        if(BookArray[index].isRead !== undefined && BookArray[index].isRead !==false){
            changeStatus.textContent="Read";
            changeStatus.classList.add('read');
        }else{
        checkBoxButton(changeStatus);
        }
        changeStatus.addEventListener('click',()=>{
            if(BookArray[index].isRead){
                BookArray[index].isRead=false;
                changeStatus.classList.add('not-read');
                changeStatus.classList.remove('read');
                changeStatus.textContent='Not Read';
            }else{
                BookArray[index].isRead=true;
                changeStatus.classList.add('read');
                changeStatus.classList.remove('not-read');
                changeStatus.textContent="Read";
            }
        });
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
            cnt[s].remove();
        }
        index=0;
        for(let i =0 ;i<BookArray.length;i++){
            createCard(BookArray[i].title,BookArray[i].author,BookArray[i].pages,BookArray[i].isRead,index);
            index++;
        }
       }   
   })}
})
}

function book(title,author,pages,isRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
}

let addBtn=document.querySelector("#input-field button");
addBtn.onclick=()=>{
    let input=document.querySelectorAll('#input-field input');
    Array.from(input);
    if(input[0].value==="" || input[1].value==="" || input[2].value===""){
       return alert("You need to fill up the form");
    }else{
        popUpField.style.cssText='animation:none; scale:0';
        overlay.classList.remove("active");
    let BookTitle=input[0].value;
    let Author=input[1].value;
    let Pages=input[2].value;
    if(checkbox.checked){
         BookArray.push(new book(BookTitle,Author,Pages,true));
         createCard(BookArray[BookArray.length-1].title,BookArray[BookArray.length-1].author,BookArray[BookArray.length-1].pages,BookArray[BookArray.length-1].isRead,BookArray.length-1);
         clearPopUpField(input);
    }else{
        BookArray.push(new book(BookTitle,Author,Pages,false));
        createCard(BookArray[BookArray.length-1].title,BookArray[BookArray.length-1].author,BookArray[BookArray.length-1].pages,BookArray[BookArray.length-1].isRead,BookArray.length-1);
        clearPopUpField(input);
    }
}
}
function clearPopUpField(input) {
    for(let i =0; i<=input.length-1;i++){
        input[i].value="";
     }
}