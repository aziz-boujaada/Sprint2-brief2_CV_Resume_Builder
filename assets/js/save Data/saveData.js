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
  experienceInfo: [
    {
      jobTitle: null,
      companyName: null,
      startExperienceDate: null,
      endtExperienceDate: null,
      companyLocation: null,
      schoolDescription: null,
      achievment: [],
    },
  ],

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
  function dispalyEducation() {
    const saveEducationBtn = document.getElementById("save_education");
    const DispalyEducationZone = document.getElementById("display_education")
    saveEducationBtn.addEventListener("click", (e) => {
      e.preventDefault();
        // save eduaction information

  const schoolName = document.getElementById("school_name").value.trim();
  const startDate = document.getElementById("start_date").value.trim();
  const endDate = document.getElementById("end_date").value.trim();
  const schoolLocation = document
    .getElementById("school_location")
    .value.trim();
  const educationDescription = document
    .getElementById("education_description")
    .value.trim();

  UserCvData.educationInfo.push({
    schoolName,
    startDate,
    endDate,
    schoolLocation,
    educationDescription,
  });
      DispalyEducationZone.innerHTML = UserCvData.educationInfo.map((edu , index)=>{
           return `
            <div data-index = "${index}" class = "flex flex-col gap-4 bg-gray-300 p-1 rounded-md shadow-lg my-2 ">
            <p>school Name : ${edu.schoolName}</p> 
             <p>start date : ${edu.startDate}</p>
             <p>end date : ${edu.endDate}</p>
             <p>location : ${edu.schoolLocation}</p>
             <p>description : ${edu.educationDescription}</p>
             <span><i class="fa-solid fa-trash"></i></span>
             </div>
            `
      }).join("")
       console.log("add school button work " , UserCvData.educationInfo)
    });
  }
export function saveUserData() {
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
  localStorage.setItem("personalInformation", JSON.stringify(UserCvData));

}
dispalyEducation()
saveLinks();


//   //save data in localstorgae

