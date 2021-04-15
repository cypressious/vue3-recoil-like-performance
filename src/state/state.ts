import { reactive } from 'vue'

export interface Store {
    elementIds: Set<number>
    elements: Record<number, ElementState>
    selectedId: number | null
}

export interface ElementState {
    text: string
}

export const store = reactive<Store>({
    elementIds: new Set<number>([1, 2]),
    elements: {
        [1]: { text: 'bar' },
        [2]: { text: 'bar' },
    },
    selectedId: null
})
