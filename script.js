let create = document.querySelector(".create_button")
function create_button_click(){
create.addEventListener("click",()=>{
  let wrapper = document.querySelector(".wrapper");
  let bubble_wrapper = document.querySelector(".bubble-wrapper");
  let container = document.querySelector(".container");
  let title = document.querySelector(".title");
  let username = document.querySelector(".username");
  let password = document.querySelector(".password");
  let submit = document.querySelector(".submit");
  let forgot_password = document.querySelector(".forgot_password");
  let photo = document.querySelector(".photo")
  wrapper.classList.add("wrapper_2");
  setTimeout(() => {
    wrapper.innerHTML="";
    container.style.zIndex= "6";
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
    wrapper.classList.remove("wrapper_2")
    wrapper.classList.add("wrapper_3");
    photo.setAttribute("src","/images/undraw_maker_launch_re_rq81.svg");
    photo.classList.remove("desk");
    photo.classList.add("rocket")
    bubble_wrapper.style.backgroundColor = "#6d63fe"
    let text2 = document.createElement("div");
    text2.innerText = "Already have an account?";
    text2.classList.add("text2");
    wrapper.appendChild(text2);
    let login_button = document.createElement("button");
    login_button.innerText= "Login";
    login_button.classList.add("login_button");
    login_button.setAttribute("type","button")
    wrapper.appendChild(login_button)
  }, 2000);
})}
create_button_click();


let login_button = document.querySelector("login_button");
function login_button_click(){
  login_button.addEventListener("click",()=>{
    let wrapper = document.querySelector(".wrapper");
    let bubble_wrapper = document.querySelector(".bubble-wrapper");
    let container = document.querySelector(".container");
    let title = document.querySelector(".title");
    let username = document.querySelector(".username");
    let password = document.querySelector(".password");
    let submit = document.querySelector(".submit");
    let forgot_password = document.querySelector(".forgot_password");
    let photo = document.querySelector(".photo")
    wrapper.classList.add("wrapper_4");
    setTimeout(() => {
      wrapper.innerHTML="";
      container.style.zIndex= "4";
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
      wrapper.classList.remove("wrapper_2")
      wrapper.classList.add("wrapper_3");
      photo.setAttribute("src","/images/undraw_maker_launch_re_rq81.svg");
      photo.classList.remove("desk");
      photo.classList.add("rocket")
      bubble_wrapper.style.backgroundColor = "#6d63fe"
      let text2 = document.createElement("div");
      text2.innerText = "Already have an account?";
      text2.classList.add("text2");
      wrapper.appendChild(text2);
      let login_button = document.createElement("button");
      login_button.innerText= "Login";
      login_button.classList.add("login_button");
      wrapper.appendChild(login_button)
    }, 2000);
  })}
  login_button_click();