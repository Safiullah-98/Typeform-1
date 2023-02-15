const buttons  = Array.from(document.getElementsByClassName("btn"));
const arrowup = document.getElementsByClassName("icon")[0];
const arrowdown = document.getElementsByClassName("icon")[1];
const box = Array.from(document.getElementsByClassName("box"));

buttons.forEach(btn=>{
  btn.addEventListener("click", (e)=>{
    e.preventDefault();
    scrollWindowDown();
  });
})

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", ()=>{
    document.getElementById(`box${i}`).style.display = "inline";
    let j = 0;
    while(j<3){
      if(j != i){
    document.getElementById(`box${j}`).style.display = "none";
      }
      j++;
    }
  })
}

$(document).keyup((e)=>{
  if(e.key === 'Enter'){
    scrollWindowDown();
  }
})

$(window).bind('mousewheel DOMMouseScroll', function(event){
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    scrollWindowUp()
  }
  else {
scrollWindowDown()
  }
});

arrowdown.addEventListener("click", scrollWindowDown)
arrowup.addEventListener("click", scrollWindowUp)

function scrollWindowDown(){
  window.scrollBy({
    top: window.innerHeight, 
    behavior: "smooth"
  });
}

function scrollWindowUp(){
  window.scrollBy({
    top:-window.innerHeight, 
    behavior: "smooth"
  });
}

function thanks(){
  document.getElementById("thanks").style.display = "flex";
}

