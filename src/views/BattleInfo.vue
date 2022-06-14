<template>
  <div class="sections">
    <div class="battleInfo">
      <div>
        <div class="title">WHAT IS IT:</div>
        <p>This is a turn based game where you and a computer opponent will take turns 
          using moves against eachother. The first player to lose all of their health loses.
        </p>
      </div>
      <div>
        <div class="title">HOW IT WORKS:</div>
          <p>When you are ready to play you will press the "BEGIN BATTLE" button on the home 
            menu. This will then start the battle. You have the first move and then the computer
            will move after you. You have access to 4 moves with varying impacts on yourself and 
            your opponent (see moves and move info section). Once a player has reached 0 health the 
            game will end.
          </p> 
      </div>
    </div>
    <div class="moveInfo">
      <div>
        <div class="title">MOVES:</div>
          <p class="mv"><span class="damage">Damage Moves:</span> Move will reduce the opponents health based on the indicated number</p>
          <p class="mv"><span class="boost">Boost Moves:</span> Move will increase your move damage based on indicated number</p>
          <p class="mv"><span class="healing">Healing Moves:</span> Move will replenish health based on indicated number</p>
          <p class="mv">Critical: Move has the chance to do double damage based on indicated percentage</p>
      </div>
      <div>
        <div class="title">MOVE INFO:</div>
        <p>See 
          <router-link to="moveInfo">
            Move Info
          </router-link>
          for more infomation
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .sections {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 500px;
    justify-content: center;
    padding: 5px;
  }

  .sections .battleInfo {
    border: 2px solid black;
    display: grid;
    grid-template-rows: 50% 50%;
    background-color: white;
  }

  .sections .moveInfo {
    border: 2px solid black;
    display: grid;
    grid-template-rows: 50% 50%;
    background-color: white;
  }
  
  .title {
    text-align: center;
    padding: 5px;
    background-color: black;
    color: white;
  }

  p {
    text-align: center
  }

  .mv {
    text-align: left;
  }
  .damage {
    color: rgb(232, 110, 18);
  }

  .boost {
    color: rgb(174, 4, 174)
  }

  .healing {
    color: rgb(60, 188, 60);
  }
</style>