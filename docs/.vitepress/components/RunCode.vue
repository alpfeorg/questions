<template>
  <div class="run-code" ref="container">
    <div class="code-content">
      <slot />
    </div>
    <div class="code-actions">
      <button class="run-button" @click="runCode">运行</button>
      <button class="clear-button" @click="clearResult">清除</button>
    </div>
    <div v-if="result" class="code-result">
      <div class="result-header">运行结果：</div>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const result = ref('')
const container = ref<HTMLDivElement | null>(null)
let codeElement

onMounted(() => {
  // 在组件挂载后获取代码元素
  if (container.value) {
    codeElement = container.value?.querySelector('pre code')
    console.log('找到的代码元素:', codeElement)
    if (codeElement) {
      console.log('代码内容:', codeElement.textContent)
    }
  }
})

const runCode = () => {
  try {
    if (!codeElement) {
      result.value = 'Error: 无法找到代码元素'
      return
    }

    const code = codeElement.textContent.trim()
    console.log('要执行的代码:', code)

    // 创建一个新的 Function 来执行代码
    const consoleLogs: string[] = []
    const mockConsole = {
      log: (...args) => {
        const formattedArgs = args.map(arg => {
          if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 2)
          }
          return String(arg)
        })
        consoleLogs.push(formattedArgs.join(' '))
      }
    }

    // 创建一个新的执行环境
    const fn = new Function('console', `
      try {
        ${code}
      } catch (error) {
        console.log('Error:', error.message)
      }
    `)

    // 执行代码
    fn(mockConsole)

    // 显示结果
    if (consoleLogs.length > 0) {
      result.value = consoleLogs.join('\n')
    } else {
      result.value = '代码已执行，但没有输出'
    }
  } catch (error) {
    result.value = `Error: ${error.message}`
    console.error('执行错误:', error)
  }
}

const clearResult = () => {
  result.value = ''
}
</script>

<style scoped>
.run-code {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  margin-bottom: 24px;
}

.code-content {
  padding: 24px;
}

.code-actions {
  padding: 8px 16px;
  background-color: #fff;
  border-top: 1px solid #eaeefb;
}

button {
  padding: 4px 12px;
  margin-right: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
}

.run-button {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.run-button:hover {
  background-color: #45a049;
}

.clear-button:hover {
  background-color: #f5f5f5;
}

.code-result {
  padding: 16px;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
}

.result-header {
  font-weight: bold;
  margin-bottom: 8px;
  color: #666;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>