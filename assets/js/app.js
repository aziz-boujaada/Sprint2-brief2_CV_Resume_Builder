const nextButton = document.querySelector(".next_btn");
const previousButton = document.querySelector(".previuos_btn");
const progressBar = document.querySelector(".progress_bar");
const personlaInfoIcon = document.querySelector(".personal_info--icon");
const porogressIcons = document.querySelectorAll(".progress__icons");

const personalInfoSection = document.getElementById("personal__information");
const educationSection = document.getElementById("education");
const experienceProSection = document.getElementById("experience__pro");
const uploadCvSection = document.getElementById("uploadCv");

let progress = 0;
let totalSteps = 4;
let currentStep = 1;
const updateProgressBar = () => {
  progressBar.style.width = `${progress}%`;
  if (currentStep === 1) progressBar.style.width = "0%";
  if (currentStep === 2) progressBar.style.width = "35%";
  if (currentStep === 3) progressBar.style.width = "70%";
  if (currentStep === 4) progressBar.style.width = "98%";
};

function updateActiveIcon() {
  // porogressIcons.forEach((icon, index) => {
  //   if (index + 1 === currentStep) {
  //     icon.classList.add("active-icon");
  //     console.log("step", currentStep, "index", index);
  //   }
  // });
  porogressIcons.forEach((icon, index) => {
    index < currentStep
      ? icon.classList.add("active-icon")
      : icon.classList.remove("active-icon");
  });
}
updateActiveIcon();

function showSections() {
  currentStep == 1
    ? personalInfoSection.classList.remove("visbility")
    : personalInfoSection.classList.add("visbility");
  currentStep == 2
    ? educationSection.classList.remove("visbility")
    : educationSection.classList.add("visbility");
  currentStep == 3
    ? experienceProSection.classList.remove("visbility")
    : experienceProSection.classList.add("visbility");
  currentStep == 4
    ? uploadCvSection.classList.remove("visbility")
    : uploadCvSection.classList.add("visbility");
}
showSections();
nextButton.addEventListener("click", () => {
  if (currentStep < totalSteps) {
    currentStep++;
    updateProgressBar();
    showSections();
    updateActiveIcon();
  }
});
previousButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgressBar();
    showSections();
      updateActiveIcon()
  }
});
