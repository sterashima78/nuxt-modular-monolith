export const useCounter = (init: number) => {
    const c = ref(init)
    return {
        counter: readonly(c),
        increment: (delta = 1) => {
            c.value += delta
        },
        decrement: (delta = 1) => {
            c.value -= delta
        }
    }
} 