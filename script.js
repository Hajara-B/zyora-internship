console.log("Javascript connected successfully!");
const darkMode=document.querySelector("#darkMode");
darkMode.addEventListener("click",function(){
    console.log("Button clicked!");
    document.body.classList.toggle("darkMode");
});
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    console.log(name);
    console.log(email);
    console.log(message);

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email.");
    return;
}
});