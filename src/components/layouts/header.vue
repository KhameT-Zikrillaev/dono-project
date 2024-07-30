<script setup>
import navbar from "@/components/navbar/navbar.vue";
import { ref } from "vue";

const activesearch =ref(false)
</script>


<template>
    <header class="header relative"> 
          <navbar />

          <div class="container">
           <div class="header-content px-[15px] h-[80px] flex items-center gap-[10px] w-full justify-between">
                <RouterLink to="/" class="block w-[127px]"><img src="@/assets/images/logoheader.svg" alt=""></RouterLink> 
                <!-- ~~~~~~~~~~~~search~~~~~~~~~~ -->
                <div class="search transition-all  max-w-[350px]  p480:max-w-[550px] w-full flex absolute p480:relative" :class="{'active':activesearch}">
                  <input placeholder="izlash..." class="w-full pl-[10px]  h-[45px] border-[#808080]  border outline-none border-r-transparent rounded-tl-[10px] rounded-bl-[10px]" type="text">
                  <RouterLink to="/" class="bg-[#F77F00] flex items-center justify-center w-[57px] border border-[#F77F00]  h-[45px] p480:rounded-tr-[10px] p480:rounded-br-[10px]" ><img src="@/assets/icon/search.svg" alt=""></RouterLink>
                  <button @click="activesearch = false" class="bg-[#F77F00] flex items-center justify-center w-[57px] border border-[#F77F00]  h-[45px] rounded-tr-[10px] rounded-br-[10px] text-white p480:hidden" >X</button>
               </div>
                <!-- ~~~~~~~~~~~~Accounte~~~~~~~~ -->
                <div class="container-account flex items-center gap-[23px]">
            <button @click="activesearch = true" class="flex flex-col items-center p480:hidden" :class="{'hidden' :activesearch, 'flex': !activesearch}"> <img class="w-[30px] h-[30px]" src="@/assets/icon/mobilesearch.svg" alt="">Search</button>
            <RouterLink to="/" class="flex flex-col items-center"> <img class="w-[30px] h-[30px]" src="@/assets/icon/cart.svg" alt="">Korzinka</RouterLink>
            <RouterLink to="/" class="flex flex-col items-center"> <img class="w-[30px] h-[30px]" src="@/assets/icon/AccountUser.svg" alt="">Profil</RouterLink>
               </div>

       
    
           </div>
         

        </div>
    </header>
</template>



<style  scoped>
@media screen and (max-width:481px) {
    .search{
        top: -100px;
        left: 50%;
     transform: translate(-50%, -50%);
     padding: 0 15px;
    }
    .active{
        top: 100px;
    }
}


</style>