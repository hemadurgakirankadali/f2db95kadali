var earbuds = require('../models/earbuds');

// List of all Costumes 
exports.earbuds_list = async function(req, res) { 
    try{ 
        theEarbuds = await earbuds.find(); 
        res.send(theEarbuds); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
    };
 
// List of all pets 
//exports.earbuds_list = function(req, res) { 
    //res.send('NOT IMPLEMENTED: earbuds list'); 
//}; 
 
// for a specific pets. 
exports.earbuds_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.earbuds_create_post = async function(req, res) { 
    try{ 
        theEarbuds = await earbuds.find(); 
        res.render('earbuds', { title: 'earbuds Search Results', results: theEarbuds }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
// Handle earbuds delete form on DELETE. 
exports.earbuds_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await earbuds.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
 
// Handle earbuds update form on PUT. 
exports.earbuds_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds update PUT' + req.params.id); 
};

// VIEWS 
// Handle a show all view 
exports.earbuds_view_all_Page = async function(req, res) { 
    try{ 
        theEarbuds = await earbuds.find(); 
        res.render('earbuds', { title: 'earbuds Search Results', results: theEarbuds}); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.earbuds_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new earbuds(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"pet_type":"dog", "breed":"doberman", "cost":7000} 
    document.earbuds_company = req.body.earbuds_company; 
    document.earbuds_colour = req.body.earbuds_colour; 
    document.earbuds_cost = req.body.earbuds_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// for a specific Costume.
exports.earbuds_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await earbuds.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle earbuds update form on PUT.
exports.earbuds_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await earbuds.findById(req.params.id)
        // Do updates of properties
        if (req.body.earbuds_company)
            toUpdate.earbuds_company = req.body.earbuds_company;
        if (req.body.earbuds_cost) toUpdate.earbuds_cost = req.body.earbuds_cost;
        if (req.body.earbuds_colour) toUpdate.earbuds_colour = req.body.earbuds_colour;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        console.log('Came to error')
        res.status(500)
        res.send(`{"error": "Values are not Valid failed"}`);
    }
};

// Handle a show one view with id specified by query
exports.earbuds_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await earbuds.findById( req.query.id)
    res.render('earbudsdetail',
    { title: 'earbuds Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.earbuds_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earbudscreate', { title: 'Earbuds Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.earbuds_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await earbuds.findById(req.query.id)
    res.render('earbudsupdate', { title: 'Earbuds Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.earbuds_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await earbuds.findById(req.query.id)
    res.render('earbudsdelete', { title: 'Earbuds Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };