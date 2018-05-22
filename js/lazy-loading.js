            document.addEventListener("DOMContentLoaded", function() {
                var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
                var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
                if (("IntersectionObserver" in window)) {
                    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                        for(var i=0; i < entries.length; i++){
                            if (entries[i].isIntersecting) {
                                var lazyImage = entries[i].target;
                                lazyImage.src = lazyImage.dataset.src;
                                lazyImage.srcset = lazyImage.dataset.srcset;
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
                                for(var i=0; i < lazyImages.length; i++){
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
                                for(var j=0; j < lazyBackgrounds.length; j++){
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