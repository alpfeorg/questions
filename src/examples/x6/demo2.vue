<template>
  <canvas style="width: 200px;height: 200px;background-color: red;" ref="canvasRef1"></canvas>
  <canvas style="width: 200px;height: 200px;background-color: red;" ref="canvasRef2"></canvas>
  <canvas style="width: 200px;height: 200px;background-color: red;" ref="canvasRef3"></canvas>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
const canvasRef1 = ref()
const canvasRef2 = ref()
const canvasRef3 = ref()


// 把浏览器放大到dpr=2
// 虽然css里设置200*200，但量一下，浏览器里已经是400*400
onMounted(() => {
  const can1 = canvasRef1.value!
  const can2 = canvasRef2.value!
  const can3 = canvasRef3.value!

  can1.width = 200 // 如果不设置，那会采用canvas默认的 300*150
  can1.height = 200

  // 对can1来说，他认为自己是在200*200的空间上画的，画完以后，浏览器将这个200*200的空间映射到屏幕上，此时是200*200--->400*400，那原本不模糊的线，现在也模糊了

  drawLine(can1.getContext('2d')!)

  const dpr = window.devicePixelRatio||1
  const rect2 = can2.getBoundingClientRect();

  can2.width = rect2.width * dpr // 将绘制的空间尺寸放大后，canvas绘制空间成了400*400，画完以后，又映射到屏幕上的400*400，那这样就不会模糊了
  can2.height = rect2.height * dpr

  drawLine(can2.getContext('2d')!)


  const rect3 = can3.getBoundingClientRect();

  can3.width = rect3.width * dpr
  can3.height = rect3.height * dpr

  const ctx3 = can3.getContext('2d')!
  ctx3.scale(dpr, dpr) // 虽然can2中绘制不模糊了，但存在一个问题，人为的扩大了绘制空间，原本我就想在200*200的空间上画，我的定位，大小，长度的数值都是没问题的，比如200长的一条线，就是要画到最右边了，但是现在扩大空间后，画的就真的是一条200长的线，知道canvas的中间了。所以同步的把canvas内坐标放大一下，这样虽然还是画的200，但因为scale放大了，就相当于这条线放大了2倍，就画到了最右边了
  // ! 到此canvas在搞dpr下的模糊问题才是真的解决了
  drawLine(ctx3)


})


function drawLine(ctx: CanvasRenderingContext2D) {
  ctx.beginPath()
  ctx.moveTo(0, 100)
  ctx.lineTo(100, 100)
  ctx.stroke()
}
</script>

<style lang="scss" scoped>
canvas {
  display: block;
  margin-bottom: 10px;
}

</style>