const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter.route('/')
.all((req, res, next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end("Will GET all the data from campsites");
})
.post((req, res)=>{
    res.end(`Will ADD the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res)=>{
    res.statusCode = 403;
    res.end('PUT operation NOT Permitted');
})
.delete((req, res)=>{
    res.end('Deleting all campsites..');
});



campsiteRouter.route('/:campsiteId')
.all((req, res, next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will GET the data for campsite: ${req.params.campsiteId}`);
})
.post((req, res)=>{
    res.statusCode = 403;
    res.end('POST operation NOT Permitted');   
})
.put((req, res)=>{
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end.end(`Will ADD the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res)=>{
    res.end(`Deleting the data for campsite: ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;