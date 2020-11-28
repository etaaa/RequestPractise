const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    try {
        const queryParams = req.query
        res.send(queryParams)
    }
    catch {
        res.send(404)
    }
})


module.exports = router