<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useCounterStore } from "@/stores/counter";
import files from '@/views/datafiles.js';
import card from '@/components/card/card1.vue';

const products = files.products;
const productscategory = files.productscategory;
const CounterStore = useCounterStore();
CounterStore.scrollTop()
// ~~~~~~~~~oynaga qarabn nastroyka~~~~~~~~~~~~~~~~
const getVisibleButtonsCount = () => {
  if (window.innerWidth >= 1240) return 6;
  if (window.innerWidth >= 1024) return 5;
  if (window.innerWidth >= 768) return 3;
  return 2; 
};


const buttons = ref([]);


const selectedCategoryId = ref('all');


const selectedButton = ref(0);


const visibleButtonsCount = ref(getVisibleButtonsCount());


onMounted(() => {
  buttons.value = [
    { title: 'Все', id: 'all' },
    ...productscategory.map(category => ({
      title: category.title,
      id: category.id
    }))
  ];
  

  selectedButton.value = 0; 
  

  updateVisibleButtonsCount();
  

  window.addEventListener('resize', updateVisibleButtonsCount);
});


const updateVisibleButtonsCount = () => {
  visibleButtonsCount.value = getVisibleButtonsCount();
};

const currentIndex = ref(0);
const maxIndex = computed(() => Math.max(0, buttons.value.length - visibleButtonsCount.value));

const visibleButtons = computed(() => {
  return buttons.value.slice(currentIndex.value, currentIndex.value + visibleButtonsCount.value);
});


const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value += 1;
  }
};


const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const selectButton = (index) => {
  selectedButton.value = index; 
  selectedCategoryId.value = buttons.value[index].id;
};

const filteredProducts = computed(() => {
  let filtered = products;


  if (selectedCategoryId.value !== 'all') {
    filtered = filtered.filter(product => product.category === selectedCategoryId.value);
  }


  const query = CounterStore.search.toLowerCase().trim();
  if (query) {
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.category.toLowerCase().includes(query) 
    );
  }

  return filtered;
});
watch([selectedCategoryId, () => CounterStore.search], () => {
  CounterStore.filterproductadd(filteredProducts.value); 
});
</script>


<template>
  <div class="productall">
    <div class="container px-[10px] p768:px-[50px]">
      <div class="slider h-[75px] mx-auto flex gap-2 w-full p1200:max-w-[1200px]">
        <button
          @click="prev"
          :disabled="currentIndex <= 0"
          class="nav-button w-[50px] bg-white rounded-[4px] border border-[#f77f00] text-[#f77f00]"
        >
          <img class="w-full" src="@/assets/icon/leftarrow.svg" alt="">

        </button>
        <div class="slider-product-name">
          <button class="  text-[13px]  p480:text-[16px]"
            v-for="(item, index) in visibleButtons"
            :key="item.id"
            :class="{ active: selectedButton === index + currentIndex }"
            @click="selectButton(index + currentIndex)"
          >
            {{ item.title }}
          </button>
        </div>
        <button
          @click="next"
          :disabled="currentIndex >= maxIndex"
          class="nav-button w-[50px] bg-white rounded-[4px] border border-[#f77f00] text-[#f77f00] p-[10px]"
        >
          <img class="w-full" src="@/assets/icon/rightarrow.svg" alt="">

        </button>
      </div>
      <div class="  grid grid-cols-2  p768:grid-cols-3 p1200:grid-cols-4     gap-2  p480:gap-5  p992:gap-1  p992:gap-y-5  cards-container">
        <card class="mx-auto " v-for="item in filteredProducts" :key="item.id" :tovars="item"/>
      </div>
     
    </div>
    <h2 v-if="filteredProducts.length === 0"  class="text-[24px] mt-[60px] text-center text-[#f77f00]">Kechirasiz bunday tovar afsus topilmadi!</h2>
  </div>
</template>



<style scoped>
.slider {
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
}

.slider-product-name {
  display: flex;
  gap: 10px;
  transition: transform 0.5s ease;
  width: 100%;
  justify-content: center;
  gap: 20px;
}

.slider button {
  border: 1px solid #f77f00;
  color: #f77f00;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: white;
}

.slider button.active {
  background-color: #f77f00;
  color: white;
  border: 1px solid #f77f00;
}

.slider button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}



.nav-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
