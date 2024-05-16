const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Criação ou conexão com o banco de dados SQLite
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        numero INTEGER,
        produto TEXT,
        tipo TEXT,
        quantidade REAL,
        preco REAL,
        total REAL
    )`);
});

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para adicionar produto
app.post('/api/produtos', (req, res) => {
    const { numero, produto, tipo, quantidade, preco, total } = req.body;
    const stmt = db.prepare(`INSERT INTO produtos (numero, produto, tipo, quantidade, preco, total) VALUES (?, ?, ?, ?, ?, ?)`);
    stmt.run(numero, produto, tipo, quantidade, preco, total, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID });
    });
    stmt.finalize();
});

// Rota para listar produtos
app.get('/api/produtos', (req, res) => {
    db.all(`SELECT * FROM produtos`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ produtos: rows });
    });
});

// Rota para deletar produto
app.delete('/api/produtos/:id', (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM produtos WHERE id = ?`, id, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ deletedID: id });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
