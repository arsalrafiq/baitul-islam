import Image from 'next/image';
import { useState } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Productivity = () => {
  const [activeTab, setActiveTab] = useState('Research');
  const productivityData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Productivity',
        data: [120, 190, 300, 500, 200, 300, 400],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const productivityOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Productivity',
      },
    },
  };

  return (
    <div className="bg-white p-2 rounded-lg">
     
        <div className="flex justify-between mb-2">
          <div className="flex space-x-2">
            <button
              className={`text-lg font-medium ${
                activeTab === 'Research' ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Research')}
            >
              Research
            </button>
            <button
              className={`text-lg font-medium ${
                activeTab === 'Design' ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Design')}
            >
              Design
            </button>
         
         <div className="text-sm text-gray-500">Data update every 3 hours</div>
        <div className="flex items-center space-x-4">
          <div className="text-sm">Date:</div>
          <div className="flex items-center space-x-2 text-sm">
            <Image src="/calendar-icon.svg" width={20} height={20} alt="Calendar icon" />
            <p className="text-gray-500">Today</p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Image src="/arrow-icon.svg" width={20} height={20} alt="Arrow icon" />
            <p className="text-gray-500">Last week</p>
          </div> </div> 
        </div>
        </div>
   

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center">
        <div className="flex-shrink-0 w-full">
          <div className="text-xl font-medium mb-2">{activeTab} productivity</div>
          <Line data={productivityData} options={productivityOptions} />
        </div>
       
      </div></div>
  );   
   
};

export default Productivity;


