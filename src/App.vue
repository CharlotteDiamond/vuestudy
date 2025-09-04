<template>
    <div class="app">
        <Header/>
        <div class="navigate">
            <RouterLink to="/home" active-class="shishi">Hello World</RouterLink>
            <!-- <RouterLink :to="{path:/'person'}" active-class="trytry">Person</RouterLink> -->
            <!-- <a href="/home">Hello World</a> -->
            <a href="/person">Person</a>
        </div>
    </div>
    <div class="main-content">
        <RouterView></RouterView>
    </div>
</template>

<script setup name = "App" lang="ts">
    import { RouterView,RouterLink } from 'vue-router';
    import Header from './components/Header.vue';
</script>