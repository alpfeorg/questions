<template>
  <div class="demo-block">
    <div class="demo-block__description" v-if="$slots.description">
      <slot name="description"/>
    </div>
    <div class="demo-block__source">
      <slot name="source"/>
    </div>
    <div class="demo-block__actions">
      <button @click="runCode">运行代码</button>
      <button @click="resetCode">重置</button>
    </div>
    <div class="demo-block__result" v-if="result">
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

const result = ref('')

const runCode = () => {
  try {
    const code = document.querySelector('.demo-block__source code').textContent
    // 使用 Function 构造函数来执行代码
    const fn = new Function(code)
    result.value = fn()
  } catch (error) {
    result.value = `Error: ${error.message}`
  }
}

const resetCode = () => {
  result.value = ''
}
</script>

<style scoped>
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 24px;
  margin: 16px 0;
}

.demo-block__description {
  margin-bottom: 16px;
}

.demo-block__source {
  margin-bottom: 16px;
}

.demo-block__actions {
  margin-bottom: 16px;
}

.demo-block__actions button {
  margin-right: 8px;
  padding: 4px 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}

.demo-block__actions button:hover {
  background-color: #f5f7fa;
}

.demo-block__result {
  padding: 16px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.demo-block__result pre {
  margin: 0;
  white-space: pre-wrap;
}
</style> 