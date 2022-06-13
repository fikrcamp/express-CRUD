const users = require("../data/userData");

exports.getUsers = (req, res) => {
  res.status(200).json({ data: users });
};

exports.getOneUser = (req, res) => {
  let found = users.find((user) => user.id == req.params.id);
  res.status(200).json({ data: found });
};

exports.saveUser = (req, res) => {
  users.push(req.body);
  res.status(201).json({ data: users });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({ message: "deleted user" });
};

exports.editUser = (req, res) => {
  // users = [
  //   { id: 1, username: "fikrcamp", password: "abc" },
  //   { id: 2, username: "ali", password: "bcd" },
  // ];

  // req.params.id = 2
  users.map((user, index) => {
    if (user.id == req.params.id) {
      users[index].username = req.body.username;
    }
  });
  res.status(200).json({ message: users });
};
