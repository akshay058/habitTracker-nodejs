const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

//Routes
router.get("/", homeController.welcome);
router.get("/login", homeController.login);
router.get("/home", homeController.home);
router.post("/handle-view", homeController.handleview);
router.post("/new-habit", homeController.newHabit);
router.get("/update-status", homeController.statesChange);
router.get("/remove-habit", homeController.removeHabit);

module.exports = router;
