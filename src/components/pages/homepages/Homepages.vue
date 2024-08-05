<script setup>
import homesection1 from "@/components/pages/homepages/homesection-1.vue";
import homesection2 from "@/components/pages/homepages/homesection-2.vue";
import homesection3 from "@/components/pages/homepages/homesection-3.vue";
import homesection4 from "@/components/pages/homepages/homesection-4.vue";
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
CounterStore.scrollTop()
document.body.style.overflowY = 'auto';
</script>
<template>
    <div class="Homepages">
      <homesection1 />
      <homesection2 />
      <homesection3 />
      <homesection4 />
    </div>
</template>



<style lang="scss" scoped>

</style>