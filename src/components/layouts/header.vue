<script setup>
import navbar from "@/components/navbar/navbar.vue";
import { computed, ref, watch } from 'vue';
import { useCounterStore } from "@/stores/counter";
import files from '@/views/datafiles.js';
import { useRouter } from "vue-router";
const router =useRouter()
const CounterStore = useCounterStore();
const activesearch = ref(false);

CounterStore.activecarT();

function exitUSER() {
    localStorage.removeItem("success");
    CounterStore.activecarT();
    CounterStore.activemenuprofil = false;
    CounterStore.oneuser = null;
    CounterStore.profilactivated = false
     router.push('/');
     window.location.reload();
     CounterStore.load()
}


function handleLinkClick() {
    activesearch.value = false
    CounterStore.search =""
}
const filteredProducts = computed(() => {
  let filtered = files.products;
  const query = CounterStore.search.toLowerCase().trim();
  if (query) {
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.category.toLowerCase().includes(query) 
    );
  }

  return filtered;
});
const totalBasketAmount = computed(() => 
    CounterStore.totalbasketamount
);
const filterProductCount = computed(() => CounterStore.filterproduct.length);
</script>

<template>
    <header class="header fixed z-[98]  bg-white shadow-md  w-full">
        <navbar />
        <div class="container relative">
            <div class="header-content px-[15px] h-[80px] flex items-center gap-[10px] w-full justify-between">
                <RouterLink @click="CounterStore.load()" to="/" class="block w-[127px]">
                    <img src="@/assets/images/logoheader.svg" alt="Logo">
                </RouterLink>
                <!-- ~~~~~~~~~~~~search~~~~~~~~~~ -->
                <div class="search transition-all max-w-[350px] z-[4] p480:max-w-[550px] w-full flex absolute p480:relative" :class="{ 'active': activesearch }">
                    <input v-model="CounterStore.search" placeholder="izlash..." class="w-full pl-[10px] h-[45px] border-[#808080] border outline-none border-r-transparent rounded-tl-[10px] rounded-bl-[10px]" type="text">
                    <RouterLink to="/productall" class="bg-[#F77F00] flex items-center justify-center w-[57px] border border-[#F77F00] h-[45px] p480:rounded-tr-[10px] p480:rounded-br-[10px]">
                        <img src="@/assets/icon/search.svg" alt="Search">
                    </RouterLink>
                    <button @click="activesearch = false" class="bg-[#F77F00] flex items-center justify-center w-[57px] border border-[#F77F00] h-[45px] rounded-tr-[10px] rounded-br-[10px] text-white p480:hidden">X</button>

                    <!-- ~~~~~~~~~~~~~~~~~~~~~~~search-menu modal(mini)~~~~~~~~~~~~~~~~~~~ -->
                    <div v-if="filterProductCount > 0 && CounterStore.search.length >0" class="search-menu max-h-[400px] overflow-y-auto rounded-md shadow-2xl flex flex-col gap-y-2 w-[90%] p480:hidden top-[50px] p-2 bg-white absolute" :class="{ 'hidden': !activesearch }">
                        <RouterLink :to="'/product/' + item.id" v-for="item in filteredProducts" :key="item.id" class="search-menu-card rounded-md  py-[7px] px-[10px] flex items-center p480:items-start w-full hover:bg-slate-300" @click="handleLinkClick()">
                            <div class="search-menu-photo w-[55px] h-[50px] p-1 bg-white rounded-md">
                                <img class="w-full h-full" :src="item.img" alt="Product Image">
                            </div>

                            <div class="search-menu-title ml-[5px] h-full flex flex-col justify-between">
                                <h3 class="text-[12px] mr-[5px]">{{item.name}}</h3>
                                <p class="text-[12px] text-[#F77F00]">{{item.price}} so'm</p>
                            </div>
                            <div class="ml-auto flex border items-center gap-1">
                                <i v-for="n in 5" :key="n" :class="{ 'text-[#F77F00] text-[8px] p768:text-[10px] fa-solid fa-star': n <= item.rating, 'fa-regular text-[8px] p768:text-[10px] fa-star': n > item.rating }"></i>
                            </div>
                        </RouterLink>
                    </div>

                    <!-- ~~~~~~~~~~~~~~~~~~~~~~~search-menu modal(desktop)~~~~~~~~~~~~~~~~~~~ -->
                    <div v-if="filterProductCount > 0 && CounterStore.search.length >0" class="search-menu max-h-[400px] rounded-md bg-white shadow-2xl hidden overflow-y-auto p480:flex flex-col gap-y-2 w-full top-[50px] p-2 absolute">
                        <RouterLink :to="'/product/' + item.id" v-for="item in filteredProducts" :key="item.id" class="search-menu-card rounded-md hover:bg-slate-300 transition-all py-[4px] px-[6px] p768:py-[7px] p768:px-[10px] flex items-center p768:items-start  w-full" @click="handleLinkClick()">
                            <div class="search-menu-photo w-[55px] h-[45px] p-1 p768:w-[70px] p768:h-[65px] p768:p-3 bg-white rounded-md p768:rounded-3xl">
                                <img class="w-full h-full" :src="item.img" alt="Product Image">
                            </div>

                            <div class="search-menu-title ml-[3px] p768:ml-[10px] h-[65px] flex flex-col justify-between">
                                <h3 class="text-[12px] p768:text-[14px] mr-[1px] p768:mr-[5px]">{{item.name}}</h3>
                                <p class="text-[12px] p768:text-[14px] text-[#F77F00]">{{item.price}} so'm</p>
                            </div>
                            <div class="ml-auto flex items-center gap-1">
                                <i v-for="n in 5" :key="n" :class="{ 'text-[#F77F00] text-[8px] p768:text-[10px] fa-solid fa-star': n <= item.rating, 'fa-regular text-[8px] p768:text-[10px] fa-star': n > item.rating }"></i>
                            </div>
                        </RouterLink>
                    </div>
                </div>

                <!-- ~~~~~~~~~~~~Accounte~~~~~~~~ -->
                
                <div class="container-account flex items-center gap-[23px]">
                  
                    <button @click="activesearch = true,CounterStore.activemenuprofil = false" class="flex flex-col items-center p480:hidden" :class="{ 'hidden': activesearch, 'flex': !activesearch }">
                        <img class="w-[30px] h-[30px]" src="@/assets/icon/mobilesearch.svg" alt="Search">Search
                    </button>


                   <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~korzina btn~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

                    <RouterLink v-if="CounterStore.profilactivated" to="/korzina" class="flex flex-col items-center relative" >
                        <img class="w-[30px] h-[30px]" src="@/assets/icon/cart.svg" alt="Cart">Korzinka
                        <span v-if="totalBasketAmount >0" class="absolute right-[12px] top-[-10px] px-[6px] bg-red-500 rounded-xl text-white">{{totalBasketAmount}}</span>
                    </RouterLink>


                    <RouterLink  v-if="!CounterStore.profilactivated" to="/korzinaoff" class="flex flex-col items-center relative" >
                        <img class="w-[30px] h-[30px]" src="@/assets/icon/cart.svg" alt="Cart">Korzinka
                    </RouterLink>



                    <div class="relative z-[5]">
                        <button v-if="CounterStore.profilactivated" @click="CounterStore.activemenuprofil = true,activesearch = false" class="flex flex-col items-center">
                            <img class="w-[30px] h-[30px]" src="@/assets/icon/AccountUser.svg" alt="Account">Profil
                        </button>
                        <div v-if="CounterStore.activemenuprofil" class="menu-profile bg-white rounded-b-md text-center text-black border flex flex-col absolute w-[180px] left-[-140px] top-0">
                            <button @click="CounterStore.activemenuprofil = false" class="absolute right-[3px] top-0 text-[22px] hover:text-[#F77F00] transition-all">X</button>
                            <RouterLink to="/profil" @click="CounterStore.activemenuprofil = false" class="p-2 border-b-[2px] hover:bg-[#F77F00] transition-all">Profil</RouterLink>
                            <RouterLink to="/sevimlilarim" @click="CounterStore.activemenuprofil = false" class="p-2 border-b-[2px] hover:bg-[#F77F00] transition-all">Mening sevimlilarim</RouterLink>
                            <RouterLink to="/buyurtmatarix" @click="CounterStore.activemenuprofil = false" class="p-2 border-b-[2px] hover:bg-[#F77F00] transition-all">Buyurtmalar tarixi</RouterLink>
                            <RouterLink to="/sozlamalar" @click="CounterStore.activemenuprofil = false" class="p-2 border-b-[2px] hover:bg-[#F77F00] transition-all">Sozlamalar</RouterLink>
                            <RouterLink to="/" class="p-2 hover:bg-[#F77F00] transition-all" @click="exitUSER()">Exit profil</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
@media screen and (max-width: 481px) {
    .search {
        top: -100px;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0 15px;
    }
    .active {
        top: 100px;
    }
}
</style>
