<script setup>
import headerlayout from "@/components/layouts/header.vue";
import footerlayout from "@/components/layouts/footer.vue";
import mainlayout from "@/components/layouts/main.vue";
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore();
CounterStore.load()
const successItem = localStorage.getItem("success");
if (successItem === null) {
  CounterStore.oneuser = null;
} else {
}
if (CounterStore.oneuser?.length === 0) {
  localStorage.removeItem("success");
}


</script>

<template>
  <div class="wrapper" >
    <div v-if="CounterStore.movieload" class="preload hidden p768:block w-full h-full z-[99] fixed  left-0 top-0">
            <video  class="w-full h-full object-cover" preload="auto" autoplay muted>
           <source src="@/assets/movie/donamarket.mp4" type="video/mp4">
             </video>
     </div>
     <div v-if="CounterStore.movieload" class="preload  p768:hidden  w-full h-full z-[99] fixed  left-0 top-0">
            <video  class="w-full h-full object-cover" preload="auto" autoplay muted>
           <source src="@/assets/movie/donamarketmini.mp4" type="video/mp4">
             </video>
     </div>
       <headerlayout/>
       <mainlayout @click="CounterStore.activemenuprofil = false"/>
       <footerlayout/>
  </div>

</template>

<style scoped>

</style>
