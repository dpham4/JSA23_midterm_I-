let userEmail = document.getElementById('email');
let userPassword = document.getElementById('password');
let userList = [{}]

let signUpButton = document.getElementById('signup-btn');


signUpButton.addEventListener('click', (event) => {
  let newUser = {
    email: String(userEmail.value),
    password: String(userPassword.value)
  }  
  userList.push(newUser)
  console.log(userList)
  alert("Create account successfully")
  event.preventDefault()
})

let loginButton = document.getElementById('login-btn')
loginButton.addEventListener('click', () => {
    let inputUserEmail = String(userEmail.value)
    let inputUserPassword = String(userPassword.value)
    for(let i = 0; i < userList.length; i++) {
        if(inputUserEmail == userList[i].email && inputUserPassword == userList[i].password) {
            alert("Login successfully")
            break;
        } 
    }
})