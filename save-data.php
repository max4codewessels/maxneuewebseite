<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $birthdate = $_POST["birthdate"];

    // Pfad zur Textdatei, in der die Daten gespeichert werden sollen
    $file = "gespeicherte_daten.txt";

    // Daten in die Textdatei schreiben (neue Zeile für jede Eingabe)
    $dataToWrite = "Vorname: $firstName, Nachname: $lastName, Geburtsdatum: $birthdate\n";

    if (file_put_contents($file, $dataToWrite, FILE_APPEND) !== false) {
        echo "Daten wurden erfolgreich gespeichert.";
    } else {
        echo "Fehler beim Speichern der Daten.";
    }
} else {
    echo "Ungültige Anfrage";
}
?>
