<template>

    <div class="w-full max-w-lg p-6 m-auto mx-auto dark:bg-gray-800 font-body">
        <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">Brand</h1>
    
        <form class="space-y-8">
            <div>
                <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Title</label>
                <input v-model ="jobDetails.title" type="text" class="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
    
            <div class="">
           
                <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Description</label>
                <textarea v-model ="jobDetails.description" type="textarea" class="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" > </textarea>
            </div>

            <div class="">
           
           <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Tag</label>

           <select  name="tags" id="" class="block w-full px-6 py-4 mt-2">
            <option v-for ="obj in jobDetails.tag" :value="obj" class="text-black text-lg py-5">{{obj}}</option>
           
        </select>

       </div>

       <div class="">
           
           <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Salary</label>
           <input v-model ="jobDetails.salary" type="text" class="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
       </div>

       <div class="">
           
           <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Company Name</label>
           <input v-model ="jobDetails.company_name" type="text" class="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
       </div>

       <div class="">
           
           <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Company Logo</label>
           <input v-model ="jobDetails.logo" type="text" class="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
       </div>


    
            <div class="">
                <button class="w-full py-4 px-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    
   
    </div>
    
    </template>
    
    <script>
    
export default {
name: "dashboard",

data(){

    return{

    jobDetails:{
        
        title:"",
        description:"",
        tag:[
            
            "Marketing",
            "Frontend",
            "Backend",
            ],
        salary:"",
        company_name:"",
        company_logo:"",
    }


    }
},

created(){

this.$store.dispatch('jobList')
}

    
    }
    </script>
        
    