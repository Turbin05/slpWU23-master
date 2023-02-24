

(()=>{
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;

    openNavMenu.addEventListener("click",toggleNav);
    closeNavMenu.addEventListener("click",toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);


    function toggleNav(){
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active")
        document.body.classList.toggle("hidden-scrolling");
    }
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
        window.innerWidth <= mediaSize){
            // Förhindrar defeault click anchor beteendet
            event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // Om menuItemHasChildren är redan expanderad, kollapsar den
        if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
        }
        else{
        //komprimerar den befintliga utökade menuItemHasChildren
        if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
        }
        //expanderar den nya menuItemHasChildren

        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }

    function resizeFix(){
        //On navMenu är öppen, så kommer denna funktionen att stänga den
        if(navMenu.classList.contains("open")){
            toggleNav();
        }
        // OM menuItemHasChildren är expanderad, så ska den kollapsa den
        if(navMenu.querySelector(".menu-itemhas-children.active")){
            collapseSubMenu();
        }
    }
    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizeFix();
        }
    })
})();