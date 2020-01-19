/* All elements with "animate-nav" class
 */

const animate = document.getElementsByClassName("animate-nav");

const navBtn = document.querySelector(".menu-button");
navBtn.addEventListener("click", openMenu);
let isOpen = false;




// Node list of all child-nodes in <main> tag
const mainNodes = document.querySelector("main").childNodes;

/* Adds "hidden" class to all child nodes of <main>
 * apart from the title 
 */
for (let i = 0; i < mainNodes.length; i++) {
    if (mainNodes[i].classList != "title") {
        mainNodes[i].classList += " hidden";
    }

}



function openMenu() {
    if (!isOpen) {
        document.querySelector(".line-1").classList.add("open");
        document.querySelector(".line-2").classList.add("open");
        document.querySelector(".line-3").classList.add("open");
        navBtn.classList.add("open");

        // Prevent scrolling while menu is open
        document.querySelector("#body").style.overflowY = "hidden"
        document.querySelector("nav").style.width = "100%";
        //Apply styling to every element in that class
        for (let i = 0; i < animate.length; i++) {
            animate[i].style.transform = "translateX(0)";
            animate[i].style.opacity = "100";
        }
        isOpen = true;
    } else {
        document.querySelector(".line-1").classList.remove("open");
        document.querySelector(".line-2").classList.remove("open");
        document.querySelector(".line-3").classList.remove("open");
        navBtn.classList.remove("open");
        // Re-activate scrolling when menu is closed

        document.querySelector("#body").style.overflowY = "auto";


        document.querySelector("nav").style.width = "0%";

        for (let i = 0; i < animate.length; i++) {
            animate[i].style.transform = "translateX(-100vw)";
            animate[i].style.opacity = "0";

        }
        isOpen = false;
    }



}
// Scoll-out library animations
ScrollOut({
    targets: ".card-text",
    once: "true",
})
ScrollOut({
    targets: ".card-image",
    once: "true",
})
ScrollOut({
    targets: ".contact-container",
    once: "true",
})
ScrollOut({
    targets: ".policy-container",
    once: "true",
})