<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
CounterStore.scrollTop()
const token = import.meta.env.VITE_TG_TOKEN
const chatId = import.meta.env.VITE_TG_CHATID
const name = ref("");
const tel = ref("");
const notify = ()=>{
  toast.success("Smsingiz yuborildi!",{
    autoClose:1000,
  });
}
const notifyXatokam = ()=>{
  toast.error("Telefon raqami 9 ta emas",{
    autoClose:1000,
  });
}
function validateTelInput(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^\d+]/g, '');
    tel.value = event.target.value;
}

function yuborish(){
  if (tel.value.length < 9) {
        notifyXatokam();
        return; 
    }

  const fullMessage= `Name: ${name.value}, telephone: ${tel.value}`;
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullMessage}`)
    name.value = "";
    tel.value="";
    notify()
}

</script>



<template>
    <div class="contact">
        <div class="container px-[20px]">
            <h1 class=" text-[30px] p768:text-[40px] font-semibold text-center p768:text-start">Aloqa uchun</h1>
            <div class="container-info w-full flex flex-col p768:flex-row gap-[30px]">
                <!-- ~~~~~~~~~~~~~~~~~left~~~~~~~~~~~~~~~~ -->
                <div class="left-box  p768:w-[50%] mt-[20px] p768:mt-[45px]">

                    <div class="location py-[15px] px-[20px]  bp-[30px] p768:pb-[90px] flex  gap-[10px] bg-white rounded-xl">
                        <img src="@/assets/icon/location.svg" alt="">
                        <span>O'zbekiston,Toshkent</span>
                    </div>

                       <div class="map mt-[40px]">
                        <iframe class="w-full  h-[280px] p768:h-[360px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7020263058175!2d69.19209839087259!3d41.271823347352274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a1f5ddc486f%3A0x8d51f1b0a0cbd4de!2z0KfQuNC70LDQvdC30LDRgC0xNywg0KLQsNGI0LrQtdC90YIsINCi0LDRiNC60LXQvdGC0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1722837415934!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       </div>
                </div>
                 <!-- ~~~~~~~~~~~~~~~~~right~~~~~~~~~~~~~~~~ -->
                <div class="right-box p768:w-[50%] flex flex-col gap-[13px]">
                  <div class="minicard  w-full h-[50px] py-[13px] px-[30px] bg-white  rounded-xl flex items-center gap-[10px]">
                   <img src="@/assets/icon/phone.svg" alt="">
                   <span class=" text-[17px] p768:text-[20px] font-semibold">+998 99 0000 04 41</span>
                  </div>
                  <div class="minicard minicard  w-full h-[50px] py-[13px] px-[30px] bg-white rounded-xl flex items-center gap-[10px]">
                   <img src="@/assets/icon/gmail.svg" alt="">
                   <span class="text-[17px] p768:text-[20px] font-semibold">info@100k.uz</span>
                  </div>
                  <div class="minicard minicard  w-full h-[50px] py-[13px] px-[30px] bg-white rounded-xl flex items-center gap-[10px]">
                   <img src="@/assets/icon/telege.svg" alt="">
                   <span class="text-[17px] p768:text-[20px] font-semibold">@dona</span>
                  </div>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~form~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                  <form class="pt-[20px] px-[25px]  p768:h-[360px]  w-full  pb-[30px] flex flex-col  bg-white mt-[35px] rounded-xl" @submit.prevent="yuborish" action="">
                    <h6 class="text-[28px] font-semibold">Sms yuborish</h6>
                    <input v-model="name" required class=" mt-[15px] p768:mt-[50px] text-[20px] px-[10px] py-[10px] outline-none border-b-slate-950 border  border-transparent"  type="text" placeholder="Ismingiz">
                    <input v-model="tel" required class="mt-[35px] text-[20px] px-[10px] py-[10px] outline-none border-b-slate-950 border  border-transparent" @input="validateTelInput" type="text"  placeholder="Telefon raqamingiz">
                    <button class="text-[25px]  bg-[#f77f00] w-[165px] ml-auto mt-[30px] h-[45px] flex justify-center items-center rounded-xl text-white " type="yuborish">Yuborish</button>
                  </form>

                  
                </div>
            </div>
        </div>

    </div>
</template>



<style lang="scss" scoped>

</style>