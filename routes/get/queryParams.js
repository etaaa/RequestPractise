const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    try {
        const queryParams = req.query
        res.send(queryParams)
    }
    catch {
        res.send(400)
    }
})


module.exports = router