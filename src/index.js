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

app.listen(process.env.PORT, (req,res) => {
    console.log("Server Is Running ");
    
})
app.get("/", (req,res) => {
    res.send("working ");
});

// index route
app.get("/listings", async (req,res) => {
    const allListings = await Listing.find({});
    console.log(allListings);
    
    res.render("listings/index.ejs", {allListings});
})



