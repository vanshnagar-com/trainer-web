const observer = new IntersectionObserver((elements) => {
  elements.forEach((entry) => {
    if (entry.isIntersecting) {
      // isIntersecting means kya wo screen pe hai = true or false
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hide");
hiddenElement.forEach((element) => {
  observer.observe(element);
});

const observer1 = new IntersectionObserver((elements) => {
  elements.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show1");
    } else {
      entry.target.classList.remove("show1");
    }
  });
});

const hiddenElement1 = document.querySelectorAll(".hide1");
hiddenElement1.forEach((element) => observer1.observe(element));

document.querySelector(".send-button").addEventListener("click", () => {
  console.log("hello");
  sendToWhatsApp();
});

function sendToWhatsApp() {
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const age = document.querySelector(".age").value;
  const message = document.querySelector(".message").value;
  const phoneno = document.querySelector(".phoneno").value;

  const whatsappMessage = `Hello, I am ${name} age : ${age} , E-mail adress : (${email}). Message : ${message}`;

  const whatsappUrl = `https://wa.me/${phoneno}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappUrl, "_blank");
}
