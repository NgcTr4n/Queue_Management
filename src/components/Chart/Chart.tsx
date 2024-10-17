import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  Plugin,
  ChartOptions,
} from "chart.js";

// Register the components you are using
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Custom plugin to draw the title
const titlePlugin: Plugin<'line'> = {
  id: 'customTitle',
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    const title = "Số lượng";

    // Set title styling
    ctx.save();
    ctx.font = "20px bold Arial"; // Adjust font style and size
    ctx.fillStyle = "#000"; // Title color
    ctx.textAlign = "center"; // Center alignment
    ctx.textBaseline = "middle"; // Vertical alignment

    // Calculate title position
    const x = (chartArea.left + chartArea.right) / 2;
    const y = (chartArea.top + chartArea.bottom) / 2;

    // Draw the title
    ctx.fillText(title, x, y);
    ctx.restore();
  },
};

// Register the custom plugin
ChartJS.register(titlePlugin);

const Chart: React.FC = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["01", "05", "10", "13", "19", "25", "31"],
    datasets: [
      {
        label: "Số lượng",
        data: [2500, 4200, 3200, 3600, 4221, 4000, 3700],
        fill: true,
        backgroundColor: (context: { chart: ChartJS }) => {
          const chart = context.chart;
          const { ctx } = chart;
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'rgba(206,221,255,1)');
          gradient.addColorStop(1, 'rgba(255,255,255,1)');
          return gradient;
        }, // Gradient fill
        borderColor: "#5185F7", // Line color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 0, // Dots are hidden by default
        pointHoverRadius: 10, // Dots appear on hover
        pointBackgroundColor: "#5185F7", // Highlight on hover
        pointBorderColor: "#F6F6F6",
        pointHoverBorderColor: '#FFF', // Màu viền của điểm khi hover
        pointHoverBorderWidth: 4 // Độ dày viền của điểm khi hover
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 6000, // Adjust to match the y-axis range
      },
      x: {
        ticks: {
          callback: function (value: any, index: any) {
            const label = data.labels ? data.labels[index] : ""; // Safe access
            return label === "01" ||
              label === "13" ||
              label === "19" ||
              label === "31"
              ? label
              : "";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: "index" as const, // Fix tooltip.mode type
        intersect: false, // Ensures the line is drawn even if not directly intersecting
        callbacks: {
          label: function (tooltipItem: any) {
            return tooltipItem.raw.toLocaleString(); // Add formatting
          },
        },
      },
      legend: {
        display: false, // Hide default legend
      },
    },
    hover: {
      mode: "index" as const, // Fix hover.mode type
      intersect: false, // Vertical line shows when hovering near a point
    },
    elements: {
      point: {
        radius: 5, // Radius of the point when hovered
        hoverRadius: 8, // Radius when hovering
      },
      line: {
        borderColor: "#F6F6F6", // Color of the line
        borderWidth: 5, // Thickness of the line
      },
    },
    // Custom drawing function for vertical line
    onHover: (event: any) => {
      const chartInstance = ChartJS.instances[0];
      if (!chartInstance) return; // Check if the chart instance exists

      const activePoints = chartInstance.getElementsAtEventForMode(
        event.native,
        "nearest",
        { intersect: true },
        false
      );

      // Ensure activePoints is defined and has elements
      if (activePoints && activePoints.length) {
        const chartArea = chartInstance.chartArea;
        const ctx = chartInstance.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(activePoints[0].element.x, chartArea.top);
        ctx.lineTo(activePoints[0].element.x, chartArea.bottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(54, 162, 235, 1)"; // Color of the vertical line
        ctx.stroke();
        ctx.restore();
      }
    },
  };

  return (
    <div className="chart-container" style={{ width: "100%", height: "400px" }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Chart;
