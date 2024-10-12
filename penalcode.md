---
title: "Penal Code"
nav_order: 3
---
<style>
    .tab {
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        background-color: #f1f1f1;
    }

    .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
    }

    .tab button:hover {
        background-color: #ddd;
    }

    .tab button.active {
        background-color: #cceeff;
    }

    .tabcontent {
        display: none;
        padding: 16px;
        border-top: none;
    }

    .capital-felony {
        color: #d32f2f;
        font-weight: bold;
    }
    .state-felony {
        color: #f57c00;
        font-weight: bold;
    }
    .misdemeanor {
        color: #fbc02d;
        font-weight: bold;
    }
    .non-criminal-infraction {
        color: #388e3c;
        font-weight: bold;
    }
    .modifier {
        color: #1976d2;
        font-weight: bold;
    }
</style>

<div class="tab">
    <button class="tablinks" onclick="openTab(event, 'CapitalFelonies')">Capital Felonies</button>
    <button class="tablinks" onclick="openTab(event, 'StateFelonies')">State Felonies</button>
    <button class="tablinks" onclick="openTab(event, 'Misdemeanors')">Misdemeanors</button>
    <button class="tablinks" onclick="openTab(event, 'Infractions')">Non-Criminal Infractions</button>
    <button class="tablinks" onclick="openTab(event, 'Modifiers')">Modifiers</button>
</div>

<div id="CapitalFelonies" class="tabcontent">
    <h3>Capital Felonies</h3>
    <p><span class="capital-felony">Capital Felony: Capital Murder</span><br>
    Max Time: HUT<br>
    Max Fine: None<br>
    Definition: Any person who uses any heinous, atrocious, or cruel act manifesting exceptional depravity in the commission of murder in the first or second degree...</p>

    <p><span class="capital-felony">Capital Felony: Cannibalism</span><br>
    Max Time: HUT<br>
    Max Fine: None<br>
    Definition: Any person who knowingly and willingly consumes human flesh...</p>

    <!-- Add more capital felony offenses here -->
</div>

<div id="StateFelonies" class="tabcontent">
    <h3>State Felonies</h3>
    <p><span class="state-felony">State Felony: 1st Degree Murder</span><br>
    Max Time: HUT<br>
    Max Fine: None<br>
    Definition: No person shall act in the unlawful killing of human beings with a premeditated design...</p>

    <p><span class="state-felony">State Felony: Attempted 1st Degree Murder</span><br>
    Max Time: 1 Year<br>
    Max Fine: $200<br>
    Definition: No person shall attempt the act of unlawful killing of human beings with a premeditated design...</p>

    <!-- Add more state felony offenses here -->
</div>

<div id="Misdemeanors" class="tabcontent">
    <h3>Misdemeanors</h3>
    <p><span class="misdemeanor">Misdemeanor: Battery</span><br>
    Max Time: 30 Days<br>
    Max Fine: $20<br>
    Definition: Any person who partakes in the unlawful application of force directly or indirectly upon another person...</p>

    <p><span class="misdemeanor">Misdemeanor: Criminal Threats</span><br>
    Max Time: 20 Days<br>
    Max Fine: $10<br>
    Definition: A person who without lawful excuse makes to another a threat...</p>

    <!-- Add more misdemeanor offenses here -->
</div>

<div id="Infractions" class="tabcontent">
    <h3>Non-Criminal Infractions</h3>
    <p><span class="non-criminal-infraction">Non-Criminal Infraction: Excessive Speeds</span><br>
    Max Time: None<br>
    Max Fine: $10<br>
    Definition: No person shall travel while on horseback or operating a wagon at speeds greater than a trot...</p>

    <p><span class="non-criminal-infraction">Non-Criminal Infraction: Covering the Face</span><br>
    Max Time: None<br>
    Max Fine: $10<br>
    Definition: No person shall wear any kind of mask, bandana, or facial covering within a town or city...</p>

    <!-- Add more infractions here -->
</div>

<div id="Modifiers" class="tabcontent">
    <h3>Modifiers</h3>
    <p><span class="modifier">Modifier: Aiding and Abetting</span><br>
    Max Time: 50% of time of primary offense<br>
    Max Fine: Varies based on primary offense<br>
    Definition: No person shall command, aid, abet, or advise another in the commission or conspiracy to commit a crime...</p>

    <p><span class="modifier">Modifier: Habitual Offender</span><br>
    Max Time: Enhanced penalty based on history<br>
    Max Fine: Enhanced penalty based on history<br>
    Definition: A person who repeatedly commits the same or similar offenses may receive increased penalties...</p>

    <!-- Add more modifiers here -->
</div>

<script>
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;

        // Hide all tab contents
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove the active class from all tab buttons
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab and add an active class to the button
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // By default, open the first tab
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".tablinks").click();
    });
</script>

