<script setup>
import { ref, watch, nextTick } from 'vue';
import files from '@/views/datafiles.js';
import { useCounterStore } from "@/stores/counter";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const idproduct = files.products[route.params.id - 1];
const CounterStore = useCounterStore();
const commentaryinput = ref("");
CounterStore.scrollTop()
CounterStore.totalbasketnumb()
//  router ozgarsa /id shunga
watch(
  () => route.params.id,
  (newId) => {
    idproduct.value = files.products[newId - 1];
    CounterStore.scrollTop(); 
  },
  { immediate: true }
);


function commentary() {
  if (CounterStore.oneuser && CounterStore.oneuser.username) {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${day}.${month}.${year}`; 


    CounterStore.commentary.push({
      name: CounterStore.oneuser.username,
      comment: commentaryinput.value,
      sana: formattedDate
    });


    commentaryinput.value = "";


    nextTick(() => {
     
    });
  } else {
    router.push('/login');
  }
}


watch(
  () => CounterStore.commentary,
  (newCommentary) => {
    console.log('Commentary updated:', newCommentary);
  },
  { deep: true }
);
</script>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
});
</script>



<template>
    <div class="container py-[15px] px-[15px] p480:px-[50px]">
      <div class="flex items-center gap-5 max-lg:flex-col">
        <div class="max-w-[700px] w-full ">
          <Carousel
            id="gallery"
            :items-to-show="1"
            :wrap-around="false"
            v-model="currentSlide"
          >
            <Slide v-for="slide in 5" :key="slide">
                <div  class="carousel__item w-[200px]   p-5">
                <img :src="idproduct?.img" alt="">
              </div>
            </Slide>
          </Carousel>
  
          <Carousel
            id="thumbnails"
            :items-to-show="3"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide  v-for="slide in 5" :key="slide">
              <div  class="carousel__item w-[100px]  p-2" @click="slideTo(slide - 1)">
                <img :src="idproduct?.img" alt="">
              </div>
            </Slide>
          </Carousel>
        </div>
        <div class="w-full flex flex-col gap-3">
         
            <!-- ~~~~~~~~~~~~~~tovar name ~~~~~~~~~~~~~~~~~~narx -->
          <div class="flex flex-col p768:items-center p768:flex-row p768:justify-between">
            <h2 class="text-[#490D2A] text-[25px] p768:text-[32px] font-semibold">
              {{idproduct?.name}}
            </h2>
            <p class="text-[#F77F00] text-[22px] font-semibold">{{ idproduct?.price }} so'm</p>
          </div>
  
          <div class="flex flex-col-reverse  gap-2 p768:gap-[0px] p768:items-center p768:flex-row p768:justify-between">
            <h4 class="text-[24px] font-medium text-[#141414]">
              Batafsil ma’lumot
            </h4>
            <div class="flex items-center gap-2">
    <i
      v-for="(n) in 5"
      :key="n"
      :class="{
        ' text-[#F77F00] fa-solid  fa-star': n <= idproduct?.rating,
        'fa-regular fa-star': n > idproduct?.rating
      }"
    ></i>
            </div>
          </div>
  
          <div class="flex items-center gap-20">
            <ul class="grid grid-cols-2 gap-4 ">
              <li class="text-[#666666] flex gap-2" v-for="item in idproduct?.info" :key="item">
                {{item}}
                <span><i class="fa-solid fa-square-check text-[green]"></i></span>
              </li>
             
            </ul>
          
          </div>
  
          <div class="w-full">
            <button v-if="CounterStore.oneuser != null" @click="CounterStore.addbasket(idproduct),CounterStore.totalbasketnumb()" class="text-white bg-[#f77f00] mt-[15px] py-2 px-2 rounded-xl">Savatchaga qo’shish</button>
          </div>
        </div>
      </div>
  
      <div class="flex items-center gap-4 my-10">
        <div><i class="fa-solid fa-shop text-[#f77f00] text-[39px]"></i></div>
        <div>
          <p class="text-[24px] text-[#141414] font-medium">Sotuvchi: <span class="text-[#f77f00]">{{idproduct?.sotuvchi}}</span></p>
          <p class="text-[#6c6c6c]">Mahsulotlari: <span class="text-[#f77f00]">{{idproduct?.tovarlari}}</span> <RouterLink :to="'/user/' + idproduct?.sotuvchi" class="btnm bg-[#f77f00] text-white py-1  px-2 rounded-xl text-[14px]">ko'rish</RouterLink></p>
        </div>
      </div>
  
      <div class="flex items-center gap-10 max-lg:flex-col">


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~text comment cardlar~~~~~~~~~~~~~~ -->


        <div class="flex flex-col-reverse gap-2 p768:flex-row w-full">
          <div class="left  w-full p768:w-[50%]">
            <h2 class=" text-[24px] p992:text-[34px] font-semibold text-[#141414]">Xaridorlar firklari</h2>
          <div class="flex flex-col gap-3"  v-for="item in CounterStore.commentary" :key="item.name + item.sana">
            <h4 class="text-[26px] font-semibold">{{ item.name }}</h4>
            <p class="font-normal text-[#666666]">{{ item.comment }}</p>
            <p class="text-[14px] font-normal text-[#666666]">{{ item.sana}}</p>
          </div>
          </div>
          <div class="right  w-full p768:w-[50%]">
            <div class="">
          <textarea v-model="commentaryinput" class="border-2 border-gray-400 w-full p-3" placeholder="Izoh qoldirish..." rows="5"></textarea>
  
          <div class="w-full mt-5">
            <button  @click="commentary()" class="text-white bg-[#f77f00] w-1/2 p480:w-1/3 py-2 rounded-xl">Fikr qoldirish</button>
          </div>
        </div>
          </div>
      
  
        
      
        </div>


       
      </div>
    </div>
  </template>
  
  