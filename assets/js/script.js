window.onload = function () {
  const preLoader = document.getElementById("preloader_part");
  preLoader.className = "page-loaded";
  setTimeout(function () {
    preLoader.style.display = "none";
  }, 500);
};


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const getNameValue = document.getElementById("name").value;
  const getEmailValue = document.getElementById("email").value;
  const getSubjectValue = document.getElementById("subject").value;
  const getMessageValue = document.getElementById("message").value;
  const setErrorValue = document.getElementById("error_text");

  if (getNameValue) {
    if (getEmailValue) {
      if (getSubjectValue) {
        if (getMessageValue) {
          var templateParams = {
            fullName: getNameValue,
            getEmailValue: getEmailValue,
            getSubjectValue: getSubjectValue,
            getMessageValue: getMessageValue,
          };

          emailjs.send(
            "Portfolio_hw",
            "template_cjrhqw3",
            templateParams,
            "xWge5c0RcxQsvGhf4"
          );
          const inputs = document.querySelectorAll(
            "#name, #email, #subject, #message"
          );

          inputs.forEach((input) => {
            input.value = "";
          });
          setErrorValue.style.color = "green";
          setErrorValue.innerText = "Successfully Sent Your Message.";
          setTimeout(function () {
            setErrorValue.style.display = "none";
          }, 1000);
        } else {
          setErrorValue.innerText = "Please Enter Your Message.";
        }
      } else {
        setErrorValue.innerText = "Please Enter Your Subject.";
      }
    } else {
      setErrorValue.innerText = "Please Enter Your Email.";
    }
  } else {
    setErrorValue.innerText = "Please Enter Your Name.";
  }
});
