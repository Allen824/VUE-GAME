<template>
  <div class="moves">
    <div >YOUR MOVES:</div>
    <div :class="this.$store.state.myMoves.firstMove.type">
        <span>First Move:</span>
        <span>Name: {{this.$store.state.myMoves.firstMove.name}} | Type: {{this.$store.state.myMoves.firstMove.type}} |
        Damage: {{this.$store.state.myMoves.firstMove.power}} | Boost: {{this.$store.state.myMoves.firstMove.boost}} | 
        Healing: {{this.$store.state.myMoves.firstMove.healing}} | 
        Critical Chance: {{this.$store.state.myMoves.firstMove.criticalChance}}%</span>
    </div>
    <div :class="this.$store.state.myMoves.secondMove.type">
        <span>Second Move:</span>
        <span>Name: {{this.$store.state.myMoves.secondMove.name}} | Type: {{this.$store.state.myMoves.secondMove.type}} |
        Damage: {{this.$store.state.myMoves.secondMove.power}} | Boost: {{this.$store.state.myMoves.secondMove.boost}} | 
        Healing: {{this.$store.state.myMoves.secondMove.healing}} | 
        Critical Chance: {{this.$store.state.myMoves.secondMove.criticalChance}}%</span>
    </div>
    <div :class="this.$store.state.myMoves.thirdMove.type">
        <span>Third Move:</span>
        <span>Name: {{this.$store.state.myMoves.thirdMove.name}} | Type: {{this.$store.state.myMoves.thirdMove.type}} |
        Damage: {{this.$store.state.myMoves.thirdMove.power}} | Boost: {{this.$store.state.myMoves.thirdMove.boost}} | 
        Healing: {{this.$store.state.myMoves.thirdMove.healing}} | 
        Critical Chance: {{this.$store.state.myMoves.thirdMove.criticalChance}}%</span>
    </div>
    <div :class="this.$store.state.myMoves.fourthMove.type">
        <span>Fourth Move:</span>
        <span>Name: {{this.$store.state.myMoves.fourthMove.name}} | Type: {{this.$store.state.myMoves.fourthMove.type}} |
        Damage: {{this.$store.state.myMoves.fourthMove.power}} | Boost: {{this.$store.state.myMoves.fourthMove.boost}} | 
        Healing: {{this.$store.state.myMoves.fourthMove.healing}} | 
        Critical Chance: {{this.$store.state.myMoves.fourthMove.criticalChance}}%</span>
    </div>
    <div>ENEMY MOVES:</div>
    <div :class="this.$store.state.enemyMoves.firstMove.type">
        <span>First Move:</span>
        <span>Name: {{this.$store.state.enemyMoves.firstMove.name}} | Type: {{this.$store.state.enemyMoves.firstMove.type}} |
        Damage: {{this.$store.state.enemyMoves.firstMove.power}}</span>
    </div>
    <div :class="this.$store.state.enemyMoves.secondMove.type">
        <span>Second Move:</span>
        <span>Name: {{this.$store.state.enemyMoves.secondMove.name}} | Type: {{this.$store.state.enemyMoves.secondMove.type}} |
        Damage: {{this.$store.state.enemyMoves.secondMove.power}}</span>
    </div>
    <div :class="this.$store.state.enemyMoves.thirdMove.type">
        <span>First Move:</span>
        <span>Name: {{this.$store.state.enemyMoves.thirdMove.name}} | Type: {{this.$store.state.enemyMoves.thirdMove.type}} |
        Damage: {{this.$store.state.enemyMoves.thirdMove.power}}</span>
    </div>
    <div :class="this.$store.state.enemyMoves.fourthMove.type">
        <span>First Move:</span>
        <span>Name: {{this.$store.state.enemyMoves.fourthMove.name}} | Type: {{this.$store.state.enemyMoves.fourthMove.type}} |
        Damage: {{this.$store.state.enemyMoves.fourthMove.power}}</span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
    .moves {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-auto-rows: 1fr;
        height: 700px;
    }
    
    .moves div {
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: white;
    }

  .moves .D {
    background-color: rgb(232, 110, 18);
  }

  .moves .B {
    background-color: rgb(174, 4, 174)
  }

  .moves .H {
    background-color: rgb(60, 188, 60);
  }
</style>