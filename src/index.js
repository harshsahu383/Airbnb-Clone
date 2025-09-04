const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const mongoose = require("mongoose");
const express = require("express");
const Listing = require("../models/listing.js")
const path = require("path");
const connectDb = require("../db/index.js");
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

// Show route
app.get("/listings/:id", async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});

