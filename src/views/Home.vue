<template>
  <div>
    <div class="actions">
      <span onClick="show_options()();" class="toggle-btn">TOGGLE INFO</span>
      <span onClick="set_options();" class="toggle-btn">SET INFO</span>
      <span onClick="play_turn();" class="toggle-btn">PLAY TURN</span>
    </div>
    <div id="options">
      <Team name="Japan" :team="teams.left"/>
      <Team name="Vietnam" :side="true" :team="teams.right"/>
      <div style="clear:both;text-align:center;"></div>
      <hr>
      <span>TIMES OF ATK RAISE ON ULTIMATE</span>
      <input class="info-input" id="atk_raise_input">
      <span>TIMES OF DEF RAISE ON DEFENSE</span>
      <input class="info-input" id="def_raise_input">
    </div>
    <div class="lane-info-wrapper">
      <div id="lane-info-title" class="lane-info">NEXT TURN: PREPARING</div>
      <div class="team-wrapper right-team">
        <span class="lane-l-info" id="l-hp">HP x</span>
        <br>
        <span class="lane-l-info" id="l-atk">ATK x</span>
        <br>
        <span class="lane-l-info" id="l-def">DEF x</span>
        <br>
        <span class="lane-l-info" id="l-cmd">CMD x</span>
        <br>
        <span class="lane-l-info" id="l-c_atk">C_ATK x</span>
      </div>
      <div class="team-wrapper">
        <span class="lane-r-info" id="r-hp">x HP</span>
        <br>
        <span class="lane-r-info" id="r-atk">x ATK</span>
        <br>
        <span class="lane-r-info" id="r-def">x DEF</span>
        <br>
        <span class="lane-r-info" id="r-cmd">x CMD</span>
        <br>
        <span class="lane-r-info" id="r-c_atk">x C_ATK</span>
      </div>
      <div style="clear:both;text-align:center;"></div>
    </div>
    <div style="text-align: center;">
      <canvas id="gameCanvas" width="1280" height="400"></canvas>
    </div>
  </div>
</template>
<script src="https://code.createjs.com/easeljs-0.8.2.min.js"></script>
<script>
// @ is an alias to /src
import Team from "@/components/Team.vue";
import * as createjs from "createjs-module";
import character_json from "@/assets/character.json";

export default {
  name: "home",
  components: {
    Team
  },
  mounted: function() {
    this.stage = new createjs.Stage("gameCanvas");
    let character_sheet = new createjs.SpriteSheet({
      images: character_json.character_sheet,
      frames: { height: 707, width: 587, count: 32 },
      animations: {
        idle: [0, 9],
        run: [10, 19],
        attack: [20, 29, "idle"],
        attacked_wait: [30]
      }
    });

    // debugger;

    let character_dead = new createjs.SpriteSheet({
      images: character_json.character_dead,
      frames: { height: 751, width: 944, count: 11 },
      animations: { dead: [0, 9, "done"], done: [10] }
    });

    let character = new createjs.Sprite(character_sheet);
    character.framerate = 25;
    character.gotoAndPlay("run");
    this.stage.addChild(character);
    character.scaleX = 0.15;
    character.scaleY = 0.15;
    character.x = 100;
    character.y = 100;

    // let text = new createjs.Text(100, "100px Menlo", "#e74c3c");
    // this.stage.addChild(text);

    // var circle = new createjs.Shape();
    // circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    // circle.x = 100;
    // circle.y = 100;
    // this.stage.addChild(circle);

    // createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);
    this.stage.update();
    // this.stage.update();
    // createjs.Ticker.setFPS(60);
    // createjs.Ticker.addEventListener("tick", stage);
  },
  data: function() {
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
          side: "left",
          name: "Japan"
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
          side: "right",
          name: "Vietnam"
        }
      }
    };
  }
};
</script>
