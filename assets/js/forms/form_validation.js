export function personal_infoValidation() {
  /*================= Personal information form validation=============== */
  const fullname = document.getElementById("full_name").value;
  const Email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const adresse = document.getElementById("address").value;
  const socialLinks = document.getElementById("links").value;

  // pessonal errors variables
  const inputsErrors = document.querySelectorAll(".input-errors");
  const nameError = document.querySelector(".name_error");
  const emailError = document.querySelector(".email_error");
  const phoneError = document.querySelector(".phone_error");
  const addressError = document.querySelector(".adresse_error");
  const linksError = document.querySelector(".links_error");

  inputsErrors.forEach((input_err) => {
    input_err.style.color = "red";
    input_err.textContent = "";
  });

  /* regexes */
  const nameRegex = /^[A-Za-z\s]{3,}$/;
  const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^\+212[67]\d{8}$/;
  const linksRegex = /^https?:\/\/[^\s]+$/;

  let isValid = true;

  // Validate name
  if (fullname === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else if (!nameRegex.test(fullname)) {
    nameError.textContent = "Name must contain only letters (min 3 characters)";
    isValid = false;
  }

  // Validate email
  if (Email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(Email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Validate phone
  if (phone === "") {
    phoneError.textContent = "Phone number is required";
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Phone must be in format: +212XXXXXXXXX";
    isValid = false;
  }

  // Validate address
  if (adresse === "") {
    addressError.textContent = "Address is required";
    isValid = false;
  }
  //validate social links
  if (socialLinks == "") {
    linksError.textContent = "enter link of your linked in or other ";
    isValid = false;
  } else if (!linksRegex.test(socialLinks)) {
    linksError.textContent = "Please enter a valid URL (http:// or https://)";
    isValid = false;
  }

  return isValid;
}
export function EducationFormValidate() {
  /*================= Education & experience  form validation=============== */

  let isValid = true;
  //============== education ======================//
  const schoolName = document.getElementById("school_name").value.trim();
  const startDate = document.getElementById("start_date").value.trim();
  const endDate = document.getElementById("end_date").value.trim();
  const schoolLocation = document
    .getElementById("school_location")
    .value.trim();
  const educationDescription = document
    .getElementById("education_description")
    .value.trim();

  //education ERROR variables
  const inputsErrors = document.querySelectorAll(".input-errors");
  const schoolNameError = document.querySelector(".school_name_error");
  const startDateError = document.querySelector(".date_start_error");
  const endDateError = document.querySelector(".date_end_error");
  const schoolLocationError = document.querySelector(".school_location_error");
  const educationDescriptionError = document.querySelector(
    ".school_description_error"
  );

  //experience variables
  const jobTitle = document.getElementById("job_title").value.trim();
  const companyName = document.getElementById("company_name").value.trim();
  const startDateEx = document
    .getElementById("start_date-experienc")
    .value.trim();
  const endDateEx = document.getElementById("end_date").value.trim();
  const companyLocation = document
    .getElementById("company_loaction")
    .value.trim();
  const achievment = document.getElementById("achievment").value.trim();

  // experience ERROR variables

  const jobTitleError = document.querySelector(".job_title_error");
  const companyNameError = document.querySelector(".company_name_error");
  const startExError = document.querySelector(".start_ex_error");
  const endExError = document.querySelector(".end_ex_error");
  const companyLocationError = document.querySelector(
    ".company_location_error"
  );
  const achievmentError = document.querySelector(".achivment_error");

  inputsErrors.forEach((input_err) => {
    input_err.style.color = "red";
    input_err.textContent = "";
  });

  if (schoolName === "") {
    schoolNameError.textContent = "should be enter name of school";
    isValid = false;
  }

  if (startDate === "") {
    startDateError.textContent = "enter date of start";
    isValid = false;
  }

  if (endDate === "") {
    endDateError.textContent = "enter date of end";
    isValid = false;
  }

  if (schoolLocation === "") {
    schoolLocationError.textContent = "enter  location of your school";
    isValid = false;
  }

  if (educationDescription === "") {
    educationDescriptionError.textContent = "must add a small description";
    isValid = false;
  }

  //experience

  if (jobTitle === "") {
    jobTitleError.textContent = "Job title is required";
    isValid = false;
  }

  if (companyName === "") {
    companyNameError.textContent = "Company name is required";
    isValid = false;
  }

  if (startDateEx === "") {
    startExError.textContent = "Start date is required";
    isValid = false;
  }

  if (companyLocation === "") {
    companyLocationError.textContent = "Company location is required";
    isValid = false;
  }

  if (achievment === "") {
    achievmentError.textContent = "At least one achievement is required";
    isValid = false;
  }

  return isValid;
}

//============== PROFILE INFORMATION VALIDATION  ======================//
export function SkillsFormValidate() {
  /*================= Skills & Certificate form validation ===============*/
  // Input values
  const hardSkill = document.getElementById("hard_skills").value.trim();
  const softSkill = document.getElementById("soft_skills").value.trim();
  // const certificateName = document.getElementById("certificate_name").value.trim();
  // const certificateDate = document.getElementById("certificate_date").value.trim();
  // const certificateSource = document.getElementById("certificate-source").value.trim();

  // Error spans
  const inputsErrors = document.querySelectorAll(".input-errors");
  const hardSkillError = document.querySelector(".hard_skill_error");
  const softSkillError = document.querySelector(".soft_skill_error");
  // const certificateNameError = document.querySelector(".certificate_name_error");
  // const certificateDateError = document.querySelector(".certificate_date_error");
  // const certificateSrcError = document.querySelector(".certificate_src_error");

  // Reset all previous errors
  inputsErrors.forEach((input_err) => {
    input_err.style.color = "red";
    input_err.textContent = "";
  });

  let isValidForm = true;

  if (hardSkill === "") {
    hardSkillError.textContent = "Please enter at least one hard skill.";
    isValidForm = false;
  }

  if (softSkill === "") {
    softSkillError.textContent = "Please enter at least one soft skill.";
    isValidForm = false;
  }


  return isValidForm;
}
// if (certificateName === "") {
//   certificateNameError.textContent = "Certificate name is required.";
//   isValid = false;
// }

// if (certificateDate === "") {
//   certificateDateError.textContent = "Please select a date of obtaining.";
//   isValid = false;
// }

// if (certificateSource === "") {
//   certificateSrcError.textContent = "Certificate source is required.";
//   isValid = false;
// }

/*================= Languages & Hobbies form validation ===============*/

export function hobbyLanguegesValidate() {
  const hobby = document.getElementById("hobbies").value.trim();
  const languege = document.getElementById("langueges").value.trim();
  const levelLang = document.getElementById("level_lang").value.trim();

  const inputsErrors = document.querySelectorAll(".input-errors");
  const hobbyError = document.querySelector(".hobby_error");
  const languegeError = document.querySelector(".lang_error");
  const levelLangError = document.querySelector(".level_error");

  inputsErrors.forEach((input_err) => {
    input_err.style.color = "red";
    input_err.textContent = "";
  });

  let isValidForm = true;
  if (hobby === "") {
    hobbyError.textContent = "Please enter at least one hobby.";
    isValidForm = false;
  }

  if (languege === "") {
    languegeError.textContent = "Please enter a language.";
    isValidForm = false;
  }

  if (levelLang === "") {
    levelLangError.textContent =
      "Please enter the language level (e.g., A1, B2, C1).";
    isValidForm = false;
  }


  return isValidForm;
}

export function ProfileInformationFormValidate() {
  return hobbyLanguegesValidate()
}
