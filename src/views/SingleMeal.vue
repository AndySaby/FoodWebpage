<template>
<div>
<div class="head">
   <navBar/>
   <div class="herohero">
      <div class="heroImage">
        <img :src="oneMeal.strMealThumb" alt="" class="foodImage">
      </div>

      <div>
        <p class="heroText">{{oneMeal.strMeal}}</p>

        <div class="hero">
           <div class="btn">
                <div class="icon">
                    <img src="@/assets/Vector.png" alt="">
                    <p class="iconP">Category</p>
               </div>
               <p class="btnP">{{oneMeal.strCategory}}</p>
          </div>

          <div class="btn">
                <div class="icon">
                    <img src="@/assets/area.png" alt="">
                    <p class="iconP">Area</p>
               </div>
               <p class="btnP">{{oneMeal.strArea}}</p>
          </div>

          <div class="btn">
                <div class="icon">
                    <img src="@/assets/tags.png" alt="">
                    <p class="iconP">Tags</p>
               </div>
               <p class="btnP">{{oneMeal.strTags}}</p>
          </div>
        </div>
                      
     </div>
   </div>
</div>
<div class="bodywrap">
    <div class="midSect">
        <p class="midSectHead">Ingredients</p>
       <div class="btnsWrapper">
           <button class="ingredientBtn"  v-for="btn in ingredientBtns" :key="btn.id" >{{btn.ingredient}}<span class="innerBtn">{{btn.measure}}</span></button>
       </div>
  </div>

   <div class="baseText">
        <p class="mainText">Instructions</p>
        <p v-for='(instruction,index) in instructions' :key='index' class="subText"> {{index + 1}}. {{instruction}}</p>
    </div>
  </div>
<h1>{{measuredIngredients}}</h1>
</div>
</template>


<script>
import navBar from '../components/NavBar.vue'
import { mapActions,mapGetters } from 'vuex'
export default {
    name: 'SingleMeal',
    components: {
        navBar
    },
    data () {
        return {
        activeTab: '',
         ingredientBtns:[],
         ingredients:[],
         measurements:[],
                                
        }
    },
    
    created(){
       const oneMealID = this.$route.params.id;
       this.getOneMeal(oneMealID);            
      
    },

    computed: {
        ...mapGetters({
            oneMeal:'getOneMeal',
        }),

        instructions(){
            let dish = this.$store.state.oneMeal.strInstructions;
            const instruction =  dish?.trim().split("\r\n");
            return instruction?.filter(element => element !== "");
           
        },
       measuredIngredients(){
           let dish = this.$store.state.oneMeal;
          Object.entries(dish).forEach(([key, value]) => {
          if (key.startsWith("strIngredient") && value.trim() !== "") {
  	       this.ingredients.push(value);
         }
          if (key.startsWith("strMeasure") && value.trim()!=='') {
  	       this. measurements.push(value);
         }
         }); 
         console.log(this.ingredients);
         console.log(this.measurements);

         this.ingredients.forEach((ing, index) => {
           this.ingredientBtns.push({
               ingredient: ing,
              measure: this.measurements[index],
           })
           });
           console.log(this.ingredientBtns);

       }
        
    },
    methods: {
        ...mapActions({
            getOneMeal:'getOneMeal'
        })
      
    },


}
</script>


<style scoped>
.head{
    background-image: url('../assets/heroImage.svg');
    width: 100%;
}
.heroText{
    font-weight: 700;
font-size: 40px;
line-height: 100%;
letter-spacing: -0.02em;
color: #000000;
}
.btn{
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.3);
   box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05), inset 1px 1px 2px rgba(255, 255, 255, 0.37);
   backdrop-filter: blur(94px);
   border-radius: 4px;
   margin-right: 8px;
   width: fit-content;
   height: 68px;
}
.btnP{
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
   color: #000000;
}
.hero{
    display: flex;
    padding-bottom: 46px;
    flex-wrap: wrap;
}
.herohero{
    display: flex;
    margin-left: 322px;
    flex-wrap: wrap;
}
.foodImage{
   width: 260px;
height: 241px;
border-radius: 8px;
box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
margin-right: 40px;
}
.icon{
    display: flex;
    align-items: center;
}
.icon img{
    width: 12px;
    height: 12px;
    margin-right: 6px;
}
.iconP{
    font-weight: 400;
font-size: 10px;
line-height: 100%;
letter-spacing: 0.09em;
text-transform: uppercase;
color: #954F1D;
}

.baseText{
margin-top: 72px;
}
.mainText{
    font-weight: 700;
font-size: 32px;
line-height: 100%;
letter-spacing: -0.02em;
color: #000000;

}
.subText{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 165%;
width: 589px;
}
.midSect{
    width: 590px;
   height: fit-content;
   background: rgba(255, 255, 255, 0.6);
box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1), inset 0px 4px 2px rgba(255, 255, 255, 0.65);
backdrop-filter: blur(24px);
border-radius: 10px;
margin-top: 92px;
padding-left: 32px;
}
.midSectHead{
    font-weight: 700;
font-size: 32px;
line-height: 100%;
letter-spacing: -0.02em;
color: #000000;
padding: 28px 0 0px 0;
}
.btnsWrapper{
display: flex;
flex-wrap: wrap;
height: fit-content;
gap: 11px 16px;
padding-bottom: 20px;
}
.ingredientBtn{
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #919191;
    border: 1px solid #919191;
    border-radius: 30px;
    width: fit-content;
    background-color: #ffff;
    Padding: 8px, 16px;
    height: 33px;
}
.ingredientBtn:hover{
    background-color:  #FF9F59;
    color: #000000;
}
.innerBtn{
    background-color: #919191;;
    color: #ffff;
    border-radius: 30px;
    margin-left: 8px;
   width: fit-content;
   padding: 1px 4px 1px 4px;
}
.ingredientBtn:hover span{
  color: #FF9F59;
  background-color: #ffff;
}
.bodywrap{
    margin: 0px 0 82px 425px;
}
@media only screen and (max-width:700px) {
.herohero{
    margin-left: 20px;
}
.bodywrap{
    margin: 0 0 82px 20px;
}
.midSect{
    width: 300px;
}
.subText{
    width: 300px;
}
.btn{
    margin: 20px;
}
.foodImage{
    margin-right: 0;
}
    
}
</style>