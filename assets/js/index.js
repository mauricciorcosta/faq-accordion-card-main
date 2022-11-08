var btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() { 
        this.classList.toggle("active");

    var item = this.nextElementSibling;

    if (item.style.display === "block") {
        item.style.display = "none";
    } else {
        item.style.display = "block";
    }

    if (item.style.maxHeight) {
        item.style.maxHeight = null;
    } else {
        item.style.maxHeight = item.scrollHeight + "px";
    }
});
}