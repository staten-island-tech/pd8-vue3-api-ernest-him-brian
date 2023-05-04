<template>
  <BarChart class="graph" />
</template>

<script>
import BarChart from '../components/chart-data.vue'

export default {
  name: 'App',
  components: { BarChart }
}
</script>
<style scoped>
.graph {
  max-width: 500px;
}
</style>
