(function() {
    'use strict';
  
    var items = document.querySelectorAll(".timeline li");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();

// function offsetAnchor() {
//   console.log('fired')
//   if(location.hash.length !== 0) {
//     console.log('x', window.scrollX)
//     console.log('Y', window.scrollY)

//       window.scrollTo(window.scrollX, window.scrollY - 120);
//   }
// }

// window.addEventListener("hashchange", offsetAnchor);

