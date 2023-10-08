import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './App.css';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current && data) {
      
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(chartRef.current, {
        type: 'pie',
        data,
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <h2>Expense Distribution by Category</h2>
      <canvas ref={chartRef} />
    </div>
  );
};
export default PieChart;