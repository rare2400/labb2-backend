// import better-sqlite
import Database = require("better-sqlite3");

// initiate sqlite database file
const db = new Database("todos.db");

// create todos table if it is not existing
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    status TEXT DEFAULT 'not_started',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// export the database initation
export default db;