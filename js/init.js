
// Based on https://stackoverflow.com/a/57795495
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    document.documentElement.style.setProperty("color-scheme", "dark");
} else {
    document.documentElement.style.setProperty("color-scheme", "light");
}

document.getElementById("preferMode").media='none';