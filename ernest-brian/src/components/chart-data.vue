<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
async function genderData() {
  async function CheckM() {}
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
genderData
export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Male', 'Female', 'Unknown'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true
      },
      data: false
    }
  },
  mounted() {
    this.getGenderData
  },
  methods: {
    getGenderData: async function () {
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
  }
}
</script>
