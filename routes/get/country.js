const express = require('express')
const router = express.Router()
const got = require('got');


router.get('/', async (req, res) => {
    try {
        const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const response = await got(`http://ip-api.com/json/${ip_address}`)
        try {
            if (JSON.parse(response.body).status === "success") {
                res.send(JSON.parse(response.body).country)
            }
            else {
                res.send("Failed to fetch country")
            }
        }
        catch {
            res.send(502)
        }
    }
    catch {
        res.send(400)
    }
})


module.exports = router