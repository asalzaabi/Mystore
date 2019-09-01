var objPeople = [
  {
    username: "asma",
    password: "123as"
  },
  {
    username: "jawaher",
    password: "123"
  },
  {
    username: "meera",
    password: "m123"
  },
  {
    username: "amjad",
    password: "a123"
  }
];

function userLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var flag = false;
  for (i = 0; i < objPeople.length; i++) {
    console.log(objPeople[i].username);
    console.log(objPeople[i].password);
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      flag = true;
      break;
    }
  }
  console.log(flag);
  if (flag == true) {
    localStorage.setItem("username", username);
    window.open("product.html");
  } else {
    alert("incorret username or password  ");
  }
}

// // function autoLogIn(un, pw) {
// //   var form = document.createElement("form");
// //   var username = document.createElement("input");
// //   var password = document.createElement("input");

// //   form.method = "POST";
// //   form.action = "login.php";

// //   username.value = un;
// //   username.name = "un";
// //   form.appendChild(username);

// //   password.value = pw;
// //   password.name = "pw";
// //   form.appendChild(password);

// //   document.body.appendChild(form);

// //   form.submit();
// }
