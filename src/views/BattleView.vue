<template>
  <div class="game">
    <div>
      <div class="whosTurn">{{this.$store.state.turn.who}}</div>
    </div>
    <div class="enemy">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png">
      <div class="enemyHealth">
        <span v-if="this.$store.state.enemyPokemon.firstOne.currentHealth > 0">{{this.$store.state.enemyPokemon.firstOne.currentHealth}} / {{this.$store.state.enemyPokemon.firstOne.health}} Health</span>
        <span v-if="this.$store.state.enemyPokemon.firstOne.currentHealth <= 0">DEAD</span>
      </div>
    </div>
    <div class="you">
      <div class="myHealth">
        <span v-if="this.$store.state.myPokemon.firstOne.currentHealth > 0">{{this.$store.state.myPokemon.firstOne.currentHealth}} / {{this.$store.state.myPokemon.firstOne.health}} Health</span>
        <span v-if="this.$store.state.myPokemon.firstOne.currentHealth <= 0">DEAD</span>
      </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/241.png">
    </div>

  </div>
  <div class="desc" Id="desc">
    <span v-if="this.$store.state.display.currentMove == ''">Battle Log...</span>
    {{this.$store.state.display.currentMove}} {{this.$store.state.display.onScreen}}
  </div>
  <div class="moveSet">
    <button :class="this.$store.state.myMoves.firstMove.type" v-on:mouseover="hover1 = true" v-on:mouseleave="hover1 = false" 
    v-on:click="setDisplay(this.$store.state.myMoves.firstMove.power, this.$store.state.myMoves.firstMove.boost, this.$store.state.myMoves.firstMove.healing, 
    this.$store.state.myMoves.firstMove.criticalChance, this.$store.state.myMoves.firstMove.name)">
      <div>{{this.$store.state.myMoves.firstMove.name}}</div>
      <span v-if="hover1 && this.$store.state.myMoves.firstMove.power > 0">Damage: {{this.$store.state.myMoves.firstMove.power}}
      <span v-if="this.$store.state.myPokemon.currentBoost.boost > 0">(+{{this.$store.state.myPokemon.currentBoost.boost}} boost)</span></span>
      <span v-if="hover1 && this.$store.state.myMoves.firstMove.boost > 0">Boost: +{{this.$store.state.myMoves.firstMove.boost}} Damage</span>
      <span v-if="hover1 && this.$store.state.myMoves.firstMove.healing > 0">Healing: +{{this.$store.state.myMoves.firstMove.healing}}</span>
      <span v-if="hover1 && this.$store.state.myMoves.firstMove.critical">({{this.$store.state.myMoves.firstMove.criticalChance}}% to do x2)</span>
    </button>
    <button :class="this.$store.state.myMoves.secondMove.type" v-on:mouseover="hover2 = true" v-on:mouseleave="hover2 = false"
    v-on:click="setDisplay(this.$store.state.myMoves.secondMove.power, this.$store.state.myMoves.secondMove.boost, this.$store.state.myMoves.secondMove.healing, 
    this.$store.state.myMoves.secondMove.criticalChance, this.$store.state.myMoves.secondMove.name)">
        <div>{{this.$store.state.myMoves.secondMove.name}}</div>
        <span v-if="hover2 && this.$store.state.myMoves.secondMove.power > 0">Damage: {{this.$store.state.myMoves.secondMove.power}}
        <span v-if="this.$store.state.myPokemon.currentBoost.boost > 0">(+{{this.$store.state.myPokemon.currentBoost.boost}} boost)</span></span>
        <span v-if="hover2 && this.$store.state.myMoves.secondMove.boost > 0">Boost: +{{this.$store.state.myMoves.secondMove.boost}} Damage</span>
        <span v-if="hover4 && this.$store.state.myMoves.secondMove.healing > 0">Healing: +{{this.$store.state.myMoves.secondMove.healing}}</span>
        <span v-if="hover2 && this.$store.state.myMoves.secondMove.critical">({{this.$store.state.myMoves.secondMove.criticalChance}}% to do x2)</span>
     </button>
     <button :class="this.$store.state.myMoves.thirdMove.type" v-on:mouseover="hover3 = true" v-on:mouseleave="hover3 = false"
     v-on:click="setDisplay(this.$store.state.myMoves.thirdMove.power, this.$store.state.myMoves.thirdMove.boost, this.$store.state.myMoves.thirdMove.healing, 
     this.$store.state.myMoves.thirdMove.criticalChance, this.$store.state.myMoves.thirdMove.name)">
      <div >{{this.$store.state.myMoves.thirdMove.name}}</div>
      <span v-if="hover3 && this.$store.state.myMoves.thirdMove.power > 0">Damage: {{this.$store.state.myMoves.thirdMove.power}}
      <span v-if="this.$store.state.myPokemon.currentBoost.boost > 0">(+{{this.$store.state.myPokemon.currentBoost.boost}} boost)</span></span>
      <span v-if="hover3 && this.$store.state.myMoves.thirdMove.boost > 0">Boost: +{{this.$store.state.myMoves.thirdMove.boost}} Damage</span>
      <span v-if="hover4 && this.$store.state.myMoves.thirdMove.healing > 0">Healing: +{{this.$store.state.myMoves.thirdMove.healing}}</span>
      <span v-if="hover3 && this.$store.state.myMoves.thirdMove.critical">({{this.$store.state.myMoves.thirdMove.criticalChance}}% to do x2)</span>
     </button>
     <button :class="this.$store.state.myMoves.fourthMove.type" v-on:mouseover="hover4 = true" v-on:mouseleave="hover4 = false"
     v-on:click="setDisplay(this.$store.state.myMoves.fourthMove.power, this.$store.state.myMoves.fourthMove.boost, this.$store.state.myMoves.fourthMove.healing, 
     this.$store.state.myMoves.fourthMove.criticalChance, this.$store.state.myMoves.fourthMove.name)">
       <div>{{this.$store.state.myMoves.fourthMove.name}}</div>
       <span v-if="hover4 && this.$store.state.myMoves.fourthMove.power > 0">Damage: {{this.$store.state.myMoves.fourthMove.power}}
       <span v-if="this.$store.state.myPokemon.currentBoost.boost > 0">(+{{this.$store.state.myPokemon.currentBoost.boost}} boost)</span></span>
       <span v-if="hover4 && this.$store.state.myMoves.fourthMove.boost > 0">Boost: +{{this.$store.state.myMoves.fourthMove.boost}} Damage</span>
       <span v-if="hover4 && this.$store.state.myMoves.fourthMove.healing > 0">Healing: +{{this.$store.state.myMoves.fourthMove.healing}}</span>
       <span v-if="hover4 && this.$store.state.myMoves.fourthMove.critical">({{this.$store.state.myMoves.fourthMove.criticalChance}}% to do x2)</span>
     </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
    };
  },
  methods: {
    setDisplay(value, boost, heal, criticalChance, name) {
      var moveSet = document.querySelector(".moveSet");
      moveSet.style.visibility = "hidden";
      this.$store.state.turn.who = "TURN: IT IS THE ENEMY TURN"
      this.$store.state.display.currentMove = "You used " + name
      this.$store.state.display.onScreen = ""
      var crit = Math.floor(Math.random() * 100)
      crit += 1
      console.log(crit + " " + criticalChance)
      if(value > 0) {
        if(criticalChance > 0) {
          if(crit <= criticalChance) {
            value = value * 2
            this.$store.state.display.currentMove += " (CRITICAL HIT)"
          }
        }
        this.$store.state.display.onScreen += " and did " + value + " damage"
      }
      if(boost > 0) {
        this.$store.state.display.onScreen += " and boosted your damage by " + boost
        this.$store.commit('statBoost', boost)
      }
      if(heal > 0) {
        const dmg = this.$store.state.myPokemon.firstOne.health - this.$store.state.myPokemon.firstOne.currentHealth
        if(dmg >= heal) {
          this.$store.state.display.onScreen += " and healed " + heal + " health"
          this.$store.state.myPokemon.firstOne.currentHealth += heal
        }
        else {
          this.$store.state.display.onScreen = "and healed " + dmg + " health"
          this.$store.state.myPokemon.firstOne.currentHealth += dmg
        }
      }

      if(this.$store.state.enemyPokemon.firstOne.currentHealth > 0) {
        this.$store.state.enemyPokemon.firstOne.currentHealth -= value
      }
      if(this.$store.state.enemyPokemon.firstOne.currentHealth <= 0) {
        var healthDepleted = document.querySelector(".game .enemyHealth");
        healthDepleted.style.backgroundColor = "red";
        setTimeout(() => {
            this.$store.state.display.currentMove = this.$store.state.enemyPokemon.firstOne.name;
            this.$store.state.display.onScreen = " died!"
          }, 3000)
        setTimeout(() => {
          this.$router.push('/victory')
        }, 5000)
         return 
      }
      const pick = Math.floor(Math.random() * 4);
      setTimeout(() => {
        if(this.$store.state.enemyMoves.firstMove.id == pick) {
          this.$store.state.enemyPokemon.currentMove = this.$store.state.enemyMoves.firstMove
        }
        else if(this.$store.state.enemyMoves.secondMove.id == pick) {
          this.$store.state.enemyPokemon.currentMove = this.$store.state.enemyMoves.secondMove
        }
        else if(this.$store.state.enemyMoves.thirdMove.id == pick) {
          this.$store.state.enemyPokemon.currentMove = this.$store.state.enemyMoves.thirdMove
        }
        else if(this.$store.state.enemyMoves.fourthMove.id == pick) {
          this.$store.state.enemyPokemon.currentMove = this.$store.state.enemyMoves.fourthMove
        }

        name = this.$store.state.enemyPokemon.currentMove.name
        value = this.$store.state.enemyPokemon.currentMove.power

        this.$store.state.display.currentMove = "The enemy used " + name;
        if(value > 0)
          this.$store.state.display.onScreen = " and did " + value + " damage"
        else {
          this.$store.state.display.onScreen = "status"
        }

        if(this.$store.state.myPokemon.firstOne.currentHealth > 0) {
          this.$store.state.myPokemon.firstOne.currentHealth -= value
        }

        if(this.$store.state.myPokemon.firstOne.currentHealth <= 0) {
          var healthDepleted = document.querySelector(".game .myHealth");
          healthDepleted.style.backgroundColor = "red";
          setTimeout(() => {
            this.$store.state.display.currentMove = this.$store.state.myPokemon.firstOne.name;
            this.$store.state.display.onScreen = " died!"
          }, 3000)

          setTimeout(() => {
            this.$router.push('/defeat')
          }, 5000)
          return 
      
      }
      
      this.$store.state.turn.who = "TURN: IT IS YOUR TURN";
      moveSet.style.visibility = "visible";
      }, 4000)
    },
    moveCount() {
      return this.$store.state.items.counter
    },

    getColor(){
      return this.$store.state.myMoves.firstMove.type.name
    },

    incrementCat() {
      this.$store.commit('incrementCount')
    }
  }
  
}
</script>

<style>
  .detail {
    display: flex; 
    flex-direction: row;
    justify-content: space-evenly;
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
    background-color: rgb(60, 188, 60);
    border: 2px solid black;
    height: 20%;
    width: 20%;
  }

  .game .enemyHealth {
    background-color: rgb(60, 188, 60);
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
    color: black;
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