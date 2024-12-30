import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "../components/TaskForm";
import Spinner from '../components/Spinner';
import { getTask, reset, createTask, deleteTask } from "../features/tasks/taskSlice";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, isError, message } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getTask()); // Fetch tasks on initial load

    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch]);

  const handleAddTask = (task) => {
    dispatch(createTask(task)); // Add new task via dispatching action
    dispatch(getTask()); // Re-fetch tasks to include the new task
  };

  const handleDeleteTask = (taskId) => {
    // Dispatch delete task action
    dispatch(deleteTask(taskId));

    // Optionally, refetch the tasks after deletion to update the UI
    dispatch(getTask());
  };

  console.log(tasks);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskForm onSubmit={handleAddTask} />
      <div className="container mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tasks?.allTask?.length > 0 ? (
            tasks.allTask.map((task) => (
              <div
                key={task._id}
                className="p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h6 className="text-lg font-semibold text-gray-800">
                  {task.text}
                </h6>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 mt-2">
                    {
                      new Date(task.createdAt).toLocaleString('en-US')
                    }
                  </p>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="bg-red-600 p-1 rounded-md text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1 className="col-span-full text-center text-gray-500 text-xl">No DATA</h1>
          )}
        </div>
      </div>
    </div>
  );
}
