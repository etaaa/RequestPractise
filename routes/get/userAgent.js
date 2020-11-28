const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    try {
        const user_agent = req.get('user-agent')
        res.send(user_agent)
    }
    catch {
        res.send(400)
    }
})


module.exports = router