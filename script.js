const colorInput = document.querySelector(".colorInput"); //1 element
const allPixels = document.querySelectorAll(".pixel"); //n element
const clear = document.querySelector(".clear")
clear.addEventListener("click",()=>{
    allPixels.forEach(pixel=>{
        pixel.style.backgroundColor = "transparent"
})
})

allPixels.forEach(pixel=>{  
    pixel.addEventListener("dragover",(e)=>{
        e.target.style.backgroundColor = colorInput.value
    })
})