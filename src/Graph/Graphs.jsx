import React, { useEffect, useState } from "react";
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
import faker from "faker";
import {
  currentMonthValues,
  currentYearValues,
  pre2vMonthValues,
  prevMonthValues,
  prevYearValues,
} from "../services/getGraphDetails";
import axios from "axios";
import { makeGraphArray } from "../utils/makeGraphArray";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: true,
      },
      display: false,
    },
  },
};

// const labels = ["Dec", "Nov", "Oct", "2022"];
const labels = ["Dec", "Nov", "Oct", "2022", "2021"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Rejected",
//       data: [36, 40, 50, 200],
//       backgroundColor: "rgb(255, 99, 132)",
//     },
//     {
//       label: "On hold",
//       data: [23, 10, 4, 19],
//       backgroundColor: "rgb(75, 192, 192)",
//     },
//     {
//       label: "Shortlisted",
//       data: [19, 20, 13, 50],
//       backgroundColor: "rgb(53, 162, 235)",
//     },
//     {
//       label: "Applications",
//       data: [100, 90, 45, 250],
//       backgroundColor: "green",
//     },
//   ],
// };

export default function Graphs() {
  const [loading, setLoading] = useState(false);
  const [currentMonthDetails, setCurrentMonthDetails] = useState([]);
  const [currentYearDetails, setCurrentYearDetails] = useState([]);
  const [valuesObject, setValuesObject] = useState({});

  useEffect(() => {
    setLoading(true);
    const getGraphDetails = async () => {
      let response = await axios
        .all([
          currentMonthValues(),
          currentYearValues(),
          prevMonthValues(),
          pre2vMonthValues(),
          prevYearValues(),
        ])
        .then(
          axios.spread((...responses) => {
            setLoading(false);
            const currentMonth = responses[0];
            const currentYear = responses[1];
            const preMonth = responses[2];
            const pre2Month = responses[3];
            const preYear = responses[4];

            // const responseTwo = responses[1];
            // const responesThree = responses[2];
            // use/access the results
            // setCurrentMonthDetails(currentMonth);
            // setCurrentYearDetails(currentYear);
            // setValuesObject({
            //   currentMonth: currentMonth?.data?.info,
            //   currentYear: currentYear?.data?.info,
            // });
            setValuesObject(() =>
              makeGraphArray({
                currentMonth: currentMonth?.data?.info,
                currentYear: currentYear?.data?.info,
                preMonth: preMonth?.data?.info,
                pre2Month: pre2Month?.data?.info,
                preYear: preYear?.data?.info,
              })
            );
          })
        )
        .catch((errors) => {
          setLoading(false);
          // react on errors.
        });
    };

    getGraphDetails();
  }, []);

  //   console.log("Graph CurrnetMonth", valuesObject);
  //   console.log("Graph CurrnetYear", currentYearDetails);

  const data = {
    labels,
    datasets: [
      {
        label: "Rejected",
        data: valuesObject?.rejected,
        backgroundColor: "#F0664E",
        barThickness: 20,
        barPercentage: 10.0,
        categoryPercentage: 10.0
      },
      {
        label: "On hold",
        data: valuesObject?.onHold,
        backgroundColor: "#FDBD5F",
        barThickness: 20,
         barPercentage: 10.0,
    categoryPercentage: 10.0
      },
      {
        label: "Shortlisted",
        data: valuesObject?.shortlisted,
        backgroundColor: "#98CD8D",
        barThickness: 20,
        barPercentage: 10.0,
        categoryPercentage: 10.0
      },
      {
        label: "Applications",
        data: valuesObject?.applications,
        backgroundColor: "#73CBFF",
        barThickness: 20,
        barPercentage: 10.0,
        categoryPercentage: 10.0
      },
    ],
  };

  return <div style={{width:"90%",height:"250px"}}><Bar options={options} data={data}  /></div>;
}
