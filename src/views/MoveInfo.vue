<template>
  <div class="moves">
    <div >YOUR MOVES:</div>
    <div v-for="move in myMoves" :key="move.id" :class="move.type">
        <span>Move {{move.id}}:</span>
        <span>Name: {{move.name}} | Type: {{move.type}} |
        Damage: {{move.power}} | Boost: {{move.boost}} | 
        Healing: {{move.healing}} | 
        Critical Chance: {{move.criticalChance}}%</span>
    </div>
    <div>ENEMY MOVES:</div>
    <div v-for="move in enemyMoves" :key="move.id" :class="move.type">
        <span>Move {{move.id + 1}}:</span>
        <span>Name: {{move.name}} | Type: {{move.type}} |
        Damage: {{move.power}} | Boost: {{move.boost}} | 
        Healing: {{move.healing}} | 
        Critical Chance: {{move.criticalChance}}%</span>
    </div>
</div>
</template>

<script>
import store from '../store/index.js';

export default {
    data() {
        return {
            myMoves: [...store.state.myMoves.moves],
            enemyMoves: [...store.state.enemyMoves.moves],
        }
    }
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