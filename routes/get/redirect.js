const express = require('express')
const router = express.Router()


module.exports = router.get('/:url(*)', (req, res) => {
    try {
        const url = new URL(req.params.url)
        res.redirect(url)
    }
    catch {
        res.send("Invalid URL scheme provided")
    }
})