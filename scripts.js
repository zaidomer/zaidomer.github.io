window.onscroll = function() {
  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', scrollFunction);
  } else {  // `DOMContentLoaded` has already fired
    scrollFunction();
  }
};

// function scrollFunction() {
//   var div = document.getElementsByClassName('navbar')[0];
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     div.style.padding = "0px";
//   } else {
//     div.style.padding = "15px";
//   }
// }

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementsByClassName("navbar")[0].style.padding = "0px 20px";
  } else {
    document.getElementsByClassName("navbar")[0].style.padding = "18px 20px";
  }
}