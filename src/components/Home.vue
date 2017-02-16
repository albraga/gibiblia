<template>
<div id="home">
  <router-link to="/gibiblia">Gibiblia</router-link>
  <router-link to="/contact">Contato</router-link>
  <router-link to="/about">Sobre</router-link>
  <router-link to="/dthree">D3</router-link>
  <router-link to="/threejs">Three.js</router-link>
  <router-link to="/jqueryuijs">JQuery-UI</router-link>
  <router-link to="/jspdfjs">JSPdf</router-link>
</div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: ''
      }
    }
  }
	
</script>

<style>


</style>