Parrax_at = 1

Parrax = document.querySelectorAll(".Parrax")


window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  Parrax.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translate(calc(${-xValue * speedx * Parrax_at}px), calc( ${-yValue * speedy * 0.8 * Parrax_at}px)`
  })

},2)

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
