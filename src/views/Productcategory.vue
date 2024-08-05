<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Card1 from "@/components/card/card1.vue";
import files from '@/views/datafiles.js';
import { useCounterStore } from "@/stores/counter";
const route = useRoute();
const categoryname = ref(route.params.id)
const newProducts = files.products.filter(product => product.category === route.params.id);
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