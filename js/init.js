let checkCookie = 
    document.cookie.indexOf("bakedby=swyrm");
if (checkCookie !== -1) {
    // Cookies found
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