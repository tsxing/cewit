const arr = [
  [2007, 122],
  [2008, 139],
  [2009, 172],
  [2010, 296],
  [2011, 472],
  [2012, 680],
  [2013, 969],
  [2014, 1244],
  [2015, 1423],
  [2016, 1495],
];

const ctx = document.getElementById("chart");

const theChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: arr.map((v) => {
      // create array from column 1
      return v[0];
    }),
    datasets: [
      {
        label: "Phone Sales in millions",
        data: arr.map((v) => {
          // create array from column 2
          return v[1];
        }),
        borderWidth: 1,
        fill: true,
      },
    ],
  },
});
