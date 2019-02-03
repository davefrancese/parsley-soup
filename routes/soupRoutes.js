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
    const data = await Soups.findByIdAndUpdate(
      id,
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
};
