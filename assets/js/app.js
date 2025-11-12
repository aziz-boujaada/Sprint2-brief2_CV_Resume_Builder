
import { switchPersonalInfoForms } from "./forms/switch_Forms.js";
import { personal_infoValidation } from "./forms/form_validation.js";
import { EducationFormValidate } from "./forms/form_validation.js";
import { ProfileInformationFormValidate } from "./forms/form_validation.js";
import { saveAllData } from "./save Data/saveData.js";
import { saveProfileInfo } from "./save Data/saveData.js";



const nextButton = document.querySelector(".next_btn");
const previousButton = document.querySelector(".previuos_btn");
const progressBar = document.querySelector(".progress_bar");
const personlaInfoIcon = document.querySelector(".personal_info--icon");
const porogressIcons = document.querySelectorAll(".progress__icons");

const personalInfoSection = document.getElementById("personal__information");
const education_Pro_experiencSection = document.getElementById("education_pro-experience");
const profileInfoSection = document.getElementById("profile_information");
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
    ? education_Pro_experiencSection.classList.remove("visbility")
    : education_Pro_experiencSection.classList.add("visbility");
  currentStep == 3
    ? profileInfoSection.classList.remove("visbility")
    : profileInfoSection.classList.add("visbility");
  currentStep == 4
    ? uploadCvSection.classList.remove("visbility")
    : uploadCvSection.classList.add("visbility");
}
showSections();
nextButton.addEventListener("click", () => {

  let isValid = false;
 if(currentStep == 1){
  isValid = personal_infoValidation()
 }else if(currentStep == 2){
  isValid = EducationFormValidate()  
 }else if(currentStep == 3){
  isValid = ProfileInformationFormValidate()
 }
  
  if (isValid && currentStep < totalSteps) {
    currentStep++;
    updateProgressBar();
    showSections();
    updateActiveIcon();
    saveProfileInfo()
    saveAllData()
    console.log("current step" , currentStep)
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
switchPersonalInfoForms()
personal_infoValidation()


// drop down for education and experience form 
const educationDropFormBtn = document.getElementById("education_drop_btn")
const experienceDropFormBtn = document.getElementById("exp_drop_btn")
const educationForm = document.querySelector(".education_drop")
const experienceForm = document.querySelector(".experience_drop")

educationDropFormBtn.addEventListener('click' , ()=>{
  educationForm.classList.toggle("hidden_drop")
})
experienceDropFormBtn.addEventListener('click' , ()=>{
  experienceForm.classList.toggle("hidden_drop")
})

