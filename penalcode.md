---
title: "Penal Code"
nav_order: 3
---
<style>
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 16px;
    }

    .card {
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: calc(33% - 16px);
        padding: 16px;
        box-sizing: border-box;
        transition: transform 0.2s;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card-title {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 8px;
    }

    .capital-felony {
        color: #d32f2f;
    }

    .state-felony {
        color: #f57c00;
    }

    .misdemeanor {
        color: #fbc02d;
    }

    .non-criminal-infraction {
        color: #388e3c;
    }

    .modifier {
        color: #1976d2;
    }

    .card-content {
        font-size: 0.95em;
        line-height: 1.5;
    }
</style>

<h2>Penal Code Categories</h2>
<div class="card-container">

    <!-- Capital Felony Card -->
    <div class="card">
        <div class="card-title capital-felony">Capital Felony: Capital Murder</div>
        <div class="card-content">
            <strong>Max Time:</strong> HUT<br>
            <strong>Max Fine:</strong> None<br>
            <strong>Definition:</strong> Any person who uses any heinous, atrocious, or cruel act manifesting exceptional depravity in the commission of murder in the first or second degree.
        </div>
    </div>

    <div class="card">
        <div class="card-title capital-felony">Capital Felony: Cannibalism</div>
        <div class="card-content">
            <strong>Max Time:</strong> HUT<br>
            <strong>Max Fine:</strong> None<br>
            <strong>Definition:</strong> Any person who knowingly and willingly consumes human flesh, or who coerces another person to eat human flesh through deception, threats, or force.
        </div>
    </div>

    <!-- State Felony Card -->
    <div class="card">
        <div class="card-title state-felony">State Felony: 1st Degree Murder</div>
        <div class="card-content">
            <strong>Max Time:</strong> HUT<br>
            <strong>Max Fine:</strong> None<br>
            <strong>Definition:</strong> No person shall act in the unlawful killing of human beings with a premeditated design to effect the death of the person killed and shall be held equally liable if death occurs from any premeditated act.
        </div>
    </div>

    <div class="card">
        <div class="card-title state-felony">State Felony: Attempted 1st Degree Murder</div>
        <div class="card-content">
            <strong>Max Time:</strong> 1 Year<br>
            <strong>Max Fine:</strong> $200<br>
            <strong>Definition:</strong> No person shall attempt the act of unlawful killing of human beings with a premeditated design to effect the death of the person being attempted upon.
        </div>
    </div>

    <!-- Misdemeanor Card -->
    <div class="card">
        <div class="card-title misdemeanor">Misdemeanor: Battery</div>
        <div class="card-content">
            <strong>Max Time:</strong> 30 Days<br>
            <strong>Max Fine:</strong> $20<br>
            <strong>Definition:</strong> Any person who partakes in the unlawful application of force directly or indirectly upon another person, causing bodily injury or offensive contact.
        </div>
    </div>

    <div class="card">
        <div class="card-title misdemeanor">Misdemeanor: Criminal Threats</div>
        <div class="card-content">
            <strong>Max Time:</strong> 20 Days<br>
            <strong>Max Fine:</strong> $10<br>
            <strong>Definition:</strong> A person who without lawful excuse makes a threat to another, intending that the other would fear it would be carried out.
        </div>
    </div>

    <!-- Non-Criminal Infraction Card -->
    <div class="card">
        <div class="card-title non-criminal-infraction">Non-Criminal Infraction: Excessive Speeds</div>
        <div class="card-content">
            <strong>Max Time:</strong> None<br>
            <strong>Max Fine:</strong> $10<br>
            <strong>Definition:</strong> No person shall travel while on horseback or operating a wagon at speeds greater than a trot while in a city, town, or settlement.
        </div>
    </div>

    <!-- Modifier Card -->
    <div class="card">
        <div class="card-title modifier">Modifier: Aiding and Abetting</div>
        <div class="card-content">
            <strong>Max Time:</strong> 50% of time of primary offense<br>
            <strong>Max Fine:</strong> Varies based on primary offense<br>
            <strong>Definition:</strong> No person shall command, aid, abet, or advise another in the commission or conspiracy to commit a crime.
        </div>
    </div>

</div>

