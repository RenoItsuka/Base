import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios';

Vue.use(Vuex)

const apiURLTareas = 'api/Tareas';


export default new Vuex.Store({
  state: {
    tareas: [],
    otracosa: []
  },
  getters: {
    tareas: state => state.tareas
  },
  mutations: {
    setTareas(state, data) {
      state.tareas = data;
    }
  },
  actions: {
    async leerTareas(context) {
      console.log("leyendo tareas");
      let tareasData = (await Axios.get(apiURLTareas)).data;
      console.log("se leyeron tareas", tareasData);
      context.commit("setTareas", tareasData);
    },
    async agregarTarea(context, nuevaTarea) {
      let grabar = (await Axios.post(apiURLTareas, nuevaTarea));
      await context.dispatch('leerTareas');
      // this.leerTareas(context);
    },
    async eliminaTarea(context, id) {
      console.log("eliminando" + id)
      let grabar = (await Axios.delete(apiURLTareas + "/" + id,));
      await context.dispatch('leerTareas');
      // this.leerTareas(context);
    },
    async modificaTarea(context, nuevaTarea) {
      console.log("Id de las tareas a modificar" + nuevaTarea.id)
      let grabar = (await Axios.put(apiURLTareas + "/" + nuevaTarea.id, nuevaTarea));
      await context.dispatch('leerTareas');
      // this.leerTareas(context);
    }
  },
  modules: {
  }
})
