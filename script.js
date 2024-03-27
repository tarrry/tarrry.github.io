var SiteDown = false;

function redirect() {
    if (SiteDown === false) {
        window.location.href = "https://tarrry.github.io/home/welcome.html";
    } else {
        return false;
    }
}

redirect(); 
