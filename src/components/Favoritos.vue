<template>
    <v-btn block color="primary" @click="$emit('update:favorites')">Agregar a favoritos</v-btn>
</template>

<script setup>

defineProps({
    favorites: {
        type: Array
    }
})

defineEmits(['update:favorites']);
</script>

<style scoped></style>