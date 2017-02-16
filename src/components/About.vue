<template>
<div id="about">
  <div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Sobre mim
                <small>Prazer em conhecer!</small>
            </h1>
            <p> {{$t("message.author")}} </p>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header"><em>"Euquipe"</em> <span class="glyphicon glyphicon-thumbs-up"></span> </h2>
        </div>
        <div class="col-lg-4 col-sm-6 text-center">
            <img class="img-circle img-responsive img-center" src="../assets/eu.jpg" alt="">
            <h3>Alexandre Braga
                <small>Analista de Sistemas</small>
            </h3>
            <p> {{$t("message.aboutAuthor")}} </p>
        </div>
    </div>
  </div>
</div>
</template>

<script>
  import 'script-loader!../../static/bootstrap/js/bootstrap.min.js'

  export default {
    name: 'about',
    data () {
      return {
        msg: 'sobre'
      }
    }
  }
</script>

<style>
@import url('../../static/bootstrap/css/bootstrap.min.css');

.img-center {
	margin: 0 auto;
}

</style>
