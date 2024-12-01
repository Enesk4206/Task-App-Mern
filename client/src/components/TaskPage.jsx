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
   

    return (
        <div className='bg-slate-500'>
            {tasks.length === 0 ? ("No task") : (
                <div className='flex flex-wrap flex-row gap-7 p-2 items-center justify-center'>
                    {tasks.map((task) => (
                        <Link to={`/getDetail/${task._id}`} key={task._id  } className='w-1/6 bg-slate-100 rounded-md text-sm'>
                            <h2 className='m-3 p-4'>{formatDate(task.createdAt)}</h2>
                            <p className='p-2 m-2 text-center'>Click for view details</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskPage;
