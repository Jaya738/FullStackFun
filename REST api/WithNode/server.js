var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/productsRoutes"); //importing route
routes(app);

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = `mongodb+srv://myapi:test@cluster0.lkadf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("Products RESTful API server started on: " + port);
