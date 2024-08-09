<script setup>
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore();
const props =defineProps({
    tovars:{
        type:Object,
        required:true
    },
})





</script>
<template>
    <div class="card1 bg-white rounded-[8px] p-2 flex flex-col  text-[14px] p992:text-[18px]   p768:max-w-[225px]   p992:max-w-[270px] w-full shadow-md hover:shadow-orange-500">
      <img class="w-[165px] object-contain p-2 mx-auto  h-[100px] p480:h-[150px]  p992:h-[202px]  p480:w-[224px]     p992:w-[270px]" :src="tovars?.img" alt="">
       <div class="flex items-center mt-[10px] px-[10px] h-[50px]"><span class="text-[#490D2A] text-[12px] p992:text-[16px]">{{tovars?.name}}</span><img class="ml-auto mr-[2px]" src="@/assets/icon/star.svg" alt=""><span>{{tovars?.rating}}.0</span></div>
       <div class="flex items-center  px-[10px]"><span class="text-[#490D2A] text-[12px] p480:text-[14px] p992:text-[18px] font-semibold">{{tovars?.price}} so’m</span></div>
       <div class="flex items-center   px-[10px] mt-[5px]">
        <RouterLink :to="'/product/'+tovars?.id" class=" bg-[#F77F00] px-2 rounded-md text-[12px] p480:text-[14px] hover:scale-110 p992:text-[16px] font-semibold text-white">Batafsil</RouterLink>
        <button v-if="CounterStore.oneuser != null" @click="CounterStore.addbasket(tovars),CounterStore.totalbasketnumb()" class="ml-auto hover:scale-110" ><img src="@/assets/icon/evashopicon.svg" alt=""></button></div>
    </div>
</template>



<style lang="scss" scoped>

</style>