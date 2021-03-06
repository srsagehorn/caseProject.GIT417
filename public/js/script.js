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

  try {
    //if your the name is left blank or doesnt contain a space (meaning first and last name) throw err
    if ($("#formName").val() === "" || !$("#formName").val().includes(" ")) {
      throw "*Please enter your full name";
      formHasErrors = true;
    }
    // if the email is left blank or doesnt contain an @ or . or does contain a " " (ie is an invalid email) throw err
    if (
      $("#formEmail").val() === "" ||
      !$("#formEmail").val().includes("@") ||
      !$("#formEmail").val().includes(".") ||
      $("#formEmail").val().includes(" ")
    ) {
      throw "*Please enter a valid email";
    }
    // if the subject selected is left as the default throw err
    if ($("#formSubject").val() === "default") {
      throw "*Please enter a subject";
    }
  } catch (error) {
    // post error to page and set marker as true
    $("#error").text(error);
    formHasErrors = true;
  } finally {
    // if there are uncaught errors alert the console
    if (formHasErrors) {
      console.log("fix form errors");
    }
  }
  if ((formHasErrors = false)) {
    alert("Thank you for your message we will get back with you shortly");

    $(".contactForm").trigger("reset");
  }
  // let them know we have recieved there message and clear the form
});

// // if online == true return connected else return not connected
// const onOrOff = function () {
//   return navigator.onLine
//     ? "connected to the internet"
//     : "not connected to the internet";
// };
// // display screen height
// $("#screenHeight").text(screen.height);
// // display screen width
// $("#screenWidth").text(screen.width);
// // display operating system
// $("#oS").text(navigator.platform);
// // display browser name
// $("#browser").text(navigator.appName);
// // display browser version
// $("#version").text(navigator.appVersion);
// // display location by finding longitude and latitude and triming the to two decimal points
// navigator.geolocation.getCurrentPosition(function (position) {
//   let lat = position.coords.latitude.toFixed(2);
//   let long = position.coords.longitude.toFixed(2);
//   $("#location").text(long + " longitude and " + lat + " latitude");
// });
// // run the on or offline function
// $("#line").text(onOrOff());

// Disney form

$("#disneyBtn").on("click", function (event) {
  let errors = 0;

  event.preventDefault();
  // clear error text
  $("#errorDis").text("");
  $("#zip").removeAttr("style");
  $("#mickey").removeAttr("style");
  $("#message").removeAttr("style");
  $(".form-check-label").removeAttr("style");
  // if the zip code is not a number or is not 6 characters then display an error
  if (isNaN($("#zip").val()) || $("#zip").val().length != 5) {
    $("#zip").css({ "background-color": "rgb(255, 0, 0, 0.2)" });
    $("#errorDis").append("*Invalid zip code <br>");
    errors++;
  }
  // if they selected that mickey mouse has anything other than 3 fingers, display and error
  if ($("#mickey").val() != "3") {
    $("#mickey").css({ "background-color": "rgb(255, 0, 0, 0.2)" });
    $("#errorDis").append("*Incorrect number of fingers for Mickey Mouse <br>");
    errors++;
  }
  // if the message section is left blank, display an error
  if ($("#message").val() == "") {
    $("#message").css({ "background-color": "rgb(255, 0, 0, 0.2)" });
    $("#errorDis").append("*Dont you want something from Santa? <br>");
    errors++;
  }
  // if the incorrect names are selected then display an error
  if (
    !$("#briar").prop("checked") ||
    !$("#sleep").prop("checked") ||
    $("#malef").prop("checked") ||
    $("#cind").prop("checked")
  ) {
    $(".form-check-label").css({
      "background-color": "rgb(255, 0, 0, 0.2)",
    });
    $("#errorDis").append("*Incorrect names selected for princess Aurora <br>");
    errors++;
  }
  // if none of those error were triggered, thank them for their submission and clear the form
  if (errors == 0) {
    alert("Thank you for your submission");
    $(".disneyForm").trigger("reset");
  }
});
