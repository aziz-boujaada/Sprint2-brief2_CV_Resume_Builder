export function allFormsValidation(){

    /*================= Personal information form validation=============== */
    const fullname = document.getElementById("full_name").value ;
    const Email = document.getElementById("email").value ;
    const phone = document.getElementById("phone").value ;
    const adresse = document.getElementById("address").value ;
    const socialLinks = document.getElementById("links").value ;
    
    //errors variables
    const inputsErrors = document.querySelectorAll(".input-errors")
    const nameError = document.querySelector(".name_error")
    const emailError = document.querySelector(".email_error")
    const phoneError = document.querySelector(".phone_error")
    const addressError = document.querySelector(".adresse_error")
    const linksError = document.querySelector(".links_error")
    

     inputsErrors.forEach((input_err)=>{
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
    if(fullname === ""){
        nameError.textContent = "Name is required";
        isValid = false;
    } else if(!nameRegex.test(fullname)){
        nameError.textContent = "Name must contain only letters (min 3 characters)";
        isValid = false;
    }
    
    // Validate email
    if(Email === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    } else if(!emailRegex.test(Email)){
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }
    
    // Validate phone
    if(phone === ""){
        phoneError.textContent = "Phone number is required";
        isValid = false;
    } else if(!phoneRegex.test(phone)){
        phoneError.textContent = "Phone must be in format: +212XXXXXXXXX";
        isValid = false;
    }
    
    // Validate address
    if(adresse === ""){
        addressError.textContent = "Address is required";
        isValid = false;
    }
    //validate social links 
     if(socialLinks == ""){
        linksError.textContent = "enter link of your linked in or other "
        isValid = false
     }
    else if(!linksRegex.test(socialLinks)){
        linksError.textContent = "Please enter a valid URL (http:// or https://)";
        isValid = false;
    }



     /*================= Education & experience  form validation=============== */
     const schoolName = document.getElementById("school_name");

    return isValid;
}

allFormsValidation()
