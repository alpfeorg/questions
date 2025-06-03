<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Graph } from '@antv/x6'

  onMounted(() => {
    const con = document.getElementById("container")

    const graphInstance = new Graph({
      container: con!,
      background: {
        color: "#F2F7FA"
      },
      width: 400,
      height: 400
    })

    graphInstance.addNode({
      id: "1",
      shape: 'rect',
      x: 100,
      y: 100,
      width: 100,
      height: 50,
      label: 'rect1111'
    })

    graphInstance.addNode({
      id: "2",
      shape: 'rect',
      x: 200,
      y: 200,
      width: 100,
      height: 50,
      label: 'rect2222'
    })

    graphInstance.addEdge({
      source: "1",
      target: "2",
      attrs: {
        line: {
          stroke: 'red',
          strokeWidth: 1,
        },
      }
    })

  })


</script>