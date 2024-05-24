"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProductivityChart: React.FC = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const dayOfMonth = date.getDate();
    setCurrentDate(`${day}, ${dayOfMonth} ${month}`);
  }, []);

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Research',
        data: [2, 3, 2, 4, 3, 3, 2],
        borderColor: '#00bcd4',
        backgroundColor: '#00bcd4',
        tension: 0.4,
      },
      {
        label: 'Design',
        data: [1, 2, 1, 2, 2, 1, 1],
        borderColor: '#7e57c2',
        backgroundColor: '#7e57c2',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
  };

  return (
    // <div className="p-2 w-[80vh] rounded-full">
    <div className="p-2 w-full sm:w-[80vh] rounded-full">
      <div className="bg-white p-2 rounded-lg shadow-md">
        <div className="flex justify-between ">
          <h2 className="text-lg font-semibold">Productivity</h2>
          <button className="px-2 py-2 bg-zinc-100 rounded-lg shadow hover:bg-zinc-300 transition-colors">
            {currentDate} ▼
          </button>
        </div>
        <Line data={data} options={options} />
        <div className="text-sm text-gray-500 mt-2">Data updates every 3 hours</div>
      </div>
    </div>
  );
};

export default ProductivityChart;
