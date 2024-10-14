---
title: Time & Fine Calculator
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
  <div class="dropdown">
    <input type="text" id="search" placeholder="Search for charges...">
    <div id="dropdown-content"></div>
  </div>
  <div id="selectedCharges"></div>
  <div id="modifiers">
  <h3>Modifiers:</h3>
</div>
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

function populateDropdown() {
  const dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.innerHTML = '';
  penalCode.forEach(charge => {
    const option = document.createElement('div');
    option.className = 'dropdown-item';
    option.innerHTML = `${charge.code} - ${charge.name}`;
    option.onclick = () => addCharge(charge);
    dropdownContent.appendChild(option);
  });
}

function filterCharges() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.innerHTML = '';
  penalCode.filter(charge => 
    charge.code.toLowerCase().includes(searchTerm) || 
    charge.name.toLowerCase().includes(searchTerm)
  ).forEach(charge => {
    const option = document.createElement('div');
    option.className = 'dropdown-item';
    option.innerHTML = `${charge.code} - ${charge.name}`;
    option.onclick = () => addCharge(charge);
    dropdownContent.appendChild(option);
  });
}

function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function addCharge(charge) {
  selectedCharges.push(charge);
  updateSelectedCharges();
  calculateTotal();
  document.getElementById('search').value = '';
  filterCharges();
}

function updateSelectedCharges() {
  const selectedDiv = document.getElementById('selectedCharges');
  selectedDiv.innerHTML = '<h3>Selected Charges:</h3>';
  selectedCharges.forEach(charge => {
    const chargeDiv = document.createElement('div');
    chargeDiv.innerHTML = `${charge.code} - ${charge.name} (${charge.maxTime} ${charge.timeUnit}, $${charge.maxFine})`;
    selectedDiv.appendChild(chargeDiv);
  });
}

function displayModifiers() {
  const modifiersDiv = document.getElementById('modifiers');
  penalCodeModifiers.forEach(modifier => {
    const modifierDiv = document.createElement('div');
    modifierDiv.innerHTML = `<input type="checkbox" id="${modifier.code}" name="${modifier.code}">
                             <label for="${modifier.code}">${modifier.name}</label>`;
    modifierDiv.querySelector('input').addEventListener('change', calculateTotal);
    modifiersDiv.appendChild(modifierDiv);
  });
}

function calculateTotal() {
  let totalDays = 0;
  let totalYears = 0;
  let totalFine = 0;

  selectedCharges.forEach(charge => {
    if (charge.timeUnit === 'days') {
      totalDays += parseInt(charge.maxTime) || 0;
    } else if (charge.timeUnit === 'years') {
      if (charge.maxTime !== 'HUT') {
        totalYears += parseInt(charge.maxTime) || 0;
      }
    }
    totalFine += parseInt(charge.maxFine) || 0;
  });

  // Apply modifiers
  penalCodeModifiers.forEach(modifier => {
    const isChecked = document.getElementById(modifier.code).checked;
    if (isChecked) {
      if (modifier.timeModifier) {
        totalDays *= (1 + modifier.timeModifier);
        totalYears *= (1 + modifier.timeModifier);
      }
      if (modifier.additionalTime) {
        if (modifier.timeUnit === 'days') {
          totalDays += modifier.additionalTime;
        } else if (modifier.timeUnit === 'years') {
          totalYears += modifier.additionalTime;
        }
      }
      if (modifier.fineModifier) {
        totalFine *= (1 + modifier.fineModifier);
      }
    }
  });

  // Convert days to years if necessary
  if (totalDays >= 401) {
    totalYears += Math.floor((totalDays - 301) / 100);
    totalDays = totalDays % 100;
  }

  // Display results
  const sentenceDiv = document.getElementById('totalSentence');
  sentenceDiv.innerHTML = `Total Time: ${totalYears > 0 ? Math.round(totalYears) + ' Years' : ''} ${totalDays > 0 ? Math.round(totalDays) + ' Days' : ''}`.trim();
  if (selectedCharges.some(charge => charge.maxTime === 'HUT')) {
    sentenceDiv.innerHTML += ' (HUT)';
  }
  
  const fineDiv = document.getElementById('totalFine');
  fineDiv.innerHTML = `Total Fine: $${Math.round(totalFine)}`;
}

function clearSelection() {
  selectedCharges = [];
  updateSelectedCharges();
  calculateTotal();
  document.getElementById('search').value = '';
  filterCharges();
}

// Event listeners
document.getElementById('search').addEventListener('input', filterCharges);
document.getElementById('search').addEventListener('focus', toggleDropdown);
document.getElementById('search').addEventListener('blur', () => setTimeout(toggleDropdown, 200));
document.getElementById('clearButton').addEventListener('click', clearSelection);

// Initialize the dropdown
populateDropdown();

function applyStyles() {
  const calculator = document.getElementById('calculator');
  calculator.style.maxWidth = '600px';
  calculator.style.margin = '0 auto';
  calculator.style.padding = '20px';
  calculator.style.border = '1px solid #ddd';
  calculator.style.borderRadius = '5px';
  calculator.style.backgroundColor = 'white';

  const search = document.getElementById('search');
  search.style.width = '100%';
  search.style.padding = '10px';
  search.style.marginBottom = '10px';
  search.style.fontSize = '16px';

  const clearButton = document.getElementById('clearButton');
  clearButton.style.marginTop = '20px';
  clearButton.style.padding = '10px';
  clearButton.style.backgroundColor = '#f44336';
  clearButton.style.color = 'white';
  clearButton.style.border = 'none';
  clearButton.style.cursor = 'pointer';
  clearButton.style.fontSize = '16px';
}

// Call this function after the page loads
window.onload = function() {
  populateDropdown();
  displayModifiers();
  applyStyles();
};
</script>

<style>
#calculator {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

#search {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}

#dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
  top: 100%;
  left: 0;
}

.dropdown-item {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

#selectedCharges, #totalSentence, #totalFine {
  margin-top: 20px;
  font-size: 16px;
}

#clearButton {
  margin-top: 20px;
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

#clearButton:hover {
  background-color: #d32f2f;
}
</style>
