
function darkmode(){
    var element = document.body;
    // var content = document.getElementById("darkmodebtn");
    element.classList.toggle("dark-mode");
};

const btn = document.getElementById("darkmodebtn");

btn.addEventListener("click", function changeText() {
    if (btn.textContent == "Dark Mode"){
        btn.textContent = "Light Mode";
    }else {
        btn.textContent = "Dark Mode";
    }
})