const Habit = require("../models/habit");
const User = require("../models/user");
const myHabit = require("../assets/javascript/habit");

// welcome screen to login as default
exports.welcome = (req, res) => {
  return res.render("login"); // login ejs file
};

//for default login user on click............
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ name: "akshay" });
    if (user) {
      console.log("user found ", user);
      return res.redirect("/home");
    } else {
      const userCreated = await User.create({ name: "akshay", view: "daily" });
      if (!userCreated) {
        console.log("USer not created!");
        return res.redirect("/login");
      }
      console.log("User Logged in", userCreated);
      return res.redirect("/home");
    }
  } catch (err) {
    console.log("Error in creating user", err);
    return;
  }
};

exports.home = async (req, res) => {
  try {
    const user = await User.find({ name: "akshay" });
    const habit = await Habit.find({});

    // storing upcomming 7 days
    let days = [];
    days.push(myHabit.getDate(0));
    days.push(myHabit.getDate(1));
    days.push(myHabit.getDate(2));
    days.push(myHabit.getDate(3));
    days.push(myHabit.getDate(4));
    days.push(myHabit.getDate(5));
    days.push(myHabit.getDate(6));
    // sending data to home.ejs file
    return res.render("home", { habit, days, user });

    // }
  } catch (err) {
    console.log("error", err);
  }
};

// add new habit
exports.newHabit = async (req, res) => {
  console.log(req.body);
  const { content } = req.body;

  const habit = await Habit.findOne({ content: content });
  if (habit) {
    // updating existing habits
    let dates = habit.dates,
      tzoffset = new Date().getTimezoneOffset() * 60000;
    var today = new Date(Date.now() - tzoffset).toISOString().slice(0, 10);
    const item = dates.find();
    if (item.date === today) {
      console.log("Habit exists!");
      console.log("error_msg", "Habit already exists!");
      res.redirect("back");
    } else {
      dates.push({ date: today, complete: "none" });
      habit.dates = dates;
      habit.days = 0;
      habit
        .save()
        .then((habit) => {
          console.log(habit);
          res.redirect("back");
        })
        .catch((err) => console.log(err));
    }
  } else {
    let dates = [],
      tzoffset = new Date().getTimezoneOffset() * 60000;
    var localISOTime = new Date(Date.now() - tzoffset)
      .toISOString()
      .slice(0, 10);
    dates.push({ date: localISOTime, complete: "none" });

    try {
      const newHabit = await Habit.create({
        content,
        dates,
        days: 0,
      });
      if (newHabit) {
        console.log(habit);

        return res.redirect("back");
      }
    } catch (err) {
      console.log(err);
    }
  }
};

// handle view of user
exports.handleview = async (req, res) => {
  User.find({ name: "akshay" }).then((user) => {
    // changing user view
    user[0].view = user[0].view === "daily" ? "Weekly" : "daily";
    console.log("changes user view :: ", user[0]);
    user[0]
      .save()
      .then((user) => {
        console.log("change view User :: ", user);
        res.redirect("back");
      })
      .catch((err) => {
        console.log("error while changing view of the user :: ", err);
        return;
      });
  });
};

//  toggle between status
exports.statesChange = async (req, res) => {
  var d = req.query.date;
  var id = req.query.id;
  try {
    const habit = await Habit.findById(id);
    if (!habit) {
      console.log("Error updating status!");
      return res.redirect("back");
    }
    let dates = habit.dates;
    let found = false;
    // changing specify date status
    dates.find(function (item) {
      if (item.date === d) {
        if (item.complete === "yes") {
          item.complete = "no";
        } else if (item.complete === "no") {
          item.complete = "none";
        } else if (item.complete === "none") {
          item.complete = "yes";
          habit.days += 1;
        }
        found = true;
      }
    });
    if (!found) {
      dates.push({ date: d, complete: "yes" });
      habit.days += 1;
    }
    // save habit to database
    habit.dates = dates;
    habit
      .save()
      .then((habit) => {
        console.log("updated habit ", habit);
        res.redirect("back");
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

// removing habit controller
exports.removeHabit = async (req, res) => {
  try {
    let id = req.query.id;
    const deletedHabit = await Habit.findByIdAndDelete(id);
    if (!deletedHabit) {
      console.log("error in removing habit :: ");
      return;
    }
    console.log("successfully remove habit from DB");
    return res.redirect("back");
  } catch (err) {
    console.log(err);
  }
};
