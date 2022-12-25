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
// // import faker from 'faker';
// import { faker } from "@faker-js/faker";
// // import * as faker from 'fake'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   plugins: {
//     // title: {
//     //   display: true,
//     //   text: "Chart.js Bar Chart - Stacked",
//     // },
//   },

//   scales: {
//     //   xAxes: [{
//     //     barThickness: 3,  // number (pixels) or 'flex'
//     //     maxBarThickness: 8 // number (pixels)
//     // }],
//     x: {
//       stacked: true,
//       barThickness: 3, // number (pixels) or 'flex'
//       maxBarThickness: 1,
//     },
//     y: {
//       stacked: true,
//     },
//   },
// };

// const labels = ["October", "november", "December", "2021"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Applications",
//       data: labels.map(() => faker.datatype.number({ min: -10, max: 1000 })),
//       backgroundColor: "#73CBFF",
//     },
//     {
//       label: "ShortListed",
//       data: labels.map(() => faker.datatype.number({ min: -10, max: 1000 })),
//       backgroundColor: "#98CD8D",
//     },
//     {
//       label: "Onhold",
//       data: labels.map(() => faker.datatype.number({ min: -10, max: 1000 })),
//       backgroundColor: "#FDBD5F",
//     },
//     {
//       label: "Rejected",
//       data: labels.map(() => faker.datatype.number({ min: -1, max: -500 })),
//       backgroundColor: "#F0664E",
//     },
//   ],
// };

// export function Graphs() {
//   return <Bar options={options} data={data} />;
// }
