
function SaludarDiv() {
    alert("Hola! Soy el div");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const divElement = document.querySelector("div");
    divElement.addEventListener("click", SaludarDiv);
  });
  
