const path = require('path');
const express = require('express');

const skill = require('./reports/skill');
const skills = require('./reports/skills');

const router = express.Router();

router.use('/api/v1/skill', skill);
router.use('/api/v1/skills', skills);

router.use('/', express.static(path.join(__dirname, '../public')));

router.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;
