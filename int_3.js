
var light = document.querySelector(".Light")
var mousedown = false
var container = document.querySelectorAll(".container")
var Round = document.querySelectorAll(".Roundimg")
var LightPath = document.querySelector(".Light_Path")
var LightBar = document.getElementById("LigthBar")
var LigthButton = document.querySelector(".LightButton")
var LightSlide = document.querySelector(".LightSlide")
var data = document.querySelector(".data")
var LightArrow = document.querySelector(".LightArrow")
var ArrowEdge = document.querySelector(".ArrowEdge")
var ArrowEdge2 = document.querySelector(".ArrowEdge2")
var rangeButtom = false
Mposx = 325
Mposy = 330

var inLight = false
function mouseinLight (){
   inLight = true
   light.innerHTML = "in"
      moveLight()
      window.addEventListener("mouseup", mouseUP)
 console.log("in")
}
function mouseoutLight (){
  inLight = false
  light.innerHTML = "out"
  //window.removeEventListener("mouseup", mouseUP)
  console.log("out")
  mousedown = false
}

function moveLight() {
  if (inLight == true){ 
    window.addEventListener("mousedown", function(e){
      mousedown = true
      Mnewx = e.clientX
      Mnewy = e.clientY
    
      window.addEventListener("mousemove", function(e){
    
        tX = e.pageX 
        tY = e.pageY 
       Mlasx = e.pageX
       Mlasy = e.pageY

        if (mousedown == true && inLight == true && 585 >= Mlasy && Mlasy >= 70) {
          light.style.top = `${Mposy - (Mnewy - Mlasy)}px`;
          light.style.left = `${Mposx -(Mnewx - Mlasx)}px`;
         // LightPath.style.top = light.style.top;
          LightPath.style.left =   light.style.left;
          LightPath.style.filter = `Brightness(${parseInt(light.style.top)/parseInt(window.innerHeight)+0.5})`
          //LightBar.style.left = `${parseInt(light.style.left) + 70}px`;
          //LightSlide.style.left = `${parseInt(light.style.left) + 90}px`;
          LigthButton.style.left = `${parseInt(light.style.left) + 75}px`;
          LigthButton.style.top = `${parseInt(light.style.top) + 70}px`;
          LightArrow.style.left = `${parseInt(light.style.left) +40}px`;
          LightArrow.style.top = `${parseInt(light.style.top) + 35}px`;
          LigthButton.style.transform = `translateY(0px)`;
          LigthButton.style.transition = `scale 0.6s cubic-bezier(.43,.14,.28,1.01)`
    
          LightSlide.style.transform = `scaleX(1)`
         
          Parrax_at = 0
          console.log("F1",Mposy, light.style.top)
          
          //data.innerHTML = light.style.top
        }
        else if (mousedown == true && inLight == true) {
          
        
          light.style.left = `${Mposx -(Mnewx - Mlasx)}px`;
          if (Mlasy > 350){
            LigthButton.style.transform = `translateY(${-(585 - Mlasy)/10}px)`;
            if (Math.abs((parseInt(585) - parseInt(Mlasy))/5) > 20){
              LigthButton.style.transition = `scale 0.6s, transform 0.6s cubic-bezier(.43,.14,.28,1.01)`
              LigthButton.style.transform = `translateY(0px)`;
            }
          }
          else{
            LigthButton.style.transform = `translateY(${-(70 - Mlasy)/10}px)`;
            if (Math.abs((parseInt(70) - parseInt(Mlasy))/5) > 20){
              LigthButton.style.transition = `scale 0.6s, transform 0.6s cubic-bezier(.43,.14,.28,1.01)`
              LigthButton.style.transform = `translateY(0px)`;
            }
          }
          console.log("F2",Mposy, light.style.top)

          LightPath.style.left =   light.style.left;
          LightPath.style.filter = `Brightness(${parseInt(light.style.top)/parseInt(window.innerHeight)+0.5})`

          LigthButton.style.left = `${parseInt(light.style.left) + 75}px`;
          LigthButton.style.top = `${parseInt(light.style.top) + 70}px`;
          LightArrow.style.left = `${parseInt(light.style.left) +40}px`;
          LightArrow.style.top = `${parseInt(light.style.top) + 35}px`;
        }

        else{
          if (Parrax_true == 1){
            Parrax_at = 1
          }
          LigthButton.style.transform = `translateY(0px)`;
          LigthButton.style.transition = `scale 0.6s cubic-bezier(.43,.14,.28,1.01)`
        }


        if(mousedown == true && inLight == true){
          LightArrow.classList.remove("LightArrowPassive")
          LigthButton.style.scale = `1`
        }
        else{
          LightArrow.classList.add("LightArrowPassive")
          LigthButton.style.scale = `1.1`
        }

        if(parseInt(light.style.top) < 450){
          ArrowEdge.style.opacity = 1
          ArrowEdge.style.top = `120px`
          ArrowEdge.style.filter = `blur(20px)`

        }
        else{
          ArrowEdge.style.opacity = 1
          ArrowEdge.style.top = `60px`
          ArrowEdge.style.filter = `blur(0px)`
        }

        if(parseInt(light.style.top) > 80){
          ArrowEdge2.style.opacity = 1
          ArrowEdge2.style.top = `-60px`
          ArrowEdge2.style.filter = `blur(20px)`

        }
        else{
          ArrowEdge2.style.opacity = 1
          ArrowEdge2.style.top = `0px`
          ArrowEdge2.style.filter = `blur(0px)`
        }
        
        Parrax1.forEach((el) =>{
          x = Math.abs((window.innerWidth-parseInt(el.style.right))-parseInt(light.style.left)-350)
          y = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(light.style.top)-200)
          sum = Math.pow(x,2) + Math.pow(y,2)
          c = Math.sqrt(sum)
          bright_c =Math.pow(2,-Math.abs(c/200)+1.6)

          if ( c < 500){
            el.style.filter = `brightness(${bright_c})`
          }
          if ( c < 400){
            el.children[0].style.transform = `translateY(${-(Math.abs(1-c/400))*300}px)`
          }
       //console.log("RRR", el.children[0].style.marginTop)
        })
        Parrax2.forEach((el) =>{
          x = Math.abs((window.innerWidth-parseInt(el.style.right))-parseInt(light.style.left)-350)
          y = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(light.style.top)-200)
          sum = Math.pow(x,2) + Math.pow(y,2)
          c = Math.sqrt(sum)
          bright_c =Math.pow(2,-Math.abs(c/200)+1.6)

          if ( c < 500){
            el.style.filter = `brightness(${bright_c})`
          }
          if ( c < 400){
            el.children[0].style.transform = `translateY(${-(Math.abs(1-c/400))*300}px)`
          }
        })
        Parrax3.forEach((el) =>{
          x = Math.abs((window.innerWidth-parseInt(el.style.right))-parseInt(light.style.left)-350)
          y = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(light.style.top)-200)
          sum = Math.pow(x,2) + Math.pow(y,2)
          c = Math.sqrt(sum)
          bright_c =Math.pow(2,-Math.abs(c/200)+1.6)

          if ( c < 500){
            el.style.filter = `brightness(${bright_c})`
          }
          if ( c < 400){
            el.children[0].style.transform = `translateY(${-(Math.abs(1-c/400))*300}px)`
          }
        })
/*
        window.addEventListener("mouseup", function(e){
          mousedown = false
          Mposx =  parseInt(light.style.left)
          Mposy = parseInt(light.style.top)
          console.log("F3",Mposy, light.style.top,mousedown)
          //console.log("ooooo" + Mposx +" "+ Mposy, window.innerHeight)
        })
      */
      })
    })
  }



  /*
  window.addEventListener("mousedown", function(e){
    mouseActive = true   
    window.addEventListener("mouseup", function(e){
      mouseActive = false
      if (mousedown == false){
        container.forEach((el) =>{
          x = Math.abs((window.innerWidth-parseInt(el.style.right))-parseInt(light.style.left)-200)
          y = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(light.style.top)-200)
          sum = Math.pow(x,2) + Math.pow(y,2)
          c = Math.sqrt(sum)
         // bright_c =Math.pow(2,-Math.abs(c/200)+1.4)
          if ( c < 400){
            el.children[0].style.marginTop = `${-(Math.abs(1-c/400))*300}px`
          }

       console.log("RRR", el.children[0].style.marginTop)
       
        })
        this.setTimeout(function(){
          mouseActive = true
        },300)
      }
    })

  })*/
  
}

function mouseUP (){
  mousedown = false

  if (light.style.top === "" || light.style.left ===""){
  Mposx =  325
  Mposy = 330
  console.log("F3i",Mposy, light.style.top,mousedown)
  }
  else {
    Mposx =  parseInt(light.style.left)
    Mposy = parseInt(light.style.top)
    console.log("F3",Mposy, light.style.top,mousedown)
  }

}

container.forEach((el) =>{
  rand = 0 //Math.floor((Math.random() * 40))
  Rint = Math.floor((Math.random() * 4)) + 1
  rotateRand = Math.floor((Math.random() * 10)) + 1
  fr = Math.floor((Math.random() * 40)) + 1
  flip = 0
  if (fr < 20) {
    flip = -1
  }
  else if (fr > 20) {
    flip = 1
  }

  el.innerHTML = ` 
  <div class="subContainer">
  <img src="interact_images/Round leaf ${Rint}-min.png" class="Roundimg" style="margin-top: -${rand}px;  rotate: ${rotateRand*flip}deg;">
  </div>
  `
})

function containPosi (){
  bw = window.innerWidth 
container.forEach((el) =>{
  rand = Math.floor((Math.random() * 20))
  randH = Math.floor((Math.random() * 100))
  if( el.dataset.index <= 57)
  {
    el.style.right = `${(parseInt(bw)*2/100)*parseInt(el.dataset.index)+(-20/250*parseInt(bw))+rand}px`
    //console.log(bw)
    el.style.bottom = `${340 + randH}px`
    el.dataset.speedx = `-0.015`
    el.dataset.speedy = `-0.015`
  }
  if( el.dataset.index <= 115  && el.dataset.index > 57)
  {
    el.style.right = `${(parseInt(bw)*2/100)*(parseInt(el.dataset.index)-58)+(-10/250*parseInt(bw))+rand}px`
    el.style.bottom = `${290 + randH}px`
    el.dataset.speedx = `-0.01`
    el.dataset.speedy = `-0.01`
   // console.log(bw)
  }
  if( el.dataset.index <= 173  && el.dataset.index > 115)
  {
    el.style.right = `${(parseInt(bw)*2/100)*(parseInt(el.dataset.index)-116)+(-20/250*parseInt(bw))+rand}px`
    el.style.bottom = `${240 + randH}px`
    el.dataset.speedx= "0.005"
    el.dataset.speedy= "0.005"
    //console.log(bw)
  }
  if( el.dataset.index <= 231 && el.dataset.index > 173)
  {
    el.style.right = `${(parseInt(bw)*2/100)*(parseInt(el.dataset.index)-174)+(-10/250*parseInt(bw))+rand}px`
    el.style.bottom =`${190 + randH}px`
    el.dataset.speedx= "0.01"
    el.dataset.speedy= "0.01"
    //console.log(bw)
  }
  if( el.dataset.index <= 289 && el.dataset.index > 231)
  {
    el.style.right = `${(parseInt(bw)*2/100)*(parseInt(el.dataset.index)-232)+(-20/250*parseInt(bw))+rand}px`
    el.style.bottom = `${140 + randH}px`
    el.dataset.speedx= "0.015"
    el.dataset.speedy= "0.015"
    //console.log(bw)
  }
  if( el.dataset.index <= 347 && el.dataset.index > 289)
  {
    el.style.right = `${(parseInt(bw)*2/100)*(parseInt(el.dataset.index)-290)+(-12.25/250*parseInt(bw))+rand}px`
    el.style.bottom = `${90 + randH}px`
    el.dataset.speedx= "0.017"
    el.dataset.speedy= "0.017"
    //console.log(bw)
  }
  if( el.dataset.index <= 405 && el.dataset.index > 347)
  {
    el.style.right = `${(parseInt(bw)*2/100)*(parseInt(el.dataset.index)-348)+(-20/250*parseInt(bw))+rand}px`
    el.style.bottom = `${40 + randH}px`
    el.dataset.speedx= "0.019"
    el.dataset.speedy= "0.019"
    //console.log(bw)
  }
  if( el.dataset.index <= 463 && el.dataset.index > 405)
  {
    el.style.right = `${(parseInt(bw)*2/100)*(parseInt(el.dataset.index)-406)+(-12.25/250*parseInt(bw))+rand}px`
    el.style.bottom = `${10 + randH}px`
    el.dataset.speedx= "0.021"
    el.dataset.speedy= "0.021"
    el.children[0].style.filter = "blur(1px)"
    //console.log(bw)
  }


  
})
}
containPosi()

Parrax_at = 1

Parrax = document.querySelectorAll(".Parrax")
Parrax1 = document.querySelectorAll(".Parrax1")
Parrax2 = document.querySelectorAll(".Parrax2")
Parrax3 = document.querySelectorAll(".Parrax3")


window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  Parrax.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(-50% + ${-xValue * speedx * Parrax_at}px), calc(-50% + ${-yValue * speedy * 0.8 * Parrax_at}px)`
  })

  Parrax1.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(-50% + ${-xValue * speedx * Parrax_at}px), calc(-50% + ${-yValue * speedy * 0.8 * Parrax_at}px)`
  })
  Parrax2.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(-50% + ${-xValue * speedx * Parrax_at}px), calc(-50% + ${-yValue * speedy * 0.8 * Parrax_at}px)`
  })
  Parrax3.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(-50% + ${-xValue * speedx * Parrax_at}px), calc(-50% + ${-yValue * speedy * 0.8 * Parrax_at}px)`
  })

},2)


/*
window.addEventListener("mousemove", (e) => {
  xValue = e.clientX ;
  yValue = e.clientY ;
  window.addEventListener("mousedown",(e) => {
   container.style.left = `${xValue}px`
   console.log(container.style.left)
  })

  console.log(xValue)





},20)

*/

window.addEventListener("mousemove", function(e){
  //data.innerHTML = `mouseX${e.clientX} mouseY${e.clientY}`

  // data.innerHTML = `lightTop:${light.style.top} lightPosy:${Mposy} lightLas${Mlasy} Sum${(Mnewy - Mlasy)/10} mouseX${e.clientX} mouseY${e.clientY}`

  

})

var Parrax_true = 1
var Parrax_at = 1
var active_at = 2
var Menu1 = document.querySelector(".Menu1")
var Menu2 = document.querySelector(".Menu2")
var Menu3 = document.querySelector(".Menu3")
var Menu4 = document.querySelector(".Menu4")
var Menu5 = document.querySelector(".Menu5")

var Ind = document.querySelectorAll(".Inds")
function M0 (buttonIndex) {
 
if (Ind[buttonIndex].innerHTML === "press"){
  Ind[buttonIndex].innerHTML = "pressed"
  Menu1.classList.remove("Menu_button_passive")
  Menu2.classList.remove("Menu_button_passive")
  Menu3.classList.remove("Menu_button_passive")
  Menu4.classList.remove("Menu_button_passive")
  Menu5.classList.remove("Menu_button_passive")


}
else if ( Ind[buttonIndex].innerHTML === "pressed"){
  Ind[buttonIndex].innerHTML = "press"
  Menu1.classList.add("Menu_button_passive")
  Menu2.classList.add("Menu_button_passive")
  Menu3.classList.add("Menu_button_passive")
  Menu4.classList.add("Menu_button_passive")
  Menu5.classList.add("Menu_button_passive")

}
}

function M1(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
    Ind[buttonIndex].innerHTML = "pressed"
    Menu1.classList.remove("Menu_button_active")
    Parrax_at = 0
    Parrax_true = 0
    console.log(Parrax_at)
}
else if ( Ind[buttonIndex].innerHTML === "pressed"){
  Ind[buttonIndex].innerHTML = "press"
  Menu1.classList.add("Menu_button_active")
  Parrax_at = 1
  Parrax_true = 1
}
}

function M2(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
 
    Menu2.classList.add("Menu_button_active")
    Menu3.classList.remove("Menu_button_active")
    Menu4.classList.remove("Menu_button_active")
    active_at = 0
    SporeNumbers()
}
}

function M3(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
  
    Menu3.classList.add("Menu_button_active")
    Menu2.classList.remove("Menu_button_active")
    Menu4.classList.remove("Menu_button_active")
    active_at = 1
    SporeNumbers()
}
}


function M4(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
  
    Menu4.classList.add("Menu_button_active")
    Menu2.classList.remove("Menu_button_active")
    Menu3.classList.remove("Menu_button_active")
    active_at = 2
    SporeNumbers()
}
}

function SporeNumbers (){

  if (active_at == 0){
    container.forEach(el => {
      if (parseInt(el.dataset.index)/2 - Math.floor(parseInt(el.dataset.index)/2) === 0){
        el.style.display = "none"
      }
      else{
        el.style.display = "block"
      }
    })
  }
  if (active_at == 1){
    container.forEach(el => {
      if (parseInt(el.dataset.index)/3 - Math.floor(parseInt(el.dataset.index)/3) === 0){
        el.style.display = "none"
      }
      else{
        el.style.display = "block"
      }
    })
  }
  if (active_at == 2){
    container.forEach(el => {
      el.style.display = "block"
    })
    
  }
}

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