// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import { MyArray1 } from "./BarChart";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Array1: any[] = [];

// const GenerateRandom = (max: any, min: any) => {
//   return Math.floor(Math.random() * (max - min));
// };

// Array.from({ length: 10 }, () => {
//   Array1.push({
//     cost1: GenerateRandom(300, 100),
//     cost2: GenerateRandom(300, 100),
//     cost3: GenerateRandom(300, 100),
//     cost4: GenerateRandom(300, 100),
//     cost5: GenerateRandom(300, 100),
//     cost6: GenerateRandom(300, 100),
//     cost7: GenerateRandom(300, 100),
//   });
// });

// export const data = {
//   labels: MyArray1.map((el) => el.item),
//   datasets: [
//     {
//       label: "Cost",
//       data: [
//         Array1.map((el) => el.cost1).reduce((a, b) => a + b),
//         Array1.map((el) => el.cost2).reduce((a, b) => a + b),
//         Array1.map((el) => el.cost3).reduce((a, b) => a + b),
//         Array1.map((el) => el.cost3).reduce((a, b) => a + b),
//         Array1.map((el) => el?.cost4).reduce((a, b) => a + b),
//         Array1.map((el) => el?.cost5).reduce((a, b) => a + b),
//         Array1.map((el) => el?.cost6).reduce((a, b) => a + b),
//         Array1.map((el) => el?.cost7).reduce((a, b) => a + b),
//       ],
//       backgroundColor: [
//         "rgba(168, 31, 60, 0.2)",
//         "rgba(96, 235, 54, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(97, 75, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "#af1234",
//         "#2d6286",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "#db842c",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export function App() {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "90vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}>
//       <Doughnut data={data} />;
//     </div>
//   );
// }
