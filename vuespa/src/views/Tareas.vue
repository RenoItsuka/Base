<template>
  <div class="home container">
    <h3>Tareas</h3>
    <table class="table">
      <thead><tr><th>Id</th>
      <th>Titulo</th><th>Descripcion</th> <th> Estado </th> <th>Editar </th> <th> Eliminar</th> </tr></thead>
      <tbody>
        <tr v-for="t in tareas" v-bind:key="t.id" >
          <td>{{t.id}}</td>
          <td>{{t.titulo}}</td>
          <td>{{t.descripcion}}</td>
          <td>{{t.estado}}</td>
          <td><button class="btn btn-primary" @click="edita(t.id,t.titulo,t.descripcion,t.estado)"> Modificar</button></td>
          <td><button class="btn btn-danger" @click=elimina(t.id)> X </button></td>
        </tr>
      </tbody>
    </table>
    <br><br>
    <div v-if="modificacion==true">
    <h1>Modificar tarea owo</h1>
    <ModificarTarea :id="id" :titulo="titulo" :descripcion="descripcion" :estado="estado"></ModificarTarea>
    <button class="btn btn-danger" @click="modificacion=false">Cancelar</button>
    </div>

    <br><br>
    <crear-tarea></crear-tarea>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import CrearTarea from "../components/CrearTarea";
import ModificarTarea from "../components/ModificarTarea" ;

export default {
  name: "Tareas",
  modificacion:false,
  id:0,
  titulo:"",
  descripcion:"",
  estado:"",
  data(){
    return{
      modificacion:false,
      id:0,
      titulo:"",
      descripcion:"",
    }
  },
  components: {
    CrearTarea,
    ModificarTarea
  },
  methods: {
    ...mapActions(["leerTareas"]),
    ...mapActions(["eliminaTarea"]),
    //Es otro metodo metodico
    elimina(id){
      alert(id)
      this.eliminaTarea(id)
    },
    edita(id,titulo,descripcion,estado){
      alert(id + " " + titulo + " " + descripcion + " " + estado)
      this.id = id
      this.titulo=titulo
      this.descripcion=descripcion
      this.estado=estado
      this.modificacion=true
    }
  },
  computed: {
    ...mapGetters(["tareas"])
  },
  created() {
    this.leerTareas();
  }
};
</script>
