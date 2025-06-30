<template>
    <v-container fluid>
        <v-row dense class="g-2">
            <v-col v-for="item in films" :key="item.id" cols="6" sm="4" md="3" lg="2" xl="2">
                <v-card class="h-100 pa-2">
                    <v-img class="rounded-t-xl" :src="`https://image.tmdb.org/t/p/w300${item.poster_path}`" height="300"
                        cover />
                    <v-card-title class="text-truncate text-center text-sm">
                        {{ item.title }}
                    </v-card-title>
                    <v-card-subtitle class="text-grey">
                        {{ item.release_date }}
                    </v-card-subtitle>
                    <v-spacer />
                    <v-card-actions class="mt-auto">
                        <v-btn block color="orange-lighten-1" class="text-white font-weight-bold btn-hover"
                            :to="`/movie/${item.id}`">
                            Ver más
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

defineProps({
    films: {
        type: Array,
        required: true
    }
})

</script>

<style scoped>
.btn-hover {
    transition: all 0.2s ease;
}

.btn-hover:hover {
    background-color: #6f2701 !important;
    box-shadow: 0 4px 8px rgba(230, 81, 0, 0.3);
    transform: translateY(-1px);
}
</style>