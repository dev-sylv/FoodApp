import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Fam = [
  ,
  {
    fam: "Chifu",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Ife",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Chiboy",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Augustine",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Neche",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Jude",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Anthonia",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Precious",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Chizzy",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    fam: "Chidera",
    cost: Math.floor(Math.random() * 1001),
  },
];

const Friends = [
  {
    friends: "Fortune",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Daniel",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Esther",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Godwin",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Victor",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Isaac",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Eben",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Judith",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Jaji",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    friends: "Joshua",
    cost: Math.floor(Math.random() * 1001),
  },
];

const Cousins = [
  {
    coz: "Owen",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Mariam",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Ebuka",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Chioma",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Chinazor",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Stanley",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Odira",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Franklin",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Rose",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    coz: "Muna",
    cost: Math.floor(Math.random() * 1001),
  },
];

const Coding = [
  {
    languages: "Typescript",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "Javascript",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "Golang",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "Python",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "Rust",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "NextJs",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "Reactjs",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "Angular",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "Vite",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    languages: "Node",
    cost: Math.floor(Math.random() * 1001),
  },
];

const Exes = [
  {
    name: "Tolu",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Ajoke",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Bukky",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Victory",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Ayo",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Chidinma",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Chioma",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Esther",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Gift",
    cost: Math.floor(Math.random() * 1001),
  },
  {
    name: "Miracle",
    cost: Math.floor(Math.random() * 1001),
  },
];

const AllCost = [];

const arra = (arr: any[]) => {
  return arr.map((el) => el?.cost).reduce((a, b) => a + b);
};
console.log("Cost in exes array: ", arra(Fam));

AllCost?.push(
  arra(Fam),
  arra(Exes),
  arra(Friends),
  arra(Cousins),
  arra(Coding)
);
console.log(AllCost);

export const data = {
  labels: ["Cousins", "Coding", "Exes", "Friends", "Fam"],
  datasets: [
    {
      label: "Costs",
      data: AllCost.map((el) => el),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return <Doughnut data={data} />;
}

export default App;
