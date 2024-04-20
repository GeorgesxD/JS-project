function fp_alert(){
    alert("We sent you an email to change your password")
}


const users = ["Georges","Hassan"];
const pws = ["Georges123","Hassan123"];
const emails = ["gkl001lb@aou.edu.lb","hta008lb@aou.edu.lb"];


function login(){
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  for(let i=0;i<users.length;i++){
    if ((username === users[i] && password === pws[i]) || (username === emails[i] && password === pws[i]) ) {
        alert("Login successful!");
        break;
        
    } else if(i===users.length-1) {
        alert("Invalid Credentials, Please try again.");
    }
  }
};


function signup(){
  let username2 = document.getElementById("username").value;
  let email2 = document.getElementById("email").value;
  let password2 = document.getElementById("password").value;
  if(username2 !="" && email2 !="" && password2 !=""){
    users.push(username2);
    emails.push(email2);
    pws.push(password2);
    alert("User Successfully Created.")
    
  }
  else{
    alert("Missing Information. Please fill out all of the boxes.")
  }
};
