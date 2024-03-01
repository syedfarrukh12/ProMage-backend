import Task from "../model/taskSchema.js";

export const getTasks = async (req, res) => {
  const project_id = req.params.project_id;

  try {
    const tasks = await Task.find({ project: project_id })
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving tasks");
  }
};

export const createTask = async (req, res) => {
    const {
        description,
        status,
        project,
        startDate,
        endDate,
        createdAt,
    } = req.body;

  try {
    const task = new Task({
        description,
        status,
        project,
        startDate,
        endDate,
        createdAt,
    });
    task
      .save()
      .then(() => {
        res.status(200).json(task);
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ message: "An error occurred while creating task" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating tasks");
  }
};

export const updateTask = async (req, res) => {
  const task_id = req.params.task_id;

  try {
    const {description, status, startDate, endDate} = req.body;
    const task = await Task.findOne({
      _id: task_id,
    });

    if (!task) {
      return res.status(404).send("Task not found");
    }

    if (description) {
      task.description = description;
    }

    if (status) {
      task.status = status;
    }

    if (startDate) {
      task.startDate = startDate;
    }

    if (endDate) {
      task.endDate = endDate;
    }
    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the task");
  }
};

export const deleteTask = async (req, res) => {
  const task_id = req.params.task_id;

  try {
    const task = await Task.findOne({
      _id: task_id,
    });

    if (!task) {
      return res.status(404).send("Task not found");
    }

    task.deleteOne().then(() => {
      res.status(200).json("Task deleted successfully");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the task");
  }
};