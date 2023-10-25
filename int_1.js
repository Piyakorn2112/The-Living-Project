
var redShort = document.querySelectorAll(".short_img_red")
var redLong = document.querySelectorAll(".long_img_red")
var indicate = document.querySelectorAll(".indicate")
var Par_size = document.querySelectorAll(".Parrax");
function activate(buttonIndex){

  if (indicate[buttonIndex].innerHTML === "passive"){
    redShort[buttonIndex].classList.add("short_img_red_active")
    redShort[buttonIndex].classList.remove("short_img_red1:hover")
    /*redLong[buttonIndex].classList.add("long_img_red_active")*/
    indicate[buttonIndex].innerHTML = "active"
  }
  else if (indicate[buttonIndex].innerHTML === "active"){
    redShort[buttonIndex].classList.remove("short_img_red_active")
    /*redLong[buttonIndex].classList.remove("long_img_red_active")*/
    indicate[buttonIndex].innerHTML = "passive"
  }


 

}



var Parrax_at = 1
var active_at = 1
var Menu1 = document.querySelector(".Menu1")
var Menu2 = document.querySelector(".Menu2")
var Menu3 = document.querySelector(".Menu3")
var Menu4 = document.querySelector(".Menu4")
var Menu5 = document.querySelector(".Menu5")
var Menu6 = document.querySelector(".Menu6")
var Ind = document.querySelectorAll(".Inds")
function M0 (buttonIndex) {
 
if (Ind[buttonIndex].innerHTML === "press"){
  Ind[buttonIndex].innerHTML = "pressed"
  Menu1.classList.remove("Menu_button_passive")
  Menu2.classList.remove("Menu_button_passive")
  Menu3.classList.remove("Menu_button_passive")
  Menu4.classList.remove("Menu_button_passive")
  Menu5.classList.remove("Menu_button_passive")
  Menu6.classList.remove("Menu_button_passive")

}
else if ( Ind[buttonIndex].innerHTML === "pressed"){
  Ind[buttonIndex].innerHTML = "press"
  Menu1.classList.add("Menu_button_passive")
  Menu2.classList.add("Menu_button_passive")
  Menu3.classList.add("Menu_button_passive")
  Menu4.classList.add("Menu_button_passive")
  Menu5.classList.add("Menu_button_passive")
  Menu6.classList.add("Menu_button_passive")
}
}

function M1(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
    Ind[buttonIndex].innerHTML = "pressed"
    Menu1.classList.remove("Menu_button_active")
    Parrax_at = 0
    console.log(Parrax_at)
}
else if ( Ind[buttonIndex].innerHTML === "pressed"){
  Ind[buttonIndex].innerHTML = "press"
  Menu1.classList.add("Menu_button_active")
  Parrax_at = 1
}
}

function M2(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
 
    Menu2.classList.add("Menu_button_active")
    Menu3.classList.remove("Menu_button_active")
    Menu4.classList.remove("Menu_button_active")
    active_at = 0
}
}

function M3(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
  
    Menu3.classList.add("Menu_button_active")
    Menu2.classList.remove("Menu_button_active")
    Menu4.classList.remove("Menu_button_active")
    active_at = 1
}
}


function M4(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
  
    Menu4.classList.add("Menu_button_active")
    Menu2.classList.remove("Menu_button_active")
    Menu3.classList.remove("Menu_button_active")
    active_at = 2
}
}



setInterval(function(){
  let i = Math.floor((Math.random() * 5) -1);
  let index = Math.floor((Math.random() * 65) + 1);
  let p1 = Math.floor((Math.random() * 65) + 1);
  let m1 = Math.floor((Math.random() * 3) + 1);

  function containActive (index){
    if ( Contain[index].dataset.sizes <= 5) {
      Contain[index].style.scale = parseFloat(Contain[index].style.scale) + 0.1
      Contain[index].dataset.sizes = parseInt(Contain[index].dataset.sizes) + 1
      }
      else {
       Contain[index].style.scale = parseFloat(Contain[index].style.scale) - 0.5
       Contain[index].dataset.sizes = parseInt(Contain[index].dataset.sizes) - 5
      }
      //console.log(Contain[index].style.scale, "owo", index, Contain[index].dataset.sizes)
  }

  if (i <=  1 && (active_at === 1 || active_at === 2)){
    activate(Math.abs(index - p1))
    containActive(Math.abs(index - p1))
    setTimeout(function(){
      activate(Math.abs(index/3 +p1 -m1))
     containActive(Math.abs(index - p1))
   
     
    },index*2+1400)
  }
  if (i <=  2 && active_at === 2){
    setTimeout(function(){
    activate(Math.abs(index - p1*m1 ))
    containActive(Math.abs(index - p1*m1 ))
    setTimeout(function(){
      containActive(Math.abs(index -parseInt(p1/2) +m1))
      activate(Math.abs(index -parseInt(p1/2) +m1))
      },index*2+1900)
    },1200)
  }
  if (i <=  3 && (active_at === 1 || active_at === 2)){
    setTimeout(function(){
    containActive(Math.abs(parseInt(index/2) +p1 -parseInt(m1/3) ))
    activate(Math.abs(parseInt(index/2) +p1 -parseInt(m1/3) ))
    setTimeout(function(){
      containActive(Math.abs( parseInt(index/3) +p1 -m1 +15 ))
      activate(Math.abs( parseInt(index/3) +p1 -m1 +15 ))
      },index*2+1600)
    },m1*3 +600)

 
  }
  
  if (i <=  4 && active_at === 2){
    setTimeout(function(){
    containActive(Math.abs(parseInt(index/2) -p1 +m1))
    activate(Math.abs(parseInt(index/2) -p1 +m1))
    setTimeout(function(){
      containActive(Math.abs(index - p1*m1 +20 ))
      activate(Math.abs(index - p1*m1 +20 ))
      },index*2+1200)
    },m1*2 +100)
  }
  if (paseAnimtae === true){
    setTimeout(function(){
      containActive(Math.abs(parseInt(index/2) -p1 +m1 + 12))
      activate(Math.abs(parseInt(index/2) -p1 +m1 - 15))
      console.log("Animate1")
      setTimeout(function(){
        containActive(Math.abs(index - p1*m1 +20 ))
        activate(Math.abs(index - p1*m1 +20 ))
        console.log("Animate1")
        },index*2+1200)
      },m1*2 +100 - 20)
  }

  if (paseAnimtae === true){
    setTimeout(function(){
      console.log("Animate2")
      activate(Math.abs(index - p1*m1-1 ))
      containActive(Math.abs(index - p1*m1 +3))
      setTimeout(function(){
        containActive(Math.abs(index -parseInt(p1/2) +m1))
        activate(Math.abs(index -parseInt(p1/2) +m1))
        },index*2+1900)
        console.log("Animate2")
      },1110)
  }

  if (paseAnimtae === true){
    setTimeout(function(){
      containActive(Math.abs(parseInt(index/2) -p1+ 12))
      activate(Math.abs(parseInt(index/2) +m1 - 15))
      console.log("Animate3")
      setTimeout(function(){
        containActive(Math.abs(index - p1*m1 -30 ))
        activate(Math.abs(index - p1*m1 +5 ))
        console.log("Animate3")
        },index*2+900)
      },m1*2 +80 - 20)
  }
  
},1200)



 
var Parrax = document.querySelectorAll(".Parrax");

let xValue = 0;
let yValue = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;


  Parrax.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(-50% + ${-xValue * speedx * Parrax_at}px), calc(-50% + ${-yValue * speedy * 0.8 * Parrax_at}px)`
 
  })

},20)


var Contain = document.querySelectorAll(".red_contain");
var filterLoad = false;
var huer = -2;
var brightr = 0;
var paseAnimtae = false;
var background = document.querySelector(".background");
var brownback = document.getElementById("brownBackground");

var slider = document.getElementById("slideRange")
var slidefill = document.getElementById("slideFill")
slider.oninput = function(){
   slidefill.style.transform = `translate(${(this.value-50)/100*220-110}px, 0px)`
   brightr= -0.5 + (this.value/100)
   if (this.value < 50){
    huer = -2 +(30*((this.value)/50)-30)
   }
   else {
    huer = -2
   }

   if (this.value < 30){
    paseAnimtae = true
    brownback.style.opacity = 1
   }
   else{
    paseAnimtae = 0
    brownback.style.opacity = 0
   }
   console.log(brightr)

   filterLoad = true;

   //-------
 filters()


if (slider.value <= 50){
  Contain.forEach((el) => {
      
  })
}

}

function filters(){
  Contain.forEach((el) => {
    if (parseInt(el.style.right) < 60 && parseInt(el.style.right) > -120 || parseInt(el.style.bottom) < 0  ){
      el.style.filter = `brightness(${0.9+brightr}) saturate(1) hue-rotate(${huer}deg) contrast(1)`
  
    }
  })
  
  Contain.forEach((el) => {
    if ( parseInt(el.style.bottom) >-160 &&  parseInt(el.style.bottom) < -100 ){
      el.style.filter = `brightness(${0.8+brightr}) saturate(0.95) hue-rotate(${huer}deg) contrast(1) blur(1px)`
  
    }
  })
  
  Contain.forEach((el) => {
    if ( parseInt(el.style.bottom) >-100 &&  parseInt(el.style.bottom) < -20 ){
      el.style.filter = `brightness(${0.55+brightr}) saturate(0.95) hue-rotate(${huer}deg) contrast(1) blur(1px)`
  
    }
  })
  
  Contain.forEach((el) => {
    if ( parseInt(el.style.bottom) <-160 && parseInt(el.style.right) <= 400 ){
      el.style.filter = `brightness(${0.5+brightr}) saturate(1.05) hue-rotate(${huer}deg) contrast(1) blur(3px)`
  
    }
  })
  
  Contain.forEach((el) => {
    if (parseInt(el.style.right) <= -110 ){
      el.style.filter = `brightness(${0.4+brightr}) saturate(1.2) hue-rotate(${huer}deg) contrast(1.1) blur(1px)`
  
    }
  })
  
  Contain.forEach((el) => {
    if (parseInt(el.style.right) > 60 && parseInt(el.style.bottom) > -20  ){
      el.style.filter = `brightness(${0.95+brightr*1.4}) saturate(1.15) hue-rotate(${huer}deg) contrast(1)`
  
    }
  })
  
  Contain.forEach((el) => {
    if (parseInt(el.style.top) <= 220 && parseInt(el.style.left) <= 100  ){
      el.style.filter = `brightness(${0.95+brightr*1.4}) saturate(1.15) hue-rotate(${huer}deg) contrast(1)`
  
    }
  })
  
}

filters()


//Load
let loader = document.querySelector(".loadPage")
let loadObj = document.querySelector(".mainLogo")
let loadText = document.querySelector(".loadText")

setTimeout(function(){
  loadObj.classList.add("mainLogoActive")
  loadText.classList.add("loadTextActive")
},50)



window.addEventListener("load", function(){
  setTimeout(function(){
    loader.style.opacity = "0"
  },2500)
  setTimeout(function(){
    loader.style.display = "none"
  },3100)

  
})