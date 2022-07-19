import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    meals: [],
    oneMeal:{},
  },
  getters: {
    getMeals: state => state.meals,
    getOneMeal: state => state.oneMeal
  },
  mutations: {
    SET_MEALS(state, payload) {
      state.meals = payload;
    },
    SET_ONE_MEAL(state, payload) {
      state.oneMeal = payload
    }
  },
  actions: {
    async getMeals ({commit}, ingredient){
      try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`)
        commit('SET_MEALS', response.data.meals)
        console.log(response.data.meals);
        return response;
        
      }catch (error) {
        console.log(error)
      }
    },
    async getOneMeal({commit}, oneMealID){
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${oneMealID}`);
        commit("SET_ONE_MEAL", response.data.meals[0]);
        console.log(response.data.meals[0])
        return (response);

      }catch (error){
        console.log(error)
     }
    }
  },
  modules: {
  }
})
