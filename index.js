const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const ListModel = require("./models/Schema");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://ansary29:moham29@myproject.12hak.mongodb.net/Tournament?retryWrites=true&w=majority"
);

app.get("/read", async (req, res) => {
  ListModel.find()
    .then(function (models) {
      res.json(models);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.get("/read/:id", async (req, res) => {
  ListModel.findOne({ _id: req.params.id })
    .then(function (models) {
      res.json(models);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.post("/insert", async (req, res) => {
  const Name = req.body.name;
  const status = req.body.Status;
  const start = req.body.startDate;
  const end = req.body.EndDate;

  const data = new ListModel({
    name: Name,
    startDate: start,
    EndDate: end,
    Status: status,
  });

  try {
    await data.save();
    res.send("inserted data");
  } catch (error) {
    console.log(error);
  }
});

app.put("/update/:id", async (req, res) => {
  const id = req.body.id;

  const Name = req.body.name;
  const status = req.body.Status;

  const data = await ListModel.findOneAndUpdate({
    _id: id,
    name: Name,
    Status: status,
  });

  try {
    await data.save();
    res.send("updated data");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await ListModel.findByIdAndRemove(id).exec();
  res.send("delete");
});

// -------------------------list of teams------------------
app.get("/teams", async (req, res) => {
  ListModel.find()
    .then(function (models) {
      res.json(models);
    })
    .catch(function (err) {
      res.json(err);
    });
});


app.post("/teams/insert", async (req, res) => {
  const Name = req.body.team;
  const runrate = req.body.runrate;
  const win = req.body.win;
  const lose = req.body.lose;

  const data = new ListModel({
    name: Name,
    runrate,
    win,
    lose
  });

  try {
    await data.save();
    res.send("inserted data");
  } catch (error) {
    console.log(error);
  }
});

app.put("teams/update/:id", async (req, res) => {
  const Name = req.body.team;
  const runrate = req.body.runrate;
  const win = req.body.win;
  const lose = req.body.lose;

  const data = await ListModel.findOneAndUpdate({
    name: Name,
    runrate,
    win,
    lose
  });

  try {
    await data.save();
    res.send("updated data");
  } catch (error) {
    console.log(error);
  }
});

app.delete("teams/delete/:id", async (req, res) => {
  const id = req.params.id;

  await ListModel.findByIdAndRemove(id).exec();
  res.send("delete");
});


app.listen(3001, () => {
  console.log("server running on the portal 3001");
});
