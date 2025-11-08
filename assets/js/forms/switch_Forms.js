import { SkillsFormValidate } from "./form_validation.js";
import { hobbyLanguegesValidate } from "./form_validation.js";
export function switchPersonalInfoForms() {
  const skillsCertificat_Form = document.getElementById(
    "skills_cirtificat_form"
  );
  const hobbiesLanguege_Form = document.getElementById("langueges_hobbies");
  const prevForm = document.getElementById("prev_form");
  const nextForm = document.getElementById("next_form");
  const streperButtonsDiv = document.querySelector(".streper_buttons");

  let totalForms = 2;
  let currentForm = 1;

  function UpdateCurrentForm() {
    currentForm == 1
      ? skillsCertificat_Form.classList.remove("profile_info_visibility")
      : skillsCertificat_Form.classList.add("profile_info_visibility");
    currentForm == 1
      ? nextForm.classList.add("should_toClick")
      : nextForm.classList.remove("should_toClick");
      // // for hidden button in skills form
    currentForm == 1
      ? streperButtonsDiv.classList.add("hidden_btns")
      : streperButtonsDiv.classList.remove("hidden_btns");
    currentForm == 2
      ? hobbiesLanguege_Form.classList.remove("profile_info_visibility")
      : hobbiesLanguege_Form.classList.add("profile_info_visibility");
    currentForm == 2
      ? prevForm.classList.add("should_toClick")
      : prevForm.classList.remove("should_toClick");
  }

  UpdateCurrentForm();
 

  nextForm.addEventListener("click", () => {
    let isValid = false;
    if (currentForm == 1) {
      isValid = SkillsFormValidate();
    } else if (currentForm == 2) {
      isValid = hobbyLanguegesValidate();
    }
    if (isValid && currentForm < totalForms) {
      currentForm++;
      UpdateCurrentForm();
      console.log(currentForm);
    }
    console.log("clicked next");
  });
  prevForm.addEventListener("click", () => {
    if (currentForm > 1) {
      currentForm--;
      UpdateCurrentForm();
      console.log(currentForm);
    }
  });
}
