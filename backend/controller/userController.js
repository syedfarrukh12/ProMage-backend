import User from "../model/userSchema.js";

export const getUsers = async (req, res) => {
    const users = await User.find()
    if (users){
        res.status(200).json(users)
    }else {
        res.status(500).send("An error occurred while retrieving users")
    }
};

export const getUser = async (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).json("User not found");
      } else {
        res.status(200).json(user);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred while retrieving the user");
    });
};

export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const newUser = new User({ firstName, lastName, email, password });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {
        console.error(error);

        if (error.code === 11000 && error.keyValue) {
            const duplicateField = Object.keys(error.keyValue)[0];
            res.status(400).json(`Duplicate ${duplicateField} entered.`);
        } else {
            res.status(500).json("An unexpected error occurred.");
        }
    }
};

export const updateUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  User.findOneAndUpdate(
    { email },
    { firstName, lastName, email, password },
    { new: true }
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).send("User not found");
      }
      res.status(200).json(updatedUser);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred while updating the user");
    });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).send("User not found");
      }
      res.status(200).json({ message: "Account successfully deleted" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred while updating the user");
    });
};