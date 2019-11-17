const menuCollapse = document.getElementById("menu-collapse");

let isHidden = true;

function handleMenuCollapse() {
    if (isHidden) {
        menuCollapse.style.visibility = "visible";
        isHidden = false;
    } else {
        menuCollapse.style.visibility = "collapse";
        isHidden = true;
    }
}

document.getElementById("container-menu-icon").addEventListener("click", handleMenuCollapse)


function closeMenu() {
    menuCollapse.style.visibility = "collapse";
    isHidden = true;
}

document.getElementById("menu-collapse").addEventListener("click", closeMenu)