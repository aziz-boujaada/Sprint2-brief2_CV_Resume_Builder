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

  certificate: [
    {
      certificateName: null,
      gettingDate: null,
      certificateSrc: null,
    },
  ],

  hobbies: [],

  langueges: [
    {
      lang: null,
      level: null,
    },
  ],
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

    UserCvData.experienceInfo.push(experienceSaveData);
    console.log("experience data saved", UserCvData.experienceInfo);
    saveAllData();
    renderExperience();
  });
}

function renderExperience() {
  const Displayexperience = document.getElementById("display_experience");
  Displayexperience.innerHTML = UserCvData.experienceInfo
    .map((exp) => {
      return `<div class = " bg-gray-200 p-2 my-3 rounded-lg shadow-md">
      <div  flex justify-between>
      <div>
        <p>Job title : ${exp.jobTitle}</p>
        <p>company name : ${exp.companyName}</p>
        <p>start date : ${exp.startDate}</p>
        <p>end date : ${exp.endExp}</p>
        <p>company location : ${exp.companyLocation}</p>
        </div>
        <div>
           <span class ="delet_experience hover:text-red-700 cursor-pointer">
          <i class="fa-solid fa-trash"></i></span>
        </div>
        </div>
     </div>`;
    })
    .join("");
    deletExperience()
  }
  
  function deletExperience() {
    const deletExpBtns = document.getElementsByClassName(".delet_experience")
    Array.from(deletExpBtns).forEach((btn , index) => {
      
      console.log(deletExpBtns)
      btn.addEventListener("click" ,() => {
        if(UserCvData.experienceInfo && UserCvData.experienceInfo.length > index){
          // UserCvData.experienceInfo[index]
          UserCvData.experienceInfo[index].splice(index,1)
          renderExperience()
        }
        console.log("index is removed" , index)
      })
    })
    
  }

saveEperiencePro();
//   //save data in localstorgae
export function saveAllData() {
  localStorage.setItem("cvData", JSON.stringify(UserCvData));
}
