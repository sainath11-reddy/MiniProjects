const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (e) => {
    console.log(e.target.checked);
    document.body.classList.toggle("dark", e.target.checked);
});