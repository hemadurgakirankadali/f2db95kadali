var express = require('express');
const earbuds_controlers= require('../controllers/earbuds'); 
var router = express.Router();
 

/* GET home page. */

router.get('/', earbuds_controlers.earbuds_view_all_Page ); 

module.exports = router;
