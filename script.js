// change background color header

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("header").style.backgroundColor = "var(--yellow)";
    document.getElementById("bun").style.backgroundColor = "black";
    document.getElementById("bun2").style.backgroundColor = "black";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("bun").style.backgroundColor = "var(--red)";
    document.getElementById("bun2").style.backgroundColor = "var(--red)";
  }
}
