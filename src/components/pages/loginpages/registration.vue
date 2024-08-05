<script setup>
import { useCounterStore } from "@/stores/counter";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
import { ref } from "vue";
import { useRouter } from "vue-router";
import imagesuser from '@/assets/images/photouser.jpg'
const CounterStore = useCounterStore() 
CounterStore.scrollTop()
const router =useRouter()

const notify = ()=>{
  toast.success("Muvaffaqiyatli o'tdingiz!",{
    autoClose:1000,
  });
}
const notifyError = ()=>{
  toast.error("Parol xato",{
    autoClose:1000,
  });
}
const notifyErrorbor = ()=>{
  toast.error("Bunday nomer mavjud!",{
    autoClose:1000,
  });
}
function validateTelInput(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^\d+]/g, '');
    teluser.value = event.target.value;
}
const generateRandomId = (length) => {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
const usernext = ref(false)
const iduser = ref(generateRandomId(9));
const photouser =ref(imagesuser)
const teluser = ref("")
const passworduser = ref("")
const passwordcopyuser = ref("")
const nameuser = ref("")
const surnameuser=ref("")
const countryuser=ref("Uzbekiston")
const cityuser= ref("Toshkent")
const manziluser=ref("Chilonzor")
const mailuser = ref("dono@mail.ru")
const tovaruser = ref([]);
const infotovaruser = ref([]);
const tovarloveuser = ref([]);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const text = ref("")
const notifyXatokam = ()=>{
  toast.error("Telefon raqami 9 ta emas",{
    autoClose:1000,
  });
}
function submit() {
  if (teluser.value.length < 9) {
        notifyXatokam();
        text.value = "Telefon raqami 9 ta emas";
        usernext.value = false;
        return; 
    }
  if (CounterStore.userExists(teluser.value)) {
    usernext.value = false
    text.value = "Bunday nomer mavjud!";
    notifyErrorbor()
    return; 
  }


  if (passworduser.value === passwordcopyuser.value) {
    CounterStore.addUser(
      iduser.value,
      photouser.value,
      teluser.value,
      passworduser.value,
      nameuser.value,
      surnameuser.value,
      countryuser.value,
      cityuser.value,
      manziluser.value,
      mailuser.value,
      tovaruser.value,
      infotovaruser.value,
      tovarloveuser.value
    );
    
    setTimeout(() => {
      router.push('/login');
    }, 1000);
    usernext.value= true
    notify();
    text.value = "Muvaffaqiyatli o'tdingiz!";
  } else {
    usernext.value= false
    notifyError();
    text.value = "Parol xato";
  }
}
 document.body.style.overflowY = 'hidden';
</script>



<template>
    <div class="bg-white fixed z-[99] top-0 left-0 w-full ">
        <div class="container py-[20px] flex flex-col justify-center h-[100dvh]">
        <RouterLink to="/"  class="p-2 flex w-[156px] justify-center p480:justify-start "><img src="@/assets/images/loglogin.svg" alt=""></RouterLink>
        <div class="logincon mb-auto px-[20px] flex justify-center items-center  mt-[10px]  p480:mt-[30px]">
            <form method="POST" @submit.prevent="submit"  class="formlogin p-[30px] max-w-[550px] w-full  flex flex-col gap-[20px] rounded-md shadow-md" action="">
             <RouterLink to="/" class="w-[25px] block"><img class="w-full" src="@/assets/icon/prev.svg" alt=""></RouterLink>
            <h3 class=" text-[20px] p480:text-[25px] font-semibold text-center ">Ro’yhatdan o’tish</h3>
            <p class="text-[18px] text-center">Parol va Telefon raqamingizni kiriting</p>
           <input required v-model="teluser" @input="validateTelInput" class="h-[50px] bg-[#E1E1E1] rounded-[8px] outline-none p-2" placeholder="+998" type="tel">
           <input required v-model="passworduser" class="h-[50px] bg-[#E1E1E1] rounded-[8px] outline-none p-2" placeholder="parol" type="text">
           <input required v-model="passwordcopyuser" class="h-[50px] bg-[#E1E1E1] rounded-[8px] outline-none p-2" placeholder="parol qayta kiriting" type="text">
           <input required v-model="nameuser" class="h-[50px] bg-[#E1E1E1] rounded-[8px] outline-none p-2" placeholder="Ismiz" type="text">
           <h4 v-if="usernext" class="text-center text-green-500">{{text}}</h4>
           <h4 v-else  class="text-center text-red-700">{{text}}</h4>
          <button type="submit" class="w-[145px] h-[40px] flex justify-center items-center rounded-[8px] mx-auto bg-[#F77F00] mt-[5px]  p480:mt-[10px] text-white">Ro'yhatga kiritish</button>
  
        </form>
        </div>
       
    </div>
</div>
</template>



<style lang="scss" scoped>


</style>