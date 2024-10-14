---
title: "Time Calculator"
nav_order: 4
---

---
layout: default
title: Time and Fine Calculator
nav_order: 4
---

# Time and Fine Calculator

Use this calculator to determine the total sentencing time and fines based on selected charges from the State of Monroe Penal Code.

## How Sentencing Time is Calculated:

- **Charges Listed in Days:**
  - Total days are summed.
  - If total days are less than 401, the sentencing time remains in days.
  - If total days are 401 or more, the sentencing time is converted to years:
    - 401 - 500 Days: 1 Year
    - 501 - 600 Days: 2 Years
    - And so on.
- **Charges with Fixed Sentencing in Years:**
  - Fixed years are added directly to the total years.
  - Not converted into days.

Please select charges to begin calculating your total sentencing time and fines.

<div id="calculator">
  <input type="text" id="search" placeholder="Search for charges...">
  <div id="searchResults"></div>
  <div id="selectedCharges"></div>
  <h3>Modifiers</h3>
  <div id="modifiers"></div>
  <div id="totalSentence"></div>
  <div id="totalFine"></div>
  <button id="clearButton">Clear Selection</button>
</div>

<script>
const penalCode = [
  { code: "P.C. 1101", name: "Capital Murder", maxTime: "HUT", maxFine: "N/A", timeUnit: "years" },
  { code: "P.C. 1102", name: "Cannibalism", maxTime: "HUT", maxFine: "N/A", timeUnit: "years" },
  { code: "P.C. 1103", name: "Mayhem", maxTime: 3, maxFine: 300, timeUnit: "years" },
  { code: "P.C. 1104", name: "Insurrection", maxTime: 7, maxFine: 300, timeUnit: "years" },
  { code: "P.C. 1105", name: "Torture", maxTime: 3, maxFine: 0, timeUnit: "years" },
  { code: "P.C. 2101", name: "1st Degree Murder", maxTime: "HUT", maxFine: 0, timeUnit: "years" },
  { code: "P.C. 2102", name: "Attempted 1st Degree Murder", maxTime: 1, maxFine: 200, timeUnit: "years" },
  { code: "P.C. 2103", name: "Vandalism of a Native Site", maxTime: 120, maxFine: 250, timeUnit: "days" },
  { code: "P.C. 2104", name: "Unlawful Escape", maxTime: 1, maxFine: 200, timeUnit: "years" },
  { code: "P.C. 2105", name: "Corruption", maxTime: "HUT", maxFine: 0, timeUnit: "years" },
  { code: "P.C. 2106", name: "Bank Robbery", maxTime: 300, maxFine: 125, timeUnit: "days" },
  { code: "P.C. 2107", name: "Poss. of Explosive Weapons", maxTime: 120, maxFine: 80, timeUnit: "days" },
  { code: "P.C. 2201", name: "2nd Degree Murder", maxTime: 5, maxFine: 0, timeUnit: "years" },
  { code: "P.C. 2202", name: "Manslaughter", maxTime: 1, maxFine: 100, timeUnit: "years" },
  { code: "P.C. 2203", name: "Failure to Appear", maxTime: "HUT", maxFine: 0, timeUnit: "years" },
  { code: "P.C. 2204", name: "Unsanctioned Dueling", maxTime: 1, maxFine: 150, timeUnit: "years" },
  { code: "P.C. 2205", name: "Aggravated Battery", maxTime: 180, maxFine: 80, timeUnit: "days" },
  { code: "P.C. 2206", name: "Kidnapping or False Imprisonment", maxTime: 120, maxFine: 100, timeUnit: "days" },
  { code: "P.C. 2207", name: "Extortion", maxTime: 60, maxFine: 80, timeUnit: "days" },
  { code: "P.C. 2301", name: "Arson", maxTime: 300, maxFine: 150, timeUnit: "days" },
  { code: "P.C. 2302", name: "Grand Theft", maxTime: 60, maxFine: 200, timeUnit: "days" },
  { code: "P.C. 2303", name: "Fraud", maxTime: 60, maxFine: 60, timeUnit: "days" },
  { code: "P.C. 2304", name: "Obstruction of Justice", maxTime: 60, maxFine: 50, timeUnit: "days" },
  { code: "P.C. 2305", name: "Business Robbery", maxTime: 100, maxFine: 70, timeUnit: "days" },
  { code: "P.C. 2306", name: "Perjury", maxTime: 1, maxFine: 0, timeUnit: "years" },
  { code: "P.C. 2307", name: "Negligence of Duty", maxTime: 1, maxFine: 0, timeUnit: "years" },
  { code: "P.C. 2308", name: "Manufacturing Illegal Goods and Weapons", maxTime: 1, maxFine: 250, timeUnit: "years" },
  { code: "P.C. 2309", name: "Smuggling or Distribution of Illegal Items", maxTime: 60, maxFine: 100, timeUnit: "days" },
  { code: "P.C. 2310", name: "Handling Stolen Goods", maxTime: 60, maxFine: 70, timeUnit: "days" },
  { code: "P.C. 2311", name: "Illegal Manufacturing of Marijuana", maxTime: 120, maxFine: 150, timeUnit: "days" },
  { code: "P.C. 2312", name: "Robbery", maxTime: 60, maxFine: 50, timeUnit: "days" },
  { code: "P.C. 3101", name: "Battery", maxTime: 30, maxFine: 20, timeUnit: "days" },
  { code: "P.C. 3102", name: "Criminal Threats", maxTime: 20, maxFine: 10, timeUnit: "days" },
  { code: "P.C. 3103", name: "False Impersonation", maxTime: 60, maxFine: 50, timeUnit: "days" },
  { code: "P.C. 3104", name: "False Report of a Crime", maxTime: 120, maxFine: 80, timeUnit: "days" },
  { code: "P.C. 3105", name: "Evading a Law Enforcement Officer", maxTime: 30, maxFine: 40, timeUnit: "days" },
  { code: "P.C. 3106", name: "Forgery", maxTime: 60, maxFine: 100, timeUnit: "days" },
  { code: "P.C. 3107", name: "Predatory Lending", maxTime: 60, maxFine: 150, timeUnit: "days" },
  { code: "P.C. 3108", name: "Bribery", maxTime: 60, maxFine: 60, timeUnit: "days" },
  { code: "P.C. 3109", name: "Blackmail", maxTime: 120, maxFine: 80, timeUnit: "days" },
  { code: "P.C. 3110", name: "Resisting Arrest", maxTime: 40, maxFine: 40, timeUnit: "days" },
  { code: "P.C. 3111", name: "Contempt of Court", maxTime: "HUT", maxFine: 0, timeUnit: "days" },
  { code: "P.C. 3201", name: "Poss. of Illegal Contraband/Weapons", maxTime: 30, maxFine: 30, timeUnit: "days" },
  { code: "P.C. 3202", name: "Destruction of Stabled Property", maxTime: 30, maxFine: 30, timeUnit: "days" },
  { code: "P.C. 3203", name: "Destruction of Livestock", maxTime: 120, maxFine: 100, timeUnit: "days" },
  { code: "P.C. 3204", name: "Graveyard Vandalism, Disinterment, or Desecration of a Body", maxTime: 30, maxFine: 40, timeUnit: "days" },
  { code: "P.C. 3205", name: "Failure to Obey a Lawful Order", maxTime: 30, maxFine: 0, timeUnit: "days" },
  { code: "P.C. 3206", name: "Vigilantism", maxTime: 60, maxFine: 0, timeUnit: "days" },
  { code: "P.C. 3207", name: "Petty Theft", maxTime: 30, maxFine: 20, timeUnit: "days" },
  { code: "P.C. 3208", name: "Horse Theft", maxTime: 50, maxFine: 25, timeUnit: "days" },
  { code: "P.C. 3301", name: "Failure to Pay a Fine", maxTime: 0, maxFine: 0, timeUnit: "days" },
  { code: "P.C. 3302", name: "Failure to Identify", maxTime: 0, maxFine: 20, timeUnit: "days" },
  { code: "P.C. 3303", name: "Disturbing the Peace", maxTime: 30, maxFine: 10, timeUnit: "days" },
  { code: "P.C. 3304", name: "Vandalism", maxTime: 30, maxFine: 30, timeUnit: "days" },
  { code: "P.C. 3305", name: "Poaching", maxTime: 30, maxFine: 20, timeUnit: "days" },
  { code: "P.C. 3306", name: "Trespassing", maxTime: 20, maxFine: 20, timeUnit: "days" },
  { code: "P.C. 4101", name: "Excessive Speeds", maxTime: 0, maxFine: 10, timeUnit: "days" },
  { code: "P.C. 4102", name: "Brandishing a Weapon", maxTime: 0, maxFine: 10, timeUnit: "days" },
  { code: "P.C. 4103", name: "Covering the Face", maxTime: 0, maxFine: 10, timeUnit: "days" }
];

const penalCodeModifiers = [
  { code: "P.C. 5101", name: "Aiding and Abetting", timeModifier: 0.5, fineModifier: 0 },
  { code: "P.C. 5102", name: "Public Servants Enhancement", additionalTime: 60, timeUnit: "days" },
  { code: "P.C. 5103", name: "Threat to Society", additionalTime: 3, timeUnit: "years" },
  { code: "P.C. 5104", name: "Habitual Offender", additionalTime: 100, timeUnit: "days" },
  { code: "P.C. 5105", name: "Public Nuisance Offender", additionalTime: 60, timeUnit: "days" }
];  

let selectedCharges = [];

function searchCharges() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const results = penalCode.filter(charge => 
    charge.code.toLowerCase().includes(searchTerm) || 
    charge.name.toLowerCase().includes(searchTerm)
  );
  displaySearchResults(results);
}

function displaySearchResults(results) {
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = '';
  results.forEach(charge => {
    const chargeDiv = document.createElement('div');
    chargeDiv.innerHTML = `${charge.code} - ${charge.name} (Max: ${charge.maxTime} ${charge.timeUnit}, $${charge.maxFine})`;
    chargeDiv.onclick = () => addCharge(charge);
    resultsDiv.appendChild(chargeDiv);
  });
}

function addCharge(charge) {
  selectedCharges.push(charge);
  updateSelectedCharges();
  calculateTotal();
}

function updateSelectedCharges() {
  const selectedDiv = document.getElementById('selectedCharges');
  selectedDiv.innerHTML = '';
  selectedCharges.forEach(charge => {
    const chargeDiv = document.createElement('div');
    chargeDiv.innerHTML = `${charge.code} - ${charge.name} (${charge.maxTime} ${charge.timeUnit}, $${charge.maxFine})`;
    selectedDiv.appendChild(chargeDiv);
  });
}

function calculateTotal() {
  let totalDays = 0;
  let totalYears = 0;
  let totalFine = 0;

  selectedCharges.forEach(charge => {
    if (charge.timeUnit === 'days') {
      totalDays += charge.maxTime;
    } else if (charge.timeUnit === 'years') {
      totalYears += charge.maxTime;
    }
    totalFine += charge.maxFine;
  });

  // Convert days to years if necessary
  if (totalDays >= 401) {
    totalYears += Math.floor((totalDays - 301) / 100);
    totalDays = totalDays % 100;
  }

  // Display results
  const sentenceDiv = document.getElementById('totalSentence');
  sentenceDiv.innerHTML = `Total Time: ${totalYears > 0 ? totalYears + ' Years' : ''} ${totalDays > 0 ? totalDays + ' Days' : ''}`.trim();
  
  const fineDiv = document.getElementById('totalFine');
  fineDiv.innerHTML = `Total Fine: $${totalFine}`;
}

function clearSelection() {
  selectedCharges = [];
  updateSelectedCharges();
  calculateTotal();
}

// Event listeners
document.getElementById('search').addEventListener('input', searchCharges);
document.getElementById('clearButton').addEventListener('click', clearSelection);
</script>

<style>
#calculator {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

#search {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

#searchResults div, #selectedCharges div {
  padding: 5px;
  cursor: pointer;
}

#searchResults div:hover {
  background-color: #f0f0f0;
}

#totalSentence, #totalFine {
  font-weight: bold;
  margin-top: 10px;
}

#clearButton {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>

