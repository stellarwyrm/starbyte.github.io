
function toggleScheme() {
    // disable default setting
    document.getElementById("preferMode").media='none';

    // then set based on color-scheme variable
    if (document.documentElement.style.getPropertyValue("color-scheme").localeCompare("light") == 0) {
        document.documentElement.style.setProperty("color-scheme", "dark");
        document.getElementById("darkToggle").src="images/button_ld_light.svg";
    } else {
        document.documentElement.style.setProperty("color-scheme", "light");
        document.getElementById("darkToggle").src="images/button_ld_dark.svg";
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