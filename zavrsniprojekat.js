 function bjezustranu(){
    if (document.getElementById("profilnaslika").classList.contains("profilnar") ){
        document.getElementById("profilnaslika").classList.add("profilnal")
        document.getElementById("profilnaslika").classList.remove("profilnar") 
 }
else{
    document.getElementById("profilnaslika").classList.add("profilnar")
    document.getElementById("profilnaslika").classList.remove("profilnal")   
}
 } 
 function idigore(){
    var element=
    document.getElementById("about");
    element.classList.toggle("mystyle")
 }






let slideIndex = 1;
showSlides(slideIndex);



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function sakrijsejarane() {
    const link1 = document.getElementById("lijevi1");
    const slide1 = document.getElementById("slide1");
    const link2 = document.getElementById("lijevi2");
    const slide2 = document.getElementById("slide2");
    const link3 = document.getElementById("lijevi3");
    const slide3 = document.getElementById("slide3");
    link1.addEventListener("click", function handleClick() {
      link1.classList.add("active");
      link2.classList.remove("active");
      link3.classList.remove("active");
      if (link1.classList.contains("active")) {
        slide1.classList.remove("slajdnone");
        slide2.classList.add("slajdnone");
        slide3.classList.add("slajdnone");
      }
    });
    link2.addEventListener("click", function handleClick() {
      link1.classList.remove("active");
      link2.classList.add("active");
      link3.classList.remove("active");
      if (link2.classList.contains("active")) {
        slide2.classList.remove("slajdnone");
        slide1.classList.add("slajdnone");
        slide3.classList.add("slajdnone");
      }
    });
    link3.addEventListener("click", function handleClick() {
      link1.classList.remove("active");
      link2.classList.remove("active");
      link3.classList.add("active");
      if (link3.classList.contains("active")) {
        slide3.classList.remove("slajdnone");
        slide2.classList.add("slajdnone");
        slide1.classList.add("slajdnone");
      }
    });
  }
  












