<script setup>
import files from '@/views/datafiles.js'
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 

</script>



<template>
    <section class="section-1">
       <div class="container  px-[10px] p480:px-[32px]">
        <div class="container-grid grid  grid-cols-2   p480:grid-cols-3   p992:grid-cols-6 gap-[5px] p480:gap-[30px]">
            <RouterLink :to="'/category/' + item.id" v-for="item in files.productscategory" :key="item" class="container-grid-card flex   flex-col">
                <img class=" max-w-[150px] bg-white rounded-xl p-1 w-full mx-auto h-[140px]" :src="item.images" alt="">
                <h3 class="text-[16px]  mt-2 text-center">{{item.title}}</h3>
            </RouterLink>
        </div>
       </div>
    </section>
</template>



<style lang="scss" scoped>

</style>