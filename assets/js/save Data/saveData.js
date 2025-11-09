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

  // save eduaction information

  const saveEducationBtn = document.getElementById("save_education");
  saveEducationBtn.addEventListener("click", (e) => {
    const schoolName = document.getElementById("school_name").value.trim();
    const startDate = document.getElementById("start_date").value.trim();
    const endDate = document.getElementById("end_date").value.trim();
    const schoolLocation = document
      .getElementById("school_location")
      .value.trim();
    const educationDescription = document
      .getElementById("education_description")
      .value.trim();
    e.preventDefault();
    UserCvData.educationInfo.push({
      schoolName,
      startDate,
      endDate,
      schoolLocation,
      educationDescription,
    });

    console.log("eduaction data", UserCvData.educationInfo)

  });

  //save data in localstorgae
  localStorage.setItem("personalInformation", JSON.stringify(UserCvData));
}

saveLinks();
