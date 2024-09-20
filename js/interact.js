// Generic cookie function from https://stackoverflow.com/a/15724300
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setThemeCookie(mode) {
    if (cookieEnabled) {
        document.cookie = "theme=" + mode + ";max-age="
            + 60 * 60 * 24 * 7;
    }
}




function toggleScheme() {
    // disable default setting
    document.getElementById("preferMode").media='none';

    // then set based on color-scheme variable
    if (document.documentElement.style.getPropertyValue("color-scheme").localeCompare("light") == 0) {
        // set dark mode
        setThemeCookie("dark")
        document.documentElement.style.setProperty("--brightness-val", "70%");
        document.documentElement.style.setProperty("color-scheme", "dark");
        document.getElementById("darkToggle").src="images/utility/button_ld_light.svg";
    } else {
        // set light mode
        setThemeCookie("light");
        document.documentElement.style.setProperty("--brightness-val", "150%");
        document.documentElement.style.setProperty("color-scheme", "light");
        document.getElementById("darkToggle").src="images/utility/button_ld_dark.svg";
    }
}


// From https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp ;)
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }