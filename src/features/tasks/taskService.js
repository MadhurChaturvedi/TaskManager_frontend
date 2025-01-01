import axios from "axios";


// Create new task
const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/tasks/`, taskData, config);
  return await response.data;
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
    const response = await axios.get(`https://taskmanager-backend-9taa.onrender.com/api/tasks/`, config);
    console.log("API Response:", response.data); // Log the response here
    return await response.data;
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
    const response = await axios.delete(`https://taskmanager-backend-9taa.onrender.com/api/tasks/` + id, config);
    // console.log("API Response:", response.data); // Log the response here
    return await response.data;
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
