"use strict";
var noise = require("./noise");
var docsSlider = require("./docsSlider");
var categories = require("./categories");
var burger = require("./burger");
var favourites = require("./favourites");
var serviceTab = require("./service-tab");
var instagram = require("./instagram");
var freshPost = require("./blogFreshPost");


instagram.instagram();
docsSlider.docsSlider();
noise.noise();
categories.categories();
burger.burger();
favourites.favourites();
serviceTab.serviceTab();
freshPost.freshPost();


