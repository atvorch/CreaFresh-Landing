window.onload = function() {
    var toggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu');
    var body = document.getElementsByTagName('body');
    var header = document.getElementById('header');

    toggle.onclick = function() {
        menu.classList.toggle("menu_open");// close/open menu
        body[0].classList.toggle("no-scroll");// disable body scroll for better User Experience
        toggle.classList.toggle("menu-toggle_cross");
        // header.classList.toggle("header--open"); 
    }

    var anchors = document.getElementsByClassName('menu__link');
    
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            // Remove selected class from all menu links 
            var links = document.getElementsByClassName('menu__link');
            for(var i = 0; i < links.length; i++) {
                links[i].classList.remove("menu__link_selected");
            }
            // add selected to menu link
            if(!this.classList.contains("menu__home")){
                this.classList.add("menu__link_selected");
            }
            toggle.classList.toggle("menu-toggle_cross");
            body[0].classList.toggle("no-scroll");// disable body scroll for better User Experience
            // close menu
            menu.classList.remove("menu_open");
        }
    }
}

window.addEventListener('scroll', function(e) {
    var offset = window.pageYOffset;
    var header = document.getElementById('header');
    var menuIsOpened = document.getElementById('menu').classList.contains('menu_open');
   
    if(offset > 200 && !header.classList.contains('header--fill'))  {
        header.classList.add('header--fill');
    } else if(!menuIsOpened && header.classList.contains('header--fill')) {
        header.classList.remove('header--fill');
    }
  });