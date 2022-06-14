<template>
  <nav>
    <button v-on:click="reloadPage()">
      <div class="Title">
        Game
      </div> 
    </button>
  </nav>
  <router-view/>
</template>

<script>


export default {
  methods: {
    async reloadPage() {
      await this.$router.push('/');
      window.location.reload()
    }
  }
}

</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Fira Sans', sans-serif;
}

body {
  background-color: grey;
}
nav {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  background-color: red;
  color: black;
  border: 3 px solid black;
}

button {
  background-color: black;
}

button:hover {
  background-color: rgb(100, 28, 28)
}
.Title {
  font-size: 25px;
  color: white;
  border: 1px solid white;
}

</style>
