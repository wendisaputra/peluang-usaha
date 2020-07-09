var express = require('express')
var router = express.Router()
var nanoid = require('nanoid')
const cors = require('cors')
const usahaFunction = require('../../config/usaha_function.js')

router.use(cors({
  origin:'http://127.0.0.1:5500'
}))
//get all
router.get('/', (req, res) =>{
  usahaFunction.ambilSemuaDataUsaha(result => {
    res.json({usaha: result})
  })
})

// router.get('/usaha', require('./usaha_api'))
module.exports = router
