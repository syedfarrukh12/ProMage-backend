import User from "../model/userSchema.js";
import { createLog } from "../utils/utils.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving users");
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json("User not found");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving the user");
  }
};

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({ firstName, lastName, email, password });
    const savedUser = await newUser.save();
    createLog(`Created User ${firstName + ' '+ lastName}`, 'success')
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    createLog(`An error occurred while creating the user | ${error}`, 'failure')

    if (error.code === 11000 && error.keyValue) {
      const duplicateField = Object.keys(error.keyValue)[0];
      res.status(400).json(`Duplicate ${duplicateField} entered.`);
    } else {
      res.status(500).json("An unexpected error occurred.");
    }
  }
};

export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { firstName, lastName, email, password },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json("User not found");
    } else {
      createLog(`Updated User ${firstName + ' '+ lastName}`, 'success')
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    console.error(error);
    createLog(`An error occurred while updating the user | ${error}`, 'failure')
    res.status(500).send("An error occurred while updating the user");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      res.status(404).json("User not found");
    } else {
      createLog(`Updated User ${deletedUser.firstName + ' '+ deletedUser.lastName}`, 'success')
      res.status(200).json({ message: "Account successfully deleted" });
    }
  } catch (error) {
    console.error(error);
    createLog(`An error occurred while deleting the user | ${error}`, 'failure')
    res.status(500).send("An error occurred while deleting the user");
  }
};
