
 
export function switchPersonalInfoForms(){

    const skillsCertificat_Form = document.getElementById(
      "skills_cirtificat_form"
    );
    const hobbiesLanguege_Form = document.getElementById("langueges_hobbies");
    const prevForm = document.getElementById("prev_form");
    const nextForm = document.getElementById("next_form");
    
    let totalForms = 2;
    let currentForm = 1;
    
    function UpdateCurrentForm(){
      currentForm == 1
        ? skillsCertificat_Form.classList.remove("profile_info_visibility")
        : skillsCertificat_Form.classList.add("profile_info_visibility");
        currentForm == 1
        ? nextForm.classList.add("should_toClick")
        :nextForm.classList.remove("should_toClick")
      currentForm == 2
        ? hobbiesLanguege_Form.classList.remove("profile_info_visibility")
        : hobbiesLanguege_Form.classList.add("profile_info_visibility");
        currentForm == 2
        ? prevForm.classList.add("should_toClick")
        : prevForm.classList.remove("should_toClick")
      };
      
      UpdateCurrentForm(); 

    nextForm.addEventListener('click' ,()=>{
        if(currentForm < totalForms){
            currentForm++
            UpdateCurrentForm()
            console.log(currentForm)
        }
        console.log("clicked next")
    })
    prevForm.addEventListener('click' ,()=>{
        if(currentForm > 1){
            currentForm--
            UpdateCurrentForm()
             console.log(currentForm)
        }
    })
  
}

