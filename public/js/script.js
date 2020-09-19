const calc = {
  service: [
    "EIFS, $500",
    "Radon Gas Testing $200",
    "Structural $1300",
    "Roofing $2000",
    "HVAC $100",
    "Electrical $340",
    "Plumbing $900",
    "Leak Detection $270",
    "Thermographic $880",
    "Whole House $3500",
    "Property Damage $275",
    "Insurance $100",
    "Municipal Inspections $290",
    "Plan Reviews $550",
    "Construction Management $3500",
    "Thermographic Analysis $500",
    "Specialty Testing $625",
    "Building Design $1000",
    "Fire Investigations $1400",
    "Computer Forensics $50",
  ],
  cost: [
    "500",
    "200",
    "1300",
    "2000",
    "100",
    "340",
    "900",
    "270",
    "880",
    "3500",
    "275",
    "100",
    "290",
    "550",
    "3500",
    "500",
    "625",
    "1000",
    "1400",
    "50",
  ],
};

let total = 0;

let formHasErrors = false;

function displayServices() {
  // loop through the items
  for (let i = 0; i < calc.service.length; i++) {
    // create a check box for each entry
    // include the value
    $(".checks").append(
      `<div class="form-check"><input class = "uncheck" type="checkbox" id = "check${i}" value="${calc.cost[i]}"> ${calc.service[i]}<br>`
    );
  }
}

$(".sum").on("click", function () {
  // if they did not select a location
  // alert that they need to
  // stop the rest of the function from running
  if (
    !$("#mo").prop("checked") &&
    !$("#il").prop("checked") &&
    !$("#out").prop("checked")
  ) {
    alert("Please select a location.");
    return;
  }

  // loop through all check boxes
  for (let i = 0; i < calc.service.length; i++) {
    // if it is checked
    if ($("#check" + [i]).prop("checked")) {
      // turn the string into a number and add the value to the total
      let num = $("#check" + [i]).val();
      console.log(parseInt(num));
      total += parseInt(num);
    }
  }

  // if illinois is selected, add 100 to the total
  // if out of state is selected, add 500
  if ($("#il").prop("checked")) {
    total += 100;
  } else if ($("#out").prop("checked")) {
    total += 500;
  }
  // display the total
  // if not using jquery this would have been
  // document.getElementById("total").innerHTML= "$" + total
  $("#total").text("Your price is $" + total);
  total = 0;
  // uncheck all boxes
  $(".uncheck").prop("checked", false);
});

displayServices();

// // if there is not a full name, service selected or message written, throw and alert

$("#contactBtn").on("click", function (event) {
  event.preventDefault();
  //   if ($("#formName").val("") || !$("#formName").val().includes("")) {
  //     alert("Please enter your full name");
  //   }
  //   // else if ($("#formMessage").text("")) {
  //   //   alert("Please enter a message");
  //   // } else if ($("#default").prop("checked")) {
  //   //   alert("Please chose the subject of your message");
  //   // }
  //   // alert("Thank you for your message, we will get back with you shortly!");

  try {
    if ($("#formName").val() === "" || !$("#formName").val().includes(" ")) {
      throw "*Please enter your full name";
      formHasErrors = true;
    }
    if (
      $("#formEmail").val() === "" ||
      !$("#formEmail").val().includes("@") ||
      !$("#formEmail").val().includes(".") ||
      $("#formEmail").val().includes(" ")
    ) {
      throw "*Please enter a valid email";
    }
    if ($("#formSubject").val() === "default") {
      throw "*Please enter a subject";
    }
    if ($("#formMessage").val() === "") {
      throw "*Please enter a message";
    }
  } catch (error) {
    $("#error").text(error);
    formHasErrors = true;
  } finally {
    if (formHasErrors) {
      console.log("fix form errors");
    }
  }
});
