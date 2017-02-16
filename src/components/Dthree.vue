<template>
<div id="dthree">
    <div id="viz"></div>
</div>
</template>

<script>
  import * as d3 from 'd3'
 
  export default {
    name: 'dthree',
    data () {
      return {
        msg: ''
      }
    },
    mounted: function() {
      circle()
    }
  }

  function circle() {
            let sampleSVG = d3.select('#viz')
            .append('svg')
            .attr('width', 100)
            .attr('height', 100)

        sampleSVG.append('circle')
            .style('stroke', 'gray')
            .style('fill', 'white')
            .attr('r', 40)
            .attr('cx', 50)
            .attr('cy', 50)
            .on('mouseover', function(){d3.select(this).style('fill', 'aliceblue')})
            .on('mouseout', function(){d3.select(this).style('fill', 'white')})
  }

</script>

<style>


</style>