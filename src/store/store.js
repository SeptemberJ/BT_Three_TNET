import Vue from 'vue'
import Vuex from 'vuex'
import "babel-polyfill"
import * as types from "./types.js"
import * as Storage from "../util/storage.js";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isMobile:false,
    activeRoute:'软件开发',
    CurSiderMenu:'软件开发',
    open:true,
    docked: true,
    userInfo:{},
    
    
    },
  
  mutations:{
    [types.ROUTE_CHANGE](state,data){
      state.activeRoute = data.activeRoute
      state.CurSiderMenu = data.activeRoute
    },
    
  },
//   actions: {

//   },
  getter: {

  }
})
export default store







