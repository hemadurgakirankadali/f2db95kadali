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
// Handle Costume delete form on DELETE. 
exports.earbuds_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
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