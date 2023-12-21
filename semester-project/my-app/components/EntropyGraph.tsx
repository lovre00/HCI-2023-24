import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const EntropyGraph = ({ entropyBlocks }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      // Create the Chart.js instance
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'line',
        data: {
          labels: Array.from({ length: entropyBlocks.length }, (_, i) => `Block ${i + 1}`),
          datasets: [
            {
              label: 'Entropy Values',
              data: entropyBlocks,
              borderColor: 'blue',
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
              pointHoverBackgroundColor: 'blue',
              pointHoverRadius: 5,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `Entropy: ${context.raw}`;
                },
              },
            },
          },
        },
      });
    }

    return () => {
      // Cleanup on unmount
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [entropyBlocks]);

  return <canvas ref={chartContainer} />;
};

export default EntropyGraph;
