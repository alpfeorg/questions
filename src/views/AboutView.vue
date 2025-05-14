<template>
  <div class="about">
    <h1>This is an about page---</h1>
    <div>{{ props }}</div>
    <div>111-{{ props['propA'] }}</div>
    <div>222-{{ propA }}</div>
  </div>
</template>


<script setup lang="ts">
//! 注意props定义属性时的格式
const props = defineProps(['prop-a'])
console.log(props['propA']);

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
