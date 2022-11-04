let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  let navi = document.getElementById("navi");
  if(
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
) {
    navi.classList.add("navi-bl");
	}
    else {
     navi.classList.remove("navi-bl");
	}

    if(
    document.body.scrollTop > 750 ||
    document.documentElement.scrollTop > 750
    ){
     document.getElementById("html").classList.add("html");
     document.getElementById("css").classList.add("css");
     document.getElementById("php").classList.add("php");
     document.getElementById("photoshop").classList.add("photoshop");
     document.getElementById("office").classList.add("office");
	}
}

mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 