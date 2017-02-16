<template>
<div id="jspdfjs">
    <router-link to="/contact">Contato</router-link>
    <router-link to="/about">Sobre</router-link>
    <router-link to="/dthree">D3</router-link>
    <router-link to="/threejs">Three.js</router-link>
    <router-link to="/jqueryuijs">JQuery-UI</router-link>
    <router-link to="/jspdfjs">JSPdf</router-link>
</div>
</template>

<script>
  import jsPDF from '../../static/jspdf.min.js'
  
  export default {
    name: 'jspdfjs',
    data () {
      return {
        msg: ''
      }
    },
    mounted: function() {
        let doc = new jsPDF()
        doc.text('Hello world!', 10, 10)
        doc.save('a4.pdf')
    }
  }
</script>

<style>
@import url('../../static/bootstrap/css/bootstrap.min.css');


</style>