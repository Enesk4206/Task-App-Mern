import React, { useEffect } from 'react';
import { useTaskAPI } from '../API/task.api';

const TaskPage = () => {
  const tasks = useTaskAPI((state) => state.tasks);
  const showAllTasks = useTaskAPI((state) => state.showAllTasks);

  useEffect(() => {
    showAllTasks();
  }, [showAllTasks]);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold text-center mb-5">Task List</h1>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-600">No tasks available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id} // MongoDB'deki `_id` değerini key olarak kullanın
              className="p-4 bg-white rounded-lg shadow-md"
            >
              <img
                src="dam.jpg" // Eğer her task için ayrı bir görsel kullanacaksanız bunu da dinamik hale getirebilirsiniz
                alt={task.name || "Task Image"} // Adı yoksa varsayılan bir açıklama gösterin
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{task.name}</h3>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Created At: {new Date(task.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskPage;
