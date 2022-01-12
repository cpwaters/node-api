const express = require('express');
const router = express.Router();
const routeFn = require('../../connection');


// get all users
router.get('/', (req, res) => {
    routeFn.client.promise().query("SELECT id, name, email FROM nodeapi.user").then(([rows]) => {
        res.send(rows);
    }).catch();
});
    
// get one user
router.get('/id/:id', (req, res) => {
    const id = Number(req.params.id);
    routeFn.client.promise().query('SELECT * FROM nodeapi.user WHERE id = ?',[id]).then(([rows]) => {
        res.send(rows);
    }).catch(res.err);

});

// create one user
router.post('/action', (req, res) => {
    const {name, email, password} = req.body;
    console.error(req.body);
    const BOND_ID = Math.floor(100000 + Math.random() * 900000)
    const newUser = {name, email, password, BOND_ID}; 
    routeFn.client.promise().query('INSERT INTO nodeapi.user SET ?', newUser).then(([rows]) => {
        res.render('api/index', { message : `${ req.body.name } created` });
    }).catch(res.err);
});

// update one user
router.patch('/update/:id', (req, res) => {
    const id = Number(req.params.id);
    const {name, email, password} = req.body;
    const updateUser = {name, email, password, BOND_ID}; 
    routeFn.client.promise().query('UPDATE nodeapi.user SET ? WHERE id = ?', [updateUser], [id]).then(([rows]) => {
        res.send(rows);
    }).catch(res.err);
});

// delete one user
router.delete('/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    routeFn.client.promise().query('DELETE * FROM nodeapi.user WHERE id = ?',[id]).then(([rows]) => {
        res.send(rows);
    }).catch(res.err);
});

module.exports = router