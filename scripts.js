window.onscroll = function() {
  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', scrollFunction);
  } else {  // `DOMContentLoaded` has already fired
    scrollFunction();
  }
};

function scrollFunction() {
  var div = document.getElementsByClassName('navbar')[0];
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    div.style.padding = "0px";
  } else {
    div.style.padding = "15px";
  }
}

