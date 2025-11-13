
export function FormsInputsValues(){


//personal information inputs 
 const fullname = document.getElementById("full_name").value;
  const Email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const adresse = document.getElementById("address").value;
  const summary = document.getElementById("summary").value;


// education and experience inputs 
//education
  const schoolName = document.getElementById("school_name").value.trim();
  const startDate = document.getElementById("start_date").value.trim();
  const endDate = document.getElementById("end_date").value.trim();
  const schoolLocation = document
    .getElementById("school_location")
    .value.trim();
  const educationDescription = document
    .getElementById("education_description")
    .value.trim();
//experience 
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

  //profile information inputs 
  //skills and certificate
  const hardSkill = document.getElementById("hard_skills").value.trim();
  const softSkill = document.getElementById("soft_skills").value.trim();
  const certificateName = document.getElementById("certificate_name").value.trim();
  const certificateDate = document.getElementById("certificate_date").value.trim();
  const certificateSource = document.getElementById("certificate-source").value.trim();
  //hobbies and langueges
   const hobby = document.getElementById("hobbies").value.trim();
  const languege = document.getElementById("langueges").value.trim();
  const levelLang = document.getElementById("level_lang").value.trim();

}
