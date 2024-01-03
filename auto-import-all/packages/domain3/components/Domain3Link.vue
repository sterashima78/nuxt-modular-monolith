<template>
    <NuxtLink :to="url"><slot></slot></NuxtLink>
</template>
<script setup lang="ts">
type NavigationTarget = "Home"
const props = defineProps<{
    to: NavigationTarget
}>()
const toUrl = (_name: NavigationTarget) => "/domain3/"

const url = computed(()=> toUrl(props.to))
</script>