<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
const token = import.meta.env.VITE_TG_TOKEN
const chatId = import.meta.env.VITE_TG_CHATID
const CounterStore = useCounterStore()
CounterStore.scrollTop()
const router = useRouter('')

const notify = ()=>{
  toast.success("Arizangiz qabul qilindi!",{
    autoClose:1000,
  });
}
const fillColor = ref('white');
const isFavorite = ref(false); 

if(CounterStore.oneuser === null){
router.push('/login')
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~zakaz~~~~~~~~~~~~~~~~~~~~~~~
function buyurtma(){
const formattedProductStrings = CounterStore.oneuser?.tovar?.map(product => `${product.name} (${product.amount} шт)`);
const productDescriptions = formattedProductStrings.join(', ');
const allsum = CounterStore.oneuser?.tovar?.reduce((total, product) => total + product.totalsum, 0);
  const fullMessage= `Name: ${username.value}, telephone: ${userphone.value}, City:${usercity.value}, Pachka:${usershtuk.value}, Tovarlar:${productDescriptions}, Opshiy summa:${allsum} so'm`;
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullMessage}`)
   notify();
   setTimeout(() => {
    router.push('/arizaqabul');
    }, 1000);
   CounterStore.addinfotovar();
   CounterStore.oneuser.tovar =[];
   CounterStore.totalbasketnumb()
}

const username =ref(CounterStore.oneuser?.username)
const usercity =ref(CounterStore.oneuser?.usercity)
const userphone =ref(CounterStore.oneuser?.usernumber)
const usershtuk =ref(CounterStore.pc)

function toggleHeart() {
  CounterStore.addlovetovar()
  
  fillColor.value = fillColor.value === 'white' ? '#F77F00' : 'white';
}

</script>

<template>
    <div class="buyurtma">
     <div class="container px-[10px]">
        <div class="container-title mt-[25px] flex flex-col p480:flex-row p480:items-center justify-between p992:justify-start gap-[15px] p480:gap-[35px]">
                <h1 class="text-[30px] p992:text-[48px] font-bold ">Buyurtma berish</h1>
                <button class="p-[6px] leading-[19px] text-[#F77F00] font-semibold rounded-[10px] border text-[15px] border-[#F77F00] max-w-[250px] w-full">Chegirma turi: 1 + 1 = 3</button>
        </div>
     <form method="POST" @submit.prevent="buyurtma"    class="buyurtma-form-card relative  mt-[15px] p-[30px] shadow-md grid grid-cols-1 bg-white rounded-md p992:grid-cols-2 pb-[120px] gap-[50px] " action="">
        <input v-model="username" required class="p-2 text-[18px] outline-none border-b-[2px]" type="text" placeholder="Ismingiz">
        <input v-model="usercity" required class="p-2 text-[18px] outline-none border-b-[2px]" type="text" placeholder="Toshkent shahri">
        <input v-model="userphone" required class="p-2 text-[18px] outline-none border-b-[2px]" type="text" placeholder="Telefon raqamingiz">
        <input v-model="usershtuk" required @input="CounterStore.pcone($event.target.value)" class="p-2 text-[18px] outline-none border-b-[2px]" type="text" placeholder="1 dona">
        <div class="flex gap-[25px] items-center absolute right-[30px] bottom-[5%] ">
            <div @click="toggleHeart()" class="w-[35px]  h-[35px]">
         <svg
    class="icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
 
  
  >
    <path
      d="M12 21c-.3 0-.6-.1-.7-.3l-7.4-8.1c-1.8-2-1.8-5.1.2-7 1-1 2.4-1.6 3.9-1.5 1.4.1 2.8.8 3.7 1.9l.3.4.4-.4c.9-1.1 2.3-1.8 3.7-1.9s2.9.5 3.9 1.5c1.9 1.9 2 5 .2 7l-7.4 8.1c-.2.2-.5.3-.8.3zm-4.3-15c-.9 0-1.6.4-2.2.9-1.2 1.2-1.2 3-.1 4.3l6.6 7.3 6.6-7.3c1.1-1.2 1.1-3.1-.1-4.3-.6-.6-1.5-1-2.4-.9-.9 0-1.7.5-2.2 1.2l-1.1 1.4c-.4.5-1.2.5-1.6 0l-1.1-1.4c-.6-.7-1.4-1.1-2.3-1.2z"
      :fill="fillColor"
      stroke="#F77F00"
    />
  </svg>
            </div>
         <button type="buyurtma" class="bg-[#F77F00] rounded-[6px] ml-auto mt-[25px]    p992:ml-[0px] p992:mt-auto  py-[8px] px-[4px] p480:px-[0px] text-[20px] p480:text-[23px] p480:w-[330px]  text-white font-bold">Buyurtma berish</button>
      </div>
     </form>


     </div>
    </div>
</template>



<style  scoped>
 .icon {
            cursor: pointer;
            transition: fill 0.3s ease;
        }
</style>