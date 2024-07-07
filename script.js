function create_button_click() {
  let create = document.querySelector(".create_button");
  create.addEventListener("click", () => {
    let wrapper = document.querySelector(".wrapper");
    let bubble_wrapper = document.querySelector(".bubble-wrapper");
    let container = document.querySelector(".container");
    let title = document.querySelector(".title");
    let username = document.querySelector(".username");
    let password = document.querySelector(".password");
    let submit = document.querySelector(".submit");
    let forgot_password = document.querySelector(".forgot_password");
    let photo = document.querySelector(".photo");

    wrapper.classList.add("wrapper_2");
    setTimeout(() => {
      wrapper.innerHTML = "";
      container.style.zIndex = "6";
    }, 500);
    setTimeout(() => {
      container.classList.remove("sign_in");
      container.classList.add("sign_up");
      title.classList.remove("sign_in_title");
      title.classList.add("sign_up_title");
      title.innerText = "Sign Up";
      username.classList.remove("sign_in_username");
      username.classList.add("sign_up_username");
      password.classList.remove("sign_in_password");
      password.classList.add("sign_up_password");
      submit.classList.remove("login");
      submit.classList.add("signUp");
      submit.innerText = "SignUp";
      forgot_password.innerText = "";
    }, 1000);
    setTimeout(() => {
      wrapper.classList.remove("wrapper_2");
      wrapper.classList.add("wrapper_3");
      photo.setAttribute("src", "/images/undraw_maker_launch_re_rq81.svg");
      photo.classList.remove("desk");
      photo.classList.add("rocket");
      bubble_wrapper.style.backgroundColor = "#6d63fe";
      let text2 = document.createElement("div");
      text2.innerText = "Already have an account?";
      text2.classList.add("text2");
      wrapper.appendChild(text2);
      let login_button = document.createElement("button");
      login_button.innerText = "Login";
      login_button.classList.add("login_button");
      login_button.setAttribute("type", "button");
      wrapper.appendChild(login_button);

      // Attach the event listener after the button is created
      login_button.addEventListener("click", () => {
        let wrapper0 = document.querySelector(".wrapper_3");
        wrapper0.classList.remove("wrapper_3");
        wrapper0.classList.add("wrapper_4");
        container.style.zIndex = "8";
        setTimeout(() => {
          wrapper0.innerHTML = "";
         
        }, 500);
         setTimeout(() => {
          container.classList.remove("sign_up");
           container.classList.add("sign_in");
           title.classList.remove("sign_up_title");
           title.classList.add("sign_in_title");
           title.innerText = "Sign IN";
           username.classList.remove("sign_up_username");
           username.classList.add("sign_in_username");
           password.classList.remove("sign_up_password");
           password.classList.add("sign_in_password");
           submit.classList.remove("signUp");
           submit.classList.add("login");
           submit.innerText = "Login";
           forgot_password.innerText = "Forgot Password?";
         }, 1000);
         setTimeout(() => {
           wrapper.classList.remove("wrapper_4");
           wrapper.classList.add("wrapper");
           photo.setAttribute("src", "/images/undraw_designer_life_re_6ywf.svg");
           photo.classList.remove("rocket");
           photo.classList.add("desk");
           bubble_wrapper.style.backgroundColor = "rgb(191, 225, 255)";
           let text3 = document.createElement("div");
           text3.innerText = "Don't have an account?don't worry";
           text3.classList.add("text3");
           wrapper.appendChild(text3);
           let sign_up_button = document.createElement("button");
           sign_up_button.innerText = "Create One";
           sign_up_button.classList.add("create_button");
           sign_up_button.setAttribute("type", "button");
           
           wrapper.appendChild(sign_up_button);
           create_button_click();
      },2000);
    });
  },2000);
});
}
create_button_click();