'use srrict'
let art = document.querySelectorAll(".header_list")
//console.dir(atr);
let outElem = () => {
    alert('Sorry not ready yet')
}
art.forEach(item => {
    console.log(item);
    item.addEventListener('click', outElem)

})
let logo = document.querySelector(".header_logo")
logo.addEventListener("click",()=>{
    alert("HELLO")
})