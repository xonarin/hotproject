const linkRegistation = document.querySelectorAll(".link-registration");
const popUpRegistation = document.querySelector(".popup_registration");

function openPopup(event) {
  event.preventDefault();
  popUpRegistation.classList.add("popup_opened");
}

Array.from(linkRegistation).forEach((item) =>
  item.addEventListener("click", openPopup)
);
