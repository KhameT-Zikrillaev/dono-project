<script setup>
import { useCounterStore } from "@/stores/counter";
import { useRouter } from "vue-router";
const CounterStore = useCounterStore() 
const router = useRouter()
CounterStore.scrollTop()
if(CounterStore.oneuser === null){
router.push('/login')
}

setTimeout(() => {
    CounterStore.oneuser.tovar =[];
    router.push('/');
    CounterStore.totalbasketnumb()
  }, 3000);

</script>


<template>
    <div class="arizaqabul">
     <div class="container px-[10px]  p480:px-[50px] p992:px-[100px]">
           <div class="container-info flex flex-col justify-center gap-[10px] items-center">
            <img src="@/assets/icon/Sucess.svg" alt="">
            <h3 class="text-[25px] font-bold">Arizangiz qabul qilindi!</h3>
            <p class="text-[23px] max-w-[900px] text-center">Batafsil ma’lumot uchun operator yaqin vaqt ichida  siz bilan aloqaga chiqadi
              Iltimos, telefoningiz yoqilgan holda bo’lsin</p>

                <div class="mahsulot w-full" v-for="item in CounterStore.oneuser?.tovar" :key="item">
                    <div class="linear w-full h-[1px] bg-black"></div>
                     <div class="flex flex-col p768:flex-row w-full mt-[10px]"><p class=" p768:w-[50%] font-bold" >Mahsulot: <span class="txt font-mono text-[#F77F00]">{{item.name}}</span> ({{ item.amount }})</p> <p class="p768:w-[50%] font-bold">Summa: <span class="font-thin">{{item.totalsum}}</span></p></div>
                 </div>
                 <div class="mahsulotopshinarx w-full">
                    <div class="linear w-full h-[1px] bg-black"></div>
                     <div class="flex w-full mt-[10px]"><p class="p768:w-[50%]"></p> <p class=" ml-auto p768:ml-[0px] p768:w-[50%] font-bold">Jami: <span class="text-[#F77F00]">{{CounterStore.totalprice}}</span> so'm</p></div>
                 </div>
                 
                

           </div>
     </div>
    </div>
</template>



<style lang="scss" scoped>

</style>