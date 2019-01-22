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

  app.put("/api/allsoups/:id", async (req, res) => {
    // res.send(req.params.id);
    console.log("backend", req.params.id, req.body);
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
};
