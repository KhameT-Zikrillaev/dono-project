<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import Card1 from "@/components/card/card1.vue";
import files from '@/views/datafiles.js';
const route = useRoute();
const productuser = ref(route.params.id)
const newProducts = files.products.filter(product => product.sotuvchi === route.params.id);
const CounterStore = useCounterStore();
CounterStore.scrollTop()

</script>

<template>
    <div class="productcategory">
       <div class="container pt-[50px] px-[50px]">
         <div class="flex flex-wrap justify-center p768:justify-start gap-3">
            <Card1  v-for="item in newProducts" :key="item" :tovars="item" />

         </div>
        
       </div>
    </div>
</template>



<style  scoped>

</style>