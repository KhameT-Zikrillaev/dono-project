<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination, Autoplay,Navigation} from 'swiper/modules';
import files from '@/views/datafiles.js'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const modules = [Grid, Pagination, Autoplay,Navigation]
const breakpoints={
      '320': {
        grid:{
          rows:2
        },
        slidesPerView: 2,
        spaceBetween: 20
      },  
      '768': {
        grid:{
          rows:2
        },
        slidesPerView: 4,
        spaceBetween: 30
      },

      '1024': {
        grid:{
          rows:2
        },
        slidesPerView: 6,
      },

    }
const paginationOptions = {
  clickable: true,
};
</script>


<template>
    <section class="section-3 ">
        <div class="container  px-[10px] p1240:px-[40px] ">
            <h2 class=" mt-[50px] p480:mt-[80px] p480:ml-[32px] text-[24px] p480:text-[40px] font-semibold">
        Mashhur brendlar
      </h2>
      <RouterLink to="/" class="text-[#F77F00]  p992:hidden  p480:ml-[32px]">Barchasini ko'rish</RouterLink>
            <div class="swiper-con hidden p992:flex p1240:ml-[25px] mt-[40px] ">
            <swiper

    :slidesPerView="6"
    :spaceBetween="50"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
   
  >
    <swiper-slide class="p-2" v-for="item in files.productsbrand" :key="item"><RouterLink :to="'/brand/' + item.name" class="flex justify-center items-center rounded-[8px] shadow-md w-[170px] h-[100px] hover:shadow-orange-500 "><img :src="item.images" alt=""></RouterLink></swiper-slide>
           </swiper>

            </div>

            <div class="brands grid grid-cols-2 p480:grid-cols-3 p992:hidden justify-items-center gap-[25px]">
                <RouterLink :to="'/brand/' + item.name"  v-for="item in files.productsbrand" :key="item" class="brandcar flex justify-center items-center rounded-[8px] shadow-md max-w-[205px] w-full bg-white h-[100px] "><img :src="item.images" alt=""></RouterLink>
            </div>


            <RouterLink to="/productall" class="mt-[40px]  text-[20px] rounded-[10px] bg-[#F77F00] border max-w-[250px] h-[45px] w-full  text-white  hidden p992:flex justify-center items-center mx-auto">
        Barchasini ko'rish
    </RouterLink>
        </div>
  
    </section>
</template>


<style scoped>

</style>