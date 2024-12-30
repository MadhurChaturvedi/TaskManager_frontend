import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks/";

// Create new task
const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, taskData, config);
  return response.data;
};

// Fetch all tasks
// Get user goals
const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(API_URL, config);
    console.log("API Response:", response.data); // Log the response here
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // Re-throw error to handle it in your Redux slice
  }
};

const deleteTask = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.delete(API_URL + id, config);
    console.log("API Response:", response.data); // Log the response here
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // Re-throw error to handle it in your Redux slice
  }
};

const taskService = {
  createTask,
  getTasks,
  deleteTask
};

export default taskService;
