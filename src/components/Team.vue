<template>
  <div
    class="team-wrapper"
    v-bind:class="{ 'right-team':isRight }"
  >
    <span>{{ name }}</span><br />
    <span class="role">CRYSTAL HP</span><input
      class="info-input"
      id="crystal_hp_l"
    /><br />
    <Lane
      v-for="(lane, index) in team.lanes"
      :lane=lane
      :land_id=index
      :key=index
      :side=team.side
    />
  </div>
</template>

<script>
import Lane from '@/components/Lane.vue'

export default {
  name: 'Team',
  components: {
    Lane
  },
  computed: {
    isRight () {
      return this.team.side === 'right'
    }
  },
  props: {
    name: String,
    team: Object
  }
}
</script>
