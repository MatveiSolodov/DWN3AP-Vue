<template>
    <div>
        <FilmDetail v-if="filmDetail" :filmDetail="filmDetail"></FilmDetail>
        <Favoritos class="mx-3" @update:favorites="agregarFavoritos"></Favoritos>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import FilmDetail from '@/components/FilmDetail.vue';
import Favoritos from '@/components/Favoritos.vue';

const route = useRoute();

const filmDetail = ref(null);

const fetchFilmDetail = async () => {
    const movieId = route.params.id;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjlkMzYyOTkxNWQzNDhjYTk1OWM3NWE1Y2QwNzcwZiIsIm5iZiI6MTc1MDk2NDk2OS4xMTMsInN1YiI6IjY4NWQ5YWU5NTIwOWViOTAzNzM0ZjJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dUwXACQ-aqtWyku7tZBQSIr2ubJoXXi5bpLOOkaq3Y4'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`, options)
        .then(res => res.json())
        .then((data) => {
            filmDetail.value = data
        })
};

const agregarFavoritos = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    const exists = favorites.find(movie => movie.id === filmDetail.value.id);
    if (!exists) {
        favorites.push(filmDetail.value);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Película agregada a favoritos');
    } else {
        alert('Ya está en favoritos');
    }
}

onMounted(fetchFilmDetail);
</script>

<style scoped></style>