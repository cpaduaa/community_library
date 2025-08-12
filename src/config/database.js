import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('library_db.sqlite', (err) => {
    if (err) {
        console.error('Error opening detabase ' + err.message);
    } else {
        console.log('Connected to SQLite database successfully.');
    }
});

export default db;