<script setup>

</script>


<template>
    <footer>
            <div class="container bg-[#111344] ">
                <div class="container-info flex mt-[80px]">
                    <img class="w-[185px] h-[63px]" src="@/assets/images/logofooter.png" alt="">
                <!-- ~~~~~~~~~~~~~~~comp~~~~~~~~~~~ -->
                <div class="comp-content">
                  <h3>Kompaniya</h3>
                  <RouterLink to="/"> Biz Haqimizda</RouterLink>
                  <RouterLink to="/">Aloqa</RouterLink>
                  <RouterLink to="/">Hamkorlarimiz</RouterLink>
                </div>
                <!-- ~~~~~~~~~~~~~~~tolov~~~~~~~~~~~ -->
                <div class="tolov-content">
                    <div class="tolov-content-grid grid grid-cols-2">
                        <RouterLink to="/" class="w-[68px] h-[38]"><img class="w-full h-full"  src="@/assets/images/uzcard.svg" alt=""></RouterLink>
                        <RouterLink to="/" class="w-[68px] h-[38]"><img class="w-full h-full" src="@/assets/images/click.svg" alt=""></RouterLink>
                        <RouterLink to="/" class="w-[68px] h-[38]"><img class="w-full h-full" src="@/assets/images/visa.svg" alt=""></RouterLink>
                        <RouterLink to="/" class="w-[68px] h-[38] "><img class="w-full h-full bg-cover" src="@/assets/images/humo.svg" alt=""></RouterLink>
                        <RouterLink to="/" class="w-[68px] h-[38]"><img class="w-full h-full" src="@/assets/images/payme.svg" alt=""></RouterLink>

                    </div>
                </div>
               <!-- ~~~~~~~~~~~~~~~tel~~~~~~~~~~~ -->
              <div class="tel-content">
                <a href=""> <img src="" alt="">+99895 401-20-21</a>
              </div>
                </div>
         
            </div>

    </footer>
</template>



<style lang="scss" scoped>

</style>