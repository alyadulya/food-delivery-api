const router = require('express').Router();
const { policy_check } = require('../../middlewares');
const invoiceController = require('./controller');

router.get(
    '/invoices/:order_id',
    policy_check('view', 'Invoice'),
    invoiceController.show
);

module.exports = router;