


import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast } from "react-toastify";

const TaskForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit({ text }); // Pass the new task to the parent component
      toast.success('New task added');
      setText(''); // Clear input field
    } else {
      toast.error('Task cannot be empty');
    }
  };

  return (
  <div className="w-full">
    <form className="bg-white p-4 rounded-lg shadow mb-6 max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Add a New Task</h2>
      <TextField
         onChange={(e) => setText(e.target.value)}
                        id="filled-multiline-static"
                        label="ENTER NEW TASK"
                        fullWidth
                        multiline
                        color='black'
                        value={text}
                        rows={4}
                        variant="standard"
      />
      <Button type="submit" fullWidth variant="outlined" className="mt-4">Add Task</Button>
    </form>
    </div>
  );
};

export default TaskForm;

