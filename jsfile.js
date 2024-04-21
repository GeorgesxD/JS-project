function fp_alert(){
  alert("We sent you an email to change your password")
}

const userinfo = [{"username":"Georges","email":"gkl001lb@aou.edu.lb","password":"Georges123"},{"username":"Hassan","email":"hta008lb@aou.edu.lb","password":"Hassan123"}]

function login(){
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  for(let i=0;i<userinfo.length;i++){
    if ((username === userinfo[i].username && password === userinfo[i].password) || (username === userinfo[i].email && password === userinfo[i].password) ) {
        alert("Login successful!");
        break;
        
    } else if(i===userinfo.length-1) {
        alert("Invalid Credentials, Please try again.");
    }
  }
};

function signup(){
  let username2 = document.getElementById("username").value;
  let email2 = document.getElementById("email").value;
  let password2 = document.getElementById("password").value;
  if(username2 !="" && email2 !="" && password2 !=""){
    new_user={"username":username2,"email":email2,"password":password2};
    userinfo.push(new_user);
    alert("User Successfully Created.");
    
  }
  else{
    alert("Missing Information. Please fill out all of the boxes.");
  }
};
