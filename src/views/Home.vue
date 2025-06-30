<template>
    <v-container fluid class="pa-2 pa-md-4">
        <v-row>
            <v-col cols="12" md="8">
                <SearchCmpt v-model="searchQuery" placeholder="Buscar películas..." />
            </v-col>
            <v-col cols="12" md="4">
                <SelectCmpt v-model="selectedSort" :options="sortOptions" class="ordenar" />
            </v-col>
        </v-row>
        <FilmsList :films="sortedAndSearchedFilms" />
    </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import FilmsList from '@/components/FilmsList.vue';
import SelectCmpt from '@/components/UI/SelectCmpt.vue';
import SearchCmpt from '@/components/UI/SearchCmpt.vue';

const films = ref([]);
const selectedSort = ref('');
const searchQuery = ref('');

const sortOptions = [
    { value: 'title', name: 'por titulo' },
    { value: 'release_date', name: 'por fecha de lanzamiento' },
    { value: 'overview', name: 'por overview' },
];

const fetchFilms = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjlkMzYyOTkxNWQzNDhjYTk1OWM3NWE1Y2QwNzcwZiIsIm5iZiI6MTc1MDk2NDk2OS4xMTMsInN1YiI6IjY4NWQ5YWU5NTIwOWViOTAzNzM0ZjJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dUwXACQ-aqtWyku7tZBQSIr2ubJoXXi5bpLOOkaq3Y4',
        },
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1', options)
        .then(res => res.json())
        .then(data => {
            films.value = data.results;
        })
        .catch(err => {
            console.error('Error fetching films:', err);
        });
};

const sortedFilms = computed(() => {
    if (!selectedSort.value) return films.value;
    return [...films.value].sort((film1, film2) =>
        (film1[selectedSort.value] || '').localeCompare(film2[selectedSort.value] || '')
    );
});

const sortedAndSearchedFilms = computed(() => {
    const query = (searchQuery.value || '').toLowerCase();
    return sortedFilms.value.filter(film =>
        (film.title || '').toLowerCase().includes(query)
    );
});

onMounted(fetchFilms);
</script>

<style scoped></style>