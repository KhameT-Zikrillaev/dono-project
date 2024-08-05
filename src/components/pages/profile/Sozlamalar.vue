<script setup>
import { ref } from 'vue';
import { useCounterStore } from "@/stores/counter";
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
const CounterStore = useCounterStore();
CounterStore.scrollTop()
const notify = ()=>{
  toast.success("Muvaffaqiyatli o'zgartirild!",{
    autoClose:1000,
  });
}
const router = useRouter()
if(CounterStore.oneuser === null){
router.push('/login')
}
const editnumber = ref(CounterStore.usernumber);
const editviloyat = ref(CounterStore.userviloyat);
const editname = ref(CounterStore.username);
const edittuman = ref(CounterStore.usercity);
const editsurname = ref(CounterStore.usersurname);
const editmanzil = ref(CounterStore.usermanzil);
const editmail = ref(CounterStore.usermail);
const imagePreview = ref(CounterStore.photo);
const editparol = ref(CounterStore.userparol) 
function validateTelInput(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^\d+]/g, '');
    teluser.value = event.target.value;
}
const handleFileChange = (event) => {
  const file = event.target.files[0]; 
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result; 
    };
    reader.readAsDataURL(file); 
  }
};

const edituser = () => {
  CounterStore.editoneuser(
    editnumber.value,
    editviloyat.value,
    editname.value,
    edittuman.value,
    editsurname.value,
    editmanzil.value,
    editmail.value,
    imagePreview.value,
    editparol.value
  );
  change()
  notify()
};

function change(){
CounterStore.usernumber = editnumber.value;
CounterStore.userviloyat =  editviloyat.value ;
CounterStore.username  = editname.value;
CounterStore.usercity  = edittuman.value;
CounterStore.usersurname  = editsurname.value;
CounterStore.usermanzil = editmanzil.value;
CounterStore.usermail = editmail.value;
CounterStore.photo = imagePreview.value;
CounterStore.userparol  = editparol.value 
}
</script>


<template>
  <div class="sozlamalar">
    <div class="container  px-[15px]  p480:px-[50px] p992:px-[20px]">
      <div class="user__sozlamalar mt-[30px]">
        <div class="user__sozlamalar-con">
          <form @submit.prevent="edituser" class="w-full" action="">  
            <!-- ~~~~~~~~~~~~~~~~photo~~~~~~~~~~~~~~~~~~ -->
            <div class="photo-user flex items-center gap-4">
                <div class=" w-[100px] h-[100px]  p992:w-[200px] p992:h-[200px] rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
                    <img class="photos rounded-3xl  object-cover bg-red-500 "  :src="CounterStore.oneuser?.photo" alt="Image Preview"/>
                </div>
                
                <div class="flex flex-col gap-3">
            <h4 class=" p480:text-[20px] font-semibold">Rasimingizni tahrirlang</h4>
            <label
              for="fileInput"
              class="border flex justify-center rounded-md  items-center bg-[#F77F00] max-w-[250px] h-[45px] w-full cursor-pointer"
            >
              <span class=" p480:text-[23px] text-white">Fotosurat yuklash</span>
              <input id="fileInput" @change="handleFileChange" accept="image/*"  type="file" class="hidden" />
            </label>
          </div>
            </div>
        
          <!-- ~~~~~~~~~~~~~~~~~~~~~~~info~~~~~~~~~~~~~~~~~~~~~~ -->
          <div class="form-info-grid  items-center mt-[30px] grid   p992:grid-cols-2 gap-x-[50px] p1200:gap-x-[200px] gap-y-[26px] w-full">
<!-- ~~~~~Number(Telefon)~~~~~~~ -->
           <div class="form-info-card flex flex-col gap-2 p480:flex-row  p480:items-center  p480:gap-[34px]">
            <h5 class="text-[#7C797C] w-[120px]">Telefon</h5>
            <input required v-model="editnumber" @input="validateTelInput"  class="py-[10px] px-[20px] text-[16px] w-full border border-[#001E2280] rounded-[8px]" placeholder="9990000" disabled  type="text">
           </div>
<!-- ~~~~~Shahar(Toshkent)~~~~~~~ -->
           <div class="form-info-card flex flex-col gap-2 p480:flex-row  p480:items-center  p480:gap-[34px]">
            <h5 class="text-[#7C797C] w-[120px] ">Davlat</h5>
            <input required v-model="editviloyat"  class="py-[10px] px-[20px] text-[16px]  w-full border border-[#001E2280] rounded-[8px]" placeholder="Viloyat"  type="text">
           </div>
<!-- ~~~~~name(ism)~~~~~~~ -->
           <div class="form-info-card flex flex-col gap-2 p480:flex-row  p480:items-center  p480:gap-[34px]">
            <h5 class="text-[#7C797C] w-[120px]">Ism</h5>
            <input required v-model="editname" class="py-[10px] px-[20px] text-[16px] w-full border border-[#001E2280] rounded-[8px]" placeholder="Ismingiz"  type="text">
           </div>
<!-- ~~~~~Tuman(Chilonzor)~~~~~~~ -->
          <div class="form-info-card flex flex-col gap-2 p480:flex-row  p480:items-center  p480:gap-[34px]">
            <h5 class="text-[#7C797C] w-[120px]">shahar</h5>
            <select name="" id="" v-model="edittuman" class="py-[10px] px-[20px]  text-[16px] w-full border border-[#001E2280] rounded-[8px]">
    <option value="Toshkent">Toshkent</option>
    <option value="Surxondaryo">Surxondaryo</option>
    <option value="Sirdaryo">Sirdaryo</option>
    <option value="Samarqand">Samarqand</option>
    <option value="Qoraqalpogʻiston">Qoraqalpogʻiston</option>
    <option value="Qashqadaryo">Qashqadaryo</option>
    <option value="Navoiy">Navoiy</option>
    <option value="Namangan">Namangan</option>
    <option value="Xorazm">Xorazm</option>
    <option value="Jizzax">Jizzax</option>
    <option value="Fargʻona">Fargʻona</option>
    <option value="Andijon">Andijon</option>
 </select>
          </div>
<!-- ~~~~~surname(familiya)~~~~~~~ -->
            <div class="form-info-card flex flex-col gap-2 p480:flex-row  p480:items-center  p480:gap-[34px]">
            <h5 class="text-[#7C797C] w-[120px]">Familiya</h5>
            <input required v-model="editsurname" class="py-[10px] px-[20px]  text-[16px] w-full border border-[#001E2280] rounded-[8px]" placeholder="Familiya"  type="text">
           </div>
<!-- ~~~~~location(manzil)~~~~~~~ -->
           <div class="form-info-card flex flex-col gap-2 p480:flex-row  p480:items-center  p480:gap-[34px]">
            <h5 class="text-[#7C797C] w-[120px]">Manzil</h5>
            <input required v-model="editmanzil" class="py-[10px] px-[20px]  text-[16px] w-full border border-[#001E2280] rounded-[8px]" placeholder="Manzil"  type="text">
           </div>
<!-- ~~~~~email(mail)~~~~~~~ -->
           <div class="form-info-card flex flex-col gap-2 p480:flex-row  p480:items-center  p480:gap-[34px]">
            <h5 class="text-[#7C797C] w-[120px]">Email</h5>
            <input required  type="email" v-model="editmail" placeholder="Введите ваш email" class="py-[10px] px-[20px] text-[16px] w-full border border-[#001E2280] rounded-[8px]">
           </div>
           <div class="form-info-card flex flex-col gap-2 p480:flex-row  p480:items-center  p480:gap-[34px]">
            <h5 class="text-[#7C797C] w-[120px]">parol</h5>
            <input required  type="text" v-model="editparol" placeholder="yengi parol kiritish" class="py-[10px] px-[20px] text-[16px] w-full border border-[#001E2280] rounded-[8px]">
           </div>
           <span></span>
<!-- ~~~~~edit button(o'zgartirish)~~~~~~~ -->
          <button type="edituser" class="btn-edit w-[240px] h-[40px] flex justify-center items-center rounded-[8px] ml-auto bg-[#F77F00] mt-[10px] text-white">O'zgartirish</button>
          </div>
        </form>
        </div>
      </div>
    </div>
    <input type="text" />
  </div>
</template>



<style  scoped>
input{
    outline: none;
}
</style>