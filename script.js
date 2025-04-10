const arr = [
  122,// starts at 07
  139,
  172,
  296,
  472,
  680,
  969,
  1244,
  1423,
  1495
];

const arr2 = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  1495,// this is a real datapoint
  1259.92,// starts at 17
  1368.31,
  1476.70,
  1585.10,
  1693.49,
  1801.88,
  1910.28,
  2018.67,
  2127.06,
  2235.45,
  2343.85,
  2452.24,
  2560.63,
  2669.02,
];

const sevenToSixteen = Object.freeze([2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]);
const sevenToThirty = Object.freeze(sevenToSixteen.concat([2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]));

const ctx = document.getElementById("chart");
const ctx2 = document.getElementById("chart2");
const ctx3 = document.getElementById("chart3");

const theChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: sevenToSixteen,
    datasets: [
      {
        label: "Phone Sales in millions",
        data: arr,
        borderWidth: 1,
        fill: true,
      },
    ],
  },
});

const theChartPart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: sevenToThirty,
    datasets: [
      {
        label: "Phone Sales in millions",
        data: arr,
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Predicted Phone Sales in millions",
        data: arr2,
        borderWidth: 1,
        fill: true,
      },
    ],
  },
});

const theChartPart3 = new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: sevenToSixteen,
    datasets: [
      {
        label: "Phone Sales from 2007 to 2016",
        data: arr,
        borderWidth: 1,
      },
    ],
  },
});