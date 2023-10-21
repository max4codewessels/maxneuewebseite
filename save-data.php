<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $birthdate = $_POST["birthdate"];

    // Hier könntest du die Daten in einer Datei speichern oder in eine Datenbank eintragen.
    // Zum Zweck dieses Beispiels geben wir die Daten auf der Seite aus.

    echo "Daten gespeichert: Vorname - $firstName, Nachname - $lastName, Geburtsdatum - $birthdate";
} else {
    echo "Ungültige Anfrage";
}
?>
