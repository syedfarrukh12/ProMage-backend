import Project from "../model/projectSchema";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    if (projects){
      res.status(200).json(projects);
    }else{
      res.status(200).json("Cannot Find Projects");
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving projects");
  }
};

export const getProjects = async (req, res) => {
  try {
    const userId = req.params.userId
    const projects = await Project.find({createdBy: userId});
    if (projects){
      res.status(200).json(projects);
    }else{
      res.status(200).json("Cannot Find Projects");
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving projects");
  }
};