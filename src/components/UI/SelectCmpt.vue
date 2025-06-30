<template>
    <v-select :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)" :items="options"
        item-title="name" item-value="value" label="Elija de la lista" clearable variant="outlined"></v-select>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String
    },
    options: {
        type: Array,
        default: () => []
    }
});

defineEmits(['update:modelValue']);

</script>

<style scoped>
</style>
