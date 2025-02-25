const express = require('express')
const User = require("./user")
const router = express.Router()

router.post('/create',User.create);
router.get('/read',User.read)
router.put('/update',User.update)
router.delete('/delete',User.delete)

module.exports = router