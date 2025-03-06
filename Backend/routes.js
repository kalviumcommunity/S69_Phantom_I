const express = require('express')
const UserSchema = require("./user")
const router = express.Router()

router.post('/users/create',UserSchema.create);
router.get('/users/read/:email?',UserSchema.read)
router.put('/users/update/:email?',UserSchema.update)
router.delete('/users/delete/:email?',UserSchema.delete)

module.exports = router