'use strict';


document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    var lazySources = [].slice.call(document.querySelectorAll("source.lazy"));
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

    if (("IntersectionObserver" in window)) {
        let lazySourcesObserver = new IntersectionObserver(function(entries, observer) {
            for(var i=0; i < entries.length; i++){
                if (entries[i].isIntersecting) {
                    var lazySource = entries[i].target;
                    lazySource.srcset = lazySource.dataset.srcset;
                    lazySource.classList.remove("lazy");
                    lazySourcesObserver.unobserve(lazySource);
                }
            }
        });

        lazySources.forEach(function(lazySource) {
            lazySourcesObserver.observe(lazySource);
        });

        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            for(var i=0; i < entries.length; i++){
                if (entries[i].isIntersecting) {
                    var lazyImage = entries[i].target;
                    lazyImage.src = lazyImage.dataset.src;
                    if(lazyImage.dataset.srcset) {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            }
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });

        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            for(var j=0; j < entries.length; j++){
                if (entries[j].isIntersecting) {
                    var lazyBg= entries[j].target;
                    
                    lazyBg.classList.add("loaded");
                    lazyBackgroundObserver.unobserve(lazyBg);
                }
            }
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            setTimeout(function (){
                lazyBackgroundObserver.observe(lazyBackground);
            }, 500);
            
        });
    } else {
        var active = false;
        
        var lazyLoad = function() {
            if (active === false) {
                active = true;
            
                setTimeout(function() {
                    for(var i=0; i < lazyImages.length; i++) {
                        var lazyImage = lazyImages[i];
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.setAttribute("src", lazyImage.getAttribute("data-src"));
                            lazyImage.setAttribute("srcset", lazyImage.getAttribute("data-srcset"));
                            lazyImage.className = lazyImage.className.replace(/\blazy\b/g, "");
                            
                            lazyImages = lazyImages.filter(function(image) {
                                return image !== lazyImage;
                            });
                
                            if (lazyImages.length === 0 && lazyBackgrounds.length == 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    }

                    for(var j=0; j < lazyBackgrounds.length; j++) {
                        var lazyBackground = lazyBackgrounds[j];
                        if ((lazyBackground.getBoundingClientRect().top <= window.innerHeight && lazyBackground.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyBackground).display !== "none") {
                            lazyBackground.className = lazyBackground.className.replace(/\blazy-background\b/g, "");
                            lazyBackground.className += " loaded";
                            lazyBackgrounds = lazyBackgrounds.filter(function(background) {
                                return background !== lazyBackground;
                            });
                
                            if (lazyImages.length === 0 && lazyBackgrounds.length == 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    }
                    active = false;
                }, 200);
            }
        };
        
        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYXp5LWxvYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGxhenlJbWFnZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWcubGF6eVwiKSk7XHJcbiAgICB2YXIgbGF6eVNvdXJjZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzb3VyY2UubGF6eVwiKSk7XHJcbiAgICB2YXIgbGF6eUJhY2tncm91bmRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhenktYmFja2dyb3VuZFwiKSk7XHJcblxyXG4gICAgaWYgKChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSkge1xyXG4gICAgICAgIGxldCBsYXp5U291cmNlc09ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cmllc1tpXS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXp5U291cmNlID0gZW50cmllc1tpXS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eVNvdXJjZS5zcmNzZXQgPSBsYXp5U291cmNlLmRhdGFzZXQuc3Jjc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxhenlTb3VyY2UuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eVNvdXJjZXNPYnNlcnZlci51bm9ic2VydmUobGF6eVNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGF6eVNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihsYXp5U291cmNlKSB7XHJcbiAgICAgICAgICAgIGxhenlTb3VyY2VzT2JzZXJ2ZXIub2JzZXJ2ZShsYXp5U291cmNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cmllc1tpXS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXp5SW1hZ2UgPSBlbnRyaWVzW2ldLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2Uuc3JjID0gbGF6eUltYWdlLmRhdGFzZXQuc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGxhenlJbWFnZS5kYXRhc2V0LnNyY3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2Uuc3Jjc2V0ID0gbGF6eUltYWdlLmRhdGFzZXQuc3Jjc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGxhenlJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGF6eUltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGxhenlJbWFnZSkge1xyXG4gICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5vYnNlcnZlKGxhenlJbWFnZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBsYXp5QmFja2dyb3VuZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaj0wOyBqIDwgZW50cmllcy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cmllc1tqXS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXp5Qmc9IGVudHJpZXNbal0udGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhenlCZy5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIudW5vYnNlcnZlKGxhenlCZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGF6eUJhY2tncm91bmRzLmZvckVhY2goZnVuY3Rpb24obGF6eUJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgICAgIGxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIub2JzZXJ2ZShsYXp5QmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGxhenlMb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGkgPCBsYXp5SW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXp5SW1hZ2UgPSBsYXp5SW1hZ2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGxhenlJbWFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0ICYmIGxhenlJbWFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPj0gMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShsYXp5SW1hZ2UpLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGxhenlJbWFnZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3Jjc2V0XCIsIGxhenlJbWFnZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY3NldFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NOYW1lID0gbGF6eUltYWdlLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJsYXp5XFxiL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VzID0gbGF6eUltYWdlcy5maWx0ZXIoZnVuY3Rpb24oaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2UgIT09IGxhenlJbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF6eUltYWdlcy5sZW5ndGggPT09IDAgJiYgbGF6eUJhY2tncm91bmRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsYXp5TG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGF6eUxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgbGF6eUxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGo9MDsgaiA8IGxhenlCYWNrZ3JvdW5kcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF6eUJhY2tncm91bmQgPSBsYXp5QmFja2dyb3VuZHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobGF6eUJhY2tncm91bmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCAmJiBsYXp5QmFja2dyb3VuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPj0gMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShsYXp5QmFja2dyb3VuZCkuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenlCYWNrZ3JvdW5kLmNsYXNzTmFtZSA9IGxhenlCYWNrZ3JvdW5kLmNsYXNzTmFtZS5yZXBsYWNlKC9cXGJsYXp5LWJhY2tncm91bmRcXGIvZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5QmFja2dyb3VuZC5jbGFzc05hbWUgKz0gXCIgbG9hZGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5QmFja2dyb3VuZHMgPSBsYXp5QmFja2dyb3VuZHMuZmlsdGVyKGZ1bmN0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFja2dyb3VuZCAhPT0gbGF6eUJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhenlJbWFnZXMubGVuZ3RoID09PSAwICYmIGxhenlCYWNrZ3JvdW5kcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGF6eUxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxhenlMb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGxhenlMb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGF6eUxvYWQpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxhenlMb2FkKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGxhenlMb2FkKTtcclxuICAgIH1cclxufSk7Il0sImZpbGUiOiJsYXp5LWxvYWRpbmcuanMifQ==
