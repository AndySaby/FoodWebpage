<template>
  <div class="home">
  <div class="heroSection">
   <navBar/>
   <div class="textWrap">
   <p class="text">What ingredients do you have?</p>

   <div class="form">
        <img src="../assets/Group.png" alt="" class="icon" >
        <input type="text" placeholder="noodles" v-model="ingredient">
   </div>

   </div>
  </div>

  <div class="cards">
   <div class="card" v-for="meal in meals" :key="meal" >
      <div class="image"><router-link :to="'/search/' + meal.idMeal"><img :src="meal.strMealThumb" alt="" class="imageMeal"></router-link></div>
      <p class="imageP">{{meal.strMeal}}</p>
      
   </div>
   
  </div>
 </div>
</template>

<script>
import navBar from '../components/NavBar.vue'
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'SearchView',
  components: {
    navBar
  },
  data(){
    return{
      ingredient: '',
      
    }
  },
  mounted() {
    this.getMeals(this.ingredient);
    },
    computed: {
    ...mapGetters({
      meals: "getMeals"
    }),
    
  },

  methods: {
    ...mapActions({
      getMeals: "getMeals"
    }),
  },
  
  watch: {
    ingredient(newValue) {
      this.getMeals(newValue);
    }
  },
}
</script>

<style scoped>
.heroSection{
  background-image: url('../assets/heroImage.svg');
  width: 100%;
}
.textWrap{
  padding-bottom: 84px;
}
.form{
  width: 576px;
background: #FFFFFF;
box-shadow: 0px 14px 24px -8px rgba(182, 84, 14, 0.11);
border-radius: 11px;
display: flex;
align-items: center;
height: 52px;
margin: 0 auto;
}
.form input{
  outline: none;
}
.text{
  font-weight: 700;
font-size: 32px;
line-height: 100%;
letter-spacing: -0.04em;
color: #000000;
text-align: center ;
}
.icon{
  margin: 0 27px 0 18px;
}
input{
  border: none;
}
input ::placeholder{
  font-weight: 500;
font-size: 24px;
line-height: 100%;
color: #000000;

}

.cards{
  display: flex;
  flex-wrap: wrap;
  gap:50px;
  margin: 104px 0 0 138px;
}
.card{
  width: 285px;
  height: 270px;
  background: #FFFFFF;
  box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
 }
.image{
  width: 248px;
  height: 229px;
  /* background: #FBFBFB; */
box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
border-radius: 8px;
}
.imageMeal{
  width: 248px;
  height: 229px;
  border-radius: 8px;
}
.imageP{
  font-weight: 400;
font-size: 18px;
line-height: 100%;
color: #000000;
}

/* media query */
 @media only screen and (max-width: 700px){
  .form{
    width: 370px;
  }
  .text{
    font-size: 24px;
  }
  .cards{
    margin-left: 50px ;
  }
}
</style>
