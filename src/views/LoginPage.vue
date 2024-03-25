<template>
  <section class=" h-full pt-20">
    <div class="flex flex-col items-center justify-start px-6 mx-auto md:h-screen lg:py-0">
      <div class="w-full main-color rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Sign up
          </h1>
          <form class="space-y-4" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your
                email</label>
              <input type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="account@gmail.com">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>
            <button type="submit"
              class="w-full btn-color text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
            <p class="text-sm font-light  text-center">
              Don't have an account? <a href="/register" class="font-medium text-primary-600 hover:underline">Sign up
                here</a>
            </p>
            <div class="flex gap-5 justify-center md:justify-between">
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <div class="flex items-center">
                  <img class="w-6 h-6 mr-0 md:mr-4"
                    src="https://icon2.cleanpng.com/20240111/kah/transparent-google-logo-google-logo-with-blue-green-red-g659f90636ae008.5809308317049560034378.jpg"
                    alt="Google logo">
                  <span class="hidden md:block">Sign in with Google</span>
                </div>
              </button>
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <div class="flex items-center">
                  <img class="w-6 h-6 mr-0 md:mr-4"
                    src="https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon.png"
                    alt="Google logo">
                  <span class="hidden md:block">Sign in with Facebook</span>
                </div>
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>