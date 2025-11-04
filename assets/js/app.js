const nextButton = document.querySelector(".next_btn")
const previousButton = document.querySelector(".previuos_btn")
const progressBar = document.querySelector(".progress_bar")
const personlaInfoIcon = document.querySelector(".personal_info--icon")
const porogressIcons = document.querySelectorAll(".progress__icons")

const personalInfoSection = document.getElementById("personal__information")
const educationSection = document.getElementById("education")
const experienceProSection = document.getElementById("experience__pro")
const uploadCvSection = document.getElementById("uploadCv")

let progress = 0 ; 
let totalSteps = 4;
let currentStep = 1; 
const updateProgressBar = () =>{
    progressBar.style.width = `${progress}%`;
    if(currentStep === 1) progressBar.style.width = "0%"
    if(currentStep === 2) progressBar.style.width = "35%"
    if(currentStep === 3) progressBar.style.width = "70%"
    if(currentStep === 4) progressBar.style.width = "95%"
}

function updateActiveIcon() {
  porogressIcons.forEach((icon, index) => {
    if (index === currentStep) {
      icon.classList.remove("active-icon");
    } else {
      icon.classList.add("active-icon");
    }
  });
}

function showSections(){
     if(currentStep == 1 ){
        personalInfoSection.classList.remove("visbility")
    }
     if(currentStep == 2 ){
        educationSection.classList.remove("visbility")
    }else{
        educationSection.classList.add("visbility")
    }
     if(currentStep == 3 ){
        experienceProSection.classList.remove("visbility")
    }else{
         experienceProSection.classList.add("visbility")
    }
     if(currentStep == 4 ){
        uploadCvSection.classList.remove("visbility")
    }else{
        uploadCvSection.classList.add("visbility")
    }
}
nextButton.addEventListener('click' , ()=>{
   if(currentStep < totalSteps){
    currentStep++
    updateProgressBar()
    showSections()
   }

    if(currentStep == 2 ){
        educationSection.classList.remove("visbility")
    }
})
previousButton.addEventListener('click' , ()=>{
  if(currentStep > 1){
      currentStep--
      updateProgressBar()
      showSections()
  }
})





