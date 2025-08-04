<template>
    <v-app theme="dark">
        <v-app-bar app color="primary" dark elevation="3">
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title>MovieApp</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary elevation="4" class="bg-grey-darken-4">
            <v-list dense nav>
                <v-list-subheader class="text-grey-lighten-1">Navegación</v-list-subheader>

                <RouterLink to="/" class="router-link" @click="drawer = false">
                    <v-list-item>
                        <v-list-item>
                            <template #prepend>
                                <v-icon>mdi-home</v-icon>
                            </template>
                            <v-list-item-title>Inicio</v-list-item-title>
                        </v-list-item>
                    </v-list-item>
                </RouterLink>

                <RouterLink to="/favoritos" class="router-link" @click="drawer = false">
                    <v-list-item>
                        <v-list-item>
                            <template #prepend>
                                <v-icon>mdi-movie</v-icon>
                            </template>
                            <v-list-item-title>Favoritas</v-list-item-title>
                        </v-list-item>
                    </v-list-item>
                </RouterLink>
            </v-list>
        </v-navigation-drawer>
        <v-main class="pa-4 mt-12 mb-16">
            <RouterView></RouterView>
        </v-main>
        <v-footer app color="primary" dark>
            <v-col class="text-center white--text">&copy; {{ new Date().getFullYear() }}</v-col>
        </v-footer>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.router-link {
    text-decoration: none;
    color: inherit;
}

.v-list-item:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transition: background-color 0.2s ease;
}
</style>
