const express = require('express')
const user = require("./user")
const router = express.Router()

router.post('/create',user.create);
router.get('/read',user.read)
router.put('/update',user.update)
router.delete('/delete',user.delete)

module.exports = router