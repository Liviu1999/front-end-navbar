const toggle = document.querySelector("#icon");

toggle.addEventListener("click", () => {
  console.log("coucou");

  console.log("fonctione ?");
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("toggle-navbar");
});
