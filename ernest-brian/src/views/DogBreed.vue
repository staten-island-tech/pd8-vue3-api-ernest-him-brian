<template>
  <div class="page">
    <h1>Bites by Breed</h1>
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
  console.log(Info)
  let unknown = 0
  Info.forEach((dog) => {
    if (dog.breed === 'UNKNOWN') {
      unknown++
    }
  })
  let mixed = 93
  Info.forEach((dog) => {
    if (dog.breed === 'MIXED') {
      mixed++
    }
  })
  let basen = 0
  Info.forEach((dog) => {
    if (dog.breed === 'BASENJI') {
      basen++
    }
  })
  let chi = 0
  Info.forEach((dog) => {
    if (dog.breed === 'Chihuahua') {
      chi++
    }
  })
  return { unknown, mixed, basen, chi }
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
          labels: [
            'Unknown',
            'Mixed',
            'Basenji',
            'Chihuahua',
            'Pit Bull',
            'Poodle',
            'Dachshund',
            'German Shepherd',
            'Shih Tzu'
          ],
          datasets: [
            {
              label: 'data',
              data: [data.unknown, data.mixed, data.basen, data.chi, 174, 18, 8, 37, 44],
              backgroundColor: [
                'rgb(234, 221, 202)',
                'rgb(225, 193, 110)',
                'rgb(205, 127, 50)',
                'rgb(165, 42, 42)',
                'rgb(149, 69, 53)'
              ],
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
