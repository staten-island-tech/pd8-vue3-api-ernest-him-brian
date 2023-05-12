<template>
  <div class="page">
    <h1>Bites by Neuter</h1>
    <div class="chart">
      <canvas id="myChart" width="200" height="200"></canvas>
    </div>
  </div>
</template>

<style scoped>
.page {
  text-align: center;
}
.chart {
  max-width: 700px;
  max-height: 700px;
}
</style>

<script>
const APIURL = 'https://data.cityofnewyork.us/resource/rsgh-akpg.json'

async function getData() {
  const response = await fetch(APIURL)
  const Info = await response.json()
  let nfalse = 0
  Info.forEach((dog) => {
    if (dog.spayneuter === false) {
      nfalse++
    }
  })
  let ntrue = 0
  Info.forEach((dog) => {
    if (dog.spayneuter === true) {
      ntrue++
    }
  })
  return { nfalse, ntrue }
}

import Chart from 'chart.js/auto'

export default {
  mounted() {
    getData().then((data) => {
      console.log(data.males)
      console.log(data.females)
      const myChart = new Chart(document.getElementById('myChart'), {
        type: 'doughnut',
        data: {
          labels: ['Neuter', 'Not Neuter'],
          datasets: [
            {
              label: 'data',
              data: [data.ntrue, data.nfalse],
              backgroundColor: ['rgba(0,100, 0, 1)', 'rgba(100, 0, 0, 1)'],
              borderColor: ['rgba(0, 0, 0, 1)']
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      })
    })
  }
}
</script>
