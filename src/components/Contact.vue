<template lang="pug">
#contact
  | {{ msg }}
</template>

<script>
  import _ from 'lodash'
  import 'script-loader!../../static/bootstrap/js/bootstrap.min.js'

  let tomsg = _.sample(['um', 'dois', 'três'])
  
  export default {
    name: 'contact',
    data () {
      return {
        msg: tomsg
      }
    }
  }
</script>

<style>
@import url('../../static/bootstrap/css/bootstrap.min.css');


</style>