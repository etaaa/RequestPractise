const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    try {
        const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        res.send(ip_address)
    }
    catch {
        res.send(404)
    }
})


module.exports = router