const Express = require("express"); // importing Express
const userController = require("./Controllers/userController");
const blogController = require("./Controllers/blogController");

const userRoutes = require("./Routes/userRoutes");

const app = Express(); //initialize Express
//MVC
//M = MODEL   => database
//V = VIEW    => frontend
//C = CONTROLLER   => functionality
app.use(Express.json());

app.use("/user", userRoutes);

app.listen(8000, () => {
  console.log("listening on port 8000");
});
