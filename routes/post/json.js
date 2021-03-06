const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


module.exports = router.post('/', bodyParser.json(), (req, res) => {
    try {
        const json = req.body
        if (Object.keys(json).length >= 1) {
            res.send(json)
        } else {
            res.send("No JSON in payload")
        }
    } catch {
        res.sendStatus(500)
    }
})