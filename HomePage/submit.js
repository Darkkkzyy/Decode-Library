function validate() {
  let modal = document.querySelector(".modalContainerInscricao");

  modal.style.display = "flex";
}
function voltar() {
  let modal = document.querySelector(".modalContainerInscricao");

  modal.style.display = "none";
}

function BtnRequest() {
  let modal = document.querySelector(".modalOrder");

  modal.style.display = "flex";
}

function BackOrder() {
  let modal = document.querySelector(".modalOrder");
  modal.style.display = "none";

  let secModal = document.querySelector(".secondModal");
  secModal.style.display = "none";
}

function BtnRequestWeek() {
  let modal = document.querySelector(".modalOrder");
  modal.style.display = "none";

  let secModal = document.querySelector(".secondModal");
  secModal.style.display = "flex";
}
