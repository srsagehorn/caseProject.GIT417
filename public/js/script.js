var descriptions = [
"EIFS, when installed properly is an economical system that provides:
- Energy efficiency

- Stabilization of temperature of the structure
- Aesthetic flexibility
EIFS has had problems in the past from low quality installations causing leakage. The improper sealing of openings and lack of proper expansion joints are two primary causes of problems resulting in water intrusion. When properly installed these problems have been eliminated. The best way to ensure a proper installation is inspecting as the installation is in progress.
Once installed and in service, an inspection can identify problems and early solutions can be implemented, thus reducing the need for expensive repairs.
EEI's EIFS Certified Inspector Neil Otto has been certified by the Exterior Design Institute.",
"Radon Gas is in virtually all homes in the St. Louis area. The gas originates in the earth and travels in the soil and into our homes. Homes with a basement, basement or foundation cracking, crawlspace or sump pump systems are more likely to have increased Radon gas levels. The size and age of your home has nothing to do with your level of risk. Twenty (20%) percent of the homes in the St. Louis area have dangerous levels of Radon gas present. If you are a smoker and you live with elevated levels of Radon gas, your chance of developing Lung Cancer increase exponentially.
The EPA considers Radon gas to be a serious indoor environmental threat, second only to smoking as a cause of lung cancer related deaths. A Harvard University study found Radon gas to be 400 times more deadly than asbestos.

Awareness is the most important step in solving a Radon problem. By testing you learn about your chance of getting Radon induced lung cancer while living in your home. The next step is to consult with a qualified expert to choose which remedial steps may be necessary to reduce your risk of lung cancer.

The law has required all schools and libraries to test for Radon gas exposure. The next step for all business and residential property owners is to test for this deadly gas. Testing is mandatory for residential purchase in many states and all relocation companies require testing. Don't wait for the slow process of the law to catch this deadly problem. Your school district does not allow this problem and neither should you. Act now to protect your family.",
"EEI has professional engineers on staff that have performed many thousands of structural inspections. EEI performs inspections on residential, commercial, and industrial structures. There are many structural elements that can affect the integrity of a building. EEI evaluates elements such as:
- Basement walls
- Roof trusses
- Roof rafters
- Floors and their joists
- Columns and beams
- Concrete structures
- Steel structures
- Decks
- Exterior stairs, landings, and fire escapes

Do you have cracks in your foundation? 
Would you like to know what is causing them? 
Would you like to know how to stop them? 
We would like you to be there to see what we see. To understand what is happening and provide answers wile you are there. Then we follow up with a written report and photo's with the key information provided wile you were there. 

EEI can evaluate any structural element required to provide safety for a structure.",
"We perform hundreds of roof investigations each year. There is not a type of roof that we haven't seen. Damon Sagehorn is a Haag Certified Residential and Commercial Inspector. He has been performing roof evaluations for over twenty (20) years. Here are some of the roof types that we regularly inspect:
- Composite or asphalt and fiberglass shingles
- Cedar shake and cedar shingle
- Slate
- Built up roof (BUR) 
- Bitumen and modified bitumen
- Ethylene Propylene Diene and Erpolymer (EPDM) 
- Thermoplastic Olefin (TPO) 
- PVC
- Metal roofing

Investigations range from determining a reason for leaks to roof damage from weather events. If you are looking for what is really wrong with your roof, we can tell you.",
"EEI performs inspections on HVAC systems. We will typically test all units to ensure proper functionality and that hazards do not exist. Any flues or lines visible will be inspected for any potential problems. EEI checks cooling and heating air duct temperatures to ensure the cooling coil is not clogged and that the heat exchanger is working correctly. The temperature controls will be cycled through the heating and air conditioning to ensure the units are not short cycling. The controls are checked to make sure they reach their set points.
Hydronic and steam systems are checked for proper boiler, chiller and valve operation. Also, the Variable Air Volume, Fan Coil and Damper operations are checked to ensure proper functionality.",
"We have electrical engineers on staff that can diagnose both hardware and software problems. Often times problems develop due to brown outs or power surges making digital controls unstable. EEI has evaluated damage as the result of lightning, locating the point where lightning has entered and exited a structure to determine what was damaged and what needs to be replaced.

National Electrical code, NFPA 70 evaluations. The electrical panels will have covers removed and all screw connections checked. The wire sizes and circuit breakers or fuses will be checked to ensure they match. The GFCI receptacles and two or three prong receptacles will be tested. All open wiring will be checked for proper securing and all switches and lighting will be tested for proper operation. Electrical equipment such as water heater, range, or oven will be tested for proper operation without tripping circuit breakers or fuses. The branch circuits will be tested for voltage drop. In essence, all non-concealed electrical wiring will be tested.

Temperature Control Systems evaluations. EEI is experienced in the design of DDC controls, hydronic heating and cooling, boilers, chillers, air handlers, dampers, pneumatics, actuators and communications.

Computer/Microprocessor Systems evaluations. EEI is experienced with interface and control logic. Experienced with operating parameters from system level down to the component.

Electro Mechanical Systems evaluations. When systems are not functioning normally our objective approach to the problem isolates functions. Is the problem electrical, mechanical or interface related. Each are isolated checked and the cause determined.

Water Damage Determination. Water and electronics do not mix, so what is the result of water and electronics, is it damaged, can it be cleaned, can it be fixed or should it be replaced. These are the basic questions EEI works on in evaluating water damage. EEI has established procedures that get to the result fast.",

]

var titles = [
    "EIFS",
    "Radon Gas Testing",
    "Structural",
    "Roofing",
    "HVAC",
    "Electrical",
    "Plumbing",
    "Leak Deetection",
    "Thermographic",
    "Whole House",
    "Property Damage",
    "Insurance"
]

for (var i = 0 ;  i < descriptions.length; i++ {

    $(".acordion").append(`<div class="card">
    <div class="card-header" id="headingOne">
    <h2 class="mb-0">
        <button
        class="btn btn-link btn-block text-left"
        type="button"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        >
        ${title[i]}
        </button>
    </h2>
    </div>

    <div
    id="collapseOne"
    class="collapse show"
    aria-labelledby="headingOne"
    data-parent="#accordionExample"
    >
    <div class="card-body">
        ${descriptions[i]}
    </div>
    </div>
    </div>`)

})