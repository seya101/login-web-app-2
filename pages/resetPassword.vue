<template>
    <section class="min-h-screen flex items-center justify-center">
            <div class="lg:w-4/12 w-8/12" >
            <div>
                <NuxtLink to="./" class="bg-transparent font-bold my-10 inline-flex items-center text-purple-600 animate-bounce">
                    <svg class="w-7 h-7 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                    <span class="px-2 ">Back to log in </span>
                </NuxtLink>
            </div>
                <form>
                <div class="mb-10">
                    <h1 class="text-violet-600 text-5xl font-extrabold mb-2">Reset Password</h1>
                    <p class="text-slate-500">Enter the email associated with your account and we'll send an email with instructions to reset your password.</p>
                </div>
                <!-- Email input -->
                <div class=" flex items-center border-2 py-2 px-3 rounded-2xl mb-6 bg-white focus-within:border-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input
                    type="text"
                    class="form-control block w-full px-2 py-3 font-normal text-gray-700 focus:outline-none"
                    placeholder="Email Address"
                    />
                </div>


                <!-- Submit button -->
               <div class="flex justify-center mb-16">
                <button
                    @click="submitResetPassword"
                    type="submit"
                    class="inline-block px-7 py-4 bg-purple-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                   
                >
                    Reset Password
                </button>
               </div>

                </form>  
            </div>

            <div class="lg:w-4/12 w-8/12" v-if="resetPassword">
                <div class=" md:mx-auto">
                    <iframe class="mx-auto my-6" src="https://embed.lottiefiles.com/animation/96237"></iframe>
                    <!-- <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg> -->
                    <div class="text-center">
                        <h3 class="text-purple-900 font-semibold text-center text-4xl">Check your email!</h3>
                        <p class="text-slate-600 my-2">We have sent a password recover instractions to your email</p>
                        <p class="text-slate-600 my-2"> Have a great day!  </p>
                        <div class="py-10 text-center">
                            <NuxtLink to="./" href="#"
                             class="w-1/2 inline-block px-7 py-4 bg-purple-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                LOGIN  
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="text-center">

                    <a href="#" class="underline decoration-purple-500 decoration-2 italic text-slate-500">Didn't receive an email?</a>
                </div>
            </div>
    </section>

    <Footer />
</template>


<script setup>

import { ref } from "vue"

const resetPassword = ref[true];

const submitResetPassword = () => {
    resetPassword = !resetPassword;

}

console.log(resetPassword)

</script>