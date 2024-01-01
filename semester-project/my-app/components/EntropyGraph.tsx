import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Annotation from 'chartjs-plugin-annotation';

Chart.register(
  Annotation
);


const EntropyGraph = ({ sections, entropyBlocks, entropySectionRanges }: any) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef<Chart<"line", any, string> | null>(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'line',
        data: {
          labels: Array.from({ length: entropyBlocks.length }, (_, i) => `${i}`),
          datasets: [
            {
              label: 'Entropy Values',
              data: entropyBlocks,
              borderColor: 'blue',
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
              pointStyle: 'circle', // Set point style to circle
              pointRadius: 5, // Adjust point radius as needed
              pointBorderColor: 'white', // Set point border color
              pointBackgroundColor: 'blue', // Set point fill color
              pointHoverBackgroundColor: 'blue',
              pointHoverRadius: 5,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `Entropy: ${context.raw}`;
                },
              },
            },
            annotation: {
              annotations: entropySectionRanges.map((point: any, index: any) => {
                const sectionNames = Object.keys(sections);
                const content = sectionNames[index]

                return {
                  type: 'line',
                  id: `line-${index}`,
                  mode: 'vertical',
                  scaleID: 'x',
                  value: `${point}`,
                  borderColor: 'black',
                  borderWidth: 1,
                  label: {
                    display: true,
                    content,
                  },
                  yMax: entropyBlocks[point - 1]
                };
              }),
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [entropyBlocks, entropySectionRanges]);

  return <canvas ref={chartContainer} width="400" height="200" />;
};

export default EntropyGraph;
