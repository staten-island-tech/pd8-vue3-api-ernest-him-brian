<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
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
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted() {
    this.loaded = false

    try {
      const { dogBite } = await fetch('https://data.cityofnewyork.us/resource/rsgh-akpg.json')
      this.chartdata = dogBite

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
