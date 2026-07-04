const data={
date:"",
photo:"",
time:"",
food:"",
place:""
};

const picker=document.getElementById("datePicker");

picker.min=new Date().toISOString().split("T")[0];

const step1=document.getElementById("step1");

const step2=document.getElementById("step2");

const step3=document.getElementById("step3");

const step4=document.getElementById("step4");

const step5=document.getElementById("step5");

const circles=document.querySelectorAll(".circle");

const progress=document.querySelector(".progress-fill");

document.getElementById("nextBtn").onclick=()=>{

if(picker.value===""){

alert("Please choose a date ❤️");

return;

}

data.date=picker.value;

step1.classList.remove("active-step");

step2.classList.add("active-step");

circles[1].classList.add("active");

progress.style.width="50%";

};

document.querySelector(".backBtn").onclick=()=>{

step2.classList.remove("active-step");

step1.classList.add("active-step");

circles[1].classList.remove("active");

progress.style.width="25%";

};

let selectedTime="";

document.querySelectorAll(".time-card").forEach(card=>{

card.onclick=()=>{

document.querySelectorAll(".time-card").forEach(c=>{

c.classList.remove("selected");

});

card.classList.add("selected");

selectedTime=card.innerText;

data.time=selectedTime;

};

});

document.getElementById("timeNext").onclick=()=>{

if(selectedTime===""){

alert("Please select a time ❤️");

return;

}

step2.classList.remove("active-step");

step3.classList.add("active-step");

circles[2].classList.add("active");

progress.style.width="75%";

};

let selectedFood="";

document.querySelectorAll(".food-card").forEach(card=>{

card.onclick=()=>{

document.querySelectorAll(".food-card").forEach(c=>{

c.classList.remove("selected");

});

card.classList.add("selected");

selectedFood=card.innerText;

document.getElementById("customFood").value="";

};

});

document.getElementById("foodBack").onclick=()=>{

step3.classList.remove("active-step");

step2.classList.add("active-step");

circles[2].classList.remove("active");

progress.style.width="50%";

};

document.getElementById("foodNext").onclick=()=>{

const custom=document.getElementById("customFood").value.trim();

if(custom!=""){

data.food=custom;

}else{

data.food=selectedFood;

}

if(data.food==""){

alert("Please select a food ❤️");

return;

}

step3.classList.remove("active-step");

step4.classList.add("active-step");

circles[3].classList.add("active");

progress.style.width="100%";

};

document.getElementById("placeBack").onclick=()=>{

step4.classList.remove("active-step");

step3.classList.add("active-step");

circles[3].classList.remove("active");

progress.style.width="75%";

};

document.getElementById("placeNext").onclick=()=>{

const place=document.getElementById("placeInput").value.trim();

if(place===""){

alert("Please type a place ❤️");

return;

}

data.place=place;

document.getElementById("finalDate").innerText=data.date;

document.getElementById("finalTime").innerText=data.time;

document.getElementById("finalFood").innerText=data.food;

document.getElementById("finalPlace").innerText=data.place;

document.getElementById("cardDate").innerText=data.date;

document.getElementById("cardTime").innerText=data.time;

document.getElementById("cardFood").innerText=data.food;

document.getElementById("cardPlace").innerText=data.place;

if(data.photo){

    document.getElementById("downloadPhoto").src=data.photo;

}

step4.classList.remove("active-step");

step5.classList.add("active-step");

};

document.getElementById("celebrateBtn").onclick=()=>{

launchConfetti();

startHearts();

setTimeout(()=>{

downloadDateCard();

},2500);

}
function launchConfetti(){

confetti({

particleCount:180,

spread:120,

origin:{y:.6}

});

}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

}

function startHearts(){

let count=0;

const interval=setInterval(()=>{

createHeart();

count++;

if(count>35){

clearInterval(interval);

}

},120);

}

async function downloadDateCard(){

    const card=document.getElementById("downloadCard");

    const canvas=await html2canvas(card,{
        scale:2,
        useCORS:true,
        backgroundColor:null
    });

    const link=document.createElement("a");

    link.download="Our-Date.png";

    link.href=canvas.toDataURL("image/png");

    link.click();

}

const photoInput=document.getElementById("photoInput");

const preview=document.getElementById("previewImage");

photoInput.addEventListener("change",(e)=>{

const file=e.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(ev){

preview.src=ev.target.result;

data.photo=ev.target.result;

};

reader.readAsDataURL(file);

});

/*==========================
WELCOME SCREEN
==========================*/

const yesBtn=document.getElementById("yesBtn");

yesBtn.addEventListener("click",()=>{

    launchConfetti();

    startHearts();

    const welcome=document.getElementById("welcomeScreen");

    welcome.classList.add("hideWelcome");

});