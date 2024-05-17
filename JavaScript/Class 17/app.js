/*
onclick
onmouseout
onmouseover
onfocus
onblur

*/
function displayMsg() {
    console.log("Hello Display Message");
}

function divertUser(url) {
    location = url;
}

const imageURL = "https://i.ytimg.com/vi/SjohqtGVZeo/maxresdefault.jpg";
const originalURL = "https://feeds.abplive.com/onecms/images/uploaded-images/2021/08/13/7d11889aea6d9c2c770a7db462cbf310_original.jpg?impolicy=abp_cdn&imwidth=720";

function replaceImage(el) {
    if (el.src === imageURL) return;
    el.src = imageURL;
}

function revertOriginalImage(el) {
    if (el.src === originalURL) return;
    el.src = originalURL;
}























let cityForm = document.querySelectorAll('.city-name');
let provinceForm = document.querySelectorAll('.province-name');

function autoFillProvince() {
    let city = cityForm[0].value.toLowerCase();
    let province;
    switch (city) {
        case "karachi":
            province = "Sindh";
            break;
        case "lahore":
            province = "Punjab";
            break;
        case "quetta":
            province = "Balochistan";
            break;
        case "peshawar":
            province = "KP";
            break;
        case "skardu":
            province = "Gilgit Baltistan";
            break;
        default:
            province = 'Capital';
    }
    provinceForm[0].value = province;
}







let helpPara = document.querySelectorAll('.dummy-para');
function displayHelp() {
    helpPara[0].innerHTML = "Please fill a capital city name.";
    setTimeout(function () {
        helpPara[0].innerHTML = "";
    }, 5000);
}







function changeColor(el) {
    let sec = new Date().getSeconds();
    if (sec % 2 !== 0) {
        el.style.color = 'red';
    }
    else {
        el.style.color = 'blue';
    }

    el.className += " success";

}










// setTimeout(function () {
//     alert('this is settimeout function');
// }, 3000);
let i = 10;
setInterval(function () {
    console.log(i--);
}, 1000);
