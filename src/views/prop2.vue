<template>
  <div>
    count: {{ count }}
  </div>
  <div>
    localCount: {{ localCount }}
  </div>
  <button @click="goUp">up</button>
  <button @click="goDown">down</button>
  <button @click="submit">submit</button>
</template>
<script setup lang="tsx">
import { ref } from "vue"

// import {ElButton} from "element-plus"


const props = defineProps({
  count: {
    type: Number,
    required: true,
    default: 0
  }
})

const localCount = ref(props.count)

const emits = defineEmits(['update'])

const goUp = () => {
  localCount.value++
}

const goDown = () => {
  localCount.value--
}

const submit = () => {
  emits('update', localCount.value)
}

defineExpose({
  submit
})

</script>