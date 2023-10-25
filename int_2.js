dot = document.querySelectorAll(".dot")


pp = document.querySelector(".pp")



function dotPosi (){
  bw = window.innerWidth 
dot.forEach((el) =>{
  if( el.dataset.index <= 15)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*parseInt(el.dataset.index)+(2/250*parseInt(bw))}px`
    //console.log(bw)
    el.style.bottom = "-80px"
  }
  else if( el.dataset.index <= 31 && el.dataset.index > 15)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*(parseInt(el.dataset.index)-16)+(12.25/250*parseInt(bw))}px`
    el.style.bottom = "-10px"
  
   // console.log(bw)
  }
  else if( el.dataset.index <= 47 && el.dataset.index > 31)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*(parseInt(el.dataset.index)-32)+(2/250*parseInt(bw))}px`
    el.style.bottom = "70px"
    el.dataset.speedx= "-0.15"
    el.dataset.speedy= "-0.15"
    //console.log(bw)
  }
  else if( el.dataset.index <= 63 && el.dataset.index > 47)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*(parseInt(el.dataset.index)-48)+(12.25/250*parseInt(bw))}px`
    el.style.bottom = "200px"
    el.dataset.speedx= "-0.15"
    el.dataset.speedy= "-0.15"
    //console.log(bw)
  }
  else if( el.dataset.index <= 79 && el.dataset.index > 63)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*(parseInt(el.dataset.index)-64)+(2/250*parseInt(bw))}px`
    el.style.bottom = "300px"
    el.dataset.speedx= "-0.16"
    el.dataset.speedy= "-0.16"
    //console.log(bw)
  }
  else if( el.dataset.index <= 95 && el.dataset.index > 79)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*(parseInt(el.dataset.index)-80)+(12.25/250*parseInt(bw))}px`
    el.style.bottom = "420px"
    el.dataset.speedx= "-0.16"
    el.dataset.speedy= "-0.16"
    //console.log(bw)
  }
  else if( el.dataset.index <= 111 && el.dataset.index > 95)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*(parseInt(el.dataset.index)-96)+(2/250*parseInt(bw))}px`
    el.style.bottom = "480px"
    el.dataset.speedx= "-0.17"
    el.dataset.speedy= "-0.17"
    //console.log(bw)
  }
  else if( el.dataset.index <= 127 && el.dataset.index > 111)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*(parseInt(el.dataset.index)-112)+(12.25/250*parseInt(bw))}px`
    el.style.bottom = "560px"
    el.dataset.speedx= "-0.18"
    el.dataset.speedy= "-0.18"
    //console.log(bw)
  }
  else if( el.dataset.index <= 143 && el.dataset.index > 127)
  {
    el.style.left = `${(parseInt(bw)*6.8/100)*(parseInt(el.dataset.index)-128)+(1/250*parseInt(bw))}px`
    el.style.bottom = "640px"
    el.dataset.speedx= "-0.19"
    el.dataset.speedy= "-0.19"
    //console.log(bw)
  }
 
  
 
})
}
dotPosi()

window.addEventListener("resize", (e) => {
  dotPosi()
})
/*
dot.forEach((el) => {
  el.innerHTML = el.dataset.index
})
*/
var GrothTime = 300

dotCount = 0

Ginterval = setInterval(Groth,GrothTime)

function Groth(){
  let i = Math.floor((Math.random() * 144) -1);
  let iop = Math.floor((Math.random() * 144) -1);
  let i5 = Math.floor((Math.random() * 5)+1);
  let imin = 0;
  let imin_t1 = 0;
  let imin_t2 = 0;
  let imin_l1 = 0;
  let imax = 1;
  let ib = 0.6;
  let isd = 1.2;
  let hr = -5;
  Bindex = i5

  dot.forEach((el) =>{
    if (el.dataset.index == i-16 ){
      if (el.dataset.visible == 1){
        imin = 1
      }
      else{
        imin = 0
      }
    }
  })

  dot.forEach((el) =>{
    if (el.dataset.index == i+1){
      if (el.dataset.visible == 1){
        imin_t1 = 1
      }
      else{
        imin_t1 = 0
      }
    }
  })

  dot.forEach((el) =>{
    if (el.dataset.index == i+2){
      if (el.dataset.visible == 1){
        imin_t2 = 1
      }
      else{
        imin_t2 = 0
      }
    }
  })

  dot.forEach((el) =>{
    if (el.dataset.index == i+1){
      if (el.dataset.visible == 1){
        imin_l1 = 1
      }
      else{
        imin_l1 = 0
      }
    }
  })

  dot.forEach((el) =>{
    r = Math.floor((Math.random() * 60) -1);
    if (i < 30){
      el.dataset.intRotate = -r
    }
    else if (i >= 30){
      el.dataset.intRotate = r/2
    }
   
  })


  dot.forEach((el) =>{
    if (el.dataset.index == iop+16 ){
      if (el.dataset.visible == 1){
        imax = 1
      }
      else{
        imax = 0
      }
    }
  })
  
  if (dotCount <= 120 && conG == 1){
    dot.forEach((el) =>{
      console.log(imin,i)
    if (el.dataset.index == i && i <=15 && el.innerHTML==""){
      dotCount += 1
     if (imin_t1 == 1 ){
      el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b1`+'.png" class="imgsp"' + `style=rotate:${el.dataset.intRotate}deg;` + `>`
      el.dataset.visible = "1"
      //el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg) `
     }
     else{
      el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b1`+'.png" class="imgsp"' + `style=rotate:${el.dataset.intRotate}deg;` + `>`
      el.dataset.visible = "1"
     }
      
    }
    else if (el.dataset.index == i && i >= 16 && i <= 31 && imin == 1 && el.innerHTML=="" ){
      dotCount += 1
       if(imin_t1 == 1 ){
        el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b1`+'.png" class="imgsp"' + `style=rotate:${el.dataset.intRotate}deg;` + `>`
        //el.style.backgroundColor = "gray"
        el.dataset.visible = "1"
       // el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg)`
       }
       else{
        el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b1`+'.png" class="imgsp"' + `style=rotate:${el.dataset.intRotate}deg;` + `>`
       // el.style.backgroundColor = "gray"
        el.dataset.visible = "1"
       }
     }
     else if (el.dataset.index == i && i >= 32 && i <= 47 && imin == 1 && el.innerHTML=="" ){
      dotCount += 1
       if(imin_t1 == 1 ){
        el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b2`+'.png" class="imgsp"'+ `style=rotate:${el.dataset.intRotate}deg;` + `>`
       //el.style.backgroundColor = "gray"
        el.dataset.visible = "1"
        //el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg)`
       }
       else{
        el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b2`+'.png" class="imgsp"'+ `style=rotate:${el.dataset.intRotate}deg;` + `>`
        //el.style.backgroundColor = "gray"
        el.dataset.visible = "1"
       }
     }
     else if (el.dataset.index == i && i >= 48 && i <= 79 && imin == 1 && el.innerHTML=="" ){
      dotCount += 1
       if(imin_t1 == 1 ){
        el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b3`+'.png" class="imgsp"'+ `style=rotate:${el.dataset.intRotate}deg;` + `>`
        //el.style.backgroundColor = "gray"
        el.dataset.visible = "1"
        //el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg)`
       }
       else{
        el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b3`+'.png" class="imgsp"'+ `style=rotate:${el.dataset.intRotate}deg;` + `>`
        //el.style.backgroundColor = "gray"
        el.dataset.visible = "1"
       }
     }
     else if (el.dataset.index == i && i >= 80 && i <= 143 && imin == 1 && el.innerHTML=="" ){
      dotCount += 1
       if(imin_t1 == 1 ){
        el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b4`+'.png" class="imgsp"'+ `style=rotate:${el.dataset.intRotate}deg;` + `>`
       // el.style.backgroundColor = "gray"
        el.dataset.visible = "1"
        //el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg)`
       }
       else{
        el.innerHTML = '<img src="interact_images/Leaf blue'+`${Bindex}`+` b4`+'.png" class="imgsp"'+ `style=rotate:${el.dataset.intRotate}deg;` + `>`
        //el.style.backgroundColor = "gray"
        el.dataset.visible = "1"
       }
     }
  
  })
  }

  if (conG == 0) {
    dot.forEach((el) =>{
      console.log(imax,i)
    if (el.dataset.index == iop && iop <=15 && el.innerHTML!="" && imax == 0){
      dotCount -= 1
     if (imin_t1 == 1 ){
      el.innerHTML = ""
      el.dataset.visible = "0"
      //el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg) `
     }
     else{
      el.innerHTML = ""
      el.dataset.visible = "0"
     }
      
    }
    else if (el.dataset.index == iop && iop >= 16 && iop <= 31 && imax == 0 && el.innerHTML!="" ){
      dotCount -= 1
       if(imin_t1 == 1 ){
        el.innerHTML = ""
       // el.style.backgroundColor = "gray"
        el.dataset.visible = "0"
       // el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg)`
       }
       else{
        el.innerHTML = ""
       // el.style.backgroundColor = "gray"
        el.dataset.visible = "0"
       }
     }
     else if (el.dataset.index == iop && iop >= 32 && iop <= 47 && imax == 0 && el.innerHTML!="" ){
      dotCount -= 1
       if(imin_t1 == 1 ){
        el.innerHTML = ""
       // el.style.backgroundColor = "gray"
        el.dataset.visible = "0"
        //el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg)`
       }
       else{
        el.innerHTML = ""
       // el.style.backgroundColor = "gray"
        el.dataset.visible = "0"
       }
     }
     else if (el.dataset.index == iop && iop >= 48 && iop <= 79 && imax == 0 && el.innerHTML!="" ){
      dotCount -= 1
       if(imin_t1 == 1 ){
        el.innerHTML = ""
        //el.style.backgroundColor = "gray"
        el.dataset.visible = "0"
        //el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg)`
       }
       else{
        el.innerHTML = ""
       // el.style.backgroundColor = "gray"
        el.dataset.visible = "0"
       }
     }
     else if (el.dataset.index == iop && iop >= 80 && iop <= 143 && el.innerHTML!="" ){
      dotCount -= 1
       if(imin_t1 == 1 ){
        el.innerHTML = ""
        //el.style.backgroundColor = "gray"
        el.dataset.visible = "0"
        //el.style.filter = `brightness(${ib}) saturate(${isd}) hue-rotate(${hr}deg)`
       }
       else{
        el.innerHTML = ""
       // el.style.backgroundColor = "gray"
        el.dataset.visible = "0"
       }
     }
  
  })
  }

}

container = document.querySelectorAll(".container")
/*
setInterval(function(){
  let i = Math.floor((Math.random() * 144) -1);
  console.log(i)
  container.forEach((el) =>{
  if (el.dataset.index == i){
   el.classList.toggle('animate')
  }
})
},20)
*/

var Parrax = document.querySelectorAll(".Parrax");


let xValue = 0;
let yValue = 0;

driver = document.querySelector(".driver");
driver1 = document.querySelector(".driver1");
driver2 = document.querySelector(".driver2");
driver3 = document.querySelector(".driver3");
driver4 = document.querySelector(".driver4");
driver5 = document.querySelector(".driver5");
driver6 = document.querySelector(".driver6");
driver7 = document.querySelector(".driver7");

driverf = document.querySelector(".driverf");
driverf1 = document.querySelector(".driverf1");
debw = document.getElementById("ll")
gapD = "-260px"
gapD1 = "-300px"


  function Drive (){
  if (parseInt(driver.style.left) < 2480){
    driver.style.left = `${parseInt(driver.style.left)+1}px`
  }
  else{
    driver.style.left = gapD1
  }
  if (parseInt(driver1.style.left) < 2480){
    driver1.style.left = `${parseInt(driver1.style.left)+1}px`
  }
  else{
    driver1.style.left = gapD
  }
  if (parseInt(driver2.style.left) < 2480){
    driver2.style.left = `${parseInt(driver2.style.left)+1}px`
  }
  else{
    driver2.style.left = gapD
  }
  if (parseInt(driver3.style.left) < 2480){
    driver3.style.left = `${parseInt(driver3.style.left)+1}px`
  }
  else{
    driver3.style.left = gapD
  }
  if (parseInt(driver4.style.left) < 2480){
    driver4.style.left = `${parseInt(driver4.style.left)+1}px`
  }
  else{
    driver4.style.left = gapD
  }
  if (parseInt(driver5.style.left) < 2480){
    driver5.style.left = `${parseInt(driver5.style.left)+1}px`
  }
  else{
    driver5.style.left = gapD1
  }
  if (parseInt(driver6.style.left) < 2480){
    driver6.style.left = `${parseInt(driver6.style.left)+1}px`
  }
  else{
    driver6.style.left = gapD1
  }
  if (parseInt(driver7.style.left) < 2480){
    driver7.style.left = `${parseInt(driver7.style.left)+1}px`
  }
  else{
    driver7.style.left = gapD1
  }

  if (parseInt(driverf.style.left) < 1000){
    driverf.style.left = `${parseInt(driverf.style.left)+1}px`
  }
  else{
    driverf.style.left = gapD
  }
  if (parseInt(driverf1.style.left) < 1200){
    driverf1.style.left = `${parseInt(driverf1.style.left)+1}px`
  }
  else{
    driverf1.style.left = gapD1
  }

 //debw.innerHTML = GrothTime + " dotCount:"+dotCount + " conG:"+conG +" DEBUGING speed"
 wave()

}

var DriveInterval = setInterval(Drive, 10);





function wave(){
  dot.forEach((el) =>{
    x = Math.abs(parseInt(el.style.left)-parseInt(driver.style.left))
    y = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driver.style.top))
    sum = Math.pow(x,2) + Math.pow(y,2)
    c = Math.sqrt(sum)
    rotate_c = Math.abs(1-c/300)*30 

    x1 = Math.abs(parseInt(el.style.left)-parseInt(driver1.style.left))
    y1 = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driver1.style.top))
    sum1 = Math.pow(x1,2) + Math.pow(y1,2)
    c1 = Math.sqrt(sum1)
    rotate_c1 = Math.abs(1-c1/300)*30 

    x2 = Math.abs(parseInt(el.style.left)-parseInt(driver2.style.left))
    y2 = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driver2.style.top))
    sum2 = Math.pow(x2,2) + Math.pow(y2,2)
    c2 = Math.sqrt(sum2)
    rotate_c2 = Math.abs(1-c2/300)*30 

    x3 = Math.abs(parseInt(el.style.left)-parseInt(driver3.style.left))
    y3 = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driver3.style.top))
    sum3 = Math.pow(x3,2) + Math.pow(y3,2)
    c3 = Math.sqrt(sum3)
    rotate_c3 = Math.abs(1-c3/300)*30 

    x4 = Math.abs(parseInt(el.style.left)-parseInt(driver4.style.left))
    y4 = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driver4.style.top))
    sum4 = Math.pow(x4,2) + Math.pow(y4,2)
    c4 = Math.sqrt(sum4)
    rotate_c4 = Math.abs(1-c4/300)*30 

    x5 = Math.abs(parseInt(el.style.left)-parseInt(driver5.style.left))
    y5 = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driver5.style.top))
    sum5 = Math.pow(x5,2) + Math.pow(y5,2)
    c5 = Math.sqrt(sum5)
    rotate_c5 = Math.abs(1-c5/300)*30 

    x6 = Math.abs(parseInt(el.style.left)-parseInt(driver6.style.left))
    y6 = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driver6.style.top))
    sum6 = Math.pow(x6,2) + Math.pow(y6,2)
    c6 = Math.sqrt(sum6)
    rotate_c6 = Math.abs(1-c6/300)*30 

    x7 = Math.abs(parseInt(el.style.left)-parseInt(driver7.style.left))
    y7 = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driver7.style.top))
    sum7 = Math.pow(x7,2) + Math.pow(y7,2)
    c7 = Math.sqrt(sum7)
    rotate_c7 = Math.abs(1-c7/300)*30 
    if (c < 300) {
      el.style.rotate = `${-rotate_c}deg`
      //console.log(rotate_c,el.style.rotate,c)
    }
    if (c1 < 300){
      el.style.rotate = `${-rotate_c1}deg`
    }
    if (c2 < 300){
      el.style.rotate = `${-rotate_c2}deg`
    }
    if (c3 < 300){
      el.style.rotate = `${-rotate_c3}deg`
    }
    if (c4 < 300){
      el.style.rotate = `${-rotate_c4}deg`
    }
    if (c5 < 300){
      el.style.rotate = `${-rotate_c5}deg`
    }
    if (c6 < 300){
      el.style.rotate = `${-rotate_c6}deg`
    }
    if (c7 < 300){
      el.style.rotate = `${-rotate_c7}deg`
    }
  })

  container.forEach((el) =>{
    x = Math.abs(parseInt(el.style.left)-parseInt(driverf.style.left))
    y = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driverf.style.top))
    sum = Math.pow(x,2) + Math.pow(y,2)
    c = Math.sqrt(sum)
    rotate_c = Math.abs(1-c/300)*10
    if (c < 300) {
      el.style.rotate = `${-rotate_c}deg`
    }

    x1 = Math.abs(parseInt(el.style.left)-parseInt(driverf1.style.left))
    y1 = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(driverf1.style.top))
    sum1 = Math.pow(x1,2) + Math.pow(y1,2)
    c1 = Math.sqrt(sum1)
    rotate_c1 = Math.abs(1-c1/300)*10
    if (c1 < 300) {
      el.style.rotate = `${-rotate_c1}deg`
    }
  
  })
}

function mouserotate_dot() {
  window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
  
    dot.forEach((el) =>{
      x = Math.abs(parseInt(el.style.left)-parseInt(e.clientX))
      y = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(e.clientY))
      sum = Math.pow(x,2) + Math.pow(y,2)
      c = Math.sqrt(sum)
      rotate_c = Math.abs(1-c/300)*30 
      if (c < 300) {
        el.style.rotate = `${-parseInt(el.style.rotate)-rotate_c}deg`
        //console.log(rotate_c,el.style.rotate,c)
      }
    
    })
  
  },20)
}

function mouserotate_container() {
    window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
  
    container.forEach((el) =>{
      x = Math.abs(parseInt(el.style.left)-parseInt(e.clientX))
      y = Math.abs((window.innerHeight-parseInt(el.style.bottom))-parseInt(e.clientY))
      sum = Math.pow(x,2) + Math.pow(y,2)
      c = Math.sqrt(sum)
      rotate_c = Math.abs(1-c/300)*30 
      if (c < 300) {
        el.style.rotate = `${-parseInt(el.style.rotate)-rotate_c}deg`
       // console.log(rotate_c,el.style.rotate,c)
      }
    
    })
  
  },20)
}


window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  dot.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(-50% + ${-xValue * speedx * Parrax_at}px), calc(-50% + ${-yValue * speedy * 0.8 * Parrax_at}px)`
  })
  Parrax.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(-50% + ${-xValue * speedx * Parrax_at}px), calc(-50% + ${-yValue * speedy * 0.8 * Parrax_at}px)`
 
  })
},20)



brightr = 0
huer = 0

function filters(){
  container.forEach((el) =>{
    if (parseInt(el.style.bottom) < -160 && parseInt(el.style.left) < 200){
      el.style.filter = `brightness(${0.7+brightr}) saturate(0.95) hue-rotate(${huer}deg) contrast(1) blur(0px)`
    }
    if (parseInt(el.style.bottom) < -160 && parseInt(el.style.left) > 200){
      el.style.filter = `brightness(${0.8+brightr}) saturate(0.95) hue-rotate(${huer}deg) contrast(1) blur(0px)`
    }
    if (parseInt(el.style.bottom) < -160 && parseInt(el.style.left) > 120){
      el.style.filter = `brightness(${0.8+brightr}) saturate(0.95) hue-rotate(${huer}deg) contrast(1) blur(10px)`
    }
    if (parseInt(el.style.bottom) < 200 && parseInt(el.style.left) < 110){
      el.style.filter = `brightness(${0.85+brightr}) saturate(1.2) hue-rotate(${huer}deg) contrast(1) blur(5px)`
    }
  })
}

filters()

instance = document.querySelectorAll(".instance")

instance.forEach((el) =>{
  r = Math.floor((Math.random() * 30) -1);
  if (r<15){
    el.style.rotate = `${-r}deg`
  }
  else{
    el.style.rotate = `${r/2}deg`
  }
   
})


var Parrax_at = 1
var active_at = 1
var Menu1 = document.querySelector(".Menu1")
var Menu2 = document.querySelector(".Menu2")
var Menu3 = document.querySelector(".Menu3")
var Menu4 = document.querySelector(".Menu4")
var Menu5 = document.querySelector(".Menu5")
var Menu6 = document.querySelector(".Menu6")
var Menu7 = document.querySelector(".Menu7")
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
  Menu7.classList.remove("Menu_button_passive")

}
else if ( Ind[buttonIndex].innerHTML === "pressed"){
  Ind[buttonIndex].innerHTML = "press"
  Menu1.classList.add("Menu_button_passive")
  Menu2.classList.add("Menu_button_passive")
  Menu3.classList.add("Menu_button_passive")
  Menu4.classList.add("Menu_button_passive")
  Menu5.classList.add("Menu_button_passive")
  Menu6.classList.add("Menu_button_passive")
  Menu7.classList.add("Menu_button_passive")
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
    clearInterval(DriveInterval)
    DriveInterval = setInterval(Drive, 900);
}
}

function M3(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
  
    Menu3.classList.add("Menu_button_active")
    Menu2.classList.remove("Menu_button_active")
    Menu4.classList.remove("Menu_button_active")
    active_at = 1
    clearInterval(DriveInterval)
    DriveInterval = setInterval(Drive, 10);
}
}


function M4(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
  
    Menu4.classList.add("Menu_button_active")
    Menu2.classList.remove("Menu_button_active")
    Menu3.classList.remove("Menu_button_active")
    active_at = 0.5
    clearInterval(DriveInterval)
    DriveInterval = setInterval(Drive, 5);
}
}
var con1 = 1
var con2 = 1

var conG = 1

var debugSpeed = 1/1

var slider = document.getElementById("slideRange")
var slidefill = document.getElementById("slideFill")
var temp = document.getElementById("temp")
slider.oninput = function(){
  slidefill.style.transform = `translate(${(this.value-50)/100*220-110}px, 0px)`
  brightr= -0.5 + (this.value/100)
  //temp.style.opacity = this.value/100
  //console.log(this.value)

  if (this.value > 60){
    temp.style.backgroundColor = `rgba(255, 208, 0, 0.318)`
    console.log("0009090")
    temp.style.opacity = 0.3
  }
  else if (this.value < 30){
    temp.style.backgroundColor =  `#0a43ff4d`
    temp.style.opacity = 0.3
  }
  else{
    temp.style.backgroundColor =  ` rgba(255, 255, 255, 0)`
    temp.style.opacity = 0
  }

  if (this.value > 60){
    con1 = 2
  }
  if (this.value <=60 && this.value > 30){
    con1 =1
  }
  if (this.value <= 30){
    con1 = 0
  }

  if (con1 == 2 && con2 == 2){
    GrothTime = 60*debugSpeed
    conG = 1
  }
  if (con1 == 1 && con2 == 1){
    GrothTime = 300*debugSpeed
    conG = 1
  }
  if (con1 == 0 && con2 == 0){
    GrothTime = 5000*debugSpeed
    conG = 0
  }
  if (con1 == 0 && con2 == 2){
    GrothTime = 600*debugSpeed
    conG = 1
  }
  if (con1 == 0 && con2 == 1){
    GrothTime == 800*debugSpeed
    conG = 0
  }
  if (con1 == 2 && con2 == 1){
    GrothTime = 200*debugSpeed
    conG = 1
  }
  if (con1 == 2 && con2 == 0){
    GrothTime = 4500*debugSpeed
    conG = 0
  }
  if (con1 == 1 && con2 == 2){
    GrothTime = 500*debugSpeed
    conG = 1
  }
  if (con1 == 1 && con2 == 0){
    GrothTime == 4500*debugSpeed
    conG = 1
  }

  clearInterval(Ginterval)
  Ginterval = Ginterval = setInterval(Groth,GrothTime)

}

var slider1 = document.getElementById("slideRange1")
var slidefill1 = document.getElementById("slideFill1")
var particle = document.getElementById("Particle")
slider1.oninput = function(){
  slidefill1.style.transform = `translate(${(this.value-50)/100*220-110}px, 0px)`
  brightr= -0.5 + (this.value/100)

  if (this.value > 60 && this.value < 80){
    con2 = 2
  }
  if (this.value > 30 && this.value <= 60 ){
    con2 = 1
  }
  if (this.value <=30 || this.value >= 80){
    con2 = 0
  }

  if (con1 == 2 && con2 == 2){
    GrothTime = 60*debugSpeed
    conG = 1
  }
  if (con1 == 1 && con2 == 1){
    GrothTime = 300*debugSpeed
    conG = 1
  }
  if (con1 == 0 && con2 == 0){
    GrothTime = 5000*debugSpeed
    conG = 0
  }
  if (con1 == 0 && con2 == 2){
    GrothTime = 600*debugSpeed
    conG = 1
  }
  if (con1 == 0 && con2 == 1){
    GrothTime == 800*debugSpeed
    conG = 0
  }
  if (con1 == 2 && con2 == 1){
    GrothTime = 200*debugSpeed
    conG = 1
  }
  if (con1 == 2 && con2 == 0){
    GrothTime = 4500*debugSpeed
    conG = 0
  }
  if (con1 == 1 && con2 == 2){
    GrothTime = 500*debugSpeed
    conG = 1
  }
  if (con1 == 1 && con2 == 0){
    GrothTime == 4500*debugSpeed
    conG = 1
  }

  clearInterval(Ginterval)
  Ginterval = Ginterval = setInterval(Groth,GrothTime)

  particle.style.opacity = this.value/100
  //console.log(particle.style.opacity)

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