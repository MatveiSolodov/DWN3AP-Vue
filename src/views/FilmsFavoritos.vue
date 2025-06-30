<template>
    <v-container fluid class="pa-2 pa-md-4">
        <v-row>
            <v-col cols="12">
                <h1 class="text-h4 text-md-h3 text-center text-md-left mt-2">
                    Películas favoritas
                </h1>
            </v-col>
        </v-row>

        <div v-if="favorites.length === 0" class="text-center py-4">
            <v-icon size="64" color="grey-lighten-1" class="mb-4">mdi-heart-outline</v-icon>
            <h2 class="text-h6 text-grey-lighten-1 mb-2">No hay películas favoritas</h2>
            <p class="text-grey-lighten-1">Añade películas a tus favoritos para verlas aquí</p>
            <RouterLink to="/">
                <v-btn color="orange-lighten-2" class="mt-4">
                    Ir al inicio
                </v-btn>
            </RouterLink>
        </div>

        <v-row v-else dense class="pa-2">
            <v-col v-for="movie in favorites" :key="movie.id" cols="8" sm="4" md="3" lg="2" xl="2">
                <v-card class="rounded-xl elevation-4 d-flex flex-column h-100">
                    <v-img class="rounded-t-xl" :src="getImageUrl(movie.poster_path)" height="300" cover />
                    <v-card-title class="text-truncate">
                        {{ movie.title }}
                    </v-card-title>
                    <v-card-subtitle class="text-grey">
                        {{ movie.release_date }}
                    </v-card-subtitle>
                    <v-card-text class="text-caption text-truncate">
                        {{ movie.overview }}
                    </v-card-text>
                    <v-spacer />
                    <v-card-actions class="mt-auto">
                        <v-btn :to="`/movie/${movie.id}`" block color="orange-lighten-1" variant="outlined"
                            class="text-white font-weight-bold mb-2">
                            Ver más
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions class="pt-0">
                        <v-btn block color="red-lighten-1" variant="outlined" @click="removeFromFavorites(movie.id)">
                            <v-icon left>mdi-heart-remove</v-icon>
                            Eliminar de favoritos
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const favorites = ref([]);

const loadFavorites = () => {
    try {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            favorites.value = JSON.parse(savedFavorites);
        }
    } catch (error) {
        console.error('Error loading favorites:', error);
        favorites.value = [];
    }
};

const removeFromFavorites = (movieId) => {
    favorites.value = favorites.value.filter(movie => movie.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
};

const getImageUrl = (path) => {
    return path
        ? `https://image.tmdb.org/t/p/w300${path}`
        : 'https://via.placeholder.com/300x450?text=Sin+Imagen';
};

onMounted(loadFavorites);
</script>

<style scoped>
.v-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.v-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
</style>