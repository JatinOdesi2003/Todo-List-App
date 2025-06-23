let addbtn = document.querySelector(".adding");
let inptxt = document.querySelector(".input");
let unodrlist = document.querySelector("ul");
let para = document.querySelector('p');
let remall = document.querySelector('.remove-all');
let mainbox = document.querySelector('.Todo-mainbox');

unodrlist.classList.add('ulist');

let count = 0;

para.innerText = `You have ${count} tasks remaining...`;

addbtn.addEventListener("click", () => {

    count++;

    let listitem = document.createElement("li");
    let text = document.createElement("span");
    let delbtn = document.createElement("button");
    let poc = document.createElement('div');

    listitem.appendChild(text);
    listitem.appendChild(delbtn);
    listitem.appendChild(poc);

    poc.classList.add('popoc');

    text.style.textAlign = "center";

    let addtxt = inptxt.value;

    let characters = addtxt.split('');

    /*here condition should be put on text, according to the word count */
    if (characters.length > 15){
        for (let i = 0; i < 10; i++){
            text.innerText = text.innerText + characters[i];
        }
        text.innerText = text.innerText + '...';

        /* pop up window for the long text */
        poc.addEventListener("click", () => {
            console.log('hello');
            let blurbox = document.createElement('div');
            let popupbox = document.createElement('div');
            let popuptext = document.createElement('div');
            let closebtn = document.createElement('button');

            mainbox.appendChild(blurbox);
            mainbox.appendChild(popupbox);
            popupbox.appendChild(closebtn);
            popupbox.appendChild(popuptext);

            blurbox.classList.add('blureffect');
            popupbox.classList.add('popupwindow');
            closebtn.classList.add('popupclose');
            popuptext.classList.add('poptext');

            closebtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
            popuptext.innerText = addtxt;

            closebtn.addEventListener("click", () => {
                blurbox.classList.remove('blureffect');
                popupbox.classList.remove('popupwindow');
                popuptext.classList.remove('poptext');
                popuptext.innerText = '';
                closebtn.remove();
            })
        })

    } else {
        text.innerText = addtxt;
    };

    delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    unodrlist.appendChild(listitem);

    delbtn.classList.add('delbtn');
    listitem.classList.add('listitem-style');

    inptxt.value = '';

    para.innerText = `You have ${count} tasks remaining...`;

    delbtn.addEventListener("click", () => {
        listitem.remove();
        count--;
        para.innerText = `You have ${count} tasks remaining...`;
    })
    
});

remall.addEventListener("click", () => {
    unodrlist.innerHTML = '';
    para.innerText = `You have ${0} tasks remaining...`;
    count = 0;
})
