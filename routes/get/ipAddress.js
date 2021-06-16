const express = require('express')
const router = express.Router()


module.exports = router.get('/', (req, res) => {
    try {
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        res.send(ipAddress)
    }
    catch {
        res.sendStatus(500)
    }
})