<template>
  <div class="page">
    <h1>Bites by Borough</h1>
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
  let bklyn = 0
  Info.forEach((dog) => {
    if (dog.borough.includes('Brooklyn')) {
      bklyn++
    }
  })

  return { bklyn }
}

import Chart from 'chart.js/auto'

export default {
  mounted() {
    getData().then((data) => {
      console.log(data.males)
      console.log(data.females)
      const myChart = new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
          labels: ['Brooklyn', 'Manhattan', 'Queens', 'The Bronx', 'Staten Island'],
          datasets: [
            {
              label: 'data',
              data: [data.bklyn, 4, 10, 7, 1],
              backgroundColor: ['yellow', 'green', 'orange', 'red', 'purple'],
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
