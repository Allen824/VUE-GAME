import { createStore } from 'vuex'

export default createStore({
  state: {
    turn: {
      who: "TURN: IT IS YOUR TURN"
    },
    myPokemon: {
      currentBoost: {
        boost: 0
      },

      firstOne: {
        name: 'You',
        health: 100,
        currentHealth: 100  
      }
    },
    enemyPokemon: {
      firstOne: {
        name: 'The enemy',
        health: 100,
        currentHealth: 100  
      },
      currentMove: null
    },
    items: {
      counter: 0,
    },
    enemyMoves: {
      firstMove: {
        name: 'Chop',
        type: 'D',
        power: 15,
        id: 0
      },
      secondMove: {
        name: 'Mind Wave',
        type: 'D',
        power: 35,
        id: 1
      },
      thirdMove: {
        name: 'Lightning Roll',
        type: 'D',
        power: 20,
        id: 2
      },
      fourthMove: {
        name: 'Water Spear',
        type: 'D',
        power: 30,
        id: 3
      } 

    },
    myMoves: {
      firstMove: {
        name: 'Galaxy Blast',
        type: 'D',
        power: 20,
        boost: 0,
        healing: 0,
        critical: false,
        criticalChance: 0
      },
      secondMove: {
        name: 'Rock Hurl',
        type: 'D',
        power: 15,
        boost: 0,
        healing: 0,
        critical: true,
        criticalChance: 50
      },
      thirdMove: {
        name: 'Power Up',
        type: 'B',
        power: 0,
        boost: 5,
        healing: 0,
        critical: false,
        criticalChance: 0
      },
      fourthMove: {
        name: 'Healing Pulse',
        type: 'H',
        power: 0,
        boost: 0,
        healing: 40,
        critical: false,
        criticalChance: 0
      }
      
    },
    display: {
      currentMove: "",
      onScreen: ""
    }
  },
  getters: {
  },
  mutations: {
    incrementCount: state => {
      state.items.counter++;
    },

    statBoost: (state, boost) => {
      
      if(state.myMoves.firstMove.power > 0) {
        state.myMoves.firstMove.power += boost;
      }
      if(state.myMoves.secondMove.power > 0) {
        state.myMoves.secondMove.power += boost;
      }
      if(state.myMoves.thirdMove.power > 0) {
        state.myMoves.thirdMove.power += boost;
      }
      if(state.myMoves.fourthMove.power > 0) {
        state.myMoves.fourthMove.power += boost;
      }

      state.myPokemon.currentBoost.boost += boost
    }
  },
  actions: {
  },
  modules: {
  }
})
