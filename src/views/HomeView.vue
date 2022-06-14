<template>
<div class="welcome">
  <div>
    Welcome!
  </div>
</div>
<div class="section">
  <button class="battle" v-on:click="$router.push('/battle')">
      <div>
        BEGIN BATTLE
      </div>
  </button>
  <button class="info" v-on:click="$router.push('/battleInfo')">
    <div>
      INFO
    </div>
  </button>
</div>
</template>

<script>
export default {

}
</script>

<style>

.welcome {
  background-color: white;
  text-align: center;
}
.section {
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  grid-gap: 5px;
  padding: 5px;
  height: 500px;
  justify-content: center;
}

.section button {
  color: white;
  font-size: 30px;
}

.section .battle {
  background-color: blue; 
  
}

.section .battle:hover {
  background-color: rgb(80, 80, 249);
}

.section .info {
  background-color: purple;
}

.section .info:hover {
  background-color: rgb(173, 1, 173);
}

</style>