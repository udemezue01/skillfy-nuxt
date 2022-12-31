

const state =  {

jobs:[],
filteredJobs:[],

};


const getters = {



};


const mutations = {

SET_JOBS(state, jobsArray){

state.jobs = jobsArray 
},



};

const actions = {


// The Job List API

async jobList({commit}){

  try{
    
    
    const response = await this.$fire.firestore.collection('Job').get()

    response.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const jobsArray = []
        jobsArray.push(doc.data())
        console.log(jobsArray)
        commit('SET_JOBS', jobsArray)
        
      });
      
     
  
    
    }
    catch(e){
    
    console.log(e)
    }
    
    },

    // The Job Create API

    async jobCreate({commit}){

      try{
        
        
        const response = await this.$fire.firestore.collection('Job').get()
    
        response.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const jobsArray = []
            jobsArray.push(doc.data())
        
          commit('SET_JOBS', jobsArray)
            
          });
          
        
      
        
        }
        catch(e){
        
        console.log(e)
        }
        
        },

};


export default {

state,
getters,
mutations,
actions,
}