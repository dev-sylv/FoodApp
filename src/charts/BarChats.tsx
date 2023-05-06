// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// const NumberArr1 = [1, 4, 48, 394, 848, 447, 984];
// const NumberArr2 = [4, 5, 584, 283, 7, 984, 939];

// const MyItemData: any = [];
// const MyCostData: any = [];

// export const MyArray1 = [
//   {
//     item: "Rice",
//     cost: 500,
//   },
//   {
//     item: "Beans",
//     cost: 1000,
//   },
//   {
//     item: "Yam",
//     cost: 1500,
//   },
//   {
//     item: "Sphag",
//     cost: 2000,
//   },
//   {
//     item: "Tomatoes",
//     cost: 2500,
//   },
//   {
//     item: "Eggs",
//     cost: 3000,
//   },
//   {
//     item: "Bread",
//     cost: 7000,
//   },
//   {
//     item: "Okpa",
//     cost: 4000,
//   },
//   {
//     item: "Indomie",
//     cost: 1800,
//   },
//   {
//     item: "Cake",
//     cost: 9000,
//   },
// ];

// const GenerateRandom = (max: any, min: any) => {
//   return Math.floor(Math.random() * (max - min));
// };

// const Letters = "abcdefghi";

// Array.from({ length: 10 }, () => {
//   MyItemData.push({
//     item: Letters[Math.floor(Math.random() * Letters.length)],
//   });
//   MyCostData.push({
//     cost: GenerateRandom(90, 20),
//   });
// });

// export const data = {
//   labels: MyArray1.map((el: any) => el?.item),
//   datasets: [
//     {
//       label: "Dataset 1",
//       //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       data: MyItemData.map((el: any) => el?.item),

//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "All Cost",
//       //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       data: MyArray1.map((el: any) => el?.cost),
//       backgroundColor: "rgba(235, 120, 53, 0.849)",
//     },
//   ],
// };

// export function App() {
//   return (
//     <div>
//       <div style={{ width: "100%", height: "90vh" }}>
//         <Bar options={options} data={data} />
//       </div>
//       {/* <p>{JSON.stringify(MyItemData)}</p>
//       <p>{JSON.stringify(MyCostData)}</p> */}
//     </div>
//   );
// }
