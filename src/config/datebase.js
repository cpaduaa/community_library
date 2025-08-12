import sqlite from 'sqlite3';

const db = new sqlite3.Database('library_db.sqlite', () => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to SQLite database successfully.');
    }
})

export default db;