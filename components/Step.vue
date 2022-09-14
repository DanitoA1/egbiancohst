<template>
    <div>
 <div class="flex item-center justify-center  font-medium z-5">
        <div class="-ml-10 mt-10 w-4/6"> 
            <div class="w-full line relative bg-black">
            <div class="absolute  w-1/2 bg-dark-blue line"></div>

                <div class="absolute -left-1 w-8  -mt-4 h-8 rounded-full bg-dark-blue grid place-content-center text-white ">1</div>
                <div class="absolute centerdot w-8  -mt-4  h-8 rounded-full bg-gray-300 grid place-content-center">2</div>
                <div class="absolute -right-1 w-8   -mt-4 h-8 rounded-full bg-gray-300 grid place-content-center">3</div>

            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.centerdot{
    left: 47%;
}
.line{
    height: 1px;
}
</style>