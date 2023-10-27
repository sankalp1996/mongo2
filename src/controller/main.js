const userModel = require("../model/userModel");

module.exports.userAdd = async (req, res) => {
  console.log("This is req=>", req.body);

  const { email, password, conf_password } = req.body;
  console.log("param found in req body");
  // var add = {};
  // validation--------------------------------------
  if (email.length > 6) {
    var add = await userModel.create({
      email,
      password,
      conf_password,
    });
  } else {
    console.log("length < 6");
    return res.status(400).send({
      message: "length < 6",
    });
  }
//----------------------------------------------------

  if (add) {
    res.status(201).send({
      message: "User added successfully",
      user: add,
    });
  } else {
    res.status(400).send({
      message: "User not added",
    });
  }
};

module.exports.userfind = async (req, res) => {
  const { id } = req.query;
  // const id = 12345;
  console.log("This is req to find=>", req);

  console.log("param found in req body", id);

  try {
    const myUser = await userModel.findById(id);

    console.log("myUser found", myUser);

    if (myUser) {
      res.status(200).send({
        message: "User Found",
        data: myUser,
      });
    } else {
      res.status(404).send({
        message: "User Not  Found",
      });
    }
  } catch (error) {
    res.status(404).send({
      message: "id not found",
    });
  }
};

module.exports.userDelete = async (req, res) => {
  const { id } = req.query;
  // const id = 12345;
  console.log("This is req to Delete User =>", req.query);

  console.log("param found in req body", id);

  try {
    const myUser = await userModel.findByIdAndDelete(id);

    console.log("myUser found", myUser);

    if (myUser) {
      res.status(200).send({
        message: "User Deleted",
        data: myUser,
      });
    } else {
      res.status(404).send({
        message: "User Not  Found",
      });
    }
  } catch (error) {
    res.status(404).send({
      message: "id not found",
    });
  }
};

module.exports.userUpdate = async (req, res) => {
  const { id } = req.query;
  const { email, password, conf_password } = req.body;

  // const id = 12345;
  console.log("This is req to Update User =>", req.query);

  console.log("param found in req body", id);
  console.log("new data", req.body);

  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, {
      email,
      password,
      conf_password,
    });

    console.log("myUser updated", updatedUser);

    if (updatedUser) {
      // await userModel.updateOne(id)

      res.status(200).send({
        message: "User Updated",
        data: updatedUser,
      });
    } else {
      res.status(404).send({
        message: "User Not  Found",
      });
    }
  } catch (error) {
    res.status(404).send({
      message: "id not found",
    });
  }
};
