// change background color header

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //if>600px=desktop-mode, bgc use yellow. (by Susan)
  if (window.screen.width < 601) {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      document.getElementById('mobile-header').style.backgroundColor =
        'var(--yellow)';
      document.getElementById('bun').style.backgroundColor = 'black';
      document.getElementById('bun2').style.backgroundColor = 'black';
    } else {
      document.getElementById('mobile-header').style.backgroundColor =
        'transparent';
      document.getElementById('bun').style.backgroundColor = 'var(--red)';
      document.getElementById('bun2').style.backgroundColor = 'var(--red)';
    }
  } else {
    document.getElementById('desktop-header').style.backgroundColor =
      'var(--yellow)';
  }
}


// card slider for donate 
 

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
