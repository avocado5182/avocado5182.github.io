/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let imageLinks = document.getElementsByClassName("image-link");
for (let i = 0; i < imageLinks.length; i++) {
  imageLinks[i].addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  });
}

// function validateForm() {
//   let form = document.forms["signup-form"];
//   let name = form["entry.2016517718"].value;
//   let password = form["entry.1120904250"].value;
//   let email = form["entry.937210333"].value;

//   if (!name || name.length < 3) {
//     console.log("Name required");
//     return false;
//   } else if (name.length >= 3) {
//     return true;
//   }

//   if (!password || name.length < 8) {
//     console.log("Password required");
//     return false;
//   } else if (password.length >= 8) {
//     return true;
//   }

//   if (!email) {
//     console.log("Email required");
//     return false;
//   } else if (email.match("/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/igm")) {
//       console.log("Email is in correct format");
//       return true;
//   }
// }
