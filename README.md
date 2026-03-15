# Länderreise

Kleines Lernspiel für den Browser zum Üben von:

- deutschen Bundesländern mit ihren Hauptstädten
- Deutschlands neun europäischen Nachbarländern mit ihren Hauptstädten
- sieben Kontinenten und fünf Ozeanen mit interaktiver Weltkarte

## Starten

Die App braucht keine Installation und keinen Build-Schritt.

1. `index.html` im Browser öffnen
2. Oder im Ordner einen kleinen lokalen Server starten:

```bash
python3 -m http.server 8000
```

Dann im Browser `http://localhost:8000` aufrufen.

## Spielideen

- `Lernkarten`: erst laut antworten, dann umdrehen
- `Quizduell`: richtige Antwort aus vier Möglichkeiten wählen
- `Schreibprofi`: Antwort frei eintippen
- `Memory`: Land und Hauptstadt als Paar finden
- `Weltkarte`: Kontinente und Ozeane direkt auf der Karte anklicken

Der Fortschritt wird im Browser lokal gespeichert.

## Auf dem iPad nutzen

1. Die veröffentlichte GitHub-Pages-Adresse in Safari öffnen
2. Auf `Teilen` tippen
3. `Zum Home-Bildschirm` auswählen
4. Danach startet Länderreise wie eine kleine App im Vollbild

Durch `manifest`, App-Icons und den Service Worker fühlt sich die Seite auf dem iPad app-artiger an und bleibt nach dem ersten Laden auch robuster verfügbar.

## Datenstand

Geprüft am `15.03.2026`.

- Bundesländer und Hauptstädte anhand der bpb-Übersicht zu Föderalismus und Bundesländern
- Deutschlands neun Nachbarstaaten anhand der Länderinformationen des Auswärtigen Amts
- Kontinente im in Grundschulen üblichen 7-Kontinente-Modell anhand von Klett-Lernmaterialien
- Ozeane anhand von Klett- und Diercke-Materialien
