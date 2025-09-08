const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const mongoose = require("mongoose");
const express = require("express");
const Listing = require("../models/listing.js")
const path = require("path");
const connectDb = require("../db/index.js");
const wrapAsync = require("../utils/wrapAsync.js")
const ejsMate = require("ejs-mate");
const { appendFile, appendFileSync } = require("fs");
const methodOverride = require("method-override");
const ExpressError = require("../utils/ExpressError.js");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../public")));
app.engine("ejs", ejsMate);
app.listen(process.env.PORT, (req,res) => {
    console.log("Server Is Running ");
    
})
app.get("/", (req,res) => {
    res.send("working ");
});

// index route
app.get("/listings", wrapAsync(async (req,res) => {
    const listings = await Listing.find({});
    
    res.render("listings/index.ejs", {listings});
}))

//Create Route 
app.get("/listings/new", (req,res) => {
    res.render("listings/new.ejs");
})

// Show route
app.get("/listings/:id", wrapAsync(async (req,res) => {
    let {id} = req.params;
    const listings = await Listing.findById(id);
    res.render("listings/show.ejs", {listings});
}));

app.post("/listings", wrapAsync(async (req,res,next) => {
    if(! req.body.listing){
        throw new ExpressError(400,"Please Send Valid Response");
    }
    const newListing =  new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
 
}));
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

//Update Route
app.put("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
}));
//Delete Route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found !"));
});

// Centralized error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).send(message);
});