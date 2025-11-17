// LISTS FORM THE FORM
const names = document.getElementById("myName");
const role = document.getElementById("myRole");
const availability = document.getElementById("myAvailability");
const age = document.getElementById("myAge");
const locations = document.getElementById("myLocation");
const yearsExperience = document.getElementById("myYearsExperience");
const email = document.getElementById("myEmail");

// EDIT BUTTON
const editButton = document.getElementById("edit-button");

// THE FORM
const my_form = document.getElementById("theform");

// DIV FORM
const form = document.getElementById("formulir");

// let sectionFormShow = true;

my_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const my_name = my_form.elements.names.value;
  const my_role = my_form.elements.role.value;
  const my_availability = my_form.elements.availability.value;
  const my_age = my_form.elements.age.value;
  const my_location = my_form.elements.locations.value;
  const my_yearsExperience = my_form.elements.yearsExperience.value;
  const my_email = my_form.elements.email.value;

  names.innerHTML = my_name;
  role.innerHTML = my_role;
  availability.innerHTML = my_availability;
  age.innerHTML = my_age;
  locations.innerHTML = my_location;
  yearsExperience.innerHTML = my_yearsExperience;
  email.innerHTML = my_email;

  alert("Profile changed.");

  edit();
});

function edit() {
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }

  // if (sectionFormShow) {
  //   sectionFormShow = false;
  //   form.classList.remove("hide");
  // } else {
  //   sectionFormShow = true;
  //   form.classList.add("hide");
  // }
}

// editButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   edit();
// });

function resume() {
  console.log("tombol resume diklik");
  alert("Resume button is click.");
}
