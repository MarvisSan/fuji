// nav- menu
if(window.innerWidth < 790){
    let activeMenu = false;
    document.getElementById('nav-btn').addEventListener('click', function(){
        console.log("true")
            if(activeMenu != true){
                let closeIc = document.querySelector('.nav-icon');
                closeIc.className = 'bi bi-x-lg nav-icon';
                closeIc.style.color = "tomato";
                document.querySelector('.nav-btn_css').style.width= "70px";
                document.querySelector('.nav').style.width = "180px";
                activeMenu = true;
            }
            else{
                console.log("false")
                document.querySelector('.nav').style.width = "0";
                let closeIc = document.querySelector('.nav-icon');
                closeIc.className = 'bi bi-list nav-icon';
                closeIc.style.color = " rgb(0, 242, 255)";
                document.querySelector('.nav-btn_css').style.width= "45px";
                activeMenu = false;
            }
    });
}


//scroll body 
window.addEventListener('scroll', reveal);
function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    for(let i = 0; i< reveals.length; i++){
        // lay chieu cao ben trong trinh duyet tinh bang pixel, luôn cố định
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;  
        // console.log(revealTop);
        // console.log(windowHeight);

        if(revealTop < windowHeight -100) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
} 
// about 
const aboutBtn = document.querySelectorAll('.btn');
let checkAboutBtn;
let btnClose;
let checkAbout = false;
aboutBtn.forEach(element => {
    element.addEventListener('click',()=>{
        let nameClass = element.parentNode.className.slice(0,5);
        let nameChild = (document.querySelector("[data-name=" + nameClass + "]").children[0]).className.slice(0,8);
        if(checkAbout === false){
                open(nameClass, nameChild);
        }
        else{ // btn dang mo 
            if(checkAboutBtn !== nameClass) {
                btnClose = checkAboutBtn; // cai truoc khac voi cai sau
                open(nameClass, nameChild) // mo cai moi va dong cai cu
                close(btnClose, nameChild);
                checkAbout = true;
            }else{ // cai moi va cai cu trung nhau
                console.log(nameClass)
                close(nameClass, nameChild);
               }
            }

        })
    } );
    function open(name, nameChild){
                btnClose = checkAboutBtn;
                document.querySelector("[data-name=" + name + "]").style.height ="300px"
                document.querySelector("[data-name = "+ nameChild +"]").children[1].style.overflow= "scroll"
                checkAboutBtn = name;
                checkAbout = true;
                console.log(nameChild)
    }
    function close (name, nameChild){
                console.log(name)
                document.querySelector("[data-name=" + name + "]").style.height ="180px"
                document.querySelector("[data-name = "+ nameChild +"]").children[1].style.overflow= "hidden"
                checkAbout = false;
                console.log("close true")
    }
// place visited
let downText = false;
 document.querySelector('.open-text').addEventListener('click',()=>{
    let  upDownIcon = document.querySelector('.up-down_icon');
    if(downText === false){
        document.querySelector('.img-tem').style.height ="0%";
        if(window.innerWidth >= 800){
            document.querySelector('.slider-content').style.width ="100%";
        }
        else{
            document.querySelector('.slider-content').style.height = "100%";
        }
        upDownIcon.className = "bi bi-arrow-down-circle up-down_icon";
        downText = true;
    }
    else{
        if(window.innerWidth >= 800){
            document.querySelector('.img-tem').style.height ="100%";
            document.querySelector('.slider-content').style.width = "55%";
            document.querySelector('.slider-content').style.height = "100%";
        }
        else{
            document.querySelector('.img-tem').style.height ="40%";
            document.querySelector('.slider-content').style.height = "60%";
        }
        upDownIcon.className = "bi bi-arrow-up-circle up-down_icon";
        downText = false;
    }
   

 });  // anh
const imgs =[];
for(let i = 0 ; i < 4; i++){
    imgs.push("licensed-image"+(i+1).toString()+".jpg");
}
    // ['img1', 'img2'] 0 , 1 
    // text
const textArr = ["Lake Yamanakako","Shosenkyo Gorge","Takeda Shrine","Oshino Hakkai"];
const textDeArr =[
    "Located in Yamanashi Prefecture, Lake Yamanakako is the third-highest lake in Japan and the largest one in the Fuji Five Lakes region. For great views of nearby Mount Fuji and a chance to enjoy the great outdoors, head to Lake Yamanakako any time of year The area surrounding Lake Yamanakako has attractions on all sides. Hana no Miyako Park is on the west side and offers lots of seasonal flora and fauna. Lying to the south are several restaurants and cafes while the east end offers fantastic views of the lake and Mount Fuji",
    "Located north of Kofu Station is Shosenkyo Gorge. Offering breathtaking views of the surrounding nature, curiously formed rock formations and Mount Fuji on a good day, a trip to Shosenkyo Gorge is a great way to spend half a day. Arguably one of the best times to visit would be in autumn when the trees are mixed with hues of reds, oranges and yellows.",
    "The Takeda clan were a significant family from the Heian period until the late 1500s. Ruling over Kai province, the historical name of Yamanashi prefecture, the Takeda clan is most famous for Takeda Shingen. Known as a formidable military tactician during the warring states period, he was feared for his use of cavalry in battle. The clan ultimately fell into decline, especially following their defeat at the hands of Oda Nobunaga, considered the first Great Unifier in Japanese history.",
    "The name Oshino Hakkai means eight seas of Oshino, referring to the eight ponds located in the Fuji Five Lake region. Many years ago, an eruption created a sixth lake at the northeastern foot of Mount Fuji, which gradually dried up. Still, these eight ponds remain and are filled with crystal-clear water filtered through several porous layers of lava stone."]
// slider
let img = document.querySelector('.slider-img');
let titleSlider = document.querySelector('.silder-title')
let i = 0;
function prev (){
    if(i <= 0) i = imgs.length; i--; // i = 0 --> i = 2 , i-- -> i = 1 ảnh cuối cùng
    return newImg(), newText();
}
function next (){
    if( i >= imgs.length -1) i = -1; i++; // 
    newImg(); newText();
}
function newImg (){
    let imgFather = document.querySelector('.img-tem');
    let imgSon = document.querySelector('.imgSon');

    imgFather.removeChild(imgSon);

    let newImg = document.createElement('img');
    newImg.src ="./assets/imagesVisted/"+imgs[i];
    newImg.alt = "place-visit";
    newImg.className = "imgSon";

    imgFather.append(newImg);

}

function newText(){
    let newTextS = document.createElement('h1');
    let newTextP = document.createElement('p');

    let textF = document.querySelector('.slider-content');
    let textTitle = document.querySelector('.slider-title');
    let textSP = document.querySelector('.silder-text');

    textF.removeChild(textTitle);
    textF.removeChild(textSP);

    newTextS.textContent = textArr[i];
    newTextP.textContent = textDeArr[i];
    newTextS.className = "slider-title";
    newTextP.className = "silder-text";
    textF.append(newTextS);
    textF.append(newTextP);
}
