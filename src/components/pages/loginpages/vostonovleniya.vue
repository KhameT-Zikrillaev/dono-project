<script setup>
import { useCounterStore } from "@/stores/counter";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
const CounterStore = useCounterStore() 
const router = useRouter()
CounterStore.scrollTop()
const usernumber = ref("");
const usersurname = ref("");
const passwordOutput = ref("");
const notify = ()=>{
  toast.success("Muvaffaqiyatli tikladiz!",{
    autoClose:1000,
  });
}
const notifyXato = ()=>{
  toast.error("Akkaunt yo'q yoki xato!",{
    autoClose:1000,
  });
}


function validateTelInput(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^\d+]/g, '');
    usernumber.value = event.target.value;
}
const yesacc =ref(false)

function recovery() {
   
    const inputLast4Digits = usernumber.value.slice(-4);
    const user = CounterStore.users.find(user =>
        user.usersurname === usersurname.value && user.usernumber.slice(-4) === inputLast4Digits
    );
    if (user) {
        passwordOutput.value = user.userparol;
        yesacc.value = true;
        notify()
    } else {
        yesacc.value = false
        passwordOutput.value = "Akkaunt yo'q yoki xato!";
        notifyXato()
    }
}
document.body.style.overflowY = 'hidden';
</script>



<template>
    <div class="bg-white fixed z-[99] top-0 left-0 w-full">
        <div class="container py-[20px] flex flex-col justify-center h-[100dvh]">        
        <RouterLink to="/" class="p-2 flex   justify-center w-[156px] p480:justify-start"><img src="@/assets/images/loglogin.svg" alt=""></RouterLink>
        <div class="logincon mb-auto px-[20px] flex justify-center items-center mt-[50px] p480:mt-[90px] ">
            <form  method="POST" @submit.prevent="recovery" class="formlogin p-[30px] max-w-[550px] w-full  flex flex-col gap-[20px] rounded-md shadow-md" action="">
                <div>
                    <RouterLink to="/" class="w-[25px] block"><img class="w-[25px]" src="@/assets/icon/prev.svg" alt=""></RouterLink>
                <h3 class="text-[25px] font-semibold text-center p480:ml-[50%]">Parolni topamiz</h3>
                </div>
                
            <p class="text-[18px] text-center">Raqamingiz ohirigi 4 soni va Familiya kiriting</p>
            
           <input required v-model="usernumber" class="h-[50px] bg-[#E1E1E1] rounded-[8px] outline-none p-2" @input="validateTelInput" placeholder="xxxx" type="text">
           <input required v-model="usersurname" class="h-[50px] bg-[#E1E1E1] rounded-[8px] outline-none p-2" placeholder="Familiya" type="text">
           <button  type="recovery" class="w-[145px] h-[40px] flex justify-center items-center rounded-[8px] mx-auto bg-[#F77F00] mt-[10px] text-white">Ko'rish</button>
           <h3 v-if="yesacc" class="text-center">Sizning parolingiz: <span class="text-[#004d00]">{{passwordOutput}}</span></h3>
           <h3  v-else class="text-center text-red-600">{{passwordOutput}}</h3>
        </form>
        </div>
       
    </div>
</div>
</template>



<style lang="scss" scoped>


</style>