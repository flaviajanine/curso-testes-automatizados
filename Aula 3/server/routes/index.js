const express = require('express');
const documents = require('./reports/documents');
const database = require('./reports/database');

const router = express.Router();

router.use('/api/v1/documents', documents);
router.use('/api/v1/database', database);

module.exports = router;
