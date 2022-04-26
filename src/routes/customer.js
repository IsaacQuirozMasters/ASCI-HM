const express = require ('express');
const router = express.Router();


//importar
const customerController = require('../controllers/customerController');
//llamar al .list de customerController 
router.get('/', customerController.list);  
router.post('/add',customerController.save);
router.get('/update/:id_usuario ', customerController.edit);
router.post('/update/:id_usuario ', customerController.update);
router.get ('/delete/:id_usuario', customerController.delete);
module.exports = router;