let signUpNameInput = document.querySelector(".sign-up-name-input");
let signUpEmailInput = document.querySelector(".sign-up-email-input");
let signUpPasswordInput = document.querySelector(".sign-up-password-input");
let formSignUpBtn = document.querySelector(".sign-up-form-btn")
let loginBtn = document.querySelector(".login");
let signUp = document.querySelector(".sign-up")
let signUpPage = document.querySelector(".sign-up-page")
let loginPage = document.querySelector(".login-page");
let signUpCloseBtn = document.querySelector(".sign-up-close-btn")
let loginCloseBtn = document.querySelector(".login-close-btn");
let loginEmailInput = document.querySelector(".login-email-input");
let loginPasswordInput = document.querySelector(".login-password-input");
let loginFormBtn = document.querySelector('.login-form-btn')

let signUpName;
let signUpEmail;
let signUpPassword;
signUp.addEventListener("click", () => {
  signUpPage.style.display = "block"
  document.body.style.backgroundColor = "blur"
})
signUpCloseBtn.addEventListener("click", () => {
  signUpPage.style.display = "none"
})
loginCloseBtn.addEventListener("click", () => {
  loginPage.style.display = "none"
})

formSignUpBtn.addEventListener("click", () => {
   signUpName = signUpNameInput.value;
   signUpEmail = signUpEmailInput.value;
   signUpPassword = signUpPasswordInput.value;
  if (signUpName === "" || signUpEmail === "" || signUpPassword === "") {
    Swal.fire({
      icon: "error",
      title: "Please Fill All Input",
    });

  } else {
    Swal.fire({
      title: "Account Creat Sucesfully",
      icon: "success"
    });
    signUpNameInput.value = ""
    signUpEmailInput.value = ""
    signUpPasswordInput.value = ""
    signUpPage.style.display = "none"
  }
})

loginBtn.addEventListener("click", () => {
  loginPage.style.display = "block"
})

loginFormBtn.addEventListener("click",()=>{
    
if(loginEmailInput.value === "" || loginPasswordInput.value === ""){
  Swal.fire({
    icon: "error",
    title: "Please Fill All Input",
  });
}else if(signUpEmail === loginEmailInput.value && signUpPassword === loginPasswordInput.value){

 window.location.href = "second.html"
}else{
console.log("errore");

}
loginEmailInput.value = "";
  loginPasswordInput.value = ""

});



