document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.msg.value.trim();

    if (!name || !email || !message) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    setTimeout(() => {
      form.reset();
      successMessage.style.display = "block";

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }, 500);
  });
});
