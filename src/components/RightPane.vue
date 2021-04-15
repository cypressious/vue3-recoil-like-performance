<template>
  <div>{{ id ?? 'No element selected' }}</div>
  <input type="text" v-if="selected" v-model="selected.text">
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated } from 'vue'
import { store } from '../state/state'

export default defineComponent({
  name: 'RightPane',
  setup() {
    const selected = computed(() => store.selectedId ? store.elements[store.selectedId] : null)
    const id = computed(() => store.selectedId)

    onUpdated(() => console.log(`Right pane updated, selected ID: ${id.value}`))

    return {
      selected,
      id
    }
  }
})
</script>
