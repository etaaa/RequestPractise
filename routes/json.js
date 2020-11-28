const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


router.get('/', bodyParser.json(), (req, res) => {
    try {
        const json = req.body
        if (Object.keys(json).length >= 1) {
            res.send(json)
        }
        else {
            res.send("No JSON in payload")
        }
    }
    catch {
        res.send(404)
    }
})


module.exports = router