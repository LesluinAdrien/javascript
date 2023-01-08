// Je vérifie que le DOM est chargé
document.addEventListener('DOMContentLoaded', function () {

    // Nouveau slider avec la classe que je vise
    const swiper = new Swiper(".mon-slider", {
      // // Optional parameters
      // direction: 'vertical',
      // loop: true,
  
      // // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
  
      autoplay: {
        delay: 4000
      }
    })
  
})
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");}

function opentab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    }