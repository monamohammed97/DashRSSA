// ==================== change language //////////////////
const currentPath = window.location.pathname;

function changeLanguage(language) {
  document.getElementById("selectedLanguage").innerHTML =
    `<img class="lang-img" alt="not found" src="${currentPath.includes('pages')?'.':''}./images/` +
    language.toLowerCase() +
    '.svg"/> ' +
    "<span class='font-12 fw-500 gray-text'>" +
    language +
    "</span>";

  // Set the dir attribute based on the selected language
  const dir = language === "Arabic" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);

  // Save the selected language to localStorage
  localStorage.setItem("language", language);
  // Fetch content from text.json
  fetch("../locales.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelectorAll("[data-lang]").forEach((element) => {
        element.textContent = data[language][element.id];
      });
      document
        .querySelectorAll("[data-lang-placeholder]")
        .forEach((element) => {
          element.setAttribute("placeholder", data[language][element.id]);
        });
    })
    .catch((error) => console.error(error));
}
const storedLanguage = localStorage.getItem("language");
if (storedLanguage) {
  changeLanguage(storedLanguage);
}

// ============================= toggle menu

const button = document.querySelector(".navbar-toggler");

function checkButtonState() {
  if (button.classList.contains("collapsed")) {
    document.querySelector("header").classList.remove("mobile");
    document.querySelector("#navbarSupportedContent").classList.add("d-none");
  } else {
    document.querySelector("header").classList.add("mobile");
    document
      .querySelector("#navbarSupportedContent")
      .classList.remove("d-none");
  }
  setTimeout(function () {
    document
      .querySelector("#navbarSupportedContent")
      .classList.remove("d-none");
  }, 0);
}

button.addEventListener("click", checkButtonState);
