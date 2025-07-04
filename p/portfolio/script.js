function toggleMenu() {
    let menu = document.getElementById('nav-menu');
    let toggleButton = document.querySelector('.menu-toggle');

    menu.classList.toggle('menu-active');

    // Change icon based on menu state
    if (menu.classList.contains('menu-active')) {
        toggleButton.innerHTML = "✖"; // Close icon
    } else {
        toggleButton.innerHTML = "☰"; // Menu icon
    }
}

let tablinks=document.getElementsByClassName("tab-links");
let tabcontains=document.getElementsByClassName("tab-contains");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

const msg=document.getElementById("msg");
let js=document.getElementById("js");

js.addEventListener("click",()=>{
    msg.innerHTML="Message send Successfully ..!!!";
  
});

