import User from "../../models/userSchema.js";

export const getUsers = async (req, res) => {
    const users = await User.find()
    if (users){
        res.status(200).json(users)
    }else {
        res.status(500).send("An error occurred while retrieving users")
    }
};