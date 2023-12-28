{
  function toggleNavMenu() {
    var x = document.getElementById("navBar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4000,
    },
    speed: 1000,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  // var speed = 100;

  /* Call this function with a string containing the ID name to
   * the element containing the number you want to do a count animation on.*/
  function incEltNbr(id, speed, cadence, endNbr) {
    elt = document.getElementById(id);
    // endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(0, endNbr, elt, speed, cadence);
  }

  /*A recursive function to increase the number.*/
  function incNbrRec(i, endNbr, elt, speed, cadence) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function () {//Delay a bit before calling the function again.
        incNbrRec(i + cadence, endNbr, elt, speed, cadence);
      }, speed);
    }
  }

  // Get the target element
  const anosTargetElement = document.querySelector('#animation-anos');
  const clientesTargetElement = document.querySelector('#animation-clientes');
  const npsTargetElement = document.querySelector('#animation-nps');

  // Create an intersection observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    // Check if the target element is intersecting with the viewport
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Call your function when the element is first shown
        const animationDelay = 300;
        setTimeout(() => {
          if (entry.target.id === 'animation-anos') {
            incEltNbr('animation-anos', 50, 1, 7);
          }

          if (entry.target.id === 'animation-clientes') {
            incEltNbr('animation-clientes', 30, 100, 2000);

          }

          if (entry.target.id === 'animation-nps') {
            incEltNbr('animation-nps', 70, 11, 88);
          }
        }, animationDelay);

        // Unobserve the target after calling the function if you only want it to run once
        observer.unobserve(entry.target);
      }
    });
  });

  // Start observing the target element
  observer.observe(anosTargetElement);
  observer.observe(clientesTargetElement);
  observer.observe(npsTargetElement);

  const parentElement = document.querySelector('assess-item-parent');
  const childElement = document.querySelector('assess-item');

  // Get the height of the parent element
  const parentHeight = parentElement.offsetHeight;

  // Set the CSS variable value based on the parent's height
  childElement.style.setProperty('--margin-based-on-height', parentHeight); // Set it equals to the parent's height


}
