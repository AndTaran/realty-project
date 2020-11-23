// Фильтры на мобилках
const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

sidebarToggleBtn.onclick = function () {
   menuIcon.classList.toggle("menu-icon-active");
   sidebar.classList.toggle("sidebar-active");
};

// Показ доб карточек
const btnMoreCards = document.querySelector(".btn__more");
const hiddenCards = document.querySelectorAll(".hidden-cards");

btnMoreCards.addEventListener("click", function () {
   hiddenCards.forEach(function (card) {
      card.classList.remove("hidden-cards");
   });
});

// Виджет
const widgets = document.querySelectorAll(".widget");

widgets.forEach(function (widget) {
   widget.addEventListener("click", (e) => {
      if (e.target.classList.contains("widget__title")) {
         e.target.classList.toggle("widget__title-active");
         e.target.nextElementSibling.classList.toggle("widget__body-hidden");
      }
   });
});

//Кнопка -- Любая

const checkboxAny = document.querySelector("#location-05");
const topCheckbox = document.querySelectorAll("[data-location]");

//Клик по кнопке Любая и отключение других чекбоксов
checkboxAny.addEventListener("change", () => {
   if (checkboxAny.checked) {
      topCheckbox.forEach(function (item) {
         item.checked = false;
      });
   }
});

// Клик по другим чекбоксам и отключение кнопки Любая
topCheckbox.forEach((item) => {
   item.addEventListener("change", () => {
      if (checkboxAny.checked) {
         checkboxAny.checked = false;
      }
   });
});

//Показать доб опции с чекбоксами
const moreOptions = document.querySelector(".widget__show-hidden");
const hiddenCheckbox = document.querySelectorAll(".checkbox-hidden");

moreOptions.onclick = function (e) {
   e.preventDefault();

   if (moreOptions.dataset.options == "hidden") {
      hiddenCheckbox.forEach((item) => {
         item.style.display = "block";
      });
      moreOptions.innerText = "Скрыть доп. опции";
      moreOptions.dataset.options = "visible";
   } else if (moreOptions.dataset.options == "visible") {
      hiddenCheckbox.forEach((item) => {
         item.style.display = "none";
      });
      moreOptions.innerText = "Показать ещё";
      moreOptions.dataset.options = "hidden";
   }
};
