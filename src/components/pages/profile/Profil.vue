<script setup>
import { useCounterStore } from "@/stores/counter";
import { useRouter } from "vue-router";
const CounterStore = useCounterStore();
CounterStore.scrollTop()
const router = useRouter()
if(CounterStore.oneuser === null){
router.push('/login')
}
function exitUSER(){
    localStorage.removeItem("success")
    CounterStore.activecarT()
    CounterStore.activemenuprofil = false
    CounterStore.oneuser = null;
    //  CounterStore.$reset(); 
    router.push('/');
    window.location.reload();
    CounterStore.profilactivated = false
    CounterStore.load()
}

</script>


<template>
    <div class="profil">
     <div class="container">
        <div class="profil-con mt-[30px] px-[10px] p480:px-[0px]">
            <div class="photo-user flex items-center p480:justify-center mx-auto gap-4">
                <div class=" w-[100px] h-[100px]  p992:w-[200px] p992:h-[200px] rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
                    <img class="photos rounded-3xl  object-cover "  :src="CounterStore.oneuser?.photo" alt="Image Preview"/>
                </div>
                
                <div class="flex flex-col  border">
            <h4 class=" p480:text-[20px] font-semibold">{{CounterStore.oneuser?.username}} {{CounterStore.oneuser?.usersurname}}</h4>
            <div class="bg-[#F77F00] mt-[10px] w-[135px] rounded-md flex justify-center text-white">Bonus:100</div>
            <RouterLink to="/sozlamalar" class="mt-[10px] text-[#F77F00] p480:text-[20px] font-semibold">Sozlamalarga o’tish</RouterLink>
            <span class="bg-[#F77F00] w-full h-[2px]"></span>
          </div>
            </div>

              <!-- ~~~~~~~~~~~~~~~~~~~~~contact~~~~~~~~~~~~~~~~~~~~~~~ -->
              <div class="mt-[20px]  flex items-center justify-center p480:px-[30px]">
                <div class="profil-contact flex gap-2 flex-col p480:flex-row p480:justify-between  p480:w-full text-[14px] p768:text-[20px]  font-semibold">
                 <RouterLink to="/" class="flex items-center  p480:justify-center gap-[10px]"><img class="w-[25px] h-[25px]" src="@/assets/icon/phone.svg" alt=""> <span>{{CounterStore.oneuser?.usernumber}}</span></RouterLink>
                 <RouterLink to="/" class="flex items-center  p480:justify-center gap-[10px]"><img class="w-[25px] h-[25px]" src="@/assets/icon/location.svg" alt=""> <span>{{CounterStore.oneuser?.usercity}}</span></RouterLink>
                 <RouterLink to="/" class="flex items-center  p480:justify-center gap-[10px]"><img class="w-[25px] h-[25px]" src="@/assets/icon/telegram.svg" alt=""> <span>{{CounterStore.oneuser?.usermail}}</span></RouterLink>
            </div>
              </div>
          
            <div class="profil-info mt-[30px] p480:px-[30px]">
                <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~buyurtma~~~~~~~~~~~~~~~~~~~~~~~ -->
                <RouterLink to="/buyurtmatarix" class="flex items-center w-full py-[15px] px-[5px] hover:bg-[#7C797C80] hover:bg-opacity-5 transition-all">
                    <div class="  w-[25px] h-[25px]"><img  class="photos object-cover" src="@/assets/icon/parkoutline.svg" alt=""></div>
                    <span class="ml-[20px]">Mening buyurtmalarim</span>
                    <img class="ml-auto" src="@/assets/icon/nexticon.svg" alt="">
                </RouterLink>
                <span class="w-full block bg-[#7C797C80] h-[2px]"></span>
                <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~sevimlilar~~~~~~~~~~~~~~~~~~~~~~~ -->
                <RouterLink to="/sevimlilarim" class="flex items-center w-full py-[15px] px-[5px] hover:bg-[#7C797C80] hover:bg-opacity-5 transition-all">
                    <div class="  w-[25px] h-[25px] overflow-hidden"><img  class="photos object-cover mt-[2px]" src="@/assets/icon/serdsa2.svg" alt=""></div>
                    <span class="ml-[20px]">Mening sevimlilarim</span>
                    <img class="ml-auto" src="@/assets/icon/nexticon.svg" alt="">
                </RouterLink>
                <span class="w-full block bg-[#7C797C80] h-[2px]"></span>
                <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~chiqish~~~~~~~~~~~~~~~~~~~~~~~ -->
                <RouterLink to="/"  @click="exitUSER()" class="flex items-center w-full py-[15px] px-[5px] hover:bg-[#7C797C80] hover:bg-opacity-5 transition-all">
                    <div class="  w-[25px] h-[25px] overflow-hidden"><img  class="photos object-cover" src="@/assets/icon/exit.svg" alt=""></div>
                    <span class="ml-[20px]">Chiqish</span>
                    <img class="ml-auto" src="@/assets/icon/nexticon.svg" alt="">
                </RouterLink>
                <span class="w-full block bg-[#7C797C80] h-[2px]"></span>
            </div>


        </div>
     </div>
    </div>
</template>



<style  scoped>

</style>