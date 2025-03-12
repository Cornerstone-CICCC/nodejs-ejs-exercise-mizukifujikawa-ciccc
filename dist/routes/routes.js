"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
    });
});
pageRouter.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
    });
});
pageRouter.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact",
    });
});
exports.default = pageRouter;
