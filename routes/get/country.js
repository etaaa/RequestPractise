const express = require('express')
const router = express.Router()
const got = require('got');


module.exports = router.get('/', async (req, res) => {
    try {
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const response = await got(`http://ip-api.com/json/${ipAddress}`)
        if (JSON.parse(response.body).status === "success") {
            res.send(JSON.parse(response.body).country)
        } else {
            res.send("Failed to fetch country")
        }
    } catch {
        res.sendStatus(500)
    }
})