const darkmode = document.getElementById("dark-mode")
const lightmode = document.getElementById("light-mode")
darkmode.addEventListener("click",()=>{
    // document.body.style.backgroundColor="black"
    // document.body.style.color="white"
    document.body.classList.add("dark")
})
lightmode.addEventListener("click",()=>{
    // document.body.style.backgroundColor="white"
    // document.body.style.color="black"
    document.body.classList.remove("dark")

    
})