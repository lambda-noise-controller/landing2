

const appleLogo = document.getElementById("appleImage");

console.log(appleLogo)

appleLogo.addEventListener(
  "mouseover",
  function(e) {
    e.target.style.color = "@color1";
    e.target.style.background = "pink";
    e.stopPropagation();
    setTimeout(function() {
      e.target.style.color = "";
      e.target.style.background = "";
    }, 1000);
  },
  false
);