

const state =  {

jobs:[],
filteredJobs:[],

};


const getters = {



};


const mutations = {

SET_JOBS(state, jobs){

state.jobs = jobs 
},



};

const actions = {

// The News list API 

async jobCreate({commit}){

try{


const response = await this.$axios.$get(endPoint, config)
const news  	= response.articles

commit('SET_JOBS', news)


}
catch(e){

console.log(e)
}

},

// The Job List API

async jobList({commit}){

    try{
    
    
    const response = await this.$fire.firestore.collection('Job').get()

    response.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        
         const jobs  = doc.data()
         commit('SET_JOBS', jobs)
        //  console.log(jobs);
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