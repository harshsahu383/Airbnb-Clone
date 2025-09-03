const mongoose = require("mongoose");
const initData  = require("./data.js");
const connectDb = require("../db/index.js");
const Listing = require("../models/listing.js");

const initDb = async () => {
    try{

    
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    }
    catch(err){
        console.log(err);
        
    }   
};
initDb();