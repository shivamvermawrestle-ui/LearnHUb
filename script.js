

const openform =document.getElementById("openform")
const closeform =document.getElementById("closeform")
const formoverlay=document.getElementById("form-overlay")

openform.addEventListener("click",()=>{
  formoverlay.style.display="flex"
})
closeform.addEventListener("click",()=>{
  formoverlay.style.display="none"
})


const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");

menubtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});


