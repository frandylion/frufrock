function switch_theme() {
    let theme = localStorage.getItem("theme");
    if (theme == null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = "dark";
        }
        else {
            theme = "light";
        }
    }

    if (theme == "light") {
        theme = "dark";
    }
    else {
        theme = "light";
    }

    document.querySelector("link[id='theme']").setAttribute("href", "resources/css/" + theme + ".css");
    localStorage.setItem("theme", theme);
}

function load_theme() {
    let theme = localStorage.getItem("theme");
    if (theme != null) {
        document.querySelector("link[id='theme']").setAttribute("href", "resources/css/" + theme + ".css");
    }
}

load_theme();