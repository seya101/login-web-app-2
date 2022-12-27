<template>
    <section class="h-screen">
        <div class="px-40 md:h-full">
            <div class="flex md:justify-center md:items-center flex-wrap h-full gap-6 text-gray-800 sm:justify-start  sm:items-end sm:gap-0">
            <div class="md:w-8/12 lg:w-6/12">
                <img
                    src="../src/images/stat_undraw.svg"
                    alt="Sample image"
                />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                <form>
                <div class="mb-10">
                    <h1 class="text-violet-600 text-5xl font-extrabold mb-2">Hey, hello</h1>
                    <p class="text-slate-500">You may login your <i class="underline decoration-solid decoration-lime-400 decoration-4 ">Wrike</i> Account</p>
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

                <!-- Password input -->
                <div class=" flex items-center border-2 py-2 px-3 rounded-2xl mb-6 bg-white focus-within:border-purple-500">
                    <span class="focus:outline-none focus:shadow-outline focus:border-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    
                    <input
                    type="password"
                    class="form-control block w-full px-2 py-3 font-normal text-gray-700 focus:outline-none"
                    placeholder="Password"
                    />
                </div>

                <div class="md:flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                    <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                        checked
                    />
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                        >Remember me</label
                    >
                    </div>
                    <NuxtLink
                    to="resetPassword"
                    class="text-purple-600 hover:text-purple-700 focus:text-purple-700 active:text-purple-800 duration-200 transition ease-in-out"
                    >
                        <span> Forgot password?</span>
                    </NuxtLink>
                </div>

                <!-- Submit button -->
               <div class="flex justify-center mb-16">
                <button
                    type="submit"
                    class="inline-block px-7 py-4 bg-purple-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                   
                >
                    Sign in
                </button>
               </div>

                <div
                    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p class="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                
                   
                    
                <button class="flex items-center justify-center flex-none px-3 py-4 md:px-4 md:py-3 border-2 rounded-lg font-medium border-purple-700 w-full shadow-md hover:shadow-lg focus:shadow-lg focus:ring-0 active:shadow-lg transition duration-150">
                    <img src="@/src/images/wrike.svg" alt="" class="w-10">
                    <span>Sign in with Wrike</span>
                </button>
                </form>
            </div>
            </div>
            
        </div>

        <Footer />
    </section>

   
</template>