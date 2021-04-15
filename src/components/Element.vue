<style scoped>
li {
  cursor: pointer;
  padding: .5rem;
}
</style>

<template>
  <li @click="onClick">
    ID: {{ id }}
    Text: {{ state.text }}
  </li>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref, toRefs } from 'vue'
import { store } from '../state/state'

export default defineComponent({
  name: 'Element',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup({ id }) {
    const state = toRefs(store.elements)[id]

    const onClick = () => {
      store.selectedId = id
    }

    onUpdated(() => console.log(`${(id)} updated`))

    return {
      state,
      onClick
    }
  }
})
</script>
