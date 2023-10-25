let parent = document.querySelector('#parent');
let plate = document.querySelector('#plate')
for (let i = 1; i <= 840; i++) {
	parent.innerHTML += `<div class="dot" data-index="${i}"></div>`

}
let dot = document.querySelectorAll(".dot")
function dotGrid(){
dot.forEach(el =>{
 Ww = window.innerWidth 
 Wh = window.innerHeight
  el.innerHTML = el.dataset.index
  if (el.dataset.index <= 10){
    el.style.backgroundColor = "red"
  }
  for (let i = 0; i <= 27; i++){
    if(el.dataset.index > 30*(i) & el.dataset.index <= 30 + 30*i)
    {
      el.style.left = `${(parseInt(Ww)*3.4/100)*parseInt(el.dataset.index - 30*i) - (parseInt(Ww)*3/100)}px`
      el.style.top= `${(parseInt(Wh)*3.4/100) * (i + 1)}px`
    }
  }


 

  //dot display
  el.style.display = "none"
})
}
dotGrid()
window.addEventListener("resize", (e) => {
  dotGrid()
})

var BlobNum = 25
var MaxNum = BlobNum
var CurNum = BlobNum
var ranVal = 15

for (let i = 0; i <= BlobNum; i++) {
  randBac =  Math.floor((Math.random() * 4))+1
  randBacs1 =  Math.floor((Math.random() * 4))+1
  randBacs2 =  Math.floor((Math.random() * 4))+1
  randBacs3 =  Math.floor((Math.random() * 4))+1
  randBacs4 =  Math.floor((Math.random() * 4))+1
  randBacs5 =  Math.floor((Math.random() * 3))+1
  randRotate = Math.floor((Math.random() * 5))
  randRotate1 = Math.floor((Math.random() * 5))
  randRotate2 = Math.floor((Math.random() * 5))
  randRotate3 = Math.floor((Math.random() * 5))
  randRotate4 = Math.floor((Math.random() * 5))
  rand = Math.floor((Math.random() * ranVal))
  rand1 = Math.floor((Math.random() * ranVal))
  rand2 = Math.floor((Math.random() * ranVal))
  rand3 = Math.floor((Math.random() * ranVal))
	plate.innerHTML += `    
  <div class="warpperOUT" data-index="${i}" data-point="1" data-locX="0" data-locY="0">
  <div class="warpperMed" data-index="${i}">
  <div class="warpperIN" data-index="${i}">
  <div class="Blob" style="top: ${60+rand3}px; left: ${20+rand}px;" data-index="${1 + 8*i}"><img src="interact_images/BacG${randBacs4}.png" class="BacGs" style="rotate: ${randRotate4}deg;"></div>
  <div class="Blob" style="top: ${20+rand2}px; left: ${60+rand1}px;" data-index="${2 + 8*i}"><img src="interact_images/BacG${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3}deg;"></div>
  <div class="Blob5" style="top: ${60}px; left: ${60}px; z-index: 1;"data-index="${5 + 5*i}"><img src="interact_images/BacC1.png" class="BacG" style="rotate: ${randRotate}deg;"></div>
  <div class="Blob" style="top: ${60+rand1}px; left: ${100+rand2}px;"data-index="${3 + 8*i}"><img src="interact_images/BacG${randBacs2}.png" class="BacGs" style="rotate: ${randRotate2}deg;"></div>
  <div class="Blob" style="top: ${100+rand}px; left: ${60+rand3}px;"data-index="${4 + 8*i}"><img src="interact_images/BacG${randBacs1}.png" class="BacGs" style="rotate: ${randRotate1}deg;"></div>
  <div class="Blob" style="top: ${10+rand2}px; left: ${80+rand}px;"data-index="${6 + 8*i}"><img src="interact_images/BacG${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3}deg;"></div>
  <div class="Blob" style="top: ${60+rand2}px; left: ${80+rand}px;"data-index="${7 + 8*i}"><img src="interact_images/BacG${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3}deg;"></div>
  <div class="Blob" style="top: ${30+rand2}px; left: ${20+rand}px;"data-index="${8 + 8*i}"><img src="interact_images/BacG${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3}deg;"></div>
  </div>
 
  <div class="Lighter" data-index="${i}"></div>
  </div>
</div>
`

}

var BlobHunt = 4

for (let i = 0; i <= BlobHunt; i++) {
  randBac =  Math.floor((Math.random() * 4))+1
  randBacs1 =  Math.floor((Math.random() * 3))+1
  randBacs2 =  Math.floor((Math.random() * 3))+1
  randBacs3 =  Math.floor((Math.random() * 3))+1
  randBacs4 =  Math.floor((Math.random() * 3))+1
  randBacs5 =  Math.floor((Math.random() * 3))+1
  randRotate = Math.floor((Math.random() * 5))
  randRotate1 = Math.floor((Math.random() * 5))
  randRotate2 = Math.floor((Math.random() * 5))
  randRotate3 = Math.floor((Math.random() * 5))
  randRotate4 = Math.floor((Math.random() * 5))
  rand = Math.floor((Math.random() * ranVal))
  rand1 = Math.floor((Math.random() * ranVal))
  rand2 = Math.floor((Math.random() * ranVal))
  rand3 = Math.floor((Math.random() * ranVal))
	plate.innerHTML += `    
  <div class="warpperOUTH" data-index="${i}">
  <div class="warpperINH" data-index="${i}">
  <div class="BlobH" style="top: ${60+rand3}px; left: ${20+rand}px;" data-index="${1 + 5*i}"><img src="interact_images/BacH${randBacs4}.png" class="BacGs" style="rotate: ${randRotate4}deg;"></div>
  <div class="BlobH" style="top: ${20+rand2}px; left: ${60+rand1}px;" data-index="${2 + 5*i}"><img src="interact_images/BacH${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3}deg;"></div>
  <div class="BlobHC" style="top: ${60}px; left: ${60}px; z-index:1;l"data-index="${5 + 5*i}"><img src="interact_images/BacHC1.png" class="BacG" style="rotate: ${randRotate}deg;"></div>
  <div class="BlobH" style="top: ${60+rand1}px; left: ${100+rand2}px;"data-index="${3 + 5*i}"><img src="interact_images/BacH${randBacs2}.png" class="BacGs" style="rotate: ${randRotate2}deg;"></div>
  <div class="BlobH" style="top: ${100+rand}px; left: ${60+rand3}px;"data-index="${4 + 5*i}"><img src="interact_images/BacH${randBacs1}.png" class="BacGs" style="rotate: ${randRotate1}deg;"></div>
  <div class="BlobH" style="top: ${10+rand2}px; left: ${80+rand}px;"data-index="${6 + 5*i}"><img src="interact_images/BacH${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3}deg;"></div>
  <div class="BlobH" style="top: ${60+rand2}px; left: ${80+rand}px;"data-index="${7 + 5*i}"><img src="interact_images/BacH${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3}deg;"></div>
  <div class="BlobH" style="top: ${30+rand2}px; left: ${20+rand}px;"data-index="${8 + 5*i}"><img src="interact_images/BacH${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3}deg;"></div>
  <div class="BlobH" style="top: ${100+rand2}px; left: ${3+rand}px;"data-index="${9 + 5*i}"><img src="interact_images/BacH${randBacs3}.png" class="BacGs" style="rotate: ${randRotate3+90}deg;"></div>
  </div>
  <div class="Lighter" data-index="${i}"></div>
</div>
`

}
//Hunt color

var Move = 1


let blob = document.querySelectorAll(".Blob")
let warpperOUT = document.querySelectorAll(".warpperOUT")

let blobH = document.querySelectorAll(".BlobH")
let warpperOUTH = document.querySelectorAll(".warpperOUTH")
blob.forEach(el=>{
  //el.innerHTML = `${el.dataset.index}`
})
//Bac Move
warpperOUT.forEach(ew => {
  ew.dataset.locX = parseInt(ew.style.left)
  ew.dataset.locY = parseInt(ew.style.top)
  if (ew.dataset.index <= 5){
    ew.children[0].dataset.speedx="0.01"
    ew.children[0].dataset.speedy="0.01"
    ew.style.opacity = "0.8"
    ew.style.transition = `top 10s, left 10s, transform 20s, rotate 60s, opacity 0.6s cubic-bezier(.85,-0.01,.38,1)`
  setInterval(function() {
    var dotX = 0
    var dotY = 0
    randP = Math.floor((Math.random() * 840))
    randR = Math.floor(Math.random() * 360)
    dot.forEach(el =>{
      if (el.dataset.index == randP && Move == 1  && Math.sqrt(Math.pow(Math.abs(parseInt(el.style.top)-parseInt(ew.style.top)),2)+Math.pow(Math.abs(parseInt(el.style.left)-parseInt(ew.style.left)),2)) <= 170){
        el.style.backgroundColor = "blue"
        dotX = parseInt(el.style.left)
        dotY = parseInt(el.style.top)
  
        Wx = parseInt(ew.style.left)
        Wy = parseInt(ew.style.top)
  
     let transX = dotX - parseInt(ew.dataset.locX)
     let transY = dotY - parseInt(ew.dataset.locY)

        ew.style.transform = `translateX(${transX}px) translateY(${transY}px)`

        ew.dataset.locX = parseInt(ew.dataset.locX)+transX
        ew.dataset.locY = parseInt(ew.dataset.locY)+transY
  
       //ew.style.left = `${dotX}px`
        //ew.style.top = `${dotY}px`

        ew.children[0].children[0].style.rotate = `${randR}deg`
        // blur
        ew.style.filter = "blur(4px)"

        console.log( transX ,"llo")
  
      }
      else{
        el.style.backgroundColor = "red"
      }
    })
  

  
  }, 700);
}
if (ew.dataset.index > 5 && ew.dataset.index <= 10){
  ew.children[0].dataset.speedx="0.015"
  ew.children[0].dataset.speedy="0.015"
  ew.style.opacity = "0.9"
  ew.style.transition = `top 10s, left 10s, transform 20s, rotate 60s, opacity 0.6s cubic-bezier(.85,-0.01,.38,1)`
setInterval(function() {
  var dotX = 0
  var dotY = 0
  randP = Math.floor((Math.random() * 840))
  randR = Math.floor(Math.random() * 120)
  dot.forEach(el =>{
    if (el.dataset.index == randP && Move == 1  && Math.sqrt(Math.pow(Math.abs(parseInt(el.style.top)-parseInt(ew.style.top)),2)+Math.pow(Math.abs(parseInt(el.style.left)-parseInt(ew.style.left)),2)) <= 170){
      el.style.backgroundColor = "blue"
      dotX = parseInt(el.style.left)
      dotY = parseInt(el.style.top)

      Wx = parseInt(ew.style.left)
      Wy = parseInt(ew.style.top)

      let transX = dotX - parseInt(ew.dataset.locX)
      let transY = dotY - parseInt(ew.dataset.locY)
 
         ew.style.transform = `translateX(${transX}px) translateY(${transY}px)`
 
         ew.dataset.locX = parseInt(ew.dataset.locX)+transX
         ew.dataset.locY = parseInt(ew.dataset.locY)+transY

    // ew.style.left = `${dotX}px`
      //ew.style.top = `${dotY}px`

      ew.children[0].children[0].style.rotate = `${randR}deg`
      // blur
      ew.style.filter = "blur(2px)"

    }
    else{
      el.style.backgroundColor = "red"
    }
  })

}, 700);
}
else{
  ew.children[0].dataset.speedx="0.03"
  ew.children[0].dataset.speedy="0.03"
  ew.style.transition = `top 10s, left 10s, transform 20s, rotate 60s, opacity 0.6s cubic-bezier(.85,-0.01,.38,1)`
  setInterval(function() {
    var dotX = 0
    var dotY = 0
    randP = Math.floor((Math.random() * 840))
    randR = Math.floor(Math.random() * 120)
    dot.forEach(el =>{
      if (el.dataset.index == randP && Move == 1  && Math.sqrt(Math.pow(Math.abs(parseInt(el.style.top)-parseInt(ew.style.top)),2)+Math.pow(Math.abs(parseInt(el.style.left)-parseInt(ew.style.left)),2)) <= 170){
        el.style.backgroundColor = "blue"
        dotX = parseInt(el.style.left)
        dotY = parseInt(el.style.top)
  
        Wx = parseInt(ew.style.left)
        Wy = parseInt(ew.style.top)
  
        let transX = dotX - parseInt(ew.dataset.locX)
        let transY = dotY - parseInt(ew.dataset.locY)
   
           ew.style.transform = `translateX(${transX}px) translateY(${transY}px)`
   
           ew.dataset.locX = parseInt(ew.dataset.locX)+transX
           ew.dataset.locY = parseInt(ew.dataset.locY)+transY
  
       //ew.style.left = `${dotX}px`
        //ew.style.top = `${dotY}px`

        ew.children[0].children[0].style.rotate = `${randR}deg`
  
      }
      else{
        el.style.backgroundColor = "red"
      }
    })
  
  },700);
}
})

warpperOUT.forEach(ew => {
    var dotX = 0
    var dotY = 0
    randP = Math.floor((Math.random() * 840))
    dot.forEach(el =>{
      if (el.dataset.index == randP){
        dotX = parseInt(el.style.left)
        dotY = parseInt(el.style.top)
  
        Wx = parseInt(ew.style.left)
        Wy = parseInt(ew.style.top)
  
    
  
       ew.style.left = `${dotX}px`
        ew.style.top = `${dotY}px`
        ew.dataset.locX = parseInt(ew.style.left)
        ew.dataset.locY = parseInt(ew.style.top)

      }
    })
  

})

//Bac Grow
setInterval(function() {
  Select = Math.floor(Math.random() * BlobNum)
  warpperOUT.forEach(el => {
    Id = parseInt(el.dataset.index)
    Point = parseInt(el.dataset.point)
    
    if (Id == Select && Point <=8){
      el.dataset.point = Point + 1
      //console.log(Point,Id)
    }

    if (Id == Select){
      if (el.dataset.point == 2){
        el.children[0].children[0].children[0].classList.add("BlobActive")
      }
      else if (el.dataset.point == 3){
        el.children[0].children[0].children[0].classList.add("BlobActive")
        el.children[0].children[0].children[1].classList.add("BlobActive")
      }
      else if (el.dataset.point == 4){
        el.children[0].children[0].children[0].classList.add("BlobActive")
        el.children[0].children[0].children[1].classList.add("BlobActive")
        el.children[0].children[0].children[3].classList.add("BlobActive")
      }
      else if (el.dataset.point == 5){
        el.children[0].children[0].children[0].classList.add("BlobActive")
        el.children[0].children[0].children[1].classList.add("BlobActive")
        el.children[0].children[0].children[3].classList.add("BlobActive")
        el.children[0].children[0].children[4].classList.add("BlobActive")
      }
      else if (el.dataset.point == 6){
        el.children[0].children[0].children[0].classList.add("BlobActive")
        el.children[0].children[0].children[1].classList.add("BlobActive")
        el.children[0].children[0].children[3].classList.add("BlobActive")
        el.children[0].children[0].children[4].classList.add("BlobActive")
        el.children[0].children[0].children[5].classList.add("BlobActive")
      }
      else if (el.dataset.point == 7){
        el.children[0].children[0].children[0].classList.add("BlobActive")
        el.children[0].children[0].children[1].classList.add("BlobActive")
        el.children[0].children[0].children[3].classList.add("BlobActive")
        el.children[0].children[0].children[4].classList.add("BlobActive")
        el.children[0].children[0].children[5].classList.add("BlobActive")
        el.children[0].children[0].children[6].classList.add("BlobActive")
      }
      else if (el.dataset.point == 8){
        el.children[0].children[0].children[0].classList.add("BlobActive")
        el.children[0].children[0].children[1].classList.add("BlobActive")
        el.children[0].children[0].children[3].classList.add("BlobActive")
        el.children[0].children[0].children[4].classList.add("BlobActive")
        el.children[0].children[0].children[5].classList.add("BlobActive")
        el.children[0].children[0].children[6].classList.add("BlobActive")
        el.children[0].children[0].children[7].classList.add("BlobActive")
      }

     
    }
  })

},200)
//Cal degree Rotate
function Rotater(xo,yo,xc,yc){
let X = (xo-xc)
let Y = (yo-yc)
let C = Math.sqrt(Math.pow(X,2) + Math.pow(Y,2))
let degree = Math.asin(Y/C)*57.2958
return degree
}
console.log("First:",Rotater(10,5,1,1))
//Bac Sub Rotate


warpperOUT.forEach(el=>{
 let childCenVer = el.children[0].children[0].children[2].getBoundingClientRect().top
 let childCenHor = el.children[0].children[0].children[2].getBoundingClientRect().left

 for (let i = 0; i <= 7; i++){
  var  ec = el.children[0].children[0].children[i]
  let  childVer = ec.getBoundingClientRect().top
  let  childHor = ec.getBoundingClientRect().left
   //In  Progress
   //cal Distance and Arcsine angle then plus 90 degree each quadrant
   if (childVer-childCenVer >= 0 && childHor-childCenHor >= 0){
    el.children[0].children[0].children[i].style.transform = `rotate(${Rotater(childHor,childVer,childCenHor,childCenVer)+90}deg)`
     console.log(parseInt(Rotater(childHor,childVer,childCenHor,childCenVer)),ec.dataset.index, ec.style.transform,"F1")
    el.children[0].children[0].children[i].style.backgroundColor = "green"
   // el.children[0].children[i].innerHTML = "1"
   }
   if (childVer-childCenVer >= 0 && childHor-childCenHor <= 0){
    el.children[0].children[0].children[i].style.transform = `rotate(${Rotater(childVer,childHor,childCenVer,childCenHor)-180}deg)`
     console.log(parseInt(Rotater(childHor,childVer,childCenHor,childCenVer)),ec.dataset.index,  el.children[0].children[0].children[i].style.transform,"F2")
     el.children[0].children[0].children[i].style.backgroundColor = "blue"
     //el.children[0].children[i].innerHTML = "1"
   }
   if (childVer-childCenVer <= 0 && childHor-childCenHor <= 0){
    el.children[0].children[0].children[i].style.transform = `rotate(${Rotater(childVer,childHor,childCenVer,childCenHor)}deg)`
     console.log(parseInt(Rotater(childHor,childVer,childCenHor,childCenVer)),ec.dataset.index,  el.children[0].children[0].children[i].style.transform,"F3")
     el.children[0].children[0].children[i].style.backgroundColor = "red"
     //el.children[0].children[i].innerHTML = "1"
   }
   if (childVer-childCenVer <= 0 && childHor-childCenHor >= 0){
    el.children[0].children[0].children[i].style.transform = `rotate(${Rotater(childHor,childVer,childCenHor,childCenVer)+60}deg)`
     console.log(parseInt(Rotater(childHor,childVer,childCenHor,childCenVer)),ec.dataset.index,  el.children[0].children[0].children[i].style.transform,"F4")
     el.children[0].children[0].children[i].style.backgroundColor = "purple"
     //el.children[0].children[i].innerHTML = "1"
   }


 }

})

warpperOUTH.forEach(el=>{
  let childCenVer = el.children[0].children[2].getBoundingClientRect().top
  let childCenHor = el.children[0].children[2].getBoundingClientRect().left
 
  for (let i = 0; i <= 8; i++){
   var  ec = el.children[0].children[i]
   let  childVer = ec.getBoundingClientRect().top
   let  childHor = ec.getBoundingClientRect().left
    //In  Progress
    //cal Distance and Arcsine angle then plus 90 degree each quadrant
    if (childVer-childCenVer >= 0 && childHor-childCenHor >= 0){
     el.children[0].children[i].style.transform = `rotate(${Rotater(childHor,childVer,childCenHor,childCenVer)+90}deg)`
      console.log(parseInt(Rotater(childHor,childVer,childCenHor,childCenVer)),ec.dataset.index, ec.style.transform,"F1")
     el.children[0].children[i].style.backgroundColor = "green"
    // el.children[0].children[i].innerHTML = "1"
    }
    if (childVer-childCenVer >= 0 && childHor-childCenHor <= 0){
     el.children[0].children[i].style.transform = `rotate(${Rotater(childVer,childHor,childCenVer,childCenHor)-180}deg)`
      console.log(parseInt(Rotater(childHor,childVer,childCenHor,childCenVer)),ec.dataset.index,  el.children[0].children[i].style.transform,"F2")
      el.children[0].children[i].style.backgroundColor = "blue"
      //el.children[0].children[i].innerHTML = "1"
    }
    if (childVer-childCenVer <= 0 && childHor-childCenHor <= 0){
     el.children[0].children[i].style.transform = `rotate(${Rotater(childVer,childHor,childCenVer,childCenHor)}deg)`
      console.log(parseInt(Rotater(childHor,childVer,childCenHor,childCenVer)),ec.dataset.index,  el.children[0].children[i].style.transform,"F3")
      el.children[0].children[i].style.backgroundColor = "red"
      //el.children[0].children[i].innerHTML = "1"
    }
    if (childVer-childCenVer <= 0 && childHor-childCenHor >= 0){
     el.children[0].children[i].style.transform = `rotate(${Rotater(childHor,childVer,childCenHor,childCenVer)+60}deg)`
      console.log(parseInt(Rotater(childHor,childVer,childCenHor,childCenVer)),ec.dataset.index,  el.children[0].children[i].style.transform,"F4")
      el.children[0].children[i].style.backgroundColor = "purple"
      //el.children[0].children[i].innerHTML = "1"
    }
 
 
  }
 
 })


//Hunt Move
warpperOUTH.forEach(ew => {
  ew.dataset.locX = parseInt(ew.style.left)
  ew.dataset.locY = parseInt(ew.style.top)
  if (ew.dataset.index <= 1){
    ew.style.opacity = "0.7"
    ew.style.zIndex = "-1"
    ew.style.transition = `top 10s, left 10s, transform 10s, rotate 60s cubic-bezier(.85,-0.01,.38,1)`
  setInterval(function() {
    var dotX = 0
    var dotY = 0
    randP = Math.floor((Math.random() * 840))
    randR = Math.floor(Math.random() * 120)
    dot.forEach(el =>{
      if (el.dataset.index == randP && Move == 1  && Math.sqrt(Math.pow(Math.abs(parseInt(el.style.top)-parseInt(ew.style.top)),2)+Math.pow(Math.abs(parseInt(el.style.left)-parseInt(ew.style.left)),2)) <= 170){
        el.style.backgroundColor = "blue"
        dotX = parseInt(el.style.left)
        dotY = parseInt(el.style.top)
  
        Wx = parseInt(ew.style.left)
        Wy = parseInt(ew.style.top)

        let transX = dotX - parseInt(ew.dataset.locX)
        let transY = dotY - parseInt(ew.dataset.locY)
   
        ew.style.transform = `translateX(${transX}px) translateY(${transY}px)`
   
        ew.dataset.locX = parseInt(ew.dataset.locX)+transX
        ew.dataset.locY = parseInt(ew.dataset.locY)+transY

  
       //ew.style.left = `${dotX}px`
       // ew.style.top = `${dotY}px`
        ew.children[0].style.rotate = `${randR}deg`
           // blur
          ew.style.filter = "blur(3px)"
      }
      else{
        el.style.backgroundColor = "red"
      }
    })
  
  }, 520);
}
else{
  ew.style.transition = `top 10s, left 10s, transform 10s, rotate 60s cubic-bezier(.85,-0.01,.38,1)`
  setInterval(function() {
    var dotX = 0
    var dotY = 0
    randP = Math.floor((Math.random() * 840))
    randR = Math.floor(Math.random() * 120)
    dot.forEach(el =>{
      if (el.dataset.index == randP && Move == 1 &&Math.sqrt(Math.pow(Math.abs(parseInt(el.style.top)-parseInt(ew.style.top)),2)+Math.pow(Math.abs(parseInt(el.style.left)-parseInt(ew.style.left)),2)) <= 170){
        el.style.backgroundColor = "blue"
        dotX = parseInt(el.style.left)
        dotY = parseInt(el.style.top)
  
        Wx = parseInt(ew.style.left)
        Wy = parseInt(ew.style.top)
  
        let transX = dotX - parseInt(ew.dataset.locX)
        let transY = dotY - parseInt(ew.dataset.locY)
   
        ew.style.transform = `translateX(${transX}px) translateY(${transY}px)`
   
        ew.dataset.locX = parseInt(ew.dataset.locX)+transX
        ew.dataset.locY = parseInt(ew.dataset.locY)+transY
  
       //ew.style.left = `${dotX}px`
        //ew.style.top = `${dotY}px`

        ew.children[0].style.rotate = `${randR}deg`
  
      }
      else{
        el.style.backgroundColor = "red"
      }
    })
  
  }, 520);
}
})

warpperOUTH.forEach(ew => {
  
    var dotX = 0
    var dotY = 0
    randP = Math.floor((Math.random() * 840))
    dot.forEach(el =>{
      if (el.dataset.index == randP){
        dotX = parseInt(el.style.left)
        dotY = parseInt(el.style.top)
  
        Wx = parseInt(ew.style.left)
        Wy = parseInt(ew.style.top)
  
    
  
       ew.style.left = `${dotX}px`
        ew.style.top = `${dotY}px`
        ew.dataset.locX = parseInt(ew.style.left)
        ew.dataset.locY = parseInt(ew.style.top)
      }
    })
  

})

//Add data-Eaten
warpperOUT.forEach(el =>{
  el.dataset.eaten = 0
})

var AttackRange = 160

// Hunt Attack
setInterval(function(){
warpperOUTH.forEach(eH =>{
  let eHY = eH.getBoundingClientRect().top
  let eHX = eH.getBoundingClientRect().left
  warpperOUT.forEach(ew=>{
  let ewY = ew.getBoundingClientRect().top
  let ewX = ew.getBoundingClientRect().left

      if (Math.sqrt(Math.pow(Math.abs(parseInt(eHY)-parseInt(ewY)),2)+Math.pow(Math.abs(parseInt(eHX)-parseInt(ewX)),2)) <= AttackRange)
      {
        //ew.style.display = "none"
        if (parseInt(ew.dataset.point) >= 1 && ew.dataset.eaten == 0) {
          ew.dataset.eaten = 1
          ew.dataset.point = parseInt(ew.dataset.point) -1
          if (ew.dataset.point == 0){
            //Disappear "work in progress"
            ew.style.display = "none"
            //CurNum -= 1
          }
          if (ew.dataset.point == 1){
            ew.children[0].children[0].children[0].classList.remove("BlobActive")
            ew.children[0].children[0].children[1].classList.remove("BlobActive")
            ew.children[0].children[0].children[3].classList.remove("BlobActive")
            ew.children[0].children[0].children[4].classList.remove("BlobActive")
            ew.children[0].children[0].children[5].classList.remove("BlobActive")
            ew.children[0].children[0].children[6].classList.remove("BlobActive")
            ew.children[0].children[0].children[7].classList.remove("BlobActive")
          }
          else if (ew.dataset.point == 2){
            ew.children[0].children[0].children[1].classList.remove("BlobActive")
            ew.children[0].children[0].children[3].classList.remove("BlobActive")
            ew.children[0].children[0].children[4].classList.remove("BlobActive")
            ew.children[0].children[0].children[5].classList.remove("BlobActive")
            ew.children[0].children[0].children[6].classList.remove("BlobActive")
            ew.children[0].children[0].children[7].classList.remove("BlobActive")
          }
          else if (ew.dataset.point == 3){
            ew.children[0].children[0].children[3].classList.remove("BlobActive")
            ew.children[0].children[0].children[4].classList.remove("BlobActive")
            ew.children[0].children[0].children[5].classList.remove("BlobActive")
            ew.children[0].children[0].children[6].classList.remove("BlobActive")
            ew.children[0].children[0].children[7].classList.remove("BlobActive")
          }
          else if (ew.dataset.point == 4){
            ew.children[0].children[0].children[4].classList.remove("BlobActive")
            ew.children[0].children[0].children[5].classList.remove("BlobActive")
            ew.children[0].children[0].children[6].classList.remove("BlobActive")
            ew.children[0].children[0].children[7].classList.remove("BlobActive")
          }
          else if (ew.dataset.point == 5){
            ew.children[0].children[0].children[5].classList.remove("BlobActive")
            ew.children[0].children[0].children[6].classList.remove("BlobActive")
            ew.children[0].children[0].children[7].classList.remove("BlobActive")
          }
          else if (ew.dataset.point == 5){
            ew.children[0].children[0].children[6].classList.remove("BlobActive")
            ew.children[0].children[0].children[7].classList.remove("BlobActive")
          }
          else if (ew.dataset.point == 5){
            ew.children[0].children[0].children[7].classList.remove("BlobActive")
          }
         // console.log(ew.dataset.point, ew.dataset.index)
          
        }
    
      }
  })
})
},20)
setInterval(function(){
  warpperOUT.forEach(el =>{
    el.dataset.eaten = 0
  })
},1000)

//eat cooldown indicator 
/*
setInterval(function(){
  warpperOUT.forEach(el =>{
    if (el.dataset.eaten == 1){
      el.style.backgroundColor = "gray"
    }
    else{
      el.style.backgroundColor = "white"
    }
  })
},10)
*/
//Blob add



setInterval(function(){
  warpperOUT.forEach(el =>{
    randP = Math.floor((Math.random() * CurNum))
    if (el.style.display == "none" && parseInt(el.dataset.index) == randP){
      el.style.display = "inline-block"

      el.dataset.point = 1
      console.log(CurNum)
      //CurNum += 1
    }
  })

},500)

//Shaders 
let Lighter = document.querySelectorAll(".Lighter")
setInterval(function(){
  Lighter.forEach(el=>{
    let Top = el.getBoundingClientRect().top
    let Left = el.getBoundingClientRect().left
  
    //el.innerHTML =`X:${parseInt(Left)},Y:${parseInt(Top)}`
  })

  warpperOUT.forEach(WO=>{
    let Lighter = WO.children[0].children[1]
    let Top = Lighter.getBoundingClientRect().top
    let Left = Lighter.getBoundingClientRect().left

    for (let i = 0; i <= 7; i++){
      el =  WO.children[0].children[0].children[i].children[0]
      let BTop = el.getBoundingClientRect().top
      let BLeft = el.getBoundingClientRect().left

      x = Math.abs(BLeft-Left)
      y = Math.abs(BTop-Top)
      sum = Math.pow(x,2) + Math.pow(y,2)
      c = Math.sqrt(sum)
      bright_c =(1-c/180)*1.4-0.1
      if (c <= 200){
        el.style.filter = `brightness(${bright_c})`
        //console.log(el.dataset.index,el.style.filter)
      }
    
    }

  })

  warpperOUTH.forEach(WO=>{
    let Lighter = WO.children[1]
    let Top = Lighter.getBoundingClientRect().top
    let Left = Lighter.getBoundingClientRect().left

    for (let i = 0; i <= 7; i++){
      el =  WO.children[0].children[i].children[0]
      let BTop = el.getBoundingClientRect().top
      let BLeft = el.getBoundingClientRect().left

      x = Math.abs(BLeft-Left)
      y = Math.abs(BTop-Top)
      sum = Math.pow(x,2) + Math.pow(y,2)
      c = Math.sqrt(sum)
      bright_c =(1-c/200)*1.4-0.1
      if (c <= 200){
        el.style.filter = `brightness(${bright_c})`
        //console.log(el.dataset.index,el.style.filter)
      }
    
    }

  })
  
},20)

warpperOUT.forEach(WO=>{
  let Lighter = WO.children[0].children[1]
  let Top = Lighter.getBoundingClientRect().top
  let Left = Lighter.getBoundingClientRect().left

  for (let i = 0; i <= 7; i++){
    el =   WO.children[0].children[0].children[i].children[0]
    let BTop = el.getBoundingClientRect().top
    let BLeft = el.getBoundingClientRect().left

    x = Math.abs(BLeft-Left)
    y = Math.abs(BTop-Top)
    sum = Math.pow(x,2) + Math.pow(y,2)
    c = Math.sqrt(sum)
    bright_c =(1-c/180)*1.4-0.15
    if (c <= 200){
      el.style.filter = `brightness(${bright_c})`
      //console.log(el.dataset.index,el.style.filter)
    }
  
  }

})
warpperOUTH.forEach(WO=>{
  let Lighter = WO.children[1]
  let Top = Lighter.getBoundingClientRect().top
  let Left = Lighter.getBoundingClientRect().left

  for (let i = 0; i <= 7; i++){
    el =   WO.children[0].children[i].children[0]
    let BTop = el.getBoundingClientRect().top
    let BLeft = el.getBoundingClientRect().left

    x = Math.abs(BLeft-Left)
    y = Math.abs(BTop-Top)
    sum = Math.pow(x,2) + Math.pow(y,2)
    c = Math.sqrt(sum)
    bright_c =(1-c/200)*1.4-0.1
    if (c <= 200){
      el.style.filter = `brightness(${bright_c})`
      //console.log(el.dataset.index,el.style.filter)
    }
  
  }

})



//Parrax
var Parrax = document.querySelectorAll(".Parrax");
var Parraxs = document.querySelectorAll(".Parraxs");

var Parrax_at = 0
window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  Parrax.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(-50% + ${-xValue * speedx * Parrax_at}px), calc(-50% + ${-yValue * speedy * 0.8 * Parrax_at}px)`
 
  })
},1)



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
    Move = 0
    console.log(Parrax_at)
}
else if ( Ind[buttonIndex].innerHTML === "pressed"){
  Ind[buttonIndex].innerHTML = "press"
  Menu1.classList.add("Menu_button_active")
  Move = 1

}
}

function M2(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
 
    Menu2.classList.add("Menu_button_active")
    Menu3.classList.remove("Menu_button_active")
    Menu4.classList.remove("Menu_button_active")
    AttackRange = 120

}
}

function M3(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
  
    Menu3.classList.add("Menu_button_active")
    Menu2.classList.remove("Menu_button_active")
    Menu4.classList.remove("Menu_button_active")
    AttackRange = 160

}
}


function M4(buttonIndex){
  if (Ind[buttonIndex].innerHTML === "press"){
  
    Menu4.classList.add("Menu_button_active")
    Menu2.classList.remove("Menu_button_active")
    Menu3.classList.remove("Menu_button_active")
    AttackRange = 240
 
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