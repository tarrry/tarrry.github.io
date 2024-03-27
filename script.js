var SiteDown = false;

function redirect() {
    if (SiteDown === false) {
        window.location.href = "https://www.youtube.com";
    } else {
        return false;
    }
}

redirect(); 
