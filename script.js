console.log("Javascript connected successfully!");
const darkMode=document.querySelector("#darkMode");
darkMode.addEventListener("click",function(){
    console.log("Button clicked!");
    document.body.classList.toggle("darkMode");
});