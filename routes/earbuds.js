var express = require('express');
const earbuds_controlers= require('../controllers/earbuds'); 
var router = express.Router();

// GET request for one costume.
router.get('/earbuds/:id', earbuds_controlers.earbuds_detail);
 

/* GET home page. */

router.get('/', earbuds_controlers.earbuds_view_all_Page ); 

/* GET detail earbuds page */
router.get('/detail', earbuds_controlers.earbuds_view_one_Page);
/* GET create costume page */
router.get('/create', earbuds_controlers.earbuds_create_Page);
/* GET create update page */
router.get('/update', earbuds_controlers.earbuds_update_Page);
/* GET delete costume page */
router.get('/delete', earbuds_controlers.earbuds_delete_Page);

module.exports = router;
