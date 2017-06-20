<template>
  <div class="home_vontainer">
    <itemcontainet father-component="home" ></itemcontainet>
  </div>
</template>
<script>
   import itemcontainer from '../../components/itemcontainer'
   export default {
       name :'home',
       components:{
           itemcontainer
       },
       created(){

       }
   }
</script>
<style lang="less" scoped>
   .home_ontainer{

   }
</style>
