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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtZW51LXRvZ2dsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdG9nZ2xlJyk7XHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XHJcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5cclxuICAgIHRvZ2dsZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9vcGVuXCIpOy8vIGNsb3NlL29wZW4gbWVudVxyXG4gICAgICAgIGJvZHlbMF0uY2xhc3NMaXN0LnRvZ2dsZShcIm5vLXNjcm9sbFwiKTsvLyBkaXNhYmxlIGJvZHkgc2Nyb2xsIGZvciBiZXR0ZXIgVXNlciBFeHBlcmllbmNlXHJcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LXRvZ2dsZV9jcm9zc1wiKTtcclxuICAgICAgICAvLyBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlci0tb3BlblwiKTsgXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFuY2hvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51X19saW5rJyk7XHJcbiAgICBcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhbmNob3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGFuY2hvciA9IGFuY2hvcnNbaV07XHJcbiAgICAgICAgYW5jaG9yLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHNlbGVjdGVkIGNsYXNzIGZyb20gYWxsIG1lbnUgbGlua3MgXHJcbiAgICAgICAgICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVfX2xpbmsnKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9fbGlua19zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBhZGQgc2VsZWN0ZWQgdG8gbWVudSBsaW5rXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVfX2hvbWVcIikpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwibWVudV9fbGlua19zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtdG9nZ2xlX2Nyb3NzXCIpO1xyXG4gICAgICAgICAgICBib2R5WzBdLmNsYXNzTGlzdC50b2dnbGUoXCJuby1zY3JvbGxcIik7Ly8gZGlzYWJsZSBib2R5IHNjcm9sbCBmb3IgYmV0dGVyIFVzZXIgRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAvLyBjbG9zZSBtZW51XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfb3BlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgb2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcclxuICAgIHZhciBtZW51SXNPcGVuZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9vcGVuJyk7XHJcbiAgIFxyXG4gICAgaWYob2Zmc2V0ID4gMjAwICYmICFoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItLWZpbGwnKSkgIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1maWxsJyk7XHJcbiAgICB9IGVsc2UgaWYoIW1lbnVJc09wZW5lZCAmJiBoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItLWZpbGwnKSkge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLWZpbGwnKTtcclxuICAgIH1cclxuICB9KTsiXSwiZmlsZSI6Im1lbnUtdG9nZ2xlLmpzIn0=
