<template>
    <section class="text-gray-600 bg-gray-50 font-body overflow-hidden">
  <div class="container px-6 py-24 mx-auto">

   <ul class="list-none">

        <li v-for="obj in jobs.jobs">
            <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">BACKEND</span>
          <span class="font-semibold title-font text-gray-700">{{obj.company_name}}</span>
          <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Senior Fullstack Web Developer</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    
    </div>

        </li>

   </ul>



  </div>
</section>

  
  </template>
    
<script>
import { mapState } from 'vuex'
export default {
    name: '',
    computed: {

...mapState(['jobs'])
},

  created(){

      this.$store.dispatch('jobList')

}

    }
    </script>
    