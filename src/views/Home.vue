<template>
  <div>
    <div class="actions">
      <span
        onClick="show_options()();"
        class="toggle-btn"
      >TOGGLE INFO</span>
      <span
        onClick="set_options();"
        class="toggle-btn"
      >SET INFO</span>
      <span
        onClick="play_turn();"
        class="toggle-btn"
      >PLAY TURN</span>
    </div>
    <div id="options">
      <Team
        name="Japan"
        :team=teams.left
      />
      <Team
        name="Vietnam"
        :side=true
        :team=teams.right
      />
      <div style="clear:both;text-align:center;"></div>
      <hr>
      <span>TIMES OF ATK RAISE ON ULTIMATE</span><input
        class="info-input"
        id="atk_raise_input"
      />
      <span>TIMES OF DEF RAISE ON DEFENSE</span><input
        class="info-input"
        id="def_raise_input"
      />
    </div>
    <div class="lane-info-wrapper">
      <div
        id="lane-info-title"
        class="lane-info"
      >NEXT TURN: PREPARING</div>
      <div class="team-wrapper right-team">
        <span
          class="lane-l-info"
          id="l-hp"
        >HP x</span><br />
        <span
          class="lane-l-info"
          id="l-atk"
        >ATK x</span><br />
        <span
          class="lane-l-info"
          id="l-def"
        >DEF x</span><br />
        <span
          class="lane-l-info"
          id="l-cmd"
        >CMD x</span><br />
        <span
          class="lane-l-info"
          id="l-c_atk"
        >C_ATK x</span>
      </div>
      <div class="team-wrapper">
        <span
          class="lane-r-info"
          id="r-hp"
        >x HP</span><br />
        <span
          class="lane-r-info"
          id="r-atk"
        >x ATK</span><br />
        <span
          class="lane-r-info"
          id="r-def"
        >x DEF</span><br />
        <span
          class="lane-r-info"
          id="r-cmd"
        >x CMD</span><br />
        <span
          class="lane-r-info"
          id="r-c_atk"
        >x C_ATK</span>
      </div>
      <div style="clear:both;text-align:center;"></div>
    </div>
    <div style="text-align: center;">
      <canvas
        id="gameCanvas"
        width="1280"
        height="400"
      ></canvas>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Team from '@/components/Team.vue'

export default {
  name: 'home',
  components: {
    Team
  },
  data: function () {
    return {
      teams: {
        left: {
          lanes: [
            {
              0: { hp: 100, atk: 100, c_atk: 100, def: 100 },
              1: { hp: 102, atk: 102, c_atk: 102, def: 102 },
              2: { hp: 130, atk: 130, c_atk: 130, def: 130 }
            }
          ],
          crystalHP: 100,
          side: 'left',
          name: 'Japan'
        },
        right: {
          lanes: [
            {
              0: { hp: 100, atk: 100, c_atk: 100, def: 100 },
              1: { hp: 102, atk: 102, c_atk: 102, def: 102 },
              2: { hp: 130, atk: 130, c_atk: 130, def: 130 }
            }
          ],
          crystalHP: 100,
          side: 'right',
          name: 'Vietnam'
        }
      }
    }
  }
}
</script>
