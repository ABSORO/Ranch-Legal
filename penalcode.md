---
title: "Home"
nav_order: 3
---

<style>
    .accordion {
        background-color: #f1f1f1;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
        font-size: 16px;
    }

    .active, .accordion:hover {
        background-color: #ccc;
    }

    .panel {
        padding: 0 18px;
        display: none;
        background-color: white;
        overflow: hidden;
    }
</style>

<h2>Penal Code Categories</h2>

<button class="accordion">Capital Felonies</button>
<div class="panel">
    <p><strong>Capital Felony: Capital Murder</strong><br>
    Max Time: HUT<br>
    Max Fine: None<br>
    Definition: Any person who uses any heinous, atrocious, or cruel manner that causes the death of another individual.</p>
    
    <p><strong>Capital Felony: Cannibalism</strong><br>
    Max Time: HUT<br>
    Max Fine: None<br>
    Definition: Any person who knowingly and willingly consumes human flesh.</p>
</div>

<button class="accordion">State Felonies</button>
<div class="panel">
    <p><strong>State Felony: Mayhem</strong><br>
    Max Time: 2-3 Year(s)<br>
    Max Fine: $300<br>
    Definition: Any violent behavior or act committed within the confines of a Town, City, or Native Reservation and deprives citizens of Monroe of life on a mass scale or an act which can be reasonably expected to have caused such an outcome.<br>
    Examples: Throwing dynamite in the middle of town, Acts of intentional violence against the general citizenry of the town.</p>
    
    <p><strong>State Felony: Insurrection</strong><br>
    Max Time: 7 Years<br>
    Max Fine: $300<br>
    Definition: Any attempt at a violent uprising against the government of the State of Monroe or the United States of America.</p>
</div>

<button class="accordion">Misdemeanors</button>
<div class="panel">
    <p><strong>Misdemeanor: Evading a Law Enforcement Officer</strong><br>
    Max Time: 60 Days<br>
    Max Fine: $50<br>
    Definition: Willfully fleeing or attempting to evade a law enforcement officer.</p>
</div>

<button class="accordion">Non-Criminal Infractions</button>
<div class="panel">
    <p><strong>Non-Criminal Infraction: Excessive Speeds</strong><br>
    Max Time: None<br>
    Max Fine: $20<br>
    Definition: Riding or operating a horse or vehicle at a speed that is considered dangerous or reckless.</p>
</div>

<button class="accordion">Modifiers</button>
<div class="panel">
    <p><strong>Modifier: Aiding and Abetting</strong><br>
    Max Time: Varies based on primary offense<br>
    Max Fine: Varies based on primary offense<br>
    Definition: Assisting another person in the commission of a crime.</p>
</div>

<script>
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
</script>
