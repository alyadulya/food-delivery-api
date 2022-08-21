const { police_check } = require('../../middlewares');
const deliveryAddressController = require('./controller');

const router = require('express').Router;

router.post(
    '/delivery-addresses',
    police_check('create', 'DeilveryAddress'),
    deliveryAddressController.store
);

module.exports = router;