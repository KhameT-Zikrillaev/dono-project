<script setup>
import Card1 from "@/components/card/card1.vue";
import files from '@/views/datafiles.js'; 
const newProducts = files.products.filter(product => product.bop === true);

</script>
<template>
  <section class="section-2">
    <div class="container px-[10px]">
      <h2 class=" mt-[50px] p480:mt-[80px] p480:ml-[32px] text-[24px] p480:text-[40px] font-semibold">
        Ommabop tovarlar
      </h2>
      <RouterLink to="/productall" class="text-[#F77F00]  p992:hidden  p480:ml-[32px]">Barchasini ko'rish</RouterLink>
      <div
        class="container-grid mt-[20px] p480:mt-[40px] grid grid-cols-2 p480:grid-cols-3 p992:grid-cols-4 gap-1 p480:gap-4 justify-items-center"
      >
      
        <Card1 v-for="item in newProducts" :key="item" :tovars="item" />
   
      </div>
      <div class="max-w-screen-lg mx-auto">
    <RouterLink to="/productall" class="mt-[40px]  text-[20px] rounded-[10px] bg-[#F77F00] border max-w-[250px] h-[45px] w-full  text-white  hidden p992:flex justify-center items-center mx-auto">
        Barchasini ko'rish
    </RouterLink>
</div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
</style>