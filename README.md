# DT210G, Fördjupad frontend-utveckling
## Moment 2, API

Detta repo innehåller koden för en webbtjänst som sköter en "att göra-lista".

### Länk till API
https://fordjupad-frontend-moment-2-backend.onrender.com

#### Todo's
| Metod | Ändpunkt | Beskrivning |
|-------|----------|-------------|
| GET | /todos | Hämta alla todos/"att göra" från databas |
| POST | /todos | Lägga till todo/"att göra" med titel, beskrivning och status |
| PUT | /todos/id | Uppdatera todo/"att göra" med titel, beskrivning och status |
| PUT | /todos/id | Radera todo/"att göra" |

Todo/"att göra" skickas med följande struktur:
```
{
  "title": "Exempel titel",
  "description": "Examepel beskrivning",
  "status": "Exempel status"
}
```
