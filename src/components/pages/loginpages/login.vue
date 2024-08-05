<script setup>
import { useCounterStore } from "@/stores/counter";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
const CounterStore = useCounterStore() 
const router = useRouter()
CounterStore.scrollTop()
const text = ref("")
const usernumber = ref("")
const userpassword =ref("")
const usernext = ref(false)

function validateTelInput(event) {
    const input = event.target;
    const value = input.value.replace(/[^\d+]/g, '');
    input.value = value;
    usernumber.value = value;
}
const notify = ()=>{
  toast.success("Muvaffaqiyatli kirdingiz!",{
    autoClose:1000,
  });
}
const notifyXato = ()=>{
  toast.error("Akkaunt yo'q yoki xato!",{
    autoClose:1000,
  });
}
const notifyXatokam = ()=>{
  toast.error("Telefon raqami 9 ta emas",{
    autoClose:1000,
  });
}
function kirish() {

    if (usernumber.value.length < 9) {
        notifyXatokam();
        text.value = "Telefon raqami 9 ta emas";
        usernext.value = false;
        return; 
    }
    const userFound = CounterStore.users?.find(item => 
        item.usernumber === usernumber.value && item.userparol === userpassword.value
    );

    if (userFound) {
        localStorage.setItem("success", "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J");
        CounterStore.activecarT();
        CounterStore.addoneuser(userFound);
        notify();
        setTimeout(() => {
            router.push('/');
        }, 2000);
        CounterStore.edituserone(userFound);
        text.value = "Muvaffaqiyatli kirdingiz!";
        CounterStore.profilactivated = true
        usernext.value = true;
    } else {
        notifyXato();
        text.value = "Akkaunt yo'q yoki xato!";
        CounterStore.profilactivated = false
        usernext.value = false;
    }
}
// function kirish() {
//     const userFound = CounterStore.users?.find(item => 
//         item.usernumber === usernumber.value && item.userparol === userpassword.value
//     );
//     if (userFound) {
//         localStorage.setItem("success", "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A7B8C9D0E1F2G3H4I5J");
//         CounterStore.activecarT()
//         CounterStore.addoneuser(userFound)
//         notify()
//         setTimeout(() => {
//             router.push('/');;
//             }, 2000);
//         CounterStore.edituserone(userFound)
//         text.value = "Muvaffaqiyatli kirdingiz!"
//         usernext.value= true
//     } else{
//         notifyXato()
//         text.value = "Akkaunt yo'q yoki xato!"
//         usernext.value= false
//     }
// }
document.body.style.overflowY = 'hidden';
</script>



<template>
    <div class="bg-white fixed z-[99] top-0 left-0 w-full">
        <div class="container py-[20px] flex flex-col justify-center h-[100dvh]">
            
        <RouterLink to="/" class="p-2 flex justify-center w-[156px] p480:justify-start"><img src="@/assets/images/loglogin.svg" alt=""></RouterLink>
        <div class="logincon mb-auto px-[20px] flex justify-center items-center  mt-[50px] p480:mt-[90px]">
            <form  method="POST" @submit.prevent="kirish" class="formlogin p-[30px] max-w-[550px] w-full  flex flex-col gap-[20px] rounded-md shadow-md" action="">
                <div>
                    <RouterLink to="/" class="w-[25px] block"><img class="w-[25px]" src="@/assets/icon/prev.svg" alt=""></RouterLink>
                <h3 class="text-[25px] font-semibold text-center p480:ml-[50%]">Tizimga kirish</h3>
                </div>
                
            <p class="text-[18px] text-center">Parol va Telefon raqamingizni kiriting</p>
           <input required v-model="usernumber" class="h-[50px] bg-[#E1E1E1] rounded-[8px] outline-none p-2" @input="validateTelInput" placeholder="+998" type="text">
           <input required v-model="userpassword" class="h-[50px] bg-[#E1E1E1] rounded-[8px] outline-none p-2" placeholder="parol" type="text">
          <button type="kirish" class="w-[145px] h-[40px] flex justify-center items-center rounded-[8px] mx-auto bg-[#F77F00] mt-[10px] text-white">Kirish</button>
          <h4 v-if="usernext" class="text-center text-green-500">{{text}}</h4>
          <h4 v-else  class="text-center text-red-700">{{text}}</h4>
          <div class="flex flex-col items-center gap-[20px] p480:flex-row p480:justify-between">
            <RouterLink to="/registration" class="max-w-[220px] w-full text-center text-[14px] p480:text-[16px]">Ro'yhatdan o'tmaganmisiz?</RouterLink>
            <RouterLink to="/vostonovleniya" class="max-w-[220px] w-full text-center  text-[14px] p480:text-[16px]">Parolingizni unutdingizmi?</RouterLink>
        </div>
        </form>
        </div>
       
    </div>
</div>
</template>



<style scoped>

</style>