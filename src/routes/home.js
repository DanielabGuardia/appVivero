let express = require('express')
let router = express.Router()
let controller = require('../controllers/homeController')

router.get('/', controller.home)
/*router.get('/frequent-questions', controller.preguntas_frecuentes)
router.get('/locals', controller.locals)*/


module.exports = router