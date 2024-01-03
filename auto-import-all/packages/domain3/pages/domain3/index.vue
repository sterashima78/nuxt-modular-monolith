<template>
    <div>
        <p class="text-red-200">This is Domain3</p>
        <p>{{ msg }}</p>
        <IncrementButton @change="(v)=> count = v"></IncrementButton>
    </div>
</template>
<script setup lang="ts">
const count = ref(0)
const msg = computed(() => getMessage() + "!".repeat(count.value))
</script>