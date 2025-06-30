<template>
    <v-container v-if="filmDetail" fluid>
        <v-row>
            <v-col cols="12" md="4">
                <v-img :src="getImageUrl(filmDetail.poster_path)" aspect-ratio="2/3" class="rounded-lg" />
            </v-col>

            <v-col cols="12" md="8">
                <h1 class="text-3xl font-bold">{{ filmDetail.title }}</h1>
                <p class="text-gray-500">
                    {{ filmDetail.release_date }} ·
                    {{filmDetail.genres.map(g => g.name).join(', ')}}
                </p>
                <v-rating :model-value="filmDetail.vote_average / 2" half-increments readonly color="amber" />
                <p class="mt-4">{{ filmDetail.overview }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

defineProps({
    filmDetail: {
        type: Object,
        default: () => ({})
    }
})

const getImageUrl = (path) => {
    return path
        ? `https://image.tmdb.org/t/p/w500${path}`
        : 'https://via.placeholder.com/500x750?text=Sin+Imagen';
};

</script>

<style scoped>
</style>