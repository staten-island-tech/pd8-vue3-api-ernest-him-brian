<template>
<<<<<<< Updated upstream
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
=======
  <div class="page">
    <h1>Dog Bites by Gender</h1>
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
>>>>>>> Stashed changes
}
</style>

<script>
const APIURL = 'https://data.cityofnewyork.us/resource/rsgh-akpg.json'

async function getData() {
  const response = await fetch(APIURL)
  const Info = await response.json()
  let females = 0
  Info.forEach((dog) => {
    if (dog.gender.includes('F')) {
      females++
    }
  })
  let males = 0
  Info.forEach((dog) => {
    if (dog.gender.includes('M')) {
      males++
    }
  })
  let unknown = 0
  Info.forEach((dog) => {
    if (dog.gender.includes('U')) {
      unknown++
    }
  })
  return { males, females, unknown }
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
          labels: ['Male', 'Female', 'Unknown'],
          datasets: [
            {
              label: 'Dog Bites by Gender',
              data: [data.males, data.females, data.unknown],
              backgroundColor: ['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.7)'],
              borderColor: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'],
              borderWidth: 3
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
