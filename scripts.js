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

$(document).ready(function (){
  $('.submit').click(function (event) {

    var name = $('.name').val();
    var email = $('.email').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    document.getElementById("form_status").innerHTML = "";

    if(name.length >= 1){
      //document.getElementById("form_status").innerHTML += "Valid Name ";
    }else{
      event.preventDefault();
      document.getElementById("form_status").innerHTML += "Invalid Name, ";
    }

    if(email.length > 5 && email.includes('@') && email.includes('.')){
      //document.getElementById("form_status").innerHTML += "Valid Email ";
    }else{
      event.preventDefault();
      document.getElementById("form_status").innerHTML += "Invalid Email, ";
    }

    if(subject.length >= 1){
      //document.getElementById("form_status").innerHTML += "Valid Subject ";
    }else{
      event.preventDefault();
      document.getElementById("form_status").innerHTML += "Invalid Subject, ";
    }

    if(message.length >= 5){
      //document.getElementById("form_status").innerHTML += "Valid Message ";
    }else{
      event.preventDefault();
      document.getElementById("form_status").innerHTML += "Invalid Message ";
    }
  })
})