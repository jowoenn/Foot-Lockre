let form = document.getElementById("formValidation")
let error = document.getElementById("error")
let emailErrorMessage = [
    "Email must contain @",
    "Email must contain . (gmail.com, yahoo.co.id, hotmail.com)"
]

function validateName(name){
    return (
        name.length >= 4 && name.length <= 16 
    )
}

function validateLastName(name){
    return (
        name.length <= 10 
    )
}

function validateEmail(email){
    let split = email.split("@")
    if(split.length == 1){
        return 0 
    }

    let checkDut = split[split.length-1]
    let checkDotSplit = checkDut.split(".")
    if(checkDotSplit.length == 1){
        return 1
    }

    return -1
}

function validateCountry(country){
    if(country.selectedIndex == 0){
        return false
    }
    return true
}

function validateNumber(number){
    return(
        number.length >= 12 && number.length <= 13
    )
}

function showError(message){
    error.style.display = "block"
    error.innerHTML = message
}

function clearError(){
    error.style.display = "none"
    error.innerHTML = ""
}

function formSubmit(){
    let name = document.getElementById("name")

    if(!validateName(name.value)){
        showError("First name length must be in range 4 - 16")
        return
    }

    let lname = document.getElementById("lname")

    if(!validateLastName(lname.value)){
        showError("Last name length is too long")
        return
    }

    let number = document.getElementById("number")

    if(!validateNumber(number.value)){
        showError("Number length must be in range 12 - 13")
        return
    }

    let email = document.getElementById("email")    
    let checkEmail = validateEmail(email.value)

    if(checkEmail != -1){
        showError(emailErrorMessage[checkEmail])
        return
    }

    let countries = document.getElementById("country")
    if(!validateCountry(countries)){
        showError("Please select a country")
        return
    }
    let country = countries.options[countries.selectedIndex].value

    let checkBox = document.getElementById("checkbox")
    if(!checkBox.checked){
        showError("Please agree to the terms and conditions")
        return
    }

    clearError()

    alert("Form has been successfully submitted")
}

form.addEventListener("submit", (valid) =>{
    valid.preventDefault()
    formSubmit();
})