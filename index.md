---
title: "Home"
nav_order: 1
---

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>State of Monroe Legal System</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/custom.css?v=1.0">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            display: flex;
            flex-direction: column;
            height: 100vh;
            margin: 0;
            background-color: #f8f9fa;
        }
        .main-container {
            display: flex;
            flex: 1;
            width: 100%;
        }
        .sidebar {
            width: 300px;
            background-color: #ffffff;
            padding: 20px;
            color: #333;
            height: 100vh;
            position: sticky;
            top: 0;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            overflow-y: auto;
        }
        .sidebar h2 {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        .sidebar a {
            color: #007bff;
            text-decoration: none;
            display: block;
            padding: 8px 0;
            transition: background 0.3s, padding-left 0.3s;
        }
        .sidebar a:hover {
            background: #e9ecef;
            padding-left: 8px;
        }
        .sidebar .nav-section {
            margin-bottom: 20px;
        }
        .sidebar .nav-section-title {
            font-size: 1rem;
            font-weight: bold;
            margin-top: 15px;
        }
        .sidebar .nested {
            padding-left: 15px;
        }
        .search-container {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
        }
        .search-container input {
            padding: 10px;
            font-size: 1rem;
            width: 300px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        .content-container {
            flex: 1;
            padding: 40px;
            overflow-y: auto;
        }
        header {
            background-color: #ffffff;
            padding: 15px 20px;
            width: 100%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        header h1 {
            margin: 0;
            font-size: 1.5rem;
        }
        footer {
            text-align: center;
            padding: 15px;
            background-color: #ffffff;
            color: #333;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>

<body>
    <header>
    <h1>Ranch Roleplay: Monroe Legal Resources</h1>
    <div class="search-container">
        <input type="text" class="form-control" placeholder="Search..." />
    </div>
</header>
    <div class="main-container">
        <div class="sidebar" role="navigation"></div>
        <div class="content-container">
            <div class="content mt-4">
                <h2>Welcome to the State of Monroe Legal System Page</h2>
                <p>Welcome to the official resource hub for all things related to Ranch Roleplay's State of Monroe legal system. This site is designed for everyone involved in the roleplay community, including lawmen, judges, lawyers, and citizens.</p>
                <p>Here, you can access the official Constitution, Penal Code, legal procedures, and other important documents that govern the State of Monroe. Our goal is to provide a clear, simple, and easy-to-navigate platform to ensure that everyone in the community can find accurate legal information and reference in-character documents.</p>
                <p>Please note that only the legal documents and case laws provided on this site are considered official and canon to the server's lore. Any other documents not provided by Ranch Roleplay management should not be used or referenced in-character. This is to ensure consistency and avoid any confusion during roleplay.</p>
                <p>Select a topic from the navigation menu to begin exploring our legal resources. If you have any questions or need assistance, please reach out to the appropriate in-character authorities or join our community Discord for support.</p>
            </div>
        </div>
    </div>
    <footer></footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        fetch("components/sidebar.html")
            .then(response => response.text())
            .then(data => document.querySelector(".sidebar").innerHTML = data);

        fetch("components/footer.html")
            .then(response => response.text())
            .then(data => document.querySelector("footer").innerHTML = data);
    });
</script>
</body>

</html>
