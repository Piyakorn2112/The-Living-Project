function scale() {
  var cot = document.querySelector('.cot_normal')
  var ind = document.querySelector('.Ind')
  var Hero = document.querySelector('.Hero_v')
  var icon = document.querySelector('.M_button_ico')
  var M_text = document.querySelector('.M_button_text_js')
  var Ms_b1 = document.querySelector(".Ms_button1")
  var Ms_b2 = document.querySelector(".Ms_button2")
  var Ms_b3 = document.querySelector(".Ms_button3")
  var Ms_b4 = document.querySelector(".Ms_button4")
  var Ms_b5 = document.querySelector(".Ms_button5")
  var T_cl = document.querySelector(".T_circle_line_p")

  if (ind.innerHTML === 'press') {
    Hero.classList.add("Hero_v_a")
    cot.classList.add("cot_active")
    icon.classList.add("M_button_ico_active")
    Ms_b1.classList.remove("M_button_passive")
    Ms_b2.classList.remove("M_button_passive")
    Ms_b3.classList.remove("M_button_passive")
    Ms_b4.classList.remove("M_button_passive")
    Ms_b5.classList.remove("M_button_passive")
    T_cl.classList.add("T_circle_line")
    M_text.innerHTML = "Back To Lobby"
    ind.innerHTML = 'pressed'
  }

  else if (ind.innerHTML === 'pressed'){
    Hero.classList.remove("Hero_v_a")
    cot.classList.remove("cot_active")
    icon.classList.remove("M_button_ico_active")
    Ms_b1.classList.add("M_button_passive")
    Ms_b2.classList.add("M_button_passive")
    Ms_b3.classList.add("M_button_passive")
    Ms_b4.classList.add("M_button_passive")
    Ms_b5.classList.add("M_button_passive")
    T_cl.classList.remove("T_circle_line")
    M_text.innerHTML = "Press To Start"
    ind.innerHTML = 'press'
  }
  
  
 

  console.log(ind.innerHTML)
  console.log(Hero)
}

function S_button_mark(buttonIndex) {
  var Inds = document.querySelectorAll(".S_button .Inds")
  var Sb = document.querySelectorAll(".S_button")
  if(Inds[buttonIndex].innerHTML === "press"){
    Sb[buttonIndex].classList.add("Material_light")
    Sb[buttonIndex].classList.remove("Material")
    Inds[buttonIndex].innerHTML = "pressed"
    console.log("slected")
    console.log(Inds[buttonIndex].innerHTML)
  }
  else if(Inds[buttonIndex].innerHTML === "pressed"){
    Sb[buttonIndex].classList.remove("Material_light")
    Sb[buttonIndex].classList.add("Material")
    Inds[buttonIndex].innerHTML = "press"
    console.log("slected")
    console.log(Inds[buttonIndex].innerHTML)
  }
  
}



document.addEventListener("mousemove", function(e){
  
  /*console.log("move", e.pageX, e.pageY, cursor_tracker.style.color)*/
  tX = e.pageX 
  tY = e.pageY 
  cursor_tracker.style.top = `${tY-8}px`;
  cursor_tracker.style.left = `${tX-8}px`;


})


T_button = document.querySelector(".T_button")
var Hover = document.querySelectorAll(".Hover")
var Hover_subject = document.querySelectorAll(".Hover_subject")
let translate_value_x = 0
let translate_value_Y = 0
let Hover_i = 0

function cursor_tracker_blur(buttonIndex) {
 T = document.querySelector(".cursor_tracker")
 T.classList.add("cursor_hover")
 console.log("Hover")
var Hover_position = Hover[buttonIndex].getBoundingClientRect();
var Hover_width = Hover_subject[buttonIndex].clientWidth
var Hover_height = Hover_subject[buttonIndex].clientHeight
let x = Hover_position.x + 10;
let y = Hover_position.y + 30;

if (Hover_i = 1){
  setTimeout(function(){
  Hover[buttonIndex].style.transition = 'all 0s'
  },350)
}

 document.addEventListener("mousemove", function(e){
 let Hx = e.clientX
 let Hy = e.clientY
 Hx_byx = Hx-x
 Hy_byy = Hy-y

 /*console.log("hover", Hover_width, Hover_height)*/
if (Math.abs(Hx_byx) < Hover_width & Math.abs(Hy_byy) < Hover_height) {
 Hover[buttonIndex].style.transform = `translate(`+ Hx_byx/9 + 'px,' + Hy_byy/9 + 'px)'

 Hover_i = 1

}

else  {
  Hover[buttonIndex].style.transform = 'translate(0px , 0px)'
  /*console.log("lefted")*/
  Hover[buttonIndex].style.transition = 'all 0.3s'
  Hover_i = 0
 
}

},30)
}

function cursor_tracker_unblur(buttonIndex) {
 
  T = document.querySelector(".cursor_tracker")
  T.classList.remove("cursor_hover")
  console.log("unhover", Hover[buttonIndex].style.transform)
 }
