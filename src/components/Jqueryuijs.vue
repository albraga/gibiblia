<template lang="pug">
#jqueryuijs
  input(type='text' name='date' id='date')
</template>

<script>
  import 'script-loader!../../static/jquery-ui/jquery-ui.min.js'

  export default {
    name: 'jqueryuijs',
    data () {
      return {
        msg: this.$parent.datum
      }
    },
    mounted: function() {
      jqueryuiCode()
    }
  }

  function jqueryuiCode() {
      $('#date').datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        nextText: 'Próximo',
        prevText: 'Anterior'
      })
  }

</script>

<style>
@import url('../../static/jquery-ui/jquery-ui.min.css');


</style>
