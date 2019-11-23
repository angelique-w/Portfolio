const menuCollapse = document.getElementById("menu-collapse");

let isHidden = true;

function handleMenuCollapse() {
    if (isHidden) {
        // menuCollapse.style.visibility = "visible";
        menuCollapse.style.display = "block";
        isHidden = false;
    } else {
        // menuCollapse.style.visibility = "collapse";
        menuCollapse.style.display = "none";
        isHidden = true;
    }
}

document.getElementById("container-menu-icon").addEventListener("click", handleMenuCollapse)


function closeMenu() {
    // menuCollapse.style.visibility = "collapse";
    menuCollapse.style.display = "none";
    isHidden = true;
}

document.getElementById("menu-collapse").addEventListener("click", closeMenu)