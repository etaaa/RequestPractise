const express = require('express')
const router = express.Router()


module.exports = router.get('/', (req, res) => {
    try {
        const userAgent = req.get('User-Agent')
        res.send(userAgent)
    }
    catch {
        res.sendStatus(500)
    }
})