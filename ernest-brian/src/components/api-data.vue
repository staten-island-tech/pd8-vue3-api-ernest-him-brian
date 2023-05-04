<script>
import Chart from 'chart.js/auto'
import { onMounted } from 'vue'
async function genderData() {
  async function CheckM() {
    const response = await fetch('https://data.cityofnewyork.us/resource/rsgh-akpg.json')
    const info = await response.json()
    let male = 0
    info.forEach((dog) => {
      if (dog.gender.includes('M')) {
        male++
      }
    })
    console.log(male)
    return male
  }
  async function CheckF() {
    const response = await fetch('https://data.cityofnewyork.us/resource/rsgh-akpg.json')
    const info = await response.json()
    let female = 0
    info.forEach((dog) => {
      if (dog.gender.includes('F')) {
        female++
      }
    })
    console.log(female)
    return female
  }
  async function CheckU() {
    const response = await fetch('https://data.cityofnewyork.us/resource/rsgh-akpg.json')
    const info = await response.json()
    let unknown = 0
    info.forEach((dog) => {
      if (dog.gender.includes('U')) {
        unknown++
      }
    })
    console.log(unknown)
    return unknown
  }
  CheckM()
  CheckF()
  CheckU()
}

async function genderChart() {
  const [male, female, unknown] = await genderData()
  const labels = ['Male', 'Female', 'Unknown']
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dog Bite by Gender Data',
        data: [30, 30, 30]
      }
    ]
  }

  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
  new Chart(document.getElementById('myChart'), config)
  onMounted(() => {
    new Chart(document.getElementById('myChart'), config)
  })
  genderChart()
}
</script>
<template>
  <div class="about">
    <canvas id="myChart"></canvas>
  </div>
</template>

<style scoped>
.about {
  max-width: 400px;
}
</style>
