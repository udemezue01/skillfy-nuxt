<!-- Please remove this file from your project -->
<template>
    <!--   The navigational bar section -->
  
    <nav class="bg-white flex font-body text-md justify-between py-4 px-6 lg:px-32 items-center shadow-sm sticky top-0">
        
        <div class="text-white text-center">
  
          <NuxtLink to ="/" class="text-gray-800 font-body font-black flex justify-between items-center tracking-wider ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-green-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
          </svg>

          Skillfy

        </NuxtLink>
        </div>
  
        <div class="flex items-center space-x-4 hidden lg:block text-lg">
  
          <NuxtLink to="/" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md "> Home</NuxtLink>
  
          <NuxtLink to="/news" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> News</NuxtLink>
  
  
          
  
        </div>
  
        
        <div class="flex justify-center hidden xl:block">
        <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Get Started</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Join</button>
      </div>
        
  
        <!-- The navbar toggle section -->
        <div class="lg:hidden items-center">
  
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
          
        </div>
  
        <!-- End of the navbar toggle section -->
  
      </nav>
  
     <!--  End of the navigational bar section -->
    
      
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  