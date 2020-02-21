const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req, res, next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end("Will GET all the data from Promotions");
})
.post((req, res)=>{
    res.end(`Will ADD the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res)=>{
    res.statusCode = 403;
    res.end('PUT operation NOT Permitted');
})
.delete((req, res)=>{
    res.end('Deleting all promotions..');
});


promotionRouter.route('/:promotionId')
.all((req, res, next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will GET the data for promotion: ${req.params.promotionId}`);
})
.post((req, res)=>{
    res.statusCode = 403;
    res.end('POST operation NOT Permitted');   
})
.put((req, res)=>{
    res.write(`Updating the promotion: ${req.params.promotionId}\n`);
    res.end.end(`Will ADD the promotioin: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res)=>{
    res.end(`Deleting the data for promotion: ${req.params.promotionId}`);
});

module.exports = promotionRouter;