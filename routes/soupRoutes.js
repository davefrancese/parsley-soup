const mongoose = require("mongoose");

const Soups = mongoose.model("soups");

module.exports = app => {
  app.get("/api/allsoups", async (req, res) => {
    const data = await Soups.find();
    res.send(data);
  });

  app.get("/api/dailysoups", async (req, res) => {
    const data = await Soups.find();
    const daily = data.filter(soup => {
      return soup.isDaily;
    });
    res.send(daily);
  });

  // make put method
  app.put("/api/allsoups/:id", async (req, res) => {
    const data = await Soups.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, data) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.send(data);
        }
      }
    );
  });

  app.get("/api/date", async (req, res) => {
    const data = await Soups.find();
    const date = data.filter(soup => {
      return soup.name === "date";
    });
    res.send(date);
  });

  app.put("/api/date/change", async (req, res) => {
    const id = "5c47d10fe7179a5449415445";
    const date = req.body.date;
    const year = date
      .split("")
      .splice(0, 4)
      .join("");
    let month = date
      .split("")
      .splice(5, 2)
      .join("");
    switch (month) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
      default:
        month = month;
        break;
    }
    const day = date
      .split("")
      .splice(8, 2)
      .join("");
    const newDate = `${month} ${day}, ${year} `;
    const data = await Soups.findByIdAndUpdate(
      id,
      { date: newDate },
      { new: true },
      (err, data) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.send(data);
        }
      }
    );
  });
};
