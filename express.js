const express = require('express');
const { findMean, convertAndValidateNumsArray } = require('./helper')
const ExpressError = require('./expressError');


const app = express();
app.use(express.json());

app.get('/mean', (req, res, next) => {

    try {

        if (!req.query.nums) {
            throw new ExpressError('You must pass the query key of nums with comma separated list of numbers', 400)
        }
        let numAsString = req.query.nums.split(',')
        let nums = convertAndValidateNumsArray(numAsString);

        if (nums instanceof Error) {
            throw new ExpressError(nums.message);

        }
        let response = {
            operation: 'mean',
            result: findMean(nums)
        }
        return res.json(response);
    }
    catch (e) {
        next(e);
    }
})

app.get('/median', (req, res) => {
    res.send("Median");
})

app.get('/mode', (req, res) => {
    res.send("Mode");
})

app.use((res, req, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e);
})
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    })
})

app.listen(3000, () => {
    console.log("SERVER RUNNING..!!")
})

