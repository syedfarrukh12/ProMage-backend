import Project from "../model/projectSchema.js";

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
    const projects = await Project.find({manager: userId});
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

export const getProject = async (req, res) => {
  const id = req.params.id;
  const userId = req.params.userId;

  Project.findOne({_id: id, manager: userId})
    .then((project) => {
      if (!project) {
        res.status(404).json("Project not found");
      } else {
        res.status(200).json(project);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json("An error occurred while retrieving the project");
    });
};

export const createProject = async (req, res) => {
  const { name, description, manager, startDate, endDate, isRunning } = req.body;

  try{
    const project = new Project({
      name,
      description,
      manager,
      startDate,
      endDate,
      isRunning
    });
  
    project
      .save()
      .then((savedProject) => {
        res.status(200).json(savedProject);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json("An error occurred while creating the project");
      });
  }catch(error){
    res.status(500).send("Something went wrong")
  }
  
};


export const updateProject = (req, res) => {
  const id = req.params.id;
  const { name, description, manager, startDate, endDate, isRunning } = req.body;
  Project.findByIdAndUpdate(
    id,
    { name, description, manager, startDate, endDate, isRunning },
    { new: true }
  )
    .then((project) => {
      if (!project) {
        return res.status(404).json("Cannot find project");
      }
      return res.status(200).json(project);
    })
    .catch((error) => {
      console.error(error);
      return res
        .status(500)
        .send("An error occurred while updating the project");
    });
};

export const deleteProject = (req, res) => {
  const id = req.params.id;
  console.log(id)

  Project.findByIdAndDelete(id)
    .then((project) => {
      if (!project) {
        return res.status(404).json("Cannot find project");
      }
      return res.status(200).json("Project deleted successfully");
    })
    .catch((error) => {
      console.error(error);
      return res
        .status(500)
        .send("An error occurred while deleting the project");
    });
};