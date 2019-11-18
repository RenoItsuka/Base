<template>
<form class="form-inline">
<div class="form-group">
   <label>Titulo:</label>&nbsp;<input class="form-control" type="text" v-model="titulo" />
   <label>Descripcion:</label>&nbsp;<input class="form-control" type="text" v-model="descripcion" />
   <label>Estado:</label>&nbsp;<input class="form-control" type="text" v-model="estado" />
   &nbsp;<input class="btn btn-info " type="button" v-on:click="guardarClick" value="Modificar" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ModificarTarea",
  props:{
      id:Number,
      titulo:String,
      descripcion:String,
      estado:String
  },
  data: function() {
    return {
      id:0,
      titulo: "",
      descripcion: "",
      estado: ""
    };
  },
  methods: {
    async guardarClick() {
      await this.modificaTarea({
        id:this.id,
        descripcion: this.descripcion,
        titulo: this.titulo,
        estado: this.estado
      });
    },

    ...mapActions(["modificaTarea"])
  }
};
</script>