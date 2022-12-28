import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from "vuex-persistedstate"; 

import auth from './modules/auth.js'
import jobs from './modules/jobs.js'

Vue.use(Vuex)

export default () => new Vuex.Store({

  modules: {
    
      auth,
      jobs,
  
  }
})
