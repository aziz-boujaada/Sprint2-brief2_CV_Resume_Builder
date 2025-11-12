const UserCvData = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    links: [],
  },

  educationInfo: [],
  experienceInfo: [],
  achievement: [],

  hardSkills: [],
  softSkills: [],

  certificate: [],

  hobbies: [],

  langueges: [],
};

export function saveProfileInfo() {
  //save  personal information
  const fullname = document.getElementById("full_name").value;
  const Email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const adresse = document.getElementById("address").value;
  const summary = document.getElementById("summary").value;

  UserCvData.personalInfo.name = fullname;
  UserCvData.personalInfo.email = Email;
  UserCvData.personalInfo.phone = phone;
  UserCvData.personalInfo.address = adresse;
  UserCvData.personalInfo.summary = summary;

  console.log(UserCvData.personalInfo);

  console.log("eduaction data", UserCvData.educationInfo);
  saveAllData();
}
function saveLinks() {
  const addLinkBtn = document.getElementById("add_link");
  const displayLinks = document.getElementById("display_links");
  addLinkBtn.addEventListener("click", () => {
    const socialLinks = document.getElementById("links").value.trim();
    if (
      socialLinks === "" ||
      UserCvData.personalInfo.links.includes(socialLinks)
    ) {
      const errorDiv = document.createElement("p");
      errorDiv.innerHTML = `<p class = " text-red-500">this link (${socialLinks}) already exsit</p>`;
      displayLinks.appendChild(errorDiv);
      return;
    } else {
      UserCvData.personalInfo.links.push(socialLinks);
    }
    displayLinks.innerHTML = UserCvData.personalInfo.links
      .map(
        (link, index) =>
          `<p class= "bg-gray-200 shadow-lg rounded-full p-1 px-2 my-2 flex justify-between">
        <span>${link}</span>
         <span class ="clear_link cursor-pointer hover:text-red-600" data-index = "${index}">
         <i class="fa-solid fa-trash"></i>
         </span>
         </p>`
      )
      .join("");
    console.log("add link clicked");
  });

  displayLinks.addEventListener("click", (e) => {
    if (e.target.closest(".clear_link")) {
      const linkToRemove = e.target.closest(".clear_link").dataset.index;
      UserCvData.personalInfo.links.splice(linkToRemove, 1);
    }

    displayLinks.innerHTML = UserCvData.personalInfo.links
      .map(
        (link, index) =>
          `<p class= "bg-gray-300 rounded-full p-1 mb-1">
        <span>${link}</span>
         <span class ="clear_link cursor-pointer hover:text-red-600" data-index = "${index}">
         <i class="fa-solid fa-trash"></i>
         </span>
         </p>`
      )
      .join("");
  });
}

//dispaly education information function

function renderEducation() {
  const DispalyEducationZone = document.getElementById("display_education");
  DispalyEducationZone.innerHTML = UserCvData.educationInfo
    .map((edu) => {
      return `
            <div class = "education_card  flex justify-between gap-4 bg-gray-300 p-1 rounded-md shadow-lg my-2 ">
            <div>
            <p>school Name : ${edu.schoolName}</p> 
            <p>location : ${edu.schoolLocation}</p>
            <p>description : ${edu.educationDescription}</p>
            </div>
             <div>
             <p>start date : ${edu.startDate}</p>
             <p>end date : ${edu.endDate}</p>
             </div>
             <span class ="edit_education text-white bg-orange-400 p-1 rounded-full w-[120px] h-[30px] text-center">Edit<i class="fa-solid fa-pen"></i></span>
             <span class ="delet_education text-white bg-red-700 p-1 rounded-full  w-[120px] h-[30px] text-center">Delet<i class="fa-solid fa-trash"></i></span>
             </div>
            `;
    })

    .join("");
  // const index = Number(
  //   document.querySelector(".education_card ").getAttribute("data-index")
  // );
  deletSchool();
}
function saveEducation(toEdit) {
  const saveEducationBtn = document.getElementById("save_education");

  saveEducationBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const schoolNameInput = document.getElementById("school_name");
    const startDateInput = document.getElementById("start_date");
    const endDateInput = document.getElementById("end_date");
    const schoolLocationInput = document.getElementById("school_location");
    const educationDescriptionInput = document.getElementById(
      "education_description"
    );

    const FormEducationData = {
      schoolName: schoolNameInput.value.trim(),
      startDate: startDateInput.value.trim(),
      endDate: endDateInput.value.trim(),
      schoolLocation: schoolLocationInput.value.trim(),
      educationDescription: educationDescriptionInput.value.trim(),
    };
    if (
      FormEducationData.schoolName === "" ||
      FormEducationData.startDate === "" ||
      FormEducationData.endDate === "" ||
      FormEducationData.schoolLocation === "" ||
      FormEducationData.educationDescription === ""
    )
      return;

    if (toEdit) {
      editEducation(FormEducationData);
    } else {
      UserCvData.educationInfo.push(FormEducationData);
    }

    renderEducation();

    schoolNameInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
    schoolLocationInput.value = "";
    educationDescriptionInput.value = "";
    saveAllData();

    console.log("Added school:", UserCvData.educationInfo);
  });
}

function deletSchool() {
  const deletEducationBtn = document.getElementsByClassName("delet_education");
  Array.from(deletEducationBtn).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (UserCvData.educationInfo && UserCvData.educationInfo.length > index) {
        const toRemove = UserCvData.educationInfo[index];
        UserCvData.educationInfo.splice(index, 1);
        console.log(index);
        renderEducation();
        console.log("this one is removed ", toRemove);
      }
    });
  });
}

function editEducation(formData) {
  const schoolNameInput = document.getElementById("school_name");
  const startDateInput = document.getElementById("start_date");
  const endDateInput = document.getElementById("end_date");
  const schoolLocationInput = document.getElementById("school_location");
  const educationDescriptionInput = document.getElementById(
    "education_description"
  );
  const editEducationBtn = document.getElementsByClassName("edit_education");
  Array.from(editEducationBtn).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (UserCvData.educationInfo && UserCvData.educationInfo.length > index) {
        const toEdit = UserCvData.educationInfo[index];
        //  if(toEdit){
        schoolNameInput.value = formData.schoolName;
        startDateInput.value = formData.startDate;
        endDateInput.value = formData.endDate;
        schoolLocationInput.value = formData.schoolLocation;
        educationDescriptionInput.value = formData.educationDescription;

        UserCvData.educationInfo[index] = formData;
        console.log("index to edit", index);
        saveEducation(toEdit);

        // console.log("to edit" , toEdit)
        // }
      }
    });
  });
  saveEducation();
}

renderEducation();
saveLinks();

saveEducation();

//============================== experience professionelle save ==================================//

function saveEperiencePro() {
  const jobTitle = document.getElementById("job_title");
  const companyName = document.getElementById("company_name");
  const expStartdate = document.getElementById("start_date-experienc");
  const expEndDate = document.getElementById("start_date-experienc");
  const companyLocation = document.getElementById("company_location");

  const SaveExperienceBtn = document.getElementById("save_experience");

  /// save achievment
  const AddAchievmentBtn = document.getElementById("add_achievment");
  const dispalyAchievment = document.getElementById("display_achievment");
  AddAchievmentBtn.addEventListener("click", () => {
    const achievement = document.getElementById("achievment").value.trim();
    UserCvData.achievement.push(achievement);

    console.log(UserCvData.achievement);

    dispalyAchievment.innerHTML = UserCvData.achievement
      .map(
        (item, index) =>
          `<p class = "bg-gray-200 p-1 mb-1 rounded-full flex justify-between">
    ${item}
     <span class ="delet_achievment hover:text-red-700 cursor-pointer data-index = "${index}">
     <i class="fa-solid fa-trash"></i
     ></span></p>`
      )
      .join("");
  });

  // const deletAchievment = document.querySelector(".delet_achievment");
  // deletAchievment.addEventListener("click" , ()=>{
  //   UserCvData.achievement.map((achivment , index)=>{
  //     achivment.splice(index ,1)
  //     console.log(UserCvData.achievement)
  //   })
  // })
  dispalyAchievment.addEventListener("click", (e) => {
    if (e.target.closest(".delet_achievment")) {
      const toRemove = e.target.closest(".delet_achievment").dataset.index;
      UserCvData.achievement.splice(toRemove, 1);
      console.log("to remove", toRemove);
    }
    dispalyAchievment.innerHTML = UserCvData.achievement
      .map(
        (item, index) =>
          `< class = "bg-gray-200 p-1 mb-1 rounded-full flex justify-between">
    ${item}
     <span class ="delet_achievment hover:text-red-700 cursor-pointer data-index = "${index}">
     <i class="fa-solid fa-trash"></i
     ></span></p>`
      )
      .join("");
  });

  /////////

  SaveExperienceBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const experienceSaveData = {
      jobTitle: jobTitle.value.trim(),
      companyName: companyName.value.trim(),
      startExp: expStartdate.value.trim(),
      endExp: expEndDate.value.trim(),
      company_Location: companyLocation.value.trim(),
    };
    if (
      experienceSaveData.jobTitle == "" ||
      experienceSaveData.companyName == "" ||
      experienceSaveData.expStartdate == "" ||
      experienceSaveData.endExp == "" ||
      experienceSaveData.company_Location == ""
    )
      return;

    UserCvData.experienceInfo.push(experienceSaveData);
    console.log("experience data saved", UserCvData.experienceInfo);
    saveAllData();
    renderExperience();

    (jobTitle.value = ""),
      (companyName.value = ""),
      (expStartdate.value = ""),
      (expEndDate.value = ""),
      (companyLocation.value = "");
  });
}

function renderExperience() {
  const Displayexperience = document.getElementById("display_experience");
  Displayexperience.innerHTML = UserCvData.experienceInfo
    .map((exp) => {
      return `<div class = " bg-gray-200 p-2 my-3 rounded-lg shadow-md">
      <div class = "flex justify-between">
      <div>
        <p>Job title : ${exp.jobTitle}</p>
        <p>company name : ${exp.companyName}</p>
        <p>start date : ${exp.startExp}</p>
        <p>end date : ${exp.endExp}</p>
        <p>company location : ${exp.company_Location}</p>
        </div>
        <div>
           <span class ="delet_experience hover:text-red-700 cursor-pointer">
          <i class="fa-solid fa-trash"></i></span>
        </div>
        </div>
     </div>`;
    })
    .join("");
  deletExperience();
}

function deletExperience() {
  const deletExpBtns = document.getElementsByClassName("delet_experience");
  Array.from(deletExpBtns).forEach((btn, index) => {
    console.log(deletExpBtns);
    btn.addEventListener("click", () => {
      if (
        UserCvData.experienceInfo &&
        UserCvData.experienceInfo.length > index
      ) {
        UserCvData.experienceInfo[index];
        UserCvData.experienceInfo.splice(index, 1);
        renderExperience();
      }
      console.log("index is removed", index);
    });
  });
}

saveEperiencePro();

/// =============== save skills =================== ///
//hard skills
function renderHardSkills() {
  const displayHardSkill = document.getElementById("display_hardSkill");
  displayHardSkill.innerHTML = UserCvData.hardSkills
    .map((hardSkil) => {
      return `
      <p class="inline-flex items-center gap-2 bg-gray-300 px-3 py-1 my-2 rounded-md shadow-md text-sm font-medium text-gray-700 hover:shadow-lg transition">
  ${hardSkil}
  <span class="delet_hard_skill bg-red-500 text-white text-xs px-2 py-0.5 rounded-md cursor-pointer hover:bg-red-600 transition">
  ✕
  </span>
  </p>
    `;
    })
    .join("");
  deletHardSkill();
}
function saveHardSkills() {
  const addHardskillBtn = document.getElementById("add_hardSkill");
  addHardskillBtn.addEventListener("click", () => {
    const hardSkills = document.getElementById("hard_skills").value.trim();
    if (hardSkills == "") return;
    UserCvData.hardSkills.push(hardSkills);
    console.log(UserCvData.hardSkills);
    renderHardSkills();
    saveAllData();
    hardSkills = "";
  });
}
function deletHardSkill() {
  const deletHardSkill = document.getElementsByClassName("delet_hard_skill");
  Array.from(deletHardSkill).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      UserCvData.hardSkills[index];
      UserCvData.hardSkills.splice(index, 1);
      console.log("this skill removed", index);
      renderHardSkills();
    });
  });
}
saveHardSkills();
//soft skills
function renderSoftSkills() {
  const displaySoftSkill = document.getElementById("display_softSkill");
  displaySoftSkill.innerHTML = UserCvData.softSkills
    .map((softSkil) => {
      return `
      <p class="inline-flex items-center gap-2 bg-gray-300 px-3 py-1 my-2 rounded-md shadow-md text-sm font-medium text-gray-700 hover:shadow-lg transition">
  ${softSkil}
  <span class="delet_soft_skill bg-red-500 text-white text-xs px-2 py-0.5 rounded-md cursor-pointer hover:bg-red-600 transition">
  ✕
  </span>
  </p>
    `;
    })
    .join("");
  deletSoftSkill();
}
function saveSoftSkills() {
  const addSoftskillBtn = document.getElementById("add_softSkill");
  addSoftskillBtn.addEventListener("click", () => {
    const softSkills = document.getElementById("soft_skills").value.trim();
    if (softSkills == "") return;
    UserCvData.softSkills.push(softSkills);
    console.log(UserCvData.softSkills);
    renderSoftSkills();
    saveAllData();
    // hardSkills.value = ""
  });
}
function deletSoftSkill() {
  const deletHardSkill = document.getElementsByClassName("delet_soft_skill");
  Array.from(deletHardSkill).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      UserCvData.softSkills[index];
      UserCvData.softSkills.splice(index, 1);
      console.log("this skill removed", index);
      renderSoftSkills();
    });
  });
}
saveSoftSkills();

// ========================= save certificate ================= ///
function renderCertificate() {
  const displayCertificate = document.getElementById("display_certificate");
  displayCertificate.innerHTML = UserCvData.certificate
    .map((certife) => {
      return `<div class = " bg-gray-200 p-2 my-3 rounded-lg shadow-md">
      <div class = "flex justify-between">
      <div>
        <p>certificate name : ${certife.certificate_Name}</p>
        <p>obtaning data :${certife.certificate_Date}</p>
        <p>From : ${certife.certificate_Source}</p>
        </div>
        <div>
           <span class ="delet_certificate hover:text-red-700 cursor-pointer">
          <i class="fa-solid fa-trash"></i></span>
        </div>
        </div>
     </div>`;
    })
    .join("");
  deletCertificate();
}
function saveCertificate() {
  const addCeritificateBtn = document.getElementById("save_certificate");
  addCeritificateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const certificateName = document.getElementById("certificate_name");
    const certificateDate = document.getElementById("certificate_date");
    const certificateSource = document.getElementById("certificate-source");

    const certificateData = {
      certificate_Name: certificateName.value.trim(),
      certificate_Date: certificateDate.value.trim(),
      certificate_Source: certificateSource.value.trim(),
    };
    UserCvData.certificate.push(certificateData);
    console.log("certificate data", UserCvData.certificate);
    renderCertificate();
    saveAllData();
  });
}
saveCertificate();

function deletCertificate() {
  const deletCertificateBtns =
    document.getElementsByClassName("delet_certificate");
  Array.from(deletCertificateBtns).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      UserCvData.certificate[index];
      UserCvData.certificate.splice(index, 1);
      renderCertificate();
    });
  });
}

// =================== save hobbies ==================== //
function saveHobbies() {
  const addHobbiesBtn = document.getElementById("add_hobbies");

  addHobbiesBtn.addEventListener("click", () => {
    const hobby = document.getElementById("hobbies").value.trim();
    UserCvData.hobbies.push(hobby);
    console.log("hobbies :", UserCvData.hobbies);
    saveAllData();
    renderHobbies();
  });
}
saveHobbies();

function renderHobbies() {
  const dispalyHobbies = document.getElementById("display_hobbies");
  dispalyHobbies.innerHTML = UserCvData.hobbies
    .map((hobby) => {
      return `
           <p class="inline-flex items-center gap-2 bg-gray-300 px-3 py-1 my-2 rounded-md shadow-md text-sm font-medium text-gray-700 hover:shadow-lg transition">
  ${hobby}
  <span class="delet_hobby bg-red-500 text-white text-xs px-2 py-0.5 rounded-md cursor-pointer hover:bg-red-600 transition">
  ✕
  </span>
  </p>
    
    `;
    })
    .join("");
  deletHobby();
}

function deletHobby() {
  const deletHoby = document.getElementsByClassName("delet_hobby");
  Array.from(deletHoby).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      UserCvData.hobbies[index];
      UserCvData.hobbies.splice(index, 1);
      console.log("this hobby removed", index);
      renderHobbies();
    });
  });
}

//================= lqngueges save ======================= //

function saveLanguege() {
  const saveLanguage = document.getElementById("save_languge");
  saveLanguage.addEventListener("click", (e) => {
    e.preventDefault();

    const languege = document.getElementById("langueges");
    const levelLang = document.getElementById("level_lang");
    const LanguegeData = {
      lang: languege.value.trim(),
      level: levelLang.value.trim(),
    };
    if(LanguegeData.lang == "" || LanguegeData.level == ""){
       alert("les champ est vide")
      return
    }
      UserCvData.langueges.push(LanguegeData);
    renderLangueg();
    console.log("languge:", UserCvData.langueges);
   languege.value= ""
   levelLang.value = ""
  });
}
saveLanguege();

function renderLangueg() {
  const displayLang = document.getElementById("display_languege");
  displayLang.innerHTML = UserCvData.langueges
    .map(
      (lang) =>
        `
    <div class = "inline-flex items-center gap-1 bg-gray-200 rounded-md shadow-md p-1 mb-2">
      <p>${lang.lang.toUpperCase()}</p>
      <p class = "bg-blue-400 rounded-md p-1 w-auto text-center">${lang.level.toUpperCase()}</p>
      <p class = "delet_lang bg-red-500 rounded-md p-1 w-8 cursor-pointer text-center text-white font-bold hover:bg-red-700 ">X</p>

    </div>
  `
    )
    .join("");
  deletLangue();
}

function deletLangue() {
  const deletLangeBtns = document.getElementsByClassName("delet_lang");
  Array.from(deletLangeBtns).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      UserCvData.langueges[index];
      UserCvData.langueges.splice(index, 1);
      renderLangueg();
    });
  });
}
//   //save data in localstorgae("")
export function saveAllData() {
  localStorage.setItem("cvData", JSON.stringify(UserCvData));
}
