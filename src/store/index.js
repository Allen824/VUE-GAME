import { createStore } from 'vuex'

export default createStore({
  state: {
    turn: {
      who: "TURN: IT IS YOUR TURN"
    },
    myPokemon: {
      currentBoost: {
        boost: 0,
      },

      firstOne: {
        name: 'You',
        health: 100,
        currentHealth: 100 ,
        healthColor: 'rgb(60, 188, 60)' 
      }
    },
    enemyPokemon: {
      firstOne: {
        name: 'The enemy',
        health: 100,
        currentHealth: 100,  
        healthColor: 'rgb(60, 188, 60)'
      },
      currentMove: null
    },
    enemyMoves: {
      moves: [
        {
          name: 'Healing Mist',
          type: 'H',
          power: 0,
          boost: 0,
          healing: 25,
          criticalChance: 0,
          id: 0
        },
        {
          name: 'Mind Wave',
          type: 'D',
          power: 35,
          boost: 0,
          healing: 0,
          criticalChance: 0,
          id: 1
        },
        {
          name: 'Lightning Roll',
          type: 'D',
          power: 20,
          boost: 0, 
          healing: 0,
          criticalChance: 0,
          id: 2
        },
        {
          name: 'Water Spear',
          type: 'D',
          power: 30,
          boost: 0,
          healing: 0,
          criticalChance: 0,
          id: 3
        } 
      ] 
    },
    myMoves: {
      moves: [
        {
          name: 'Heat Blast',
          type: 'D',
          power: 20,
          boost: 0,
          healing: 0,
          criticalChance: 0,
          id: 1
        },
        {
          name: 'Rock Hurl',
          type: 'D',
          power: 15,
          boost: 0,
          healing: 0,
          criticalChance: 50,
          id: 2
        },
        {
          name: 'Power Up',
          type: 'B',
          power: 0,
          boost: 5,
          healing: 0,
          criticalChance: 0,
          id: 3
        },
        {
          name: 'Healing Pulse',
          type: 'H',
          power: 0,
          boost: 0,
          healing: 30,
          criticalChance: 0,
          id: 4
        }
      ]
    },
    display: {
      currentMove: "",
      onScreen: "",
      battleLog: [],
      entry: 0
    }
  },
  getters: {
  },
  mutations: {
    statBoost: (state, boost) => {
      for(let i = 0; i < state.myMoves.moves.length; i++) {
        if(state.myMoves.moves[i].power > 0) {  
          state.myMoves.moves[i].power += boost
        }
      } 
      state.myPokemon.currentBoost.boost += boost
    } 
    
  },
  actions: {
  },
  modules: {
  }
})
