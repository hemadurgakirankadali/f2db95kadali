const mongoose = require("mongoose")

const earbudsSchema = mongoose.Schema({

    earbuds_company: String,

    earbuds_cost: Number,

    earbuds_Colour: String,

})

//The first argument to the model function is going to be the name of the collection of documents that will be stored in your MongoDB.

module.exports = mongoose.model("earbuds", earbudsSchema)