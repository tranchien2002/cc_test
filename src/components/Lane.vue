<template>
  <div>
    <h3>Lane {{ land_id }}</h3>
    <Hero
      role="LEADER"
      v-for="(hero, index) in lane"
      :key=index
      :land_id=land_id
      :hero_id=index
      :side=side
      :hero=hero
    />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'Lane',
  components: {
    Hero
  },
  props: {
    land_id: Number,
    side: String,
    name: String,
    lane: Object
  }
}
</script>
