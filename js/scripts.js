const navbarHeight = document.querySelector('.navbar').offsetHeight;

window.addEventListener('scroll', () => {
  let smallLogoHeight = $('.small-logo').height();
  let bigLogoHeight = $('.big-logo').height();
  
  
  let smallLogoEndPos = 0;
  let smallSpeed = (smallLogoHeight / bigLogoHeight);
  
  let ySmall = ($(window).scrollTop() * smallSpeed); 
  
  let smallPadding = navbarHeight - ySmall -34;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }
  
  document.querySelector('.small-logo-container').style.paddingTop = smallPadding;
  
  let navOpacity = ySmall / smallLogoHeight; 
  if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  
  let shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    document.querySelector('.navbar').style.boxShadow = "0 2px 3px rgba(0,0,0," + shadowOpacity + ")";
  } else {
    document.querySelector('.navbar').style.boxShadow = "none";
  }
  
  
  
});

 function copyrightDate(){
  let coDate = new Date().getFullYear();
  document.getElementById("copyright").innerHTML="&copy; Autoplate 2000-" + coDate + " All Rights Reserved ";
  }