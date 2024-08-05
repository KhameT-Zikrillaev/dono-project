<script setup>
import { useCounterStore } from "@/stores/counter";
import { useRouter } from "vue-router";
import Card1 from "@/components/card/card1.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
const CounterStore = useCounterStore() 
const router = useRouter()
CounterStore.scrollTop()
const notify = ()=>{
  toast.success("Muvaffaqiyatli tozalandi!",{
    autoClose:1000,
  });
}
if(CounterStore.oneuser === null){
router.push('/login')
}
const clearLovetovar = () => {
    notify()
  CounterStore.clearLovetovar();
};
</script>

<template>
    <div class="sevimlilar">
        <div class="container px-[10px]">
            <h1 class="text-[30px] p992:text-[48px] font-bold ">Sevimlilar</h1>
            <h3 v-if="CounterStore.oneuser?.lovetovar.length == 0" class="text-[#7C797C] mt-[15px] text-[22px]">Sevimlilarim bo'sh</h3>
            <div class="flex flex-wrap justify-center p768:justify-start gap-3">
                <div class="card flex flex-wrap" v-for="itemArray in CounterStore.oneuser?.lovetovar" :key="itemArray[0]?.id">
                  
                    <Card1 v-for="item in itemArray" :key="item.id" :tovars="item"></Card1>
                  
                </div>
            
            </div>



            <button v-if="CounterStore.oneuser?.lovetovar.length > 0" @click="clearLovetovar()" class="py-1 px-3 block bg-[#FF0000] mt-[25px] w-[120px] mx-auto rounded-lg text-white">Tozalash</button>
        </div>
    
    </div>
</template>



<style  scoped>

</style>