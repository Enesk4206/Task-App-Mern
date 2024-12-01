import React, { useEffect } from 'react';
import { useTaskAPI } from '../API/task.api';
import { useParams, Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams(); // URL'den ID'yi al
  const task = useTaskAPI((state) => state.task);
  const getDetail = useTaskAPI((state) => state.getDetail);

  console.log("ID from URL: ", id); // URL'den alınan ID'yi kontrol et

  useEffect(() => {
    getDetail(id); // ID'yi kullanarak detayları getir
    console.log('task.checked:', task.checked);
  }, [getDetail, id]);

  if (!task || Object.keys(task).length === 0) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
}

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{formatDate(task.createdAt)}</h1>
      <p className="text-gray-600 text-lg mb-6">{task.name}</p>
      <div className="flex flex-col gap-4">
        
        {task.updatedAt && (
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">Last Updated:</span>
            <span className="text-gray-700 text-md">{new Date(task.updatedAt).toLocaleDateString()}</span>
          </div>
        )}
      
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">Status:</span>
          <span className={`text-md font-semibold ${task.checked ===true ? "text-green-500" : "text-red-500"}`}>
          </span>
        </div>
      </div>
      <div className="mt-8">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Back to Tasks
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
