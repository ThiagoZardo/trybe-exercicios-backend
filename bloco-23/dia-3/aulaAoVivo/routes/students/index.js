const express = require('express');
const studentControler = require('../../controlers/studentControler');

const studentRouter = express.Router();

studentRouter.get('/', studentControler.listStudent)

module.exports = studentRouter;