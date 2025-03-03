const express = require('express')
const UserSchema = require("./user")
const router = express.Router()

router.post('/users/create',UserSchema.create);
router.get('/users/read',UserSchema.read)
router.put('/users/update',UserSchema.update)
router.delete('/users/delete',UserSchema.delete)

module.exports = router