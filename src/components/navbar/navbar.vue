<script setup>
import { ref} from 'vue';
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
const burger = ref(false);
const toggleMobileMenu = () => {
  burger.value = !burger.value;
};


</script>


<template>
    <div>
         <nav class="navbar  w-full bg-[#F77F00]">
            <div class="container">

                <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Desktop~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                <div class="container-nav-Desktop   hidden p480:flex items-center text-[13px] p768:text-[14px] px-[10px] text-white h-[45px]">
                <RouterLink to="/contact" class="flex flex-col p768:flex-row items-center p768:gap-[5px]"><img class="w-[19px] h-[19px]"  src="@/assets/icon/naviconlocation.png" alt="">Toshkent, UZB</RouterLink>
                <a href="tel:9900000441" class="flex flex-col p768:flex-row items-center p768:gap-[5px]  ml-[10px] p768:ml-[25px]"><img class=" w-[19px] h-[19px]  p768:w-[16px] p768:h-[16px]"  src="@/assets/icon/navicontel.png" alt="">99 000-04-41</a>
                 <RouterLink to="/" @click="CounterStore.load()" class="ml-auto mr-[17px]">Bosh sahifa</RouterLink>
                <RouterLink to="/login" class="mr-[17px]">Kirish</RouterLink>
                <RouterLink to="/registration" >Ro’yhatdan o’tish</RouterLink>
                </div>
                  <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Mobile 768~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                <div class="container-nav-mobile flex items-center text-[14px] px-[10px] text-white h-[45px] relative p480:hidden">
              <button
          class="burger-btn absolute z-[1] right-[10px]"
          :class="{ active: burger }"
          @click="toggleMobileMenu"
           >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          class="mobile-menu z-[96]  fixed left-0 w-full h-[100dvb] bg-[#F77F00] flex flex-col items-center shadow-md p-[20px]"
          :class="{
            'top-[-100dvb] opacity-0': !burger,
            'top-[45px] opacity-100': burger,
          }"
        >
        <div class="mobile-menu-navigation mt-[150px] text-[22px]  flex items-center justify-between h-[40%] flex-col">
                <RouterLink to="/contact" @click="burger = false" class="flex items-center gap-[5px]"><img class="w-[23px] h-[23px]"  src="@/assets/icon/naviconlocation.png" alt="">Toshkent, O’zbekiston</RouterLink>
                <a href="tel:998990000441" to="/" @click="burger = false" class="flex items-center gap-[5px]"><img class="w-[20px] h-[20px]"  src="@/assets/icon/navicontel.png" alt="">+99895 401-20-21</a>
                <RouterLink to="/" @click="burger = false,CounterStore.load()" >Bosh sahifa</RouterLink>
                <RouterLink to="/login" @click="burger = false" >Kirish</RouterLink>
                <RouterLink to="/registration" @click="burger = false" >Ro’yhatdan o’tish</RouterLink>
        </div>
       
        </div>
      </div>
               
            </div>
           
         </nav>
    </div>
</template>


<style scoped>
.burger-btn {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  z-index: 10;
}

.burger-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger-btn.active span:nth-child(1) {
  animation: burgerX 0.5s forwards;
}

.burger-btn.active span:nth-child(2) {
  opacity: 0;
}

.burger-btn.active span:nth-child(3) {
  animation: burgerY 0.5s forwards;
}

/* Анимация возвращения в исходное состояние */
.burger-btn:not(.active) span:nth-child(1) {
  animation: burgerXReverse 0.5s forwards;
}

.burger-btn:not(.active) span:nth-child(2) {
  opacity: 1;
}

.burger-btn:not(.active) span:nth-child(3) {
  animation: burgerYReverse 0.5s forwards;
}

@keyframes burgerX {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(45deg) translateY(6px) translateX(8px);
  }
}

@keyframes burgerXReverse {
  0% {
    transform: rotate(45deg) translateY(6px) translateX(8px);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes burgerY {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(135deg) translateY(6px) translateX(-8px);
  }
}

@keyframes burgerYReverse {
  0% {
    transform: rotate(135deg) translateY(6px) translateX(-8px);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.mobile-menu {
  transition: 0.5s;
}
</style>