<template>
  <div>
    <span
      class="role"
      v-if="isRight"
    >{{role}} {{ hero_id }}</span>
    <span>HP</span><input
      class="info-input"
      v-model="hero.hp"
      @input="updateHeroAttr($event, 'hp')"
    />
    <span>ATK</span><input
      class="info-input"
      v-model="hero.atk"
    />
    <span>C_ATK</span><input
      class="info-input"
      v-model="hero.c_atk"
    />
    <span>DEF</span><input
      class="info-input"
      v-model="hero.def"
    />
    <span
      class="role"
      v-if="!isRight"
    >{{role}} {{ hero_id }}</span>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    role: String,
    hero: Object,
    side: String,
    land_id: Number,
    hero_id: String
  },
  computed: {
    isRight () {
      return this.side === 'right'
    }
  },
  methods: {
    updateHeroAttr (e, c) {
      console.log(c, this.side, this.land_id)
      console.log(this.hero)
      this.$store.commit('updateHeroAttr', {
        side: this.side,
        land_id: this.land_id,
        hero_id: this.hero_id,
        hero: Object.assign(this.hero, { [c]: e.target.value })
      })
    }
  }
}
</script>
