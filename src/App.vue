<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.elements {
  flex: 1;
}

.left-pane, .right-pane {
  padding: .5rem;
  background: lightgray;
}

.selected {
  background: lightcyan;
}
</style>

<template>
  <div class="container">
    <div class="left-pane">
      <button @click="addElement">Add Element</button>
    </div>
    <div class="elements">
      <ul v-for="id in store.elementIds">
        <Element :id="id" :class="{ selected: store.selectedId === id }"/>
      </ul>
    </div>
    <div class="right-pane">
      <RightPane/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue'
import { store } from './state/state'
import Element from './components/Element.vue'
import RightPane from './components/RightPane.vue'

export default defineComponent({
  name: 'App',
  components: { RightPane, Element },
  setup() {
    const addElement = () => {
      const id = store.elementIds.size + 1
      store.elementIds.add(id)
      store.elements[id] = { text: 'bar' }
    }

    onUpdated(() => console.log(`App updated`))

    return {
      store,
      addElement,
    }
  }
})
</script>
