const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/speichern', (req, res) => {
    const { firstName, lastName, birthdate } = req.body;
    
    const data = `Vorname: ${firstName}, Nachname: ${lastName}, Geburtsdatum: ${birthdate}\n`;
    
    fs.appendFile('daten.txt', data, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Fehler beim Speichern der Daten.');
        } else {
            console.log('Daten gespeichert: ', data);
            res.status(200).send('Daten wurden erfolgreich gespeichert.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
