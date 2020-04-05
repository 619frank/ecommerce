const express = require('express')
const router = express.Router()

router.get( '/api', (req,res)=>{
    res.end('jj')
})

module.exports = router 
