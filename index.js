let iconMenu = document.querySelector(".icon-menu");
let closeMenu = document.querySelector(".close-menu");
let slider = document.querySelector(".slider");
let arrowDownFeature = document.querySelector(".arrow-down-feature");
let arrowUpFeature = document.querySelector(".arrow-up-feature");
let featureExpand = document.querySelector(".feature-expand");
let arrowDownCompany = document.querySelector(".arrow-down-company");
let arrowUpCompany = document.querySelector(".arrow-up-company");
let companyInner = document.querySelector(".company-inner");

iconMenu.addEventListener("click", () => {
  slider.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  slider.style.display = "none";
});

arrowDownFeature.addEventListener("click", () => {
  featureExpand.style.display = "block";
  arrowDownFeature.style.display = "none";
  arrowUpFeature.style.display = "block";
});

arrowUpFeature.addEventListener("click", () => {
  featureExpand.style.display = "none";
  arrowDownFeature.style.display = "block";
  arrowUpFeature.style.display = "none";
});

arrowDownCompany.addEventListener("click", () => {
  companyInner.style.display = "block";
  arrowDownCompany.style.display = "none";
  arrowUpCompany.style.display = "block";
});

arrowUpCompany.addEventListener("click", () => {
  companyInner.style.display = "none";
  arrowDownCompany.style.display = "block";
  arrowUpCompany.style.display = "none";
});
