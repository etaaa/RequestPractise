const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.redirect("https://github.com/etaaa/RequestPractise")
})


module.exports = router