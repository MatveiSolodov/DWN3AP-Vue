<template>
    <v-btn density="default">
        <slot></slot>
    </v-btn>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        required: false
    }
})
</script>

<style scoped>
</style>