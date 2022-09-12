const sections = document.querySelectorAll(".section");
const btnParent = document.querySelectorAll(".controlls");
const btnChild = document.querySelectorAll(".control");
const main = document.querySelector(".main-content");

function pageTransition() {
  //on button click add active class
  for (let i = 0; i < btnChild.length; i++) {
    btnChild[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");

      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );

      this.className += " active-btn";
    });
  }

  // sections active on click
  main.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      // remove selected btn and add to new

      btnParent.forEach((btn) => {
        btn.classList.remove("active");
      });

      e.target.classList.add("active");

      // ? hide other sections

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

pageTransition();

// Name animation scripting

const spans = document.querySelectorAll(".word span");

spans.forEach((span, idx) => {
  span.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
  span.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add("active");
  }, 750 * (idx + 2));
});

// Mailing system js

const btn = document.getElementById("mail-btn");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_q1adlos";
  const templateID = "template_lyi7j5d";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Thank you I received your mail!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
  document.getElementById("from_name").value = "";
  document.getElementById("email_id").value = "";
  document.getElementById("message").value = "";
  document.getElementById("phone").value = "";
});
