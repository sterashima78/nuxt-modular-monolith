<template>
    <div>
        <p>This is Domain2</p>
        <BaseButton @click="() => counter.decrement()">decrement counter: {{ counter.counter }}</BaseButton>
    </div>
</template>
<script setup lang="ts">
const counter = useCounter(100)
</script>