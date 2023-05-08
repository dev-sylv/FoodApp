import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Ecobin Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// // Consuming Fake store Api :
// const BarchatApi = fetch("https://fakestoreapi.com/products/")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => err);

const Users: any = [];
const NoofRequests: any = [];

const RandomFigures = (max: any, min: any) => {
  return Math.floor(Math.random() * (max - min));
};

const Letters = "abcdefghi";

Array.from({ length: 10 }, () => {
  Users.push({
    item: Letters[Math.floor(Math.random() * Letters.length)],
  });
  NoofRequests.push({
    cost: RandomFigures(90, 20),
  });
});

console.log(Users);
console.log(NoofRequests);

export const data = {
  labels,
  datasets: [
    {
      label: "Users",

      data: Users.map((el: any) => el?.item),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "No of requests made",

      data: NoofRequests.map((el: any) => el?.cost),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function App() {
  return <Bar options={options} data={data} />;
}
export default App;
