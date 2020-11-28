const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


router.post('/', bodyParser.urlencoded({ extended: true }), (req, res) => {
    try {
        const formData = req.body
        if (Object.keys(formData).length >= 1) {
            res.send(formData)
        } 
        else {
            res.send("No form data in payload")
        }
    }
    catch {
        res.send(400)
    }
})


module.exports = router