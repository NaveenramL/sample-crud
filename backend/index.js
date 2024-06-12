const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test_crud',
    port:3307
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.get('/', (req, res) => {
    res.send('API is working');
});

// Routes for models
app.post('/model', (req, res) => {
    const { model_name } = req.body;
    const sql = 'INSERT INTO models (model_name) VALUES (?)';
    db.query(sql, [model_name], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/models/all', (req, res) => {
    const sql = 'SELECT model_id, model_name FROM models';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Routes for entities
app.post('/entities', (req, res) => {
    console.log(req.body);
    const { entity_name, model_id } = req.body;
    const sql = 'INSERT INTO entities (entity_name, model_id) VALUES (?, ?)';
    db.query(sql, [entity_name, model_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// app.get('/entities/:model_id', (req, res) => {
//     const sql = 'SELECT * FROM entities WHERE model_id = ?';
//     db.query(sql, [req.params.model_id], (err, results) => {
//         if (err) throw err;
//         res.send(results);
//     });
// });

// // Routes for entity data
// app.post('/entity_data', (req, res) => {
//     const { entity_id, data } = req.body;
//     const sql = 'INSERT INTO entity_data (entity_id, data) VALUES (?, ?)';
//     db.query(sql, [entity_id, JSON.stringify(data)], (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });

// app.get('/entity_data/:entity_id', (req, res) => {
//     const sql = 'SELECT data FROM entity_data WHERE entity_id = ?';
//     db.query(sql, [req.params.entity_id], (err, results) => {
//         if (err) throw err;
//         res.send(results);
//     });
// });

const PORT = 3200;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
