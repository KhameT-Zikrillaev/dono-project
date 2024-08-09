<script setup>

</script>


<template>
    <footer class="bg-[#111344] mt-[50px] p768:mt-[80px] p992:mt-[100px]">
            <div class="container py-[100px] px-[10px] p1200:px-[79px] text-white ">
             
                <div class="container-info p768:w-[75%] p992:w-full p480:grid p480:grid-cols-2 p992:flex justify-between grid-rows-3 p992:grid-cols-0 p992:grid-rows-1 pl-[70px] p992:pl-[0px]">
                  <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                  <img  class="w-[185px] h-[63px] " src="@/assets/images/logofooter.png" alt="">
                  <span class="p992:hidden"></span>
                <!-- ~~~~~~~~~~~~~~~2~~~~~~~~~~~ -->
                <div class="comp-content flex flex-col gap-[15px] mt-[47px] p480:mt-[0px]">
                  <h3 class="text-[22px]">Kompaniya</h3>
                  <RouterLink to="/" class="mt-[20px]"> Biz Haqimizda</RouterLink>
                  <RouterLink to="/contact">Aloqa</RouterLink>
                  <RouterLink to="/">Hamkorlarimiz</RouterLink>
                </div>
                <!-- ~~~~~~~~~~~~~~~3~~~~~~~~~~~ -->
                <div class="tolov-content w-[170px] mt-[67px] p480:mt-[0px]">
                  <h3 class="text-[22px]">To'lov turlari</h3>
                    <div class="tolov-content-grid grid grid-cols-2 gap-[15px] mt-[35px]">
                        <RouterLink to="/" class="w-[68px] h-[38px]"><img class="w-full h-full"  src="@/assets/images/uzcard.svg" alt=""></RouterLink>
                        <RouterLink to="/" class="w-[68px] h-[38px]"><img class="coverclick object-cover rounded-md w-full h-full" src="@/assets/images/click.svg" alt=""></RouterLink>
                        <RouterLink to="/" class="w-[68px] h-[38px]"><img class="w-full h-full" src="@/assets/images/visa.svg" alt=""></RouterLink>
                        <RouterLink to="/" class="w-[68px] h-[38px] "><img class="w-full h-full bg-cover" src="@/assets/images/humo.svg" alt=""></RouterLink>
                        <RouterLink to="/" class="w-[68px] h-[38px]"><img class="w-full h-full" src="@/assets/images/payme.svg" alt=""></RouterLink>

                    </div>
                </div>
               <!-- ~~~~~~~~~~~~~~~4~~~~~~~~~~~ -->
              <div class="tel-content flex flex-col gap-[15px] mt-[50px] p992:mt-[0px]">
                <h3 class="text-[22px]">Aloqa uchun</h3>
                <RouterLink to="/" class="flex items-center gap-[5px] mt-[20px]"><img class="w-[23px] h-[23px]"  src="@/assets/icon/naviconlocation.png" alt="">Toshkent, O’zbekiston</RouterLink>
                <a href="tel:990000441"  class="flex items-center gap-[5px]"><img class="w-[20px] h-[20px]"  src="@/assets/icon/navicontel.png" alt="">+99899 000-04-41</a>
              </div>
                <!-- ~~~~~~~~~~~~~~~5~~~~~~~~~~~ -->
              <div class="browsers">
                <h3 class="text-[22px] mt-[50px] p992:mt-[0px]">Ijtimoiy tarmoqlarda</h3>
                <div class="flex mt-[15px] p480:mt-[35px] gap-[40px]">
                  <RouterLink to="/"><img src="@/assets/images/Vector.svg" alt=""></RouterLink>
                  <RouterLink to="/"><img src="@/assets/images/Vector(1).svg" alt=""></RouterLink>
                  <RouterLink to="/"><img src="@/assets/images/Vector(2).svg" alt=""></RouterLink>
                </div>
              </div>



                </div>
                <div class="container-intro mt-[30px]  text-center p768:text-left p768:flex p768:justify-between">
                    <p>&copy; 2024 Dona.uz</p>
                    <h3>Sayt XamaSofT kompaniyasi tomonidan ishlab chiqildi</h3>
                </div>
         
            </div>

    </footer>
</template>



<style lang="scss" scoped>

</style>