// Toggle and responsive navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  // ketika tombol burger di klik, maka akan menambahkan class nav-active dan toggle-burger ke class burger dan tag nav
  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload, membersihkan text field ketika form di kirim / submit via formspree
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
