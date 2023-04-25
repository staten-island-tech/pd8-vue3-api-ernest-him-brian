<script>
let api = []
async function getDog() {
  const response = await fetch('https://data.cityofnewyork.us/resource/rsgh-akpg.json')
  const data = await response.json()
  api.value = data
  console.log(data)
}
getDog()
</script>
<template></template>
<style scoped></style>
