<template>
    <section class="min-h-screen flex items-center justify-center">
            <div class="w-3/12">
                <form>
                <div class="mb-10">
                    <h1 class="text-violet-600 text-5xl font-extrabold mb-2">Reset Your Password</h1>
                    <p class="text-slate-500">Lost your password? Please enter your email address. You will recieve a link to create a new password via email.</p>
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
                    type="submit"
                    class="inline-block px-7 py-4 bg-purple-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                   
                >
                    Reset Password
                </button>
               </div>

                </form>
                <div class="text-center">
                    <a href="#" class="underline decoration-purple-500 decoration-2 italic text-slate-500">Didn't receive an email?</a>
                </div>
            </div>
    </section>

    <Footer />
</template>