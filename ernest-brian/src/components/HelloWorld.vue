<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>
      Our website is about Dog Bites in NYC. We have different graphs to portray information on what dog breeds and what genders bit people.
    </h2>
    <br>
    <h3>
      This is the API we pulled this information from.
      <a href="https://data.cityofnewyork.us/resource/rsgh-akpg.json" target="_blank" rel="noopener">Dog Bite Info API</a>
      <br>
      This is the overall website to all information on events in NYC.
      <a href="https://opendata.cityofnewyork.us/" target="_blank" rel="noopener">NYC Open Data</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
