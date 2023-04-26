<script setup>
import WelcomeItem from './WelcomeItem.vue'
import GraphIcon from './icons/IconCommunity.vue'
import DogIcon from './icons/IconDocumentation.vue'
import GenderIcon from './icons/IconEcosystem.vue'
import BoroughIcon from './icons/IconSupport.vue'
import ScissorsIcon from './icons/IconTooling.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <GraphIcon />
    </template>
    <template #heading>Graphs</template>
    Graphs that were used include: bar graphs, pie charts, and polar area charts.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DogIcon />
    </template>
    <template #heading>Dog Breed Data</template>
    In a bar graph we display the dog breeds that bit people.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <GenderIcon  />
    </template>
    <template #heading>Dog Gender Data</template>
    In a polar area chart we display the dog genders that bit people.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <BoroughIcon />
    </template>
    <template #heading>Borough Data</template>
    In a bar graph we display the boroughs that the incidents occured in.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ScissorsIcon />
    </template>
    <template #heading>Neuter Data</template>
    In a pie chart we display whether or not the dogs were neutered.
  </WelcomeItem>
</template>
