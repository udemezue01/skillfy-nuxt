

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



};


export default {

state,
getters,
mutations,
actions,
}