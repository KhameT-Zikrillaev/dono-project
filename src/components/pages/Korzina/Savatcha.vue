<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
import { useCounterStore } from "@/stores/counter";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
const CounterStore = useCounterStore() 
CounterStore.scrollTop()
CounterStore.totalproductprice()
CounterStore.totalbasketnumb()

const notifyXato = ()=>{
  toast.error("Savatcha bo'sh",{
    autoClose:1000,
  });
}
if(CounterStore.oneuser === null){
router.push('/')
}


function zakaz(){
  if(CounterStore.oneuser.tovar.length >0){
    router.push('/buyurtma')
  } else{
    notifyXato()
    router.push('/korzina')
  }
} 

function minus(item){
  CounterStore.totalproductprice()
  CounterStore.totalbasketnumb()
  if(item.amount == 1){
    CounterStore.deleteTobasket(item.id)
  } else{
     item.amount--

  }
};
function deletproduct(item){
  CounterStore.deleteTobasket(item.id,item.amount,item.totalsum)
}


</script>


<template>
    <div class="savatcha">
           <div class="container px-[10px]">
            <div class="container-title flex flex-col">
            
              <h1 class="text-[30px] p992:text-[48px] font-bold ">Savatcha</h1>
                <h3 v-if="CounterStore.oneuser?.tovar.length == 0" class="text-[#7C797C] mt-[15px] text-[22px]">Savatcha bo’sh</h3>
            </div>
          
            <div class="savatcha-info flex flex-col p992:flex-row justify-between mt-[50px] gap-[50px]">
            
                 
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~infot + count ++~~~~~~~~~~~~~~~~~~~~~~ -->
                 <div  class="w-full flex flex-col gap-2">
                  <div v-for="item in CounterStore.oneuser?.tovar" :key="item"
                  class="savatcha-info-left relative  flex flex-col p480:flex-row  justify-between min-h-[153px] w-full  bg-white shadow-md rounded-[8px] p-[10px]">
                  <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~products info-1~~~~~~~~~~~~~~~~~~~~~ -->
                   
                    <div class="savatcha-info-left-con-1 flex">
                    <img class="w-[143px] h-[143px]" :src="item.img" alt="">
                    <div class="flex flex-col justify-between ml-[20px]">
                      <h3 class=" text-[16px] p768:text-[18px] font-bold ">{{item?.name}}
                     </h3>

                      <div class="flex  p480:w-[100px] p768:w-[150px] h-[40px]  rounded-md justify-between">
                        <button @click="minus(item),CounterStore.totalproductprice(),CounterStore.totalbasketnumb()" class="w-[25%] bg-[#F77F00] text-[30px] flex items-center justify-center text-white rounded-l-md">-</button>
                        <span class="w-[50%] flex items-center justify-center font-semibold border-t border-b border-[#C4C4C4]">{{item?.amount}} шт</span>
                        <button @click="item.amount++,CounterStore.totalproductprice(),CounterStore.totalbasketnumb()" class="w-[25%] bg-[#F77F00] text-[30px] flex items-center justify-center text-white rounded-r-md">+</button>
                     </div>
                   </div>
                    </div>   
                     <div class="savatcha-info-left-con-2 flex flex-col justify-between  mt-[25px] p480:mt-[0px] mr-[10px] p768:mr-[45px]">
                      <h4 class=" text-[24px]  p480:text-[20px] p768:text-[30px] font-semibold text-[#F77F00]">{{item?.totalsum}} so’m</h4>
                      <div class="savatcha-info-left-con-2-user mt-[15px] p480:mt-[0px] text-[18px] p768:text-[20px]">
                        <p class="text-semibold">Sof narxi: <span class="text-[#F77F00]">{{item.price}}</span> so'm</p>
                 
                      </div>
                     
                     </div>
                      <button @click="deletproduct(item)"  class="absolute right-[1%] top-[1%]">
               
                    X
                     </button>  
                  </div>
                 

                 </div>
                  
                 
          
               

               
                
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~savatcha~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                <div class="savatcha-info-right  p-[20px] rounded-[5px] bg-white shadow-md  p992:max-w-[370px]  p992:min-h-[330px] h-full w-full flex flex-col">
                    <div class="flex-grow-1">
                     <div class="flex justify-between items-center"><span class="text-[24px] font-bold">Umumiy</span><span class=" text-[24px] p480:text-[22px] p768:text-[36px] text-[#F77F00] font-bold">{{ CounterStore.totalprice }}</span></div>
                     <div class="flex justify-between items-center text-[18px] text-[#666666]"><span >Tovarlar ({{CounterStore.totalbasketamount}})</span><span>{{ CounterStore.totalprice }}</span></div>
                    </div>
                     
                     <RouterLink to="/buyurtma" @click="zakaz()" class="bg-[#F77F00] rounded-[6px] ml-auto mt-[25px]    p992:ml-[0px] p992:mt-auto  p-[11px] text-[23px] p480:max-w-[330px] w-full text-white text-center font-bold">Buyurtma berish</RouterLink>
                </div>
            </div>
           </div>
    </div>
</template>



<style  scoped>

</style>