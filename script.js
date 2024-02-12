const inviteBtn = document.querySelector(".buttons");
const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const closeInviteBtn = document.querySelector(".modal-nav__btn");

inviteBtn.addEventListener("click", () => {
  modal.classList.toggle("modal-container--active");
});

closeInviteBtn.addEventListener("click", () => {
  modal.classList.remove("modal-container--active");
});
