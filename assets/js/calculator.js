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

let selectedCharges = [];

function updateDropdown() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.innerHTML = '';

  const filteredCharges = penalCode.filter(charge => 
    charge.code.toLowerCase().includes(searchTerm) || 
    charge.name.toLowerCase().includes(searchTerm)
  );

  filteredCharges.forEach(charge => {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.textContent = `${charge.code} - ${charge.name}`;
    item.onclick = () => addCharge(charge);
    dropdownContent.appendChild(item);
  });

  dropdownContent.style.display = filteredCharges.length > 0 ? 'block' : 'none';
}

function addCharge(charge) {
  selectedCharges.push(charge);
  updateSelectedCharges();
  calculateTotal();
}

function updateSelectedCharges() {
  const selectedChargesDiv = document.getElementById('selectedCharges');
  selectedChargesDiv.innerHTML = '<h3>Selected Charges:</h3>';
  selectedCharges.forEach((charge, index) => {
    const chargeDiv = document.createElement('div');
    chargeDiv.textContent = `${charge.code} - ${charge.name} (${charge.maxTime} ${charge.timeUnit}, $${charge.maxFine})`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeCharge(index);
    chargeDiv.appendChild(removeButton);
    selectedChargesDiv.appendChild(chargeDiv);
  });
}

function removeCharge(index) {
  selectedCharges.splice(index, 1);
  updateSelectedCharges();
  calculateTotal();
}

function calculateTotal() {
  let totalDays = 0;
  let totalYears = 0;
  let totalFine = 0;

  selectedCharges.forEach(charge => {
    if (charge.maxTime !== "HUT") {
      if (charge.timeUnit === "days") {
        totalDays += charge.maxTime;
      } else if (charge.timeUnit === "years") {
        totalYears += charge.maxTime;
      }
    }
    if (charge.maxFine !== "N/A") {
      totalFine += charge.maxFine;
    }
  });

  // Convert days to years if necessary
  if (totalDays >= 401) {
    const additionalYears = Math.floor((totalDays - 301) / 100);
    totalYears += additionalYears;
    totalDays = totalDays % 100 + 300;
  }

  let sentenceText = "";
  if (totalYears > 0) {
    sentenceText += `${totalYears} Year${totalYears > 1 ? 's' : ''}`;
    if (totalDays > 0) {
      sentenceText += ` and `;
    }
  }
  if (totalDays > 0) {
    sentenceText += `${totalDays} Day${totalDays > 1 ? 's' : ''}`;
  }

  document.getElementById('totalSentence').textContent = `Total Sentence: ${sentenceText}`;
  document.getElementById('totalFine').textContent = `Total Fine: $${totalFine}`;
}

document.getElementById('search').addEventListener('input', updateDropdown);
document.getElementById('clearButton').addEventListener('click', () => {
  selectedCharges = [];
  updateSelectedCharges();
  calculateTotal();
});

// Initial update
updateDropdown();
updateSelectedCharges();
calculateTotal();
</script>
