// Based on https://www.geeksforgeeks.org/how-to-create-cookie-consent-box-using-html-css-and-javascript/

const consentBox = 
    document.getElementById("consentBox");
const acceptBtn = 
    document.querySelector(".okCookie");
const rejectBtn = 
    document.querySelector(".noCookie");

acceptBtn.onclick = () => {
    document.cookie = "bakedby=swyrm;max-age="
        + 60 * 60 * 24 * 7 + ";path=/";
    if (document.cookie) {
        consentBox.classList.add("hide");
        cookieEnabled = true;
        // save theme
        mode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)? "dark":"light";
        document.cookie = "theme="+mode+";max-age="
            + 60 * 60 * 24 * 7 + ";path=/";
    } else {
        alert
            ("Cookie couldn't be set. Try"+
              " unblocking this site from the cookie"+
              " setting of your browser.");
    }
};

rejectBtn.onclick = () => {
    consentBox.classList.add("hide");
};

let checkCookie = 
    document.cookie.indexOf("bakedby=swyrm");
if (checkCookie !== -1) {
    // Cookies found
    consentBox.classList.add("hide");

    // set theme

    document.getElementById("preferMode").media='none';
    if(getCookie("theme").localeCompare("dark") == 0){
        document.documentElement.style.setProperty("--brightness-val", "70%");
        document.documentElement.style.setProperty("color-scheme", "dark");
        document.getElementById("darkToggle").src="images/utility/button_ld_light.svg";
    } else {
        document.documentElement.style.setProperty("--brightness-val", "150%");
        document.documentElement.style.setProperty("color-scheme", "light");
        document.getElementById("darkToggle").src="images/utility/button_ld_dark.svg";
    }
} else {
    consentBox.classList.remove("hide");
    // Loosely based on https://stackoverflow.com/a/57795495
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // dark mode
        document.documentElement.style.setProperty("color-scheme", "dark");
        document.documentElement.style.setProperty("--brightness-val", "70%");
    } else {
        console.log("No cookie found!");
        document.getElementById("preferMode").media='none';
        document.documentElement.style.setProperty("color-scheme", "light");
        document.documentElement.style.setProperty("--brightness-val", "150%");
    }
}
    
let cookieEnabled = (checkCookie !== -1 ) ? true : false;
