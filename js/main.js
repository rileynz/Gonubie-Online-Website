document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".navtoggle");
  var links = document.querySelector(".navlinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }

  // Enquiry form: no backend is wired up yet (see README).
  // This just gives a friendly confirmation so the form isn't a dead end
  // until you connect Formspree / Web3Forms / a Cloudflare Pages Function.
  var form = document.querySelector("form.enquiry");
  if (form) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      if (action.indexOf("REPLACE_WITH") !== -1 || action === "") {
        e.preventDefault();
        var note = form.querySelector(".form-status");
        if (!note) {
          note = document.createElement("p");
          note.className = "form-status";
          form.appendChild(note);
        }
        note.textContent = "Form isn't connected to an inbox yet — see README for the 5-minute Formspree setup. For now, please email slowjig65@gmail.com directly.";
        note.style.color = "#a9631a";
        note.style.fontWeight = "600";
        note.style.marginTop = "8px";
      }
    });
  }
});
