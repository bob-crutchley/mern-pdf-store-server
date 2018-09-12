const express = require('express');
const pdfService = require('../service/pdf/pdfService');
const router = express.Router();

router.get('/pdf/all', pdfService.getAll);
router.get('/pdf/:id', pdfService.getById);
router.post('/pdf', pdfService.create);
router.delete('/pdf', pdfService.delete);

module.exports = router;
