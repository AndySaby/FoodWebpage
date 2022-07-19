<template>
 <div class="nav">
    <div><img src="../assets/foodle.svg" alt=""></div>

    <div class="tabs">
     <p class="home">Home</p>
     <p class="search">Search</p>
    </div>
</div>
</template>



<script>
export default {
    name: 'NavBar'
}
</script>



<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 19px 120px;
}
.tabs{
    display: flex;
}
.home{
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -0.04em;
    color: #000000;
    margin-right: 72px;
}
.search{
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    color: #000000;
}
@media only screen and ( max-width:700px){
    .tabs{
        display: none;
    }
    .nav{
        padding: 19px 20px;
    }
}
</style>