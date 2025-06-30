<template>
    <v-text-field v-model="search" :placeholder="placeholder" prepend-inner-icon="mdi-magnify" clearable variant="outlined"></v-text-field>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: String,
    placeholder: {
        type: String,
        default: ''
    }
});
const emit = defineEmits(['update:modelValue']);

const search = ref(props.modelValue);

watch(() => props.modelValue, val => {
    search.value = val;
});
watch(search, val => {
    emit('update:modelValue', val);
});
</script>

<style scoped></style>