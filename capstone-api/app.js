const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ type: 'application/json' }));

const dbRouter = express.Router();
dbRouter.get('/', function (req, res) { });
dbRouter.get('/:id', ticketLookup, function (req, res) {
    res.json(req.ticket);
});
app.use('/ticket', dbRouter);
dbRouter.post('/', function (req, res) {
    var sql = 'INSERT INTO ticket (name,email,requester,description) VALUES ($1,$2,$3,$4) RETURNING id';
    // Retrieve the data to insert from the POST body
    var data = [
        req.body.name,
        req.body.email,
        req.body.requester,
        req.body.description
    ];
    postgres.client.query(sql, data, function (err, result) {
        if (err) {
            // We shield our clients from internal errors, but log them
            console.error(err);
            res.statusCode = 500;
            return res.json({
                errors: ['Failed to create ticket']
            });
        };
        var newPhotoId = result.rows[0].id;
        var sql = 'SELECT * FROM ticket WHERE id = $1';
        postgres.client.query(sql, [ticketId], function (err, result) {
            if (err) {
                // We shield our clients from internal errors, but log them
                console.error(err);
                res.statusCode = 500;
                return res.json({
                    errors: ['Could not retrieve ticket after create']
                });
            }
            // The request created a new resource object
            res.statusCode = 201;
            // The result of CREATE should be the same as GET
            res.json(result.rows[0]);
        });
    });
});
function ticketLookup(req, res, next) {
    const ticketId = req.params.id;
    const sql = 'SELECT * FROM ticket WHERE id = ?';
    postgres.client.query(sql, [ticketId], function (err, results) {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            return res.json({ errors: ['could not retrieve ticket'] });
        };
        if (results.rows.length === 0) {
            res.statusCode = 404;
            return res.json({ errors: ['no tickets exist'] });
        };
        req.ticket = results.row[0];
        next();
    });
};

module.exports = app;
