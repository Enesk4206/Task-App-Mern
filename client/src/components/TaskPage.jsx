import React, { useEffect } from 'react';
import { useTaskAPI } from '../API/task.api';
import { Link } from 'react-router-dom';

const TaskPage = () => {
    const tasks = useTaskAPI((state) => state.tasks);
    const showAllTasks = useTaskAPI((state) => state.showAllTasks);

    useEffect(() => {
        showAllTasks();
    }, [showAllTasks]);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    // Görevleri tarihe göre gruplandır
    const groupedTasks = tasks.reduce((acc, task) => {
        const dateKey = formatDate(task.createdAt);
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(task);
        return acc;
    }, {});

    return (
        <div className="max-w-6xl mx-auto p-4">
            {Object.keys(groupedTasks).length === 0 ? (
                <h2 className="text-center text-xl">No tasks available</h2>
            ) : (
                Object.entries(groupedTasks).map(([date, taskList]) => (
                    <div key={date} className="mb-8">
                        {/* Tarih Başlığı */}
                        <h2 className="text-lg font-semibold mb-4 bg-gray-100 p-2 rounded-md">
                            {date} - {taskList.length} {taskList.length > 1 ? 'tasks' : 'task'}
                        </h2>
                        {/* Görev Listesi */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {taskList.map((task) => (
                                <Link
                                    key={task._id}
                                    to={`/getDetail/:${task._id}`}
                                    className="bg-slate-200 rounded-md p-4 shadow-md flex flex-col justify-between"
                                >
                                    <div>
                                        <h3 className="text-md font-bold">{task.name}</h3>
                                        <p className="text-sm text-gray-600">{task.description}</p>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Added on: {formatDate(task.createdAt)}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TaskPage;
