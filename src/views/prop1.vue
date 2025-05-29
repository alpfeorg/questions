<script setup lang="tsx">
defineProps({
  a: {
    type: [String, Number]
    // type: [String, Number] as PropType<string | number>,
  },
  name: {
    type: String,
    default: '123'
  },
  person: {
    type: Person
  }
})

</script>
