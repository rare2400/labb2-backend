# Todo List API

Ett REST API byggt med Hapi.js och SQLite för att hantera todo-objekt och skapa en "att göra"-lista. 
Webbtjänsten stödjer CRUD-funktionalitet (Create, Read, Update, Delete) med hjälp av metod och endpoints. 

**Länk till publicerat API:** [https://labb2-backend.onrender.com/api/todos](https://labb2-backend.onrender.com/api/todos)

## Verktyg
- Node.js
- Hapi.js
- SQLite (better-sqlite3)
- TypeScript

## Installation
1. **Klona repot:**
```bash
git clone https://github.com/rare2400/labb2-backend.git
```

2. **Installera beroenden:**
```bash
npm install
```

3. **Installera nodemon för utveckling:**
```bash
npm install nodemon --save-dev
```

4. **Skapa `.env`-fil i rotmappen och fyll i databasuppgifter:**
```env
PORT=3000
```

5. **Starta server:**
```bash
npm run start
```

6. API länk: [http://localhost:3000/api/todos](http://localhost:3000/api/todos) 

## API-endpoints

| Metod  | Endpoint          | Beskrivning          |
|--------|-------------------|----------------------|
| GET    | /api/todos        | Hämtar alla todos    |
| POST   | /api/todos        | Skapar en ny todo    |
| PUT    | /api/todos/:id    | Uppdaterar en todo   |
| DELETE | /api/todos/:id    | Tar bort en todo     |

## Todo-objekt
Exempel: GET `/api/todos/:id`    
id = 13
```json
{
  "id": 13,
  "title": "Torka av i köket",
  "description": "diskbänk, spis och matbordet",
  "status": "in_progress",
  "created_at": "2026-03-26 11:04:54"
}
```

## Statusvärden
- `not_started` – Ej påbörjad
- `in_progress` – Pågående
- `completed` – Avklarad

## Testning
API:t kan testas med program som:
- Thunder Client (vsc extension)
- Postman
- Advanced REST Client

## Användning i frontend
API:t kan kopplas till ett simpelt formulär i en frontendapplikation som visar, lägger till, uppdaterar status och tar bort uppgifter.    
Repo till frontend-applikation: 
```bash
git clone https://github.com/rare2400/labb2-todo.git
```

## Skapad av
Skapad som en del av en skoluppgift   
Mittuniversitetet, Webbutvecklingsprogrammet    
Ramona Reinholdz   
[rare2400@student.miun.se](rare2400@student.miun.se)      
2026-03-26
