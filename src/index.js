const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const mongoose = require("mongoose");
const express = require("express");
const Listing = require("../models/listing.js")
const path = require("path");
const connectDb = require("../db/index.js");
const { appendFile, appendFileSync } = require("fs");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT, (req,res) => {
    console.log("Server Is Running ");
    
})
app.get("/", (req,res) => {
    res.send("working ");
});

// index route
app.get("/listings", async (req,res) => {
    const listings = await Listing.find({});
    
    res.render("listings/index.ejs", {listings});
})

//Create Route 
app.get("/listings/new", (req,res) => {
    res.render("listings/new.ejs");
})

// Show route
app.get("/listings/:id", async (req,res) => {
    let {id} = req.params;
    const listings = await Listing.findById(id);
    res.render("listings/show.ejs", {listings});
});

app.post("/listings", async (req,res) => {
    try{

   const newListing =  new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings")}
    catch(error){
        console.log(error);
        
    }
});