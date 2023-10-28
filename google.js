const fetch = require('node-fetch'); // Wenn Sie Node.js verwenden

const url = 'https://www.maxneuewebseite.pages.dev/google.txt'; // Ersetzen Sie 'meine-datei.txt' durch den tatsächlichen Dateinamen

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Fehler beim Herunterladen der Datei: ${response.status} - ${response.statusText}`);
    }
    return response.arrayBuffer();
  })
  .then(data => {
    // Jetzt haben Sie die Datei als ArrayBuffer und können sie speichern oder weiterverarbeiten
    // In einem Browser können Sie sie zum Beispiel in ein Blob umwandeln und herunterladen
    const blob = new Blob([data]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meine-datei.txt'; // Hier den Dateinamen festlegen
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  })
  .catch(error => {
    console.error('Fehler:', error);
  });
