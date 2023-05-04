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
}

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
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
onMounted(() => {
  const myChart = new Chart(document.getElementById('myChart'), config)
})
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
