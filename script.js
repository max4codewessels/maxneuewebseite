document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dataForm');
    const saveButton = document.getElementById('saveButton');
    const message = document.getElementById('message');

    saveButton.addEventListener('click', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const birthdate = document.getElementById('birthdate').value;

        // Erstelle ein JSON-Objekt mit den Daten
        const data = {
            firstName,
            lastName,
            birthdate
        };

        // Sende die Daten an deinen Server
        fetch('https://maxneuewebseite.pages.dev/speichern', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Fehler beim Speichern der Daten.');
            }
        })
        .then(responseText => {
            message.textContent = responseText; // Zeige die Serverantwort an
        })
        .catch(error => {
            console.error(error);
            message.textContent = 'Fehler beim Speichern der Daten.';
        });
    });
});
