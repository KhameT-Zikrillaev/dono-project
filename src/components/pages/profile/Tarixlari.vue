<script setup>
import { useCounterStore } from "@/stores/counter";
import { useRouter } from "vue-router";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
const CounterStore = useCounterStore();
const router = useRouter()
CounterStore.scrollTop()
if(CounterStore.oneuser === null){
router.push('/login')
}
const notify = ()=>{
  toast.success("Muvaffaqiyatli o'chirildi!",{
    autoClose:1000,
  });
}
const ochirish = (orderId) => {
  CounterStore.deleteOrder(orderId);
  notify()
};

</script>

<template>
  <div class="buyurtmalar tarixi">
    <div class="container px-[10px]">
      <h1 class="text-[30px] p992:text-[48px] font-bold ">Buyurtmalarim</h1>
      <h3 v-if="CounterStore.oneuser?.infotovar.length == 0" class="text-[#7C797C] mt-[15px] text-[22px]">Buyurtma tarixi bo'sh</h3>
      <div class="info-cards px-[10px] p768:px-[50px] grid p992:grid-cols-2 gap-[20px] mt-[10px]">
        <!-- ~~~~~~~~~~~~~~~~~~~~~tovar kartochki~~~~~~~~~~~~~~~~~~~ -->
        <div v-for="order in CounterStore.oneuser?.infotovar" :key="order.id" class="info-card max-w-[500px] p-2 shadow-md rounded-md bg-white mx-auto p768:mx-[0px] p768:max-w-[800px] w-full">
          <div v-for="item in order.items" :key="item.id" class="info-card-in flex flex-col  p768:flex-row p768:justify-between gap-[20px] p768:h-[180px] p-2">
            <div class="flex flex-col  p768:gap-[5px] w-full justify-between p768:flex-row ">
              <img class="w-[100px] p768:w-[150px]" :src="item.img" alt="Product Image" />
              <div class="h-full block w-[1px] bg-black"></div>
              <article class="text-[14px] max-w-[400px] w-full flex-col">
                <p class="flex items-center">
                  <span class="product-name mr-[10px]">Mahsulot nomi</span>
                  <span class="line mr-[10px] mt-[4px]"></span>
                  <span class="product-brand flex-shrink-0">{{ item.name }}</span>
                </p>
                <p class="flex items-center">
                  <span class="product-name mr-[10px]">Categoriyasi</span>
                  <span class="line mr-[10px] mt-[4px]"></span>
                  <span class="product-brand flex-shrink-0">{{ item.category }}</span>
                </p>
                <p class="flex items-center">
                  <span class="product-name mr-[10px]">Reytingi</span>
                  <span class="line mr-[10px] mt-[4px]"></span>
                  <span class="product-brand flex-shrink-0">{{ item.rating }}</span>
                </p>
                <p class="flex items-center">
                  <span class="product-name mr-[10px]">Soni</span>
                  <span class="line mr-[10px] mt-[4px]"></span>
                  <span class="product-brand flex-shrink-0">{{ item.amount }}</span>
                </p>
                <p class="flex items-center">
                  <span class="product-name mr-[10px]">Narxi(donasi)</span>
                  <span class="line mr-[10px] mt-[4px]"></span>
                  <span class="product-brand flex-shrink-0">{{ item.price }}</span>
                </p>
                <p class="flex items-center">
                  <span class="product-name mr-[10px]">Narxi(opshi)</span>
                  <span class="line mr-[10px] mt-[4px]"></span>
                  <span class="product-brand flex-shrink-0">{{ item.totalsum }}</span>
                </p>
              </article>
            </div>
          </div>
          



          <div class="dates flex flex-col p1024:flex-row p768:justify-between p-2">
            <h3>sanasi: <span>{{ order.timestamp }}</span></h3>
            <h3>opshiy summasi: <span>{{ order.totalprice }}</span></h3>
          </div>
          <button @click="ochirish(order.id)" class="py-1 px-3 block bg-[#FF0000] w-[120px] ml-auto rounded-lg text-white">O'chirish</button>
          <span class="linear w-full h-[1px] block bg-[#F77F00] mt-[25px]"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}
</style>
