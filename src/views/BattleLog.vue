<template>
  <div>
    <div class="log">
        
        <div class="logTitle">ENTRIES:</div>
        <div class="message" v-show="this.$store.state.display.entry == 0">There are no entries yet</div>
        <div class="message" v-for="message in this.$store.state.display.battleLog" :key="message">
            {{message}}
        </div>
        <button class="backButton" v-on:click="this.$router.push('/battle')">RETURN TO BATTLE</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .backButton {
        text-align: left;
        position: absolute;
        background-color: rgb(196, 196, 196);
        font-size: 15px;
    }

    .backButton:hover {
        background-color: rgb(146, 145, 145);
    }
    .log {
        border: 2px solid black;
    }
    .log .message {
        background-color: white;
        border: 1px solid black;
    }

    .log .logTitle {
        background-color: white;
        border: 1px solid black;
        text-align: center;
        font-size: 23px;
    }
</style>