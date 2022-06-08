var app = new Vue({
  el:'#app',
  data:{
    mensaje:'Hola Vue.js!',
    lista : [ ],
    nombre : '',
    promedio : ''
  },
  methods: {
    agregarNota: function() {
      estadoA = false;
      if (this.promedio >= 3.5) {
        estadoA = true;
      }
      if (this.nombre != "" && this.promedio != ""){
        this.lista.push({
          nombre:this.nombre,
          promedio:this.promedio,
          estado:estadoA
        });
        this.nombre = "";
        this.promedio = "";
      } else {
        alert ("Ingrese el nombre y el promedio");
      }
    }
  },
});