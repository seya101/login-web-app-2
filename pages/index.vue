<template>
    <section class="h-screen">
        <div class="px-40 h-full">
            <div class="flex justify-center items-center flex-wrap h-full gap-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    class="w-full"
                    alt="Sample image"
                />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                <form>
                <div class="mb-10">
                    <h1 class="text-violet-600 text-5xl font-extrabold mb-2">Hey, hello</h1>
                    <p class="text-slate-500">You may login your <i>Wrike Account</i></p>
                </div>
                <!-- Email input -->
                <div class="mb-6">
                    <input
                    type="text"
                    class="form-control block w-full px-7 py-3 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                    placeholder="Email address"
                    />
                </div>

                <!-- Password input -->
                <div class="mb-6">
                    <input
                    type="password"
                    class="form-control block w-full px-7 py-3 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                    placeholder="Password"
                    />
                </div>

                <div class="md:flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                    <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck3"
                        checked
                    />
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                        >Remember me</label
                    >
                    </div>
                    <a
                    href="#!"
                    class="text-purple-600 hover:text-purple-700 focus:text-purple-700 active:text-purple-800 duration-200 transition ease-in-out"
                    >
                        <span> Forgot password?</span>
                    </a
                    >
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

                <div class="flex justify-center items-center mt-16 border-emerald-500">
                    <a
                    class="px-7 py-3 text-black font-medium text-lg leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-slate-50 hover:bg-slate-100" 
                    href="#!"
                    role="button"
                    >
                    <!-- <img src="@/src/images/wrike-logo.png" alt="Wrike Integration" width="300" height=""> -->
                    <!-- <a href="https://iconscout.com/icons/wrike" target="_blank">Wrike Logo Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a>  -->
                    <img src="@/src/images/wrike.svg" alt="" width="50px" height="50px">
                        Continue with Wrike
                    </a>
                </div>
                </form>
            </div>
            </div>
            <Footer />
        </div>
        
    </section>

    
</template>