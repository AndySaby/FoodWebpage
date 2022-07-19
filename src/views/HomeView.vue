<template>
  <div class="main">
     <navBar/>

 <div class="body">
   <div class="textContainer">
   <p class="headText">Find recipes for the ingredients you have on hand</p>
   <button class="search" @click="this.$router.push({name: 'SearchView'})">Search Now</button>
   </div>

   <div class="imageBox">
   <img src="../assets/foodDish.svg" alt="" class="bigImage">
   <div class="blackBox"></div>
   </div>
 </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from '@/components/NavBar.vue'


export default {
  name: 'HomeView',
  components: {
    navBar
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main{
 background: #E98237;
  height: 100%;
  z-index: -1;

}
.search{
  width: 244px;
height: 72px;
background: #000000;
box-shadow: 0px 16px 40px rgba(192, 86, 10, 0.4);
border-radius: 8px;
color: white;
margin-top: 32px;
}
.headText{
  width: 442px;
height: 186px;
font-weight: 700;
font-size: 48px;
line-height: 130%;
letter-spacing: -0.04em;
color: #000000;
}
.body{
  display: flex;
  align-items: center;
  padding: 88px 0px 453px 120px;
}
.blackBox{
  background: #000000;
  width: 392px;
  height: 151px;
  position: relative;
  left: 550px;
top: 150px;
  /* z-index: -1; */
}
.imageBox{
  display: flex;
  align-items: center;
}
.bigImage{
  position: absolute;
  left: 800px;
  top: 161px;
  z-index: 2;
}

@media only screen and (max-width:700px){
  .headText{
    font-size: 35px;
    width: 80%;
  
  }
  .body{
    padding: 20px;
    display: block;
  }
  .search{
    width: 60%;
    margin: 0 0 20rem 0;
  }
  .bigImage{
    width: 70%;
    height: 70%;
    top: 350px;
    left: 4%;
  }
  .blackBox{
    left: 20%;
    width: 200px;
    height: 100px;
    top: 2%;

  }
}
</style>
