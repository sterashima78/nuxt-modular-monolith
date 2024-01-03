<template>
    <BaseButton @click="onClick">increment counter: {{ counter.counter }}</BaseButton>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{ init?: number }>(), { init: 0 })
const emits = defineEmits<{change: [value: number]}>()
const counter = useCounter(props.init)
const onClick = ()=> {
    counter.increment()
    emits("change", counter.counter.value)
}
</script>