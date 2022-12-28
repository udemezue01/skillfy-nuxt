<!-- Please remove this file from your project -->
<template>
    <!--   The navigational bar section -->
  
    <nav class="bg-white flex font-body text-md justify-between py-4 px-6 lg:px-32 items-center shadow-sm sticky top-0">
        
        <div class="text-white text-center">
  
          <NuxtLink to ="/" class="text-gray-800 font-body font-black flex justify-between items-center tracking-wider ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-affiliate h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
              <path d="M11.683 12.317l5.759 -5.759" />
              <circle cx="5.5" cy="5.5" r="1.5" />
              <circle cx="18.5" cy="5.5" r="1.5" />
              <circle cx="18.5" cy="18.5" r="1.5" />
              <circle cx="8.5" cy="15.5" r="4.5" />
            </svg>

          Skillfy

        </NuxtLink>
        </div>
  
        <div class="flex items-center space-x-4 hidden lg:block text-lg">
  
          <NuxtLink to="/" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md "> Home</NuxtLink>
  
          <NuxtLink to="/news" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> Frontend</NuxtLink>

          <NuxtLink to="/news" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> Backend</NuxtLink>

          <NuxtLink to="/news" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> Marketing</NuxtLink>
  
  
          
  
        </div>
  
        
        <div class="flex justify-center hidden xl:block">
        
        <NuxtLink to="/register" >  <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Get Started</button> </NuxtLink>
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
  