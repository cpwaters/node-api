const express = require('express');
const router = express.Router();
const routeFn = require('../../connection');

// get all stock items
router.get('/', (req, res) => {
    routeFn.client.promise().query("SELECT * FROM nodeapi.stock").then(([rows]) => {
        res.send(rows);
    }).catch();
});
    
// get one stock by id
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    routeFn.client.promise().query('SELECT * FROM nodeapi.stock WHERE id = ?',[id]).then(([rows]) => {
        res.send(rows);
    }).catch(res.err);
});

router.get('/create/create', (req, res) => {
    res.sendFile('/create.html', {root: __dirname });
})

// create one stock
router.post('/create/action', (req, res) => {
    const {name, email, password} = req.body;
    console.error(req.body);
    const BOND_ID = Math.floor(100000 + Math.random() * 900000)
    const newUser = {name, email, password, BOND_ID}; 
    routeFn.client.promise().query('INSERT INTO nodeapi.stock SET ?', newUser).then(([rows]) => {
        res.send(`${rows} created`);
    }).catch(res.err);
});

// update one stock
router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const {name, email, password} = req.body;
    const updateUser = {name, email, password, BOND_ID}; 
    routeFn.client.promise().query('UPDATE nodeapi.stock SET ? WHERE id = ?', [updateUser], [id]).then(([rows]) => {
        res.send(rows);
    }).catch(res.err);
});

// delete one stock
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    routeFn.client.promise().query('DELETE * FROM nodeapi.stock WHERE id = ?',[id]).then(([rows]) => {
        res.send(rows);
    }).catch(res.err);
});

module.exports = router