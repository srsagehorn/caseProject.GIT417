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

let total;

for (let i = 0; i < calc.service.length; i++) {
  $(".checks").append(
    `<div class="form-check"><input type="checkbox" id = "check"${i} name="amount"${i} value="${calc.cost[i]}">${calc.service[i]}<br>`
  );
}

$(".sum").on("click", function () {
  console.log("yes");
  console.log($("#check0").checked);
  for (let i = 0; i < calc.service.length; i++) {
    if ($("#check" + [i]).checked == true) {
      console.log("yes" + i);
      total += cost[i].value;
    }
  }
  $(".total").text("$" + total);
  total = 0;
});
