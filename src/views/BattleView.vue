<template>
  <div class="game">
    <div>
      <div class="whosTurn">{{this.$store.state.turn.who}}</div>
    </div>
    <div class="enemy">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png">
      <div class="enemyHealth" :style="{background: this.$store.state.enemyPokemon.firstOne.healthColor}">
        <span v-if="this.$store.state.enemyPokemon.firstOne.currentHealth > 0">{{this.$store.state.enemyPokemon.firstOne.currentHealth}} / {{this.$store.state.enemyPokemon.firstOne.health}} Health</span>
        <span v-if="this.$store.state.enemyPokemon.firstOne.currentHealth <= 0">DEAD</span>
      </div>
    </div>
    <div class="you">
      <div class="myHealth" :style="{background: this.$store.state.myPokemon.firstOne.healthColor}">
        <span v-if="this.$store.state.myPokemon.firstOne.currentHealth > 0">{{this.$store.state.myPokemon.firstOne.currentHealth}} / {{this.$store.state.myPokemon.firstOne.health}} Health</span>
        <span v-if="this.$store.state.myPokemon.firstOne.currentHealth <= 0">DEAD</span>
      </div>
      <div><span class="boostBar" v-show="this.$store.state.myPokemon.currentBoost.boost > 0">+{{this.$store.state.myPokemon.currentBoost.boost}} Damage</span><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/241.png"></div>
    </div>

  </div>
  <div class="desc" Id="desc">
    <span v-if="this.$store.state.display.currentMove == ''">Battle Log...</span>
    <div>{{this.$store.state.display.currentMove}} {{this.$store.state.display.onScreen}}</div>
    <button class="battleLog" v-on:click="this.$router.push('/BattleLog')"> View Full Battle Log</button>
  </div> 

  <div class="moveSet">
    <button v-for="move in myMoves" :key="move.id" v-on:mouseover="hover = true" v-on:mouseout="hover = false"
    :class="move.type" v-on:click="setDisplay(move.power, move.boost, move.healing, move.criticalChance, move.name)">
      <div>{{move.name}}</div>
      <span v-if="move.power > 0" v-show="hover == true">Damage: {{move.power}}
      <span v-if="this.$store.state.myPokemon.currentBoost.boost > 0">(+{{this.$store.state.myPokemon.currentBoost.boost}} boost)</span></span>
      <span v-if="move.boost > 0" v-show="hover == true">Boost: +{{move.boost}} damage</span>
      <span v-if="move.healing > 0" v-show="hover == true">Healing: +{{move.healing}} health</span>
      <span v-if="move.criticalChance > 0" v-show="hover == true">({{move.criticalChance}}% chance to do x2)</span> 
    </button>
  </div>
</template>

<script>
import store from '../store/index.js';

export default {
  data() {
    return {
      myMoves: [...store.state.myMoves.moves],
      enemyMoves: [...store.state.enemyMoves.moves],
      hover: false
    }
  },
  methods: {
    setDisplay(value, boost, heal, criticalChance, name) {
      var moveSet = document.querySelector(".moveSet");
      moveSet.style.visibility = "hidden";
      store.state.turn.who = "TURN: IT IS THE ENEMY TURN"
      store.state.display.currentMove = "You used " + name
      store.state.display.onScreen = ""
      var crit = Math.floor(Math.random() * 100)
      crit += 1
      if(value > 0) {
        if(criticalChance > 0) {
          if(crit <= criticalChance) {
            value = value * 2
            store.state.display.currentMove += " (CRITICAL HIT)"
          }
        }
        store.state.display.onScreen += " and did " + value + " damage"
      }
      if(boost > 0) {
        store.state.display.onScreen += " and boosted your damage by " + boost
        store.commit('statBoost', boost)
      }
      if(heal > 0) {
        const dmg = store.state.myPokemon.firstOne.health - store.state.myPokemon.firstOne.currentHealth
        if(dmg >= heal) {
          store.state.display.onScreen += " and healed " + heal + " health"
          store.state.myPokemon.firstOne.currentHealth += heal
        }
        else {
          store.state.display.onScreen = "and healed " + dmg + " health"
          store.state.myPokemon.firstOne.currentHealth += dmg
        }
      }

      store.state.display.battleLog[store.state.display.entry++] = store.state.display.currentMove + store.state.display.onScreen

      if(store.state.myPokemon.firstOne.currentHealth > (store.state.myPokemon.firstOne.health * 0.5)) {
        store.state.myPokemon.firstOne.healthColor = 'rgb(60, 188, 60)'
      }
      
      if(store.state.enemyPokemon.firstOne.currentHealth > 0) {
        store.state.enemyPokemon.firstOne.currentHealth -= value
        if(store.state.enemyPokemon.firstOne.currentHealth <= (store.state.enemyPokemon.firstOne.health * 0.5) && store.state.enemyPokemon.firstOne.currentHealth > 0) {
          store.state.enemyPokemon.firstOne.healthColor = 'yellow'
        }
      }
      if(store.state.enemyPokemon.firstOne.currentHealth <= 0) {
        store.state.enemyPokemon.firstOne.healthColor = 'red'
        setTimeout(() => {
            store.state.display.currentMove = store.state.enemyPokemon.firstOne.name;
            store.state.display.onScreen = " died!"
          }, 3000)
        setTimeout(() => {
          this.$router.push('/victory')
        }, 5000)
         return 
      }
      const pick = Math.floor(Math.random() * 4);
      setTimeout(() => {
          for(let i = 0; i < store.state.enemyMoves.moves.length; i++) {
            if(store.state.enemyMoves.moves[i].id == pick) {
              store.state.enemyPokemon.currentMove = store.state.enemyMoves.moves[i]
            }
          }
        
        name = store.state.enemyPokemon.currentMove.name
        value = store.state.enemyPokemon.currentMove.power
        heal = store.state.enemyPokemon.currentMove.healing
        store.state.display.onScreen = ""
        
        store.state.display.currentMove = "The enemy used " + name;
        if(value > 0) {
          store.state.display.onScreen = " and did " + value + " damage"
        }

        if(heal > 0) {
          const dmg = store.state.enemyPokemon.firstOne.health - store.state.enemyPokemon.firstOne.currentHealth
          if(dmg >= heal) {
            store.state.display.onScreen += " and healed " + heal + " health"
            store.state.enemyPokemon.firstOne.currentHealth += heal
          }
          else {
            store.state.display.onScreen = " and healed " + dmg + " health"
            store.state.enemyPokemon.firstOne.currentHealth += dmg
          }
        }

        store.state.display.battleLog[store.state.display.entry++] = store.state.display.currentMove + store.state.display.onScreen

        if(store.state.enemyPokemon.firstOne.currentHealth > (store.state.enemyPokemon.firstOne.health * 0.5)) {
          store.state.enemyPokemon.firstOne.healthColor = 'rgb(60, 188, 60)'
        }

        if(store.state.myPokemon.firstOne.currentHealth > 0) {
          store.state.myPokemon.firstOne.currentHealth -= value
          if(store.state.myPokemon.firstOne.currentHealth <= (store.state.myPokemon.firstOne.health * 0.5) && store.state.myPokemon.firstOne.currentHealth > 0) {
           store.state.myPokemon.firstOne.healthColor = 'yellow'
           
          }
        }

        if(store.state.myPokemon.firstOne.currentHealth <= 0) {
          store.state.myPokemon.firstOne.healthColor = 'red'
          setTimeout(() => {
            store.state.display.currentMove = store.state.myPokemon.firstOne.name;
            store.state.display.onScreen = " died!"
          }, 3000)

          setTimeout(() => {
            this.$router.push('/defeat')
          }, 5000)
          return 
      
      }
      
      store.state.turn.who = "TURN: IT IS YOUR TURN";
      moveSet.style.visibility = "visible";
      }, 3000)
    },
  }
  
}
</script>

<style>
  .battleLog {
    background-color: rgb(196, 196, 196);
  }

  .battleLog:hover {
    background-color: rgb(146, 145, 145);
  }

 .boostBar {
    position: absolute;
    background-color: rgb(174, 4, 174);
    text-align: end;
    font-size: 15px;
    padding: 1px;
    border: 1px solid black;
  }
  .detail {
    display: flex; 
    flex-direction: row;
  }

  .detail div {
    background-color: white
  }
  .game {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 280px;
    background-position-y: top;
    background: url(https://www.itl.cat/pngfile/big/207-2078658_ayturk-digitalart-galaxy-4k-space-desktop-backgrounds.jpg);
  }

  .game .enemy {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .game .you {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .game .myHealth  { 
    border: 2px solid black;
    height: 20%;
    width: 20%;
  }

  .game .enemyHealth {
    border: 2px solid black;
    height: 20%;
    width: 20%;
  }
  
  .game div img {
    height: 100%
  }

  .game .whosTurn {
    background-color: white;
    width: 40%;
    border: 3px solid black;
  }

  .desc {
    width: 99.5%;
    background-color: white;
    height: 100px;
    border: 3px solid black;
    align-items: center;
  }

  .desc span {
    opacity: 50%;
  }

  .moveSet {
    padding-top: 10px;
    display: grid;
    grid-template-columns: 200px 200px;
    grid-auto-rows: minmax(70px, auto);
    grid-gap: 5px;
    text-align: center;
    justify-content: center;
    padding-bottom: 10px;
  }

  .moveSet button {
    padding: 10px;
    border: 5px solid black;
  }

  .moveSet button:hover {
    background-color: white;
    font-size: 80%
  }

  .moveSet .D {
    background-color: rgb(232, 110, 18);
  }

  .moveSet .B {
    background-color: rgb(174, 4, 174)
  }

  .moveSet .H {
    background-color: rgb(60, 188, 60);
  }
</style>