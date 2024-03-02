import Project from "../model/projectSchema.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('manager');
    if (projects) {
      res.status(200).json(projects);
    } else {
      res.status(200).json("Cannot Find Projects");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving projects");
  }
};

export const getProjects = async (req, res) => {
  try {
    const userId = req.params.userId;
    const projects = await Project.find({ manager: userId });
    if (projects) {
      res.status(200).json(projects);
    } else {
      res.status(200).json("Cannot Find Projects");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving projects");
  }
};

export const getProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findOne({ _id: id }).populate('manager');
    if (!project) {
      res.status(404).json("Project not found");
    } else {
      res.status(200).json(project);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving the project");
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, description, manager, startDate, endDate } = req.body;
    const project = new Project({
      name,
      description,
      manager,
      startDate,
      endDate,
    });

    const savedProject = await project.save();
    res.status(200).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the project");
  }
};

export const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, manager, startDate, endDate, isRunning } = req.body;
    const project = await Project.findByIdAndUpdate(
      id,
      { name, description, manager, startDate, endDate, isRunning },
      { new: true }
    );

    if (!project) {
      res.status(404).json("Cannot find project");
    } else {
      res.status(200).json(project);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the project");
  }
};

export const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      res.status(404).json("Cannot find project");
    } else {
      res.status(200).json("Project deleted successfully");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the project");
  }
};
