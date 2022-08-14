const router = require('express').Router();
const multer = require('multer');
const os = require('os');

const productController = require('./controller');

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, os.tmpdir())
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
// })
   
// let upload = multer({ storage: storage })

router.get('/products', productController.index);
router.post('/products', multer({dest: os.tmpdir()}).single('image'), productController.store);
router.put('/products/:id', multer({dest: os.tmpdir()}).single('image'), productController.update);
// router.put('/products/:id', upload.single('image'), productController.update);
router.delete('/products/:id', productController.destroy);

module.exports = router;