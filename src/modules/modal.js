const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener('click', closeModal, false);

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

export { openModalBtn, closeModalBtn, openModal, closeModal };
