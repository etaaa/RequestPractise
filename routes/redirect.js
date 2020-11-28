const express = require('express')
const router = express.Router()
const validUrl = require('valid-url');


router.get('/:url(*)', (req, res) => {
    try {
        const url = req.params.url
        if (validUrl.isUri(url)) {
            res.redirect(url)
        }
        else {
            res.send("Invalid URL scheme provided")
        }
    }
    catch {
        res.send(404)
    }
})


module.exports = router