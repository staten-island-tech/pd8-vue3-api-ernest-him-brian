<script>
import { Chart } from 'chart.js'
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
genderData()
</script>
<template>
  <div class="chartBox">
    <canvas id="myChart" width="400" height="400"></canvas>
    <h1>borough</h1>
  </div>
</template>
