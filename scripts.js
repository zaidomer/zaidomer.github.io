window.onscroll = function() {
  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', scrollFunction);
  } else {  // `DOMContentLoaded` has already fired
    scrollFunction();
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementsByClassName("navbar")[0].style.padding = "0px 20px";
  } else {
    document.getElementsByClassName("navbar")[0].style.padding = "18px 20px";
  }
}