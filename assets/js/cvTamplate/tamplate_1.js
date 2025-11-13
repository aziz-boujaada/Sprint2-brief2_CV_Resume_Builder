export function getData() {
  const imageCV = document.getElementById("Cvimage");
  const specializing = document.getElementById("specializing");
  const fullName = document.getElementById("user_name");
  const address = document.getElementById("user_address");
  const email = document.getElementById("user_email");
  const phone = document.getElementById("user_phone");
  const userLinks = document.getElementById("user_links");
  const summary = document.getElementById("cv_summary");

  const educationInfo = document.getElementById("educationInfo");
  const experienceInfo = document.getElementById("experienceInfo");
  const hardSkill = document.getElementById("Cv_hard_skill");
  const softSkill = document.getElementById("Cv_soft_skills");
  const certificates = document.getElementById("Cv_certificates");
  const hobbies = document.getElementById("Cv_hobbies");
  const languages = document.getElementById("Cv_languages");
  // const achievement = document.getElementById("achievement");

  const UserCvData = JSON.parse(localStorage.getItem("cvData"));
  console.log("date fetched from local strage", UserCvData);

  if(!UserCvData)return

  imageCV.src = `${UserCvData.personalInfo.image}`;
  specializing.innerHTML = `${UserCvData.personalInfo.userJob_title}`;
  fullName.innerHTML = `${UserCvData.personalInfo.name}`;
  email.innerHTML = `Email : ${UserCvData.personalInfo.email}`;
  address.innerHTML = `Adresse : ${UserCvData.personalInfo.address}`;
  phone.innerHTML = `Tel :${UserCvData.personalInfo.phone}`;
  
  userLinks.innerHTML = UserCvData.personalInfo.links
    .map((link) => {
      if (link.toLowerCase().includes("github")) {
        return `<a href=${link} class="text-blue-950 underline">Github</a>`;
      }
      if (link.toLowerCase().includes("linkedin")) {
        return `<a href=${link} class="text-blue-950 underline">LinkedIn</a>`;
      }
      if (link.toLowerCase().includes("portfolio")) {
        return `<a href=${link} class="text-blue-950 underline">Portfolio</a>`;
      }
    })
    .join("  ");

    summary.innerHTML = `<p class = "text-center pt-1 bg-gray-100 ">${UserCvData.personalInfo.summary}</p>`

  educationInfo.innerHTML = UserCvData.educationInfo
    .map(
      (education) => `
      <div class="pt-4">
        <div class="flex justify-between">
          <h2>${education.educationDescription}</h2>
          <div class="flex gap-4">
            <p>${education.startDate}</p>
            <p>${education.endDate}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <p>${education.schoolName}</p>
          <p>${education.schoolLocation}</p>
        </div>
      </div>`
    )
    .join("");

  experienceInfo.innerHTML = UserCvData.experienceInfo
    .map(
      (experinece) => `
      <div class="pt-4">
        <div class="flex justify-between">
          <h2>${experinece.jobTitle}</h2>
          <div class="flex gap-4">
            <p>${experinece.startExp}</p>
            <p>${experinece.endExp}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <p>${experinece.endExp}</p>
          <p>${experinece.company_Location}</p>
        </div>
      </div>`
    )
    .join("");

  hardSkill.innerHTML = UserCvData.hardSkills
    .map((hard_skill) => `<h2>${hard_skill}</h2>`)
    .join("");

  softSkill.innerHTML = UserCvData.softSkills
    .map((skill) => `<h2>${skill}</h2>`)
    .join("");

  // achievement.innerHTML = UserCvData.achievement.map((ach)=>{
  //    return `
  //      <p>${ach}</p>
  //    `
  // }).join("")

  certificates.innerHTML = UserCvData.certificate
    .map(
      (cert) => `
      <div class="border-b-2">
        <p>${cert.certificate_Name}</p>
        <p>${cert.certificate_Date}</p>
        <p>${cert.certificate_Source}</p>
      </div>`
    )
    .join("");

  hobbies.innerHTML = UserCvData.hobbies
    .map((hob) => `<p>${hob}</p>`)
    .join("");

  languages.innerHTML = UserCvData.langueges
    .map(
      (lang) => `
      <p>${lang.lang}</p>
      <p>${lang.level}</p>`
    )
    .join("");
}

getData();

const downloadButton = document.getElementById("Download_btn");
downloadButton.addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.getElementById("cv_tamplate");
  const opt = {
    margin: 0,
    filename: "MyCV.pdf",
    image: { type: "jpeg" ,quality:1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf().set(opt).from(element).save();
});
