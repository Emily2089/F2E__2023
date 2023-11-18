let donatePage = document.getElementById("donate__page");
let donatePlan = document.getElementById("donate__plan");
let donateAmount = document.getElementById("donate__amount");
let donatePeople = document.getElementById("donate__people");

let donateInterface = document.getElementById("donate__interface");
let donateInterPlan = document.getElementById("donate__interface-plan");
let donateInterPeople = document.getElementById("donate__interface-people");
let donateInterAmount = document.getElementById("donate__interface-amount");
let donateInterImg = document.getElementById("donate__interface-img");

let donateSuccess = document.getElementById("donate__success");

donatePage.style.backgroundImage = 'url("/donate-600-1.png")';


document.getElementById("donate__btn-right").onclick = function(){
    if(donatePage.style.backgroundImage === 'url("/donate-600-1.png")'){
        donatePage.style.backgroundImage = "url('/donate-6000.png')";
        donatePlan.innerText = "喵星大使";
        donateAmount.innerText = "NT$ 6,000";
        donatePeople.innerText = "已有 2,000 人贊助";
    }else if(donatePage.style.backgroundImage === 'url("/donate-6000.png")'){
        donatePage.style.backgroundImage = "url('/donate-60000.png')";
        donatePlan.innerText = "喵星傳奇";
        donateAmount.innerText = "NT$ 60,000";
        donatePeople.innerText = "已有 999 人贊助";
    }else{
        donatePage.style.backgroundImage = "url('/donate-600-1.png')";
        donatePlan.innerText = "喵星人之友";
        donateAmount.innerText = "NT$ 600";
        donatePeople.innerText = "已有 9,957 人贊助";
    }
}
document.getElementById("donate__btn-left").onclick = function(){
    if(donatePage.style.backgroundImage === 'url("/donate-600-1.png")'){
        donatePage.style.backgroundImage = "url('/donate-60000.png')";
        donatePlan.innerText = "喵星傳奇";
        donateAmount.innerText = "NT$ 60,000";
        donatePeople.innerText = "已有 999 人贊助";
    }else if(donatePage.style.backgroundImage === 'url("/donate-6000.png")'){
        donatePage.style.backgroundImage = "url('/donate-600-1.png')"
        donatePlan.innerText = "喵星人之友";
        donateAmount.innerText = "NT$ 600";
        donatePeople.innerText = "已有 9,957 人贊助";
    }else{
        donatePage.style.backgroundImage = "url('/donate-6000.png')";
        donatePlan.innerText = "喵星大使";
        donateAmount.innerText = "NT$ 6,000";
        donatePeople.innerText = "已有 2,000 人贊助";
    }
}

document.getElementById("btn-open-donate").onclick = function(){
    donateInterface.style.display = "flex";
    if(donatePage.style.backgroundImage === 'url("/donate-600-1.png")'){
        donateInterImg.src = "/donate-interface-600.png";
        donateInterPlan.innerText = "喵星人之友";
        donateInterAmount.innerText = "NT$ 600";
        donateInterPeople.innerText = "已有 9,957 人贊助";
    }else if(donatePage.style.backgroundImage === 'url("/donate-6000.png")'){
        donateInterImg.src = "/donate-interface-6000.png";
        donateInterPlan.innerText = "喵星大使";
        donateInterAmount.innerText = "NT$ 6,000";
        donateInterPeople.innerText = "已有 2,000 人贊助";
    }else{
        donateInterImg.src = "/donate-interface-60000.png";
        donateInterPlan.innerText = "喵星傳奇";
        donateInterAmount.innerText = "NT$ 60,000";
        donateInterPeople.innerText = "已有 999 人贊助";
    }
}
document.getElementById("btn-close-inter").onclick = function(){
    donateInterface.style.display = "none";
}

document.getElementById("btn-donate").onclick = function(){
    if(document.getElementById("check__statement").checked === true){
        donateSuccess.style.display = "flex";
    }else{
        alert("捐款前請先閱讀捐款聲明");
    }
    
}
document.getElementById("btn-close-success").onclick = function(){
    donateSuccess.style.display = "none";
}
document.getElementById("btn-home").onclick = function(){
    donateSuccess.style.display = "none";
    donateInterface.style.display = "none";
    document.getElementById("check__statement").checked = false;
}

document.getElementById("donate__statement").onclick = function(){
    document.getElementById("donate__instruction").style.display = "flex";
}
document.getElementById("btn-close-instruction").onclick = function(){
    document.getElementById("donate__instruction").style.display = "none";
}