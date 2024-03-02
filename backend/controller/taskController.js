import Task from "../model/taskSchema.js";
import { createLog } from "../utils/utils.js";

export const getTasks = async (req, res) => {
  try {
    const project_id = req.params.project_id;
    const tasks = await Task.find({ project: project_id });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving tasks");
  }
};

export const createTask = async (req, res) => {
  try {
    const { description, status, project, startDate, endDate, createdAt } = req.body;

    const task = new Task({
      description,
      status,
      project,
      startDate,
      endDate,
      createdAt,
    });

    await task.save();
    createLog(`Created Task ${description}`, 'success')
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    createLog(`An error occurred while creating the task | ${error}`, 'failure')
    res.status(500).send("An error occurred while creating the task");
  }
};

export const updateTask = async (req, res) => {
  try {
    const task_id = req.params.task_id;
    const { description, status, startDate, endDate } = req.body;

    const task = await Task.findById(task_id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    task.description = description ?? task.description; // Use nullish coalescing for optional updates
    task.status = status ?? task.status;
    task.startDate = startDate ?? task.startDate;
    task.endDate = endDate ?? task.endDate;

    const updatedTask = await task.save();
    createLog(`Updated Task ${description}`, 'success')
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    createLog(`An error occurred while updating the task | ${error}`, 'failure')
    res.status(500).send("An error occurred while updating the task");
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task_id = req.params.task_id;

    const task = await Task.findByIdAndDelete(task_id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    createLog(`deleted Task ${task.description}`, 'success')
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    console.error(error);
    createLog(`An error occurred while deleting the task | ${error}`, 'failure')
    res.status(500).send("An error occurred while deleting the task");
  }
};
